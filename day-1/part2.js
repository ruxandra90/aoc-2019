const fs = require('fs');
let mass = fs.readFileSync("mass.txt", "utf-8");
mass = mass.split("\n");

let fuelTotal = 0;

function fuelForModule(masa) {
    let fuel = 0;
    let p = masa, c = 0;
    while (p > 0){
        fuel += c;
        c = Math.floor(p/3) - 2;
        p = c;
    } 

    return fuel;
}


for(var i=0; i<mass.length; i++) {
  fuelTotal += fuelForModule(mass[i]);
}

console.log("Total Fuel = ", fuelTotal);


