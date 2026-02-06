"use client";

import { useState, useEffect } from "react";
import VehicleFilters from "@/components/VehicleFilters";
import type { VehiclesAPIResponse, VehicleType } from "@/types/vehicle";

type Filters = { manufacturers?: string[]; types?: VehicleType[]; yearMin?: number; yearMax?: number } | null;

export default function VehicleFiltersTestPage() {
  const [filters, setFilters] = useState<Filters>(null);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    if (!filters || (!filters.manufacturers?.length && !filters.types?.length && !filters.yearMin && !filters.yearMax)) {
      setResult("");
      return;
    }
    const params = new URLSearchParams();
    if (filters.manufacturers?.length) params.set("manufacturers", filters.manufacturers.join(","));
    if (filters.types?.length) params.set("types", filters.types.join(","));
    if (filters.yearMin != null) params.set("yearMin", String(filters.yearMin));
    if (filters.yearMax != null) params.set("yearMax", String(filters.yearMax));
    fetch(`/api/vehicles?${params}`)
      .then((r) => r.json() as Promise<VehiclesAPIResponse>)
      .then((data) => {
        const names = data.vehicles?.map((v) => `${v.manufacturer} ${v.model}`) ?? [];
        setResult(`${data.total} véhicule(s) : ${names.join(", ")}`);
      });
  }, [filters]);

  return (
    <div className="container mx-auto p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Test : VehicleFilters + API</h1>
      <VehicleFilters onFilterChange={setFilters} />
      {result && <p className="mt-4 text-sm text-muted-foreground">{result}</p>}
    </div>
  );
}
