//domain 1
type Weather = "clear" | "rainy" | "windy" | "cold";

interface WeeksRide {
  readonly weather: Weather;
  distance: number;
  mood?: string;
}

const rides: WeeksRide[] = [
  {
    weather: "clear",
    distance: 10,
    mood: "Great",
  },
  {
    weather: "rainy",
    distance: 2,
  },
  {
    weather: "cold",
    distance: 1,
    mood: "Good",
  },
  {
    weather: "clear",
    distance: 10,
  },
];

function longRide(ride: WeeksRide): boolean {
  if (ride.distance > 5) {
    return true;
  }
  return false;
}

const longRides2 = rides.filter((r) => longRide(r));
console.log(longRides2);

//domain 2

type MaintenanceNeeded = "Chain" | "Oil" | "Valves" | "Spark Plugs";

interface bikeInShop {
  readonly bike: string;
  reason: MaintenanceNeeded;
  detail?: boolean;
}

const todaysBikes: bikeInShop[] = [
  { bike: "R6", reason: "Valves", detail: true },
  { bike: "Grom", reason: "Oil" },
  { bike: "MT-07", reason: "Chain", detail: false },
  { bike: "CBR600RR", reason: "Spark Plugs" },
];
function cost(reason: MaintenanceNeeded): number {
  switch (reason) {
    case "Chain":
      return 15;
    case "Oil":
      return 60;
    case "Spark Plugs":
      return 300;
    case "Valves":
      return 900;
    default:
      const r: never = reason;
      return r;
  }
}
const profits = todaysBikes.reduce((sum, act) => sum + cost(act.reason), 0);

console.log(profits);

//domain 3
type PostType = "picture" | "video";

interface TodaysPost {
  readonly typeOfPost: PostType;
  promo?: boolean;
  viral: boolean;
}

const weeksPosts: TodaysPost[] = [
  { typeOfPost: "video", promo: true, viral: true },
  { typeOfPost: "picture", viral: false },
  { typeOfPost: "video", viral: false },
  { typeOfPost: "picture", promo: true, viral: false },
  { typeOfPost: "video", promo: false, viral: true },
];

const viralCount = weeksPosts.filter((r) => r.viral === true).length;
const viralVids = weeksPosts.filter(
  (r) => r.viral === true && r.typeOfPost === "video",
);

function didTodaysPostGoViral(p: TodaysPost): string {
  if (p.viral) {
    return "Holy chet this went viral";
  }
  return "Nah";
}

console.log(didTodaysPostGoViral(weeksPosts[1]!));

//domain 4
type Holding = "stock" | "ETF";
type Return = "profit" | "loss" | "break even";

interface Investment {
  readonly investmentType: Holding;
  buyPrice: number;
  currentValue: number;
  goodBuy?: boolean;
}

const investments: Investment[] = [
  { investmentType: "ETF", buyPrice: 450, currentValue: 520, goodBuy: true },
  { investmentType: "stock", buyPrice: 180, currentValue: 140 },
  { investmentType: "stock", buyPrice: 95, currentValue: 210, goodBuy: true },
  { investmentType: "ETF", buyPrice: 300, currentValue: 295, goodBuy: false },
];

const profitOrLoss = (i: Investment): Return => {
  if (i.buyPrice < i.currentValue) {
    return "profit";
  } else if (i.buyPrice === i.currentValue) {
    return "break even";
  } else return "loss";
};

const wins = investments.filter((i) => profitOrLoss(i) === "profit");

//domain 6

type FlowOutcome =
  | {
      readonly status: "succeeded";
      minRan: number;
    }
  | {
      readonly status: "failed";
      minRan: number;
      errMsg: string;
    }
  | {
      readonly status: "running";
      minRan: number;
    }
  | {
      readonly status: "cancelled";
      minRan: number;
    }
  | {
      readonly status: "timedOut";
      minRan: number;
      retryAt: string;
    };

const runs: FlowOutcome[] = [
  { status: "succeeded", minRan: 3 },
  { status: "failed", minRan: 1, errMsg: "401 Unauthorized from Graph API" },
  { status: "running", minRan: 12 },
  { status: "cancelled", minRan: 5 },
  { status: "succeeded", minRan: 2 },
];

const describeRun = (run: FlowOutcome): string => {
  switch (run.status) {
    case "failed":
      return `This flow ran for ${run.minRan} and has a status of ${run.status}. Error Message: ${run.errMsg}`;
    case "timedOut":
      return `This flow ran for ${run.minRan} and has a status of ${run.status}. retry at: ${run.retryAt}`;
    case "cancelled":
      return `This flow ran for ${run.minRan} and has a status of ${run.status}`;
    case "running":
      return `This flow ran for ${run.minRan} and has a status of ${run.status}`;
    case "succeeded":
      return `This flow ran for ${run.minRan} and has a status of ${run.status}`;
    default:
      const r: never = run;
      return r;
  }
};
