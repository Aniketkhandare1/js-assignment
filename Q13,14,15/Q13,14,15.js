// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age;

age = prompt("enter your age")
age = Number.parseInt(age);
let age1 = 18 - age;


if (age == 18 || age > 18) {
  console.log("You are old enough to drive");
}
else {
  console.log(`wait for the ${age1}  number of years you needs to turn 18`);

}

// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.


let number =prompt("enter your number to check if it is even or odd number.")
number=Number.parseInt(number);

if(number%2==0){
    console.log("It's an EVEN Number");

}
else{
    console.log("It's an ODD Number");
}



//  15. Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-79, B
// - 60-69, C
// - 50-59, D
// - 0-49, E

let smarks =prompt("enter students marks and get grades according to theirs scores.");
smarks=Number.parseInt(smarks);

if(smarks>=80 && smarks<=100 ){
    console.log("congratulations your grade is:  A")
}

 else if (smarks>=70 && smarks<=79 ){
    console.log("congratulations your grade is:  B")
}

else if(smarks>=60 && smarks<=69 ){
    console.log("congratulations your grade is:  C")
}
else if(smarks>=50 && smarks<=59 ){
    console.log("congratulations your grade is:  D")
}
else if(smarks>=0 && smarks<=49){
    console.log("congratulations your grade is:  E")
}
else{
            console.log("invalid")
       }