type RideCardProps = { route: string; miles: number };

type Ride = { id: number; place: string };

export function RideCard({ route, miles }: RideCardProps) {
  const rides: Ride[] = [
    { id: 1, place: "Belle Isle" },
    { id: 2, place: "Lake St. Clair" },
  ];

  return (
    <div>
      <h2>{route}</h2>
      <p>{miles} mi</p>
      {rides.map((ride, index) => (
        <li key={index}>{ride.place}</li>
      ))}
    </div>
  );
}
