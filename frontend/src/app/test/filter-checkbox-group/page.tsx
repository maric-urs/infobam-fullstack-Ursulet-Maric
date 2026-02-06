"use client";

import { useState, useEffect } from "react";
import FilterCheckboxGroup from "@/components/FilterCheckboxGroup";
import type { VehiclesAPIResponse } from "@/types/vehicle";

export default function FilterCheckboxGroupTestPage() {
  const [manufacturers, setManufacturers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    fetch("/api/vehicles?limit=100")
      .then((r) => r.json() as Promise<VehiclesAPIResponse>)
      .then((data) => {
        const uniq = [...new Set(data.vehicles?.map((v) => v.manufacturer) ?? [])].sort();
        setManufacturers(uniq);
      });
  }, []);

  useEffect(() => {
    if (selected.length === 0) {
      setResult("");
      return;
    }
    const params = new URLSearchParams({ manufacturers: selected.join(",") });
    fetch(`/api/vehicles?${params}`)
      .then((r) => r.json() as Promise<VehiclesAPIResponse>)
      .then((data) => {
        const names = data.vehicles?.map((v) => `${v.manufacturer} ${v.model}`) ?? [];
        setResult(`${data.total} véhicule(s) : ${names.join(", ")}`);
      });
  }, [selected]);

  return (
    <div className="container mx-auto p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Test : FilterCheckboxGroup + API</h1>
      <FilterCheckboxGroup
        label="Fabricants"
        items={manufacturers}
        selected={selected}
        onToggle={(item, checked) =>
          setSelected((prev) =>
            checked ? [...prev, item] : prev.filter((x) => x !== item)
          )
        }
        idPrefix="mfr"
      />
      {result && <p className="mt-4 text-sm text-muted-foreground">{result}</p>}
    </div>
  );
}
