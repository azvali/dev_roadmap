import type { Ride } from "../types";
import RideCard from "./RideCard";

type RideListProps = { rides: Ride[] };

export default function RideList(_props: RideListProps) {
  // TODO 1: show <EmptyState /> when empty
  //   careful: what would rides.length && ... render?
  // TODO 2: map to <RideCard /> in <ul>/<li> with a stable key (not the index)
  return (
    <ul>
      {_props.rides.map((ride) => (
        <li key={ride.id}>
          <RideCard ride={ride} />
        </li>
      ))}
    </ul>
  );
}
