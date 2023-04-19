
// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()




const a = 4 > 3;
// true

const b = 4 >= 3;
// true

const c = 4 < 3;
// false

const d = 4 <= 3;
// false

const e = 4 == 4;
// true

const f = 4 != 4;
// false

const g = 4 !== 4;
// false

const h = 4 != '4';
// false

const i = 4 == '4';
// true

const j = 4 === '4';
// false




// 11. Use the Date object to do the following activities

// What is the year today?

const current = new Date();
const year = current.getFullYear();
// console.log(year)    

// What is the month today as a number?

const month = current.getMonth();
// console.log(month) 

// What is the date today?

const date = current.getDate();
// console.log(date)

// What is the day today as a number?

const dayToday = current.getDay();
// console.log(dayToday)

// What is the hours now?

const hoursNow = current.getHours();
// console.log(hoursNow)

// What is the minutes now?

const minutesNow = current.getMinutes();
// console.log(minutesNow)



// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm




const format1 = current.toISOString();
console.log(format1);

// DD-MM-YYYY HH:mm

const format2 = current.toLocaleString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'});
console.log(format2);


// DD/MM/YYYY HH:mm

const format3 = current.toLocaleString();
console.log(format3);
