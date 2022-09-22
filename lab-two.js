//how many times "b" fits into "a"
//(a-(a % b))/b
const daysOfWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const january = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const february = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
const march = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const april = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const may = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const june = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const july = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const august = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const september = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const october = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const november = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const december = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const monthCode = {
    1: 1,
    2: 4,
    3: 4,
    4: 0,
    5: 2,
    6: 5,
    7: 0,
    8: 3,
    9: 6,
    10: 1,
    11: 4,
    12: 6
};
const centuryCheck = (century) => {
    if (century.toString().slice(0, 2) == 16) {
        return (6);
    } else if (century.toString().slice(0, 2) == 17) {
        return (4);
    } else if (century.toString().slice(0, 2) == 18) {
        return (2);
    } else if (century.toString().slice(0, 2) == 20) {
        return (6);
    } else if (century.toString().slice(0, 2) == 21) {
        return (4);
    } else {
        return (0);
    };
}
const isLeapYear = (leapYear) => {
    if ((leapYear % 4) == 0) {
        return (1);
    } else {
        return (0);
    };
}
const janOrFebLeapYear = (janOrFeb, whatYear) => {
    if (isLeapYear(whatYear) == 1 && janOrFeb < 3) {
        return (-1);
    } else {
        return (0);
    };
}
const step1 = (step1Num) => {
    return (
        (step1Num.toString().slice(-2) - (step1Num.toString().slice(-2) % 12)) / 12
    );
}
const step2 = (step2Num) => {
    return (
        parseInt(step2Num.toString().slice(-2)) % 12
    );
}
const step3 = (step3Num) => {
    return (
        (step3Num - (step3Num % 4)) / 4
    );
}
const step5 = (step5Num) => {
    return (Object.values(monthCode)[step5Num - 1])
}
const getDayOfTheWeek = (year, month, day) => {
    const dayNumber = (step1(year) + step2(year) + step3(step2(year)) + parseInt(day) + step5(month) + centuryCheck(year) + isLeapYear(year) + janOrFebLeapYear(month, year)) % 7
    console.log(month, '-', day, '-', year, ' is a ', daysOfWeek[dayNumber])
}
const makeCalendar = (calendarYear) => {
    for (const day of january) {
        const januaryCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(1) + centuryCheck(calendarYear)) % 7
        console.log('1 -', day, '-', calendarYear, ' is a ', daysOfWeek[januaryCalendar])
    } for (const day of february) {
        const februaryCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(2) + centuryCheck(calendarYear)) % 7
        console.log('2 -', day, '-', calendarYear, ' is a ', daysOfWeek[februaryCalendar])
    } for (const day of march) {
        const marchCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(3) + centuryCheck(calendarYear)) % 7
        console.log('3 -', day, '-', calendarYear, ' is a ', daysOfWeek[marchCalendar])
    } for (const day of april) {
        const aprilCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(4) + centuryCheck(calendarYear)) % 7
        console.log('4 -', day, '-', calendarYear, ' is a ', daysOfWeek[aprilCalendar])
    } for (const day of may) {
        const mayCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(5) + centuryCheck(calendarYear)) % 7
        console.log('5 -', day, '-', calendarYear, ' is a ', daysOfWeek[mayCalendar])
    } for (const day of june) {
        const juneCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(6) + centuryCheck(calendarYear)) % 7
        console.log('6 -', day, '-', calendarYear, ' is a ', daysOfWeek[juneCalendar])
    } for (const day of july) {
        const julyCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(7) + centuryCheck(calendarYear)) % 7
        console.log('7 -', day, '-', calendarYear, ' is a ' + daysOfWeek[julyCalendar])
    } for (const day of august) {
        const augustCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(8) + centuryCheck(calendarYear)) % 7
        console.log('8 -', day, '-', calendarYear, ' is a ' + daysOfWeek[augustCalendar])
    } for (const day of september) {
        const septemberCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(9) + centuryCheck(calendarYear)) % 7
        console.log('9 -', day, '-', calendarYear, ' is a ' + daysOfWeek[septemberCalendar])
    } for (const day of october) {
        const octoberCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(10) + centuryCheck(calendarYear)) % 7
        console.log('10 -', day, '-', calendarYear, ' is a ', daysOfWeek[octoberCalendar])
    } for (const day of november) {
        const novemberCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(11) + centuryCheck(calendarYear)) % 7
        console.log('11 -', day, '-', calendarYear, ' is a ', daysOfWeek[novemberCalendar])
    } for (const day of december) {
        const decemberCalendar = (step1(calendarYear) + step2(calendarYear) + step3(step2(calendarYear)) + day + step5(12) + centuryCheck(calendarYear)) % 7
        console.log('12 -', day, '-', calendarYear, ' is a ', daysOfWeek[decemberCalendar])
    }
}
module.exports = { getDayOfTheWeek, makeCalendar };