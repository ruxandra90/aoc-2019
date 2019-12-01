const fs = require('fs');
let mass = fs.readFileSync("mass.txt", "utf-8");
mass = mass.split("\n");

let fuelTotal = 0;

for(var i=0; i<mass.length; i++) {
    fuelTotal += Math.floor(mass[i]/3) - 2;
}

console.log("Total Fuel = ", fuelTotal);

