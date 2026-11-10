type Ride = { name: string; miles: number };

function RideCard({ ride }: { ride: Ride }) {
  let newMiles = ride.miles + 10;                 // ← change this line
  return <p>{ride.name}: {newMiles} mi</p>;   // ← and this one
}

const ride = { name: 'Belle Isle', miles: 20 };

function App() {
  return (
    <>
      <RideCard ride={ride} />
      <RideCard ride={ride} />
    </>
  );
}