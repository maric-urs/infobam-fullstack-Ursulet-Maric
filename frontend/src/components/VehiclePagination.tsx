"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VehiclePagination({ page, totalPages, onPageChange }: { page: number; totalPages: number; onPageChange: (p: number) => void }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button variant="outline" size="sm" className="rounded-full border-0 shadow-subtle" onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
        <ChevronLeft className="h-4 w-4" />
        Précédent
      </Button>
      <span className="text-sm text-muted-foreground px-4">
        Page {page} / {totalPages}
      </span>
      <Button variant="outline" size="sm" className="rounded-full border-0 shadow-subtle" onClick={() => onPageChange(page + 1)} disabled={page >= totalPages}>
        Suivant
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
