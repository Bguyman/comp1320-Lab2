const getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
const makeCalendar = require("./lab-two").makeCalendar;
const readline = require("readline-sync");

const year = readline.question('Enter a year: ')
const month = readline.question('Enter a month: ')
const day = readline.question('Enter a day: ')
const calendarYear = 2022

getDayOfTheWeek(year, month, day); 
makeCalendar(calendarYear);