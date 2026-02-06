import { NextRequest, NextResponse } from "next/server";
import { mockVehicles } from "@/data/vehicles";
import type { Vehicle, VehicleFilters, VehicleType, SortOption, VehiclesAPIResponse } from "@/types/vehicle";

function sortVehicles(vehicles: Vehicle[], sort: SortOption): Vehicle[] {
  const copy = [...vehicles];
  switch (sort) {

    case "price-asc": return copy.sort((a, b) => a.price - b.price);
    case "price-desc": return copy.sort((a, b) => b.price - a.price);

    case "year-asc": return copy.sort((a, b) => a.year - b.year);
    case "year-desc": return copy.sort((a, b) => b.year - a.year);

    default: return copy;
  }
}

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams;
    const page = parseInt(params.get("page") ?? "1", 10);
    const limit = parseInt(params.get("limit") ?? "8", 10);
    const sort = params.get("sort") as SortOption | null;

    const typesStr = params.get("types")?.split(",").filter(Boolean);
    const yearMinParam = params.get("yearMin");
    const yearMaxParam = params.get("yearMax");
    const filters: VehicleFilters = {
      manufacturers: params.get("manufacturers")?.split(",").filter(Boolean),
      types: typesStr?.length ? (typesStr as VehicleType[]) : undefined,
      yearMin: yearMinParam ? parseInt(yearMinParam, 10) : undefined,
      yearMax: yearMaxParam ? parseInt(yearMaxParam, 10) : undefined,
    };

    let result = [...mockVehicles];
    const { manufacturers, types, yearMin, yearMax } = filters;
    
    
    if (manufacturers?.length) {
      result = result.filter((vehicle) => manufacturers.includes(vehicle.manufacturer));
    }
    
    if (types?.length) {
      result = result.filter((vehicle) => types.includes(vehicle.type));
    }
    
    if (yearMin != null) {
      result = result.filter((vehicle) => vehicle.year >= yearMin);
    }
    
    if (yearMax != null) {
      result = result.filter((vehicle) => vehicle.year <= yearMax);
    }

    if (sort) result = sortVehicles(result, sort);

    const total = result.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const vehicles = result.slice(start, start + limit);

    return NextResponse.json<VehiclesAPIResponse>({
      vehicles,
      total,
      page,
      totalPages,
    });
  } catch (error) {
    console.error("Erreur de l'API des véhicules:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des véhicules" },
      { status: 500 }
    );
  }
}
