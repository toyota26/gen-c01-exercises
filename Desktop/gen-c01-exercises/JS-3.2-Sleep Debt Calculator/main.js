const getSleepHours = (day) => {
    switch (day) {
        case 'Monday':
            return 4
            break;
        case 'Tuesday':
            return 5
            break;
        case 'Wednesday':
            return 6
            break;
        case 'Thursday':
            return 7
            break;
        case 'Friday':
            return 8
            break;
        case 'Saturday':
            return 9
            break;
        case 'Sunday':
            return 10
            break;
        default:
            return 'Error!'
    }
}

console.log(getSleepHours('Monday'));
console.log(getSleepHours('Tuesday'));
console.log(getSleepHours('Wednesday'));
console.log(getSleepHours('Thursday'));
console.log(getSleepHours('Friday'));
console.log(getSleepHours('Saturday'));
console.log(getSleepHours('Sunday'));

const getActualSleepHours = () =>
    getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('perfect!')
    } else if (actualSleepHours > idealSleepHours) {
        console.log('no need sleeping hours!')
    } else {
        console.log('more sleeping hours are needed!')
    }
    if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    } else {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) less sleep than you needed this week. Well done!')
    }
}

calculateSleepDebt();