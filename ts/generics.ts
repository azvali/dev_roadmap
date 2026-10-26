// type Weather =
//   | { kind: "sunny"; uvIndex: number }
//   | { kind: "rain"; mm: number }
//   | { kind: "snow"; cm: number };

// switch (w.kind) {
//   case "sunny": return `UV ${w.uvIndex}`;
//   case "rain":  return `${w.mm}mm rain`;
//   case "snow"
//   default:
//     const check: never = w;
//     return check;
// }

// function last<T>(arr: T[]): T | undefined {
//   //do something
//   if (arr.length === 0) {
//     return;
//   } else {
//     return arr[arr.length - 1];
//   }
// }

// function findById<T extends {id: string}>(arr : T[], id: string): T | undefined{
//     return arr.find((item) => item.id === id)
// }

console.log();

type Result<T> = { ok: true; value: T } | { ok: false; error: string };

function safeParseInt(s: string): Result<number> {
  if (!s.trim())
    return {
      ok: false,
      error: `input is missing`,
    };

  if (Number.isInteger(Number(s))) {
    return {
      ok: true,
      value: Number(s),
    };
  } else {
    return {
      ok: false,
      error: `${s} is not a valid number`,
    };
  }
}
