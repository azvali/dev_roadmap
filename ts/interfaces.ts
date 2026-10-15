type bikeOptions = "R6" | "Grom";

interface IMaintenanceRecord {
  readonly id: number;
  bike: bikeOptions;
  task: string;
  cost?: number;
}
