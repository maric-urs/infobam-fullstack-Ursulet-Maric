import { cache } from "react";
import { headers } from "next/headers";
import type { Vehicle } from "@/types/vehicle";

async function getBaseUrl(): Promise<string> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const proto = headersList.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}

export const getVehicle = cache(async (id: string): Promise<Vehicle | null> => {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/vehicles/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return res.json();
});
