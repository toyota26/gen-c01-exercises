let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = 0;
let runnerAge = 19;
if (registeredEarly && runnerAge > 18) {
    raceNumber += 1000;
}

if (registeredEarly && runnerAge > 18) {
    console.log(`you will race at 9:30 am, your race number is ${raceNumber}`);
} else if (!registeredEarly && runnerAge > 18) {
    console.log(`you will race at 11:00 am, your race number is ${raceNumber}`)
} else if (runnerAge < 19) {
    console.log(`you will race at 12:30 pm, your race number is ${raceNumber}`)
} else {
    console.log(`see the registration desk.`)
}