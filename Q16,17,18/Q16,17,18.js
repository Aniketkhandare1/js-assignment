// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let userInputMonth;

userInputMonth= prompt("Enter the any month to check the season.")

if (userInputMonth == "September "|| userInputMonth == "October" || userInputMonth == "Novermber")
{
    console.log("The season is Autumn");
}

else if (userInputMonth == "December "|| userInputMonth =='January' || userInputMonth == "February")
{
    console.log("The season is Winter");
}


else if (userInputMonth == "March" || userInputMonth == "April" || userInputMonth == "May")
{
    console.log("The season is Spring");
}

else if (userInputMonth == "June" || userInputMonth == "July "|| userInputMonth == "August")
{
    console.log("The season is Summer");
}

// 17. A program which tells the number of days in a month.

let a=prompt("enter month no");
a=Number.parseInt(a);

let b=prompt("enter year no")
b=Number.parseInt(b);

let getDaysInMonth = function(month,year) {

 return new Date(year, month, 0).getDate();

};

console.log(getDaysInMonth(a,b));