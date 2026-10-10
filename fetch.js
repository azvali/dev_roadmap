/*

notes: 

response.ok is what should be checked after a fetch

response.ok only returns true after a status code is between 200-299


*/

//server setup for fetch
import http from "node:http";

const server = http
  .createServer((req, res) => {
    if (req.url === "/weather") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ temp: 61 }));
    } else {
      res.writeHead(500);
      res.end("server broke");
    }
  })
  .listen(3000);

async function fetchJSON(url) {
  const response = await fetch(url);
  console.log(response.status);
  if (response.ok) {
    let data = response.json();
    return data;
  } else {
    throw new Error("Failed to hit the url");
  }
}

function isGoodRidingDay(object) {
  const wind = object.wind_speed_10m;
  const precipitation = object.precipitation;
  const temp = object.temperature_2m;

  return wind < 20 && precipitation === 0 && temp > 55 && temp < 90;
}

try {
  const url =
    "https://api.open-meteo.com/v1/forecast" +
    "?latitude=42.58&longitude=-83.03" +
    "&current=temperature_2m,precipitation,wind_speed_10m" +
    "&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch";

  const data = await fetchJSON(url);
  const canWeRide = isGoodRidingDay(data.current);
  console.log(data);

  if (canWeRide) {
    console.log("good riding day");
  } else {
    console.log("bad riding day");
  }
} catch (error) {
  console.log(error);
}

server.close();
