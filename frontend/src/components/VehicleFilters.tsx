"use client";

import { useState } from "react";
import { VehicleType, type VehicleFilters as FiltersType } from "@/types/vehicle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Filter, X } from "lucide-react";
import FilterCheckboxGroup from "@/components/FilterCheckboxGroup";

const MANUFACTURERS = ["BMW", "Tesla", "Toyota", "Ford", "Porsche", "Mercedes-Benz", "Honda", "Chevrolet"];
const TYPES = Object.values(VehicleType);
const LABEL_CLASS = "text-xs font-medium text-muted-foreground uppercase tracking-wider";
const INPUT_CLASS = "bg-background rounded-lg h-9 border-0 shadow-subtle";

export default function VehicleFilters({ onFilterChange }: { onFilterChange?: (filters: FiltersType | null) => void }) {
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([]);
  const [types, setTypes] = useState<VehicleType[]>([]);
  const [yearMin, setYearMin] = useState("");
  const [yearMax, setYearMax] = useState("");

  const hasFilters = selectedManufacturers.length > 0 || types.length > 0 || yearMin || yearMax;

  const applyFilters = (manufacturers: string[], selectedTypes: VehicleType[], minYear: string, maxYear: string) => {
    if (!manufacturers.length && !selectedTypes.length && !minYear && !maxYear) return onFilterChange?.(null);
    onFilterChange?.({
      manufacturers: manufacturers.length ? manufacturers : undefined,
      types: selectedTypes.length ? selectedTypes : undefined,
      yearMin: minYear ? +minYear : undefined,
      yearMax: maxYear ? +maxYear : undefined,
    });
  };

  const toggleManufacturer = (name: string, checked: boolean) => {
    const next = checked ? [...selectedManufacturers, name] : selectedManufacturers.filter((manufacturer) => manufacturer !== name);
    setSelectedManufacturers(next);
    applyFilters(next, types, yearMin, yearMax);
  };

  const toggleType = (vehicleType: VehicleType, checked: boolean) => {
    const next = checked ? [...types, vehicleType] : types.filter((type) => type !== vehicleType);
    setTypes(next);
    applyFilters(selectedManufacturers, next, yearMin, yearMax);
  };

  const changeYear = (field: "min" | "max", value: string) => {
    if (field === "min") setYearMin(value);
    else setYearMax(value);
    applyFilters(selectedManufacturers, types, field === "min" ? value : yearMin, field === "max" ? value : yearMax);
  };

  const reset = () => {
    setSelectedManufacturers([]);
    setTypes([]);
    setYearMin("");
    setYearMax("");
    onFilterChange?.(null);
  };

  return (
    <div className="rounded-xl bg-card p-4 shadow-subtle">
      <div className="flex justify-between items-center mb-4">
        <h3 className="flex items-center gap-2 font-semibold text-sm"><Filter className="h-4 w-4 text-primary" />Filtres</h3>
        {hasFilters && <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground hover:text-foreground"><X className="h-4 w-4 mr-1" />Réinitialiser</Button>}
      </div>
      <div className="space-y-5">
        <FilterCheckboxGroup label="Fabricants" items={MANUFACTURERS} selected={selectedManufacturers} onToggle={toggleManufacturer} idPrefix="manufacturer" />
        <FilterCheckboxGroup label="Types" items={TYPES} selected={types} onToggle={toggleType} idPrefix="type" />
        <div className="space-y-2">
          <Label className={LABEL_CLASS}>Année</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input id="year-min" type="number" placeholder="Min" value={yearMin} onChange={(event) => changeYear("min", event.target.value)} min={1990} max={2030} className={INPUT_CLASS} />
            <Input id="year-max" type="number" placeholder="Max" value={yearMax} onChange={(event) => changeYear("max", event.target.value)} min={1990} max={2030} className={INPUT_CLASS} />
          </div>
        </div>
      </div>
    </div>
  );
}
