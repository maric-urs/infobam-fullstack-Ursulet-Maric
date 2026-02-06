"use client";

import { useState, useEffect } from "react";
import VehiclePagination from "@/components/VehiclePagination";
import type { VehiclesAPIResponse } from "@/types/vehicle";

const LIMIT = 4;

export default function VehiclePaginationTestPage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<VehiclesAPIResponse | null>(null);

  useEffect(() => {
    fetch(`/api/vehicles?page=${page}&limit=${LIMIT}`)
      .then((r) => r.json() as Promise<VehiclesAPIResponse>)
      .then(setData);
  }, [page]);

  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / LIMIT);

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Test : VehiclePagination + API</h1>
      <p className="text-sm text-muted-foreground mb-4">
        Page {page} — {data?.vehicles?.map((v) => `${v.manufacturer} ${v.model}`).join(", ") ?? "..."}
      </p>
      <VehiclePagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
