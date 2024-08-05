let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
let runnerAge = 18;
let runnerClass = '';

switch(runnerAge) {
    case runnerAge <= 18 && registeredEarly:
        runnerClass = 'Youth';
    console.log(`early registration for ${runnerClass} class`);
    console.log(`your race number is ${raceNumber}`);
    console.log('race schedule : 12:30 PM');
    break;

    case runnerAge > 18 && registeredEarly:
        runnerClass = 'Adult';
        raceNumber += 1000;
        console.log(`early registration for ${runnerClass} class`);
    console.log(`your race number is ${raceNumber}`);
    console.log('race schedule : 9:30 AM');
    break;

    default:
        console.log('Invalid age');
}

switch(runnerAge) {
    case runnerAge <= 18 && !registeredEarly:
        runnerClass = 'Youth';
        console.log(`late registration for ${runnerClass} class`);
    console.log(`your race number is ${raceNumber}`);
    console.log('race schedule : 12:30 PM');
    break;

    case runnerAge > 18 && !registeredEarly:
        runnerClass = 'Adult';
        raceNumber += 1000;
        console.log(`late registration for ${runnerClass} class`);
    console.log(`your race number is ${raceNumber}`);
    console.log('race schedule : 11:00 AM');
    break;

    default:
        console.log('Invalid age');
}