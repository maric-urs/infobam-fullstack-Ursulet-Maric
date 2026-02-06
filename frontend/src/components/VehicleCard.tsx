import { ChevronRight } from "lucide-react";
import type { Vehicle } from "@/types/vehicle";
import { formatPrice } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const cardClass =
  "group flex flex-col min-w-0 h-full overflow-hidden rounded-xl bg-white/60 dark:bg-[rgba(255,255,255,0.08)] backdrop-blur-xl shadow-subtle hover:shadow-[0_2px_8px_rgb(0_0_0_/0.08)] dark:hover:shadow-[0_2px_8px_rgb(0_0_0_/0.25)] hover:bg-white/80 dark:hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card className={cardClass}>
      <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-muted shrink-0">
        {vehicle.images[0] ? (
          <img src={vehicle.images[0]} alt={`${vehicle.manufacturer} ${vehicle.model}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">Aucune image</div>
        )}
        <Badge variant="secondary" className="absolute top-2 right-2 text-xs bg-background/80 backdrop-blur-sm">{vehicle.type}</Badge>
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-base leading-tight truncate group-hover:text-primary transition-colors">{vehicle.manufacturer} {vehicle.model}</CardTitle>
        <CardDescription className="text-xs">{vehicle.year} • {vehicle.transmission}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2 flex-1">
        <p className="text-lg font-bold text-primary">{formatPrice(vehicle.price)}</p>
        <div className="flex flex-wrap gap-1.5 text-xs text-muted-foreground">
          {vehicle.fuelType}
          {vehicle.mileage != null && ` • ${vehicle.mileage.toLocaleString("fr-FR")} km`}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full rounded-full font-medium bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
          Voir les détails
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
