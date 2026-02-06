"use client";

import type { SortOption } from "@/types/vehicle";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowUpDown } from "lucide-react";

const OPTIONS: { value: SortOption; label: string }[] = [
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
  { value: "year-asc", label: "Année croissante" },
  { value: "year-desc", label: "Année décroissante" },
];

export default function VehicleSortSelector({ value, onSortChange }: { value: SortOption | null; onSortChange: (s: SortOption | null) => void }) {
  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="sort" className="text-sm font-medium shrink-0">
        <ArrowUpDown className="h-4 w-4 inline mr-1" />
        Trier par
      </Label>
      <Select value={value ?? "none"} onValueChange={(value) => onSortChange(value === "none" ? null : (value as SortOption))}>
        <SelectTrigger id="sort" className="w-[180px] bg-card rounded-lg border-0 shadow-subtle">
          <SelectValue placeholder="Sélectionner..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">Aucun tri</SelectItem>
          {OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
