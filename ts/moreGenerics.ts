type Result<T> =
  | {
      response: "ok";
      value: T;
    }
  | {
      response: "failed";
      errMsg: string;
    };

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
