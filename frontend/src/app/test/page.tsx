import Link from "next/link";

const testRoutes = [
  { name: "VehicleCard", href: "/test/vehicle-card" },
];

export default function TestPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Test des composants</h1>
      <nav className="flex flex-col gap-2">
        {testRoutes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="text-primary hover:underline"
          >
            → {route.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
