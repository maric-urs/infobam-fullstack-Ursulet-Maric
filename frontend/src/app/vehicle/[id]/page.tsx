import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "@/components/ThemeToggle";
import { getVehicle } from "@/lib/vehicles";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const vehicle = await getVehicle(id);
  if (!vehicle) return { title: "Véhicule non trouvé" };
  return {
    title: `${vehicle.manufacturer} ${vehicle.model} | Catalogue Véhicules`,
    description: vehicle.description || `${vehicle.manufacturer} ${vehicle.model} - ${vehicle.year}`,
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicle = await getVehicle(id);

  if (!vehicle) notFound();

  return (
    <div className="min-h-screen">
      <header className="bg-card px-4 py-3 shadow-subtle">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au catalogue
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted">
              {vehicle.images?.length ? (
                <img
                  src={vehicle.images[0]}
                  alt={`${vehicle.manufacturer} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Aucune image
                </div>
              )}
            </div>
            {vehicle.images?.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {vehicle.images.slice(1, 4).map((image: string, index: number) => (
                  <div
                    key={index}
                    className="aspect-video rounded-lg overflow-hidden bg-muted"
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {vehicle.type}
              </Badge>
              <h1 className="text-2xl font-bold">
                {vehicle.manufacturer} {vehicle.model}
              </h1>
              <p className="text-muted-foreground">
                {vehicle.year} • {vehicle.transmission}
              </p>
            </div>

            <p className="text-2xl font-bold text-primary">{formatPrice(vehicle.price)}</p>

            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium text-muted-foreground">Carburant :</span>{" "}
                {vehicle.fuelType}
              </p>
              {vehicle.mileage != null && (
                <p>
                  <span className="font-medium text-muted-foreground">Kilométrage :</span>{" "}
                  {vehicle.mileage.toLocaleString("fr-FR")} km
                </p>
              )}
            </div>

            {vehicle.description && (
              <div>
                <h2 className="font-semibold mb-2">Description</h2>
                <p className="text-sm text-muted-foreground">{vehicle.description}</p>
              </div>
            )}

            {vehicle.features?.length ? (
              <div>
                <h2 className="font-semibold mb-2">Caractéristiques</h2>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature: string, index: number) => (
                    <Badge key={index} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
