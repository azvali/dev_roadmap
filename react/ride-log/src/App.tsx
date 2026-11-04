import EmptyState from "./components/EmptyState";
import Layout from "./components/Layout";
import RideList from "./components/RideList";
import { rides } from "./data";

export default function App() {
  return (
    <Layout title="Ride Log">
      {rides.length > 0 && <RideList rides={rides} />}
      {/* TODO: also render <RideList rides={[]} /> to test the empty state */}
      {rides.length === 0 && <EmptyState></EmptyState>}
    </Layout>
  );
}
