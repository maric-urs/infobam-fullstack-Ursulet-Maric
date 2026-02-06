"use client";

import { useState, useEffect } from "react";
import VehicleSortSelector from "@/components/VehicleSortSelector";
import type { SortOption, VehiclesAPIResponse } from "@/types/vehicle";

export default function VehicleSortSelectorTestPage() {
  const [sort, setSort] = useState<SortOption | null>(null);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams({ limit: "100" });
    if (sort) params.set("sort", sort);
    fetch(`/api/vehicles?${params}`)
      .then((r) => r.json() as Promise<VehiclesAPIResponse>)
      .then((data) => {
        const names = data.vehicles?.map((v) => `${v.manufacturer} ${v.model} (${v.price}€)`) ?? [];
        setResult(`${data.total} véhicule(s) : ${names.join(", ")}`);
      });
  }, [sort]);

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Test : VehicleSortSelector + API</h1>
      <VehicleSortSelector value={sort} onSortChange={setSort} />
      {result && <p className="mt-4 text-sm text-muted-foreground">{result}</p>}
    </div>
  );
}
