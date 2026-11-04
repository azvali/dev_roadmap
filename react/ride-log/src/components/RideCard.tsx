import type { Ride } from '../types'

type RideCardProps = { ride: Ride }

export default function RideCard(_props: RideCardProps) {
  // TODO: show route, miles ("42 mi"), and date
  return(
    <>
      <h2>{_props.ride.route}</h2>
      <p>{_props.ride.miles} mi</p>
      <p>{_props.ride.date}</p>
    </>
  )
}
