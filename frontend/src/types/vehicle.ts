export interface Vehicle {
    id: string;
    manufacturer: string; // ex., "BMW", "Tesla", "Toyota"
    model: string; // ex., "X5", "Model 3", "Camry"
    year: number;
    type: VehicleType;
    price: number;
    fuelType: string;
    transmission: string;
    mileage?: number;
    features: string[];
    images: string[];
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }
  export enum VehicleType {
    SUV = "SUV",
    SEDAN = "SEDAN",
    TRUCK = "TRUCK",
    SPORTS = "SPORTS",
    LUXURY = "LUXURY",
    ELECTRIC = "ELECTRIC",
  }
  export enum FuelType {
    GASOLINE = "GASOLINE",
    DIESEL = "DIESEL",
    ELECTRIC = "ELECTRIC",
    HYBRID = "HYBRID",
    PLUGIN_HYBRID = "PLUGIN_HYBRID",
  }

  export interface VehicleFilter {
    manufacturer?: string[];
    type?: VehicleType[];
    yearMin?:number;
    yearMax?:number;
  }

  export type SortOption= | "price-asc" | "price-desc" | "year-asc" | "year-desc";

  export interface VehiclesAPIResponse {
    vehicles :Vehicle[];
    total :number;
    page :number;
    limit :number;
  }

  