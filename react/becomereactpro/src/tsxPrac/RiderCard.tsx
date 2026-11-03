type RideCardProps = { route: string; miles: number };

export function RideCard({ route, miles }: RideCardProps) {
  return (
    <div>
      <h2>{route}</h2>
      <p>{miles} mi</p>
    </div>
  );
}
