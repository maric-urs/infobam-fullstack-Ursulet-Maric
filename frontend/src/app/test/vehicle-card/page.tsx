import VehicleCard from "@/components/VehicleCard";
import { mockVehicles } from "@/data/vehicles";

export default function VehicleCardTestPage() {
  const vehicle = mockVehicles[0];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Test : VehicleCard</h1>
      <div className="max-w-sm">
        <VehicleCard vehicle={vehicle} />
      </div>
    </div>
  );
}
