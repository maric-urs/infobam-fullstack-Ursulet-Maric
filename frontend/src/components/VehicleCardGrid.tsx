"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VehicleCard from "@/components/VehicleCard";
import VehicleSortSelector from "@/components/VehicleSortSelector";
import VehiclePagination from "@/components/VehiclePagination";
import NavSidebar from "@/components/NavSidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { useVehicles } from "@/hooks/useVehicles";
import type { VehicleFilters as FiltersType, SortOption } from "@/types/vehicle";

export default function VehicleCardGrid() {
  const [filters, setFilters] = useState<FiltersType | null>(null);
  const [sort, setSort] = useState<SortOption | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [filters, sort]);

  const { vehicles, total, totalPages, loading, error } = useVehicles(page, filters, sort);

  return (
    <div className="min-h-screen flex">
      <NavSidebar onFilterChange={setFilters} />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-10 bg-background/95 backdrop-blur px-4 py-3 shadow-subtle">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">Véhicules</h1>
            <div className="lg:hidden">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="flex flex-col gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  {total} véhicule{total > 1 ? "s" : ""} disponible{total > 1 ? "s" : ""}
                </p>
                <VehicleSortSelector value={sort} onSortChange={setSort} />
              </div>

              {loading ? (
                <div className="py-16 text-center text-muted-foreground">Chargement...</div>
              ) : error ? (
                <div className="py-16 text-center">
                  <p className="text-destructive font-medium mb-2">Erreur lors du chargement</p>
                  <p className="text-sm text-muted-foreground">{error}</p>
                </div>
              ) : vehicles.length === 0 ? (
                <div className="py-16 text-center text-muted-foreground">Aucun véhicule trouvé.</div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
                    {vehicles.map((vehicle) => (
                      <Link key={vehicle.id} href={`/vehicle/${vehicle.id}`} className="min-w-0 block group">
                        <VehicleCard vehicle={vehicle} />
                      </Link>
                    ))}
                  </div>
                  <VehiclePagination page={page} totalPages={totalPages} onPageChange={setPage} />
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
