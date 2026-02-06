import { useState, useEffect } from "react";
import type { VehicleFilters, SortOption, VehiclesAPIResponse } from "@/types/vehicle";

const LIMIT = 8;

function buildUrl(page: number, filters: VehicleFilters | null, sort: SortOption | null): string {
  const params = new URLSearchParams({ page: String(page), limit: String(LIMIT) });
  if (filters?.manufacturers?.length) params.set("manufacturers", filters.manufacturers.join(","));
  if (filters?.types?.length) params.set("types", filters.types.join(","));
  if (filters?.yearMin != null) params.set("yearMin", String(filters.yearMin));
  if (filters?.yearMax != null) params.set("yearMax", String(filters.yearMax));
  if (sort) params.set("sort", sort);
  return `/api/vehicles?${params}`;
}

export function useVehicles(page: number, filters: VehicleFilters | null, sort: SortOption | null) {
  const [data, setData] = useState<VehiclesAPIResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(buildUrl(page, filters, sort))
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setData)
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Erreur de chargement");
        setData({ vehicles: [], total: 0, page: 1, limit: LIMIT });
      })
      .finally(() => setLoading(false));
  }, [page, filters, sort]);

  return {
    vehicles: data?.vehicles ?? [],
    total: data?.total ?? 0,
    totalPages: data ? Math.ceil(data.total / LIMIT) : 0,
    loading,
    error,
  };
}
