//*Kelvin!*//
const Kelvin = 0;
//*celsius!*//
const celsius = Kelvin - 273;
//*fahrenheit!*//
let fahrenheit = celsius * (9 / 5) + 32;
//*Round up*//
fahrenheit = (Math.floor(fahrenheit));
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${Kelvin} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
newton = (Math.floor(newton));
console.log(`The temperature is ${newton} degrees Newton.`)