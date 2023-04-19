//23. A program to check that the number given by the user is a prime number or not.

let user = prompt("Enter the number to check it is a prime number or not.")

user=Number.parseInt(user);

let numberPrime = true;

function checkPrimeNumber(user){
    if (user < 2){
        console.log("Please enter the number greater than 1");
    } else if (user === 2){
        console.log(`${user} is a prime number`);
    } else {
        for ( let factor = 2; factor <= Math.ceil(Math.sqrt(user)); factor++ ){
            if (user % factor == 0){
                numberPrime = false;
                break
            } 
        }
        if (numberPrime){
            console.log(`${user} is a prime number.`);
        } else {
            console.log(`${user} is not a prime number.`);
        }
    }
}

checkPrimeNumber(user);

// 24. A program to create two array "even" and "odd" having even and odd number
//  between the 0 to 100 (0 and 100 included).

let evenArray = [];
for (let i = 1; i <= 100; i++) {
    if(i % 2 == 0){
        evenArray.push(i)
    }
}
console.log(evenArray)

let oddArray = [];
for (let i = 1; i <= 100; i++) {
    if(i % 2 != 0){
        oddArray.push(i)
    }
}
console.log(oddArray)