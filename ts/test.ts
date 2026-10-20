/*
// interface Ride {
//   bike: "R6" | "Grom";
//   miles?: number;
// }

// function doubleMiles(ride: Ride): number {
//   if (ride.miles) {
//     return ride.miles * 2;
//   } else {
//     return 0;
//   }
// }


// //

// interface Ride {
//   bike: "R6" | "Grom";
//   miles?: number;
//   topSpeed?: number;
// }

// const r: Ride = { bike: "R6", miles: 10, topSpeed: 160 };

// //

// type FlowRun =
//   | { status: "succeeded"; durationMs: number }
//   | { status: "failed"; error: string }
//   | { status: "running" };

// function describeRun(run: FlowRun): string {
//   switch (run.status) {
//     case "succeeded":
//       return `Done in ${run.durationMs}ms`;
//     case "failed":
//       return `Failed: ${run.error}`;
//       case "running":
//         return `Flow is still running.`
//     default:
//       const check: never = run;
//       return check;
//   }
// }

//

interface Ride {
  bike: "R6" | "Grom";
  miles: number;
}

function totalMiles(rides: Ride[]) {
  return rides.reduce((sum, r) => sum + r.miles, 0);
}


//

interface Holding {
  readonly ticker: string;
  shares: number;
}

function stockSplit(h: Holding): Holding {
  h.shares = h.shares * 2;
  return h;
}



interface Photo {
  url: string;
  width: number;
}

interface Reel {
  url: string;
  durationSec: number;
}

function caption(post: Photo | Reel): string {

    if("durationSec" in post){
        return `Reel, ${post.durationSec}s long`;
    }
    else return ''
}



type Bike = "R6" | "Grom" | "MT-09";

function engineCc(bike: Bike): number {
  if (bike === "R6") return 599;
  if (bike === "Grom") return 125;
  if (bike === "MT-09") return 989;
  return 0
}


interface Ride {
  bike: "R6" | "Grom";
  miles: number;
}

function filterRides(rides: Ride[], test: (ride: Ride) => boolean): Ride[] {
  return rides.filter(test);
}

const rides: Ride[] = [
  { bike: "R6", miles: 40 },
  { bike: "Grom", miles: 0 },
];
const real = filterRides(rides, (r) => r.miles);


*/

function formatPrice(price: string | number): string {
  if (typeof price === "number") {
    return `$${price.toFixed(2)}`;
  }
  return `$${price}`;
}
