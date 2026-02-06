import { Vehicle, VehicleType, FuelType } from "@/types/vehicle";

export const mockVehicles: Vehicle[] = 
[
  {
    id: "1",
    manufacturer: "Mazda",
    model: "MX-5 Miata",
    year: 2023,
    type: VehicleType.SPORTS,
    price: 32000,
    fuelType: FuelType.GASOLINE,
    transmission: "Manual",
    mileage: 1200,
    features: [
      "Toit décapotable",
      "Sièges sport chauffants",
      "Apple CarPlay",
      "Système audio Bose",
      "Jantes 17 pouces"
    ],
    images: [
      "/voiture/Mazda1.jpg",
      "/voiture/Mazda2.webp",
      "/voiture/Mazda3.jpg"
    ],
    description: "Roadster emblématique offrant un plaisir de conduite pur avec ses 200 chevaux. Légère, agile et fun à conduire au quotidien.",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },


  {
        id: "2",
        manufacturer: "Toyota",
        model: "GR86",
        year: 2022,
        type: VehicleType.SPORTS,
        price: 35500,
        fuelType: FuelType.GASOLINE,
        transmission: "Manual",
        mileage: 800,
        features: [
          "Propulsion arrière",
          "Différentiel à glissement limité",
          "Écran tactile 8 pouces",
          "Climatisation bi-zone",
          "Sièges sport Alcantara"
        ],
        images: [
          "/voiture/ToyotaGR861.jpg",
          "/voiture/ToyotaGR862.jpg"
        ],
        description: "Coupé sportif à propulsion avec 200 chevaux, parfait équilibre entre performance et accessibilité. Sensations garanties à chaque virage.",
        createdAt: new Date("2024-01-18"),
        updatedAt: new Date("2024-01-18"),
      },

      
    {
        id: "3",
        manufacturer: "BMW",
        model: "M240i",
        year: 2019,
        type: VehicleType.SPORTS,
        price: 58000,
        fuelType: FuelType.GASOLINE,
        transmission: "Automatic",
        mileage: 2500,
        features: [
          "M Sport Package",
          "Transmission intégrale xDrive",
          "Écran curved 12.3 pouces",
          "Sièges M Sport",
          "Échappement sport M",
          "Harman Kardon audio"
        ],
        images: [
          "/voiture/BMWM240i1.jpg",
          "/voiture/BMWM240i2.jpg"
        ],
        description: "Coupé compact aux 382 chevaux, alliant élégance et performances sportives. Le plaisir de conduire à l'état pur selon BMW.",
        createdAt: new Date("2024-01-20"),
        updatedAt: new Date("2024-01-20"),
      },
      
      
      {
        id: "4",
        manufacturer: "Audi",
        model: "S3 Sportback",
        year: 2024,
        type: VehicleType.SPORTS,
        price: 54500,
        fuelType: FuelType.GASOLINE,
        transmission: "Automatic",
        mileage: 3200,
        features: [
          "Quattro intégral",
          "Virtual Cockpit Plus",
          "Sièges sport S",
          "Bang & Olufsen audio",
          "Suspension sport",
          "Échappement sport"
        ],
        images: [
          "/voiture/AudiS3Sportback1.jpg",
          "/voiture/AudiS3Sportback2.jpg"
        ],
        description: "Compacte survitaminée de 310 chevaux avec transmission intégrale. Performance au quotidien dans un écrin de luxe et de technologie.",
        createdAt: new Date("2024-01-22"),
        updatedAt: new Date("2024-01-22"),
      },


      {
        id: "5",
        manufacturer: "Mercedes-AMG",
        model: "A 45 S",
        year: 2016,
        type: VehicleType.SPORTS,
        price: 68000,
        fuelType: FuelType.GASOLINE,
        transmission: "Automatic",
        mileage: 1800,
        features: [
          "421 chevaux",
          "AMG 4MATIC+",
          "AMG Track Pace",
          "Sièges AMG Performance",
          "Burmester surround sound",
          "AMG Ride Control"
        ],
        images: [
          "/voiture/MercedesAMGA45S1.jpg",
          "/voiture/MercedesAMGA45S2.jpg"
        ],
        description: "La compacte la plus puissante au monde avec 421 chevaux. Un monstre de performance dans un format compact, technologie AMG ultime.",
        createdAt: new Date("2024-01-25"),
        updatedAt: new Date("2024-01-25"),
      },


      {
        id: "6",
        manufacturer: "Porsche",
        model: "718 Cayman",
        year: 2024,
        type: VehicleType.SPORTS,
        price: 72000,
        fuelType: FuelType.GASOLINE,
        transmission: "Manual",
        mileage: 950,
        features: [
          "Moteur central 300cv",
          "Porsche Communication Management",
          "Sport Chrono Package",
          "Sièges sport Plus",
          "PASM suspension",
          "Échappement sport"
        ],
        images: [
          "/voiture/Porsche718Cayman1.jpeg"
        ],
        description: "Coupé à moteur central offrant 300 chevaux de pur plaisir. L'équilibre parfait et la précision Porsche pour les passionnés de conduite.",
        createdAt: new Date("2024-01-28"),
        updatedAt: new Date("2024-01-28"),
      },

      
      {
        id: "7",
        manufacturer: "Volvo",
        model: "XC60 Recharge",
        year: 2024,
        type: VehicleType.SUV,
        price: 68500,
        fuelType: FuelType.PLUGIN_HYBRID,
        transmission: "Automatic",
        mileage: 4500,
        features: [
          "455 chevaux combinés",
          "Autonomie électrique 80km",
          "Intérieur cuir Nappa",
          "Bowers & Wilkins audio",
          "Pilot Assist semi-autonome",
          "Toit panoramique",
          "Sièges massants"
        ],
        images: [
          "/voiture/VolvoXC60Recharge1.jpg"
        ],
        description: "SUV hybride rechargeable scandinave alliant luxe, sécurité et écologie. Puissance et élégance dans le respect de l'environnement.",
        createdAt: new Date("2024-02-01"),
        updatedAt: new Date("2024-02-01"),
      },
      
      
      {
        id: "8",
        manufacturer: "Range Rover",
        model: "Evoque",
        year: 2024,
        type: VehicleType.SUV,
        price: 52000,
        fuelType: FuelType.HYBRID,
        transmission: "Automatic",
        mileage: 3800,
        features: [
          "Design iconique",
          "Terrain Response 2",
          "Pivi Pro infotainment",
          "Toit panoramique",
          "Caméra ClearSight 360°",
          "Meridian audio",
          "Sièges chauffants et ventilés"
        ],
        images: [
          "/voiture/RangeRoverEvoque 1.jpg",
          "/voiture/RangeRoverEvoque2.jpg"
        ],
        description: "SUV compact premium au design distinctif. Luxe britannique et capacités tout-terrain dans un format urbain élégant.",
        createdAt: new Date("2024-02-03"),
        updatedAt: new Date("2024-02-03"),
      },
    

      {
        id: "9",
        manufacturer: "Tesla",
        model: "Model 3 Performance",
        year: 2024,
        type: VehicleType.ELECTRIC,
        price: 62000,
        fuelType: FuelType.ELECTRIC,
        transmission: "Automatic",
        mileage: 2100,
        features: [
          "510 chevaux",
          "Autopilot avancé",
          "Accélération 0-100 en 3.1s",
          "Autonomie 547 km",
          "Toit en verre panoramique",
          "Mise à jour OTA",
          "Mode Track"
        ],
        images: [
          "/voiture/TESLA1.jpg",
          "/voiture/TESLA2.jpg"
        ],
        description: "Berline électrique ultra-performante avec 510 chevaux. Technologie de pointe, performances époustouflantes et zéro émission.",
        createdAt: new Date("2024-02-05"),
        updatedAt: new Date("2024-02-05"),
      },
      
      
      {
        id: "10",
        manufacturer: "Mercedes-Benz",
        model: "E 300 AMG Line",
        year: 2024,
        type: VehicleType.LUXURY,
        price: 78000,
        fuelType: FuelType.HYBRID,
        transmission: "Automatic",
        mileage: 5200,
        features: [
          "Intérieur cuir premium",
          "MBUX avec IA",
          "Suspension pneumatique Airmatic",
          "Burmester 3D audio",
          "Éclairage d'ambiance 64 couleurs",
          "Caméra 360°",
          "Sièges massants multicontours"
        ],
        images: [
          "/voiture/Mercedes-BenzE300AMGLine1.jpeg"
        ],
        description: "Berline de luxe hybride incarnant l'élégance allemande. Confort suprême, technologie avancée et finitions irréprochables.",
        createdAt: new Date("2024-02-08"),
        updatedAt: new Date("2024-02-08"),
      },
      
      
      {
        id: "11",
        manufacturer: "Ford",
        model: "Mustang Mach-E GT",
        year: 2024,
        type: VehicleType.ELECTRIC,
        price: 71000,
        fuelType: FuelType.ELECTRIC,
        transmission: "Automatic",
        mileage: 1500,
        features: [
          "487 chevaux",
          "0-100 en 3.7s",
          "Autonomie 490 km",
          "B&O Sound System",
          "Ford Co-Pilot360",
          "Toit panoramique fixe",
          "Intérieur cuir ActiveX"
        ],
        images: [
          "/voiture/Ford Mustang Mach-E GT.jpg"
        ],
        description: "SUV électrique sportif inspiré de la légendaire Mustang. Puissance électrique et design emblématique pour une nouvelle ère.",
        createdAt: new Date("2024-02-10"),
        updatedAt: new Date("2024-02-10"),
      },
      
      
      {
        id: "12",
        manufacturer: "Lexus",
        model: "IS 500 F Sport",
        year: 2024,
        type: VehicleType.SEDAN,
        price: 64000,
        fuelType: FuelType.GASOLINE,
        transmission: "Automatic",
        mileage: 2800,
        features: [
          "V8 5.0L 472 chevaux",
          "Suspension adaptative",
          "Mark Levinson audio",
          "Sièges sport F Sport",
          "HUD tête haute",
          "Lexus Safety System+ 3.0",
          "Échappement sport quadruple"
        ],
        images: [
          "/voiture/lexus.jpg",
        ],
        description: "Berline sportive à moteur V8 atmosphérique. Le dernier des Mohicans offrant 472 chevaux avec la fiabilité légendaire Lexus.",
        createdAt: new Date("2024-02-12"),
        updatedAt: new Date("2024-02-12"),
      },
];

export const MANUFACTURERS = [...new Set(mockVehicles.map((v) => v.manufacturer))].sort();