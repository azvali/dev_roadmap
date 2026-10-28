type Bike = "R6" | "Grom";

type Ride = { id: string; bike: Bike; miles: number };

type RideUpdate = Partial<Omit<Ride, "id">>;

const ok: RideUpdate = { miles: 50 }; // should compile
const bad: RideUpdate = { id: "z" }; // should error
