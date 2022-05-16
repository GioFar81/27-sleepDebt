const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
        case "monday":
            return 6;
        case "tuesday":
            return 6;
        case "wednesday":
            return 6;
        case "thursday":
            return 6;
        case "friday":
            return 6;
        case "saturday":
            return 6;
        case "sunday":
            return 6;
        default:
            return "Error!! Insert a day of the week!!"
    }
};

const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");

const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours < idealSleepHours) {
        console.log("You should get more sleep!! You slept " + (idealSleepHours - actualSleepHours) + "hour less than your ideal!!");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You are sleeping more than you need!! You slept " + (actualSleepHours - idealSleepHours) + "hours more than your ideal!!");
    } else if (actualSleepHours === idealSleepHours) {
        console.log("You are sleeping the perfect amount!! You slept the same amount as your ideal!!");
    } else {
        console.log("ERROR!! Something went wrong, check your code!!");
    }
};

calculateSleepDebt();
