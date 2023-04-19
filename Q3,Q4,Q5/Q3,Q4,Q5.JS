// 03. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.



const sV = 'ineuron';
console.log(`Changed to upperCase: ${sV.toUpperCase()}`)

// capital letters in lowercase by using toLowerCase()

const vS = 'INEURON';
console.log(`Changed to upperCase: ${vS.toLowerCase()}`)




// 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

console.log(`Check: ${sV.includes("y")}`);


console.log(`Check: ${sV.includes("n")}`);



// 05. Declare a varibale and assign string value to it and then split it into an array using split() method




let strng ="converting$string$into$an$array$by$using$split"
let arry= strng.split("$");

console.log(arry);