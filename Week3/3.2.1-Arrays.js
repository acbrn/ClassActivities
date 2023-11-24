const trucks = ["F-250", "Tacoma", "Silverado"];

console.log(trucks[0]);

console.log(trucks[2]);

trucks.length;

console.log(trucks[trucks.length - 1]);

const cars = [];

for (let vehicle of trucks) {
  let output = `Ford ${vehicle}`;
  cars.push(output);
}

