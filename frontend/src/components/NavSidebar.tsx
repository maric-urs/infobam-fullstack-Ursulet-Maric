"use client";

import Link from "next/link";
import { Car } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import VehicleFilters from "@/components/VehicleFilters";
import type { VehicleFilters as FiltersType } from "@/types/vehicle";

type NavSidebarProps = {
  onFilterChange?: (filters: FiltersType | null) => void;
};

export default function NavSidebar({ onFilterChange }: NavSidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-card shadow-subtle">
      <div className="p-4 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg font-semibold hover:bg-accent transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <Car className="h-4 w-4" />
          </div>
          Ursulet Maric
        </Link>
        <ThemeToggle />
      </div>
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-foreground bg-accent">
          <Car className="h-5 w-5 text-primary" />
          Véhicules
        </div>
        {onFilterChange && (
          <div className="pt-4">
            <VehicleFilters onFilterChange={onFilterChange} />
          </div>
        )}
      </nav>
    </aside>
  );
}
