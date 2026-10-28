// type Ride = { id: string; bike: string; miles: number; date: string };

// type RideUpdate = Omit<Partial<Ride>,'id'>;

type Ride = { id: string; bike: string; miles: number; date: string };

type RideRow = Omit<Omit<Ride, "id">, "date">;

type rideRow = Omit<Ride, "id" | "date">;

type Bike = "R6" | "Grom" | "CBR";

const mileage: Record<Bike, number> = {
  R6: 4200,
  Grom: 1800,
  CBR: 20000,
};

type Gear = { helmet: string; gloves: string };
// keyof Gear → "helmet" | "gloves"
//"helmet" | "Gloves";

type Config = { units: string; maxSpeed: number; darkMode: boolean };
// keyof Config → ???
//"units" | "maxSpeed" | "darkMode";
