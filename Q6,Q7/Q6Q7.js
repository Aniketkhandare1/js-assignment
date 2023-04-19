// 06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.


 let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;

 let itCompanies= companies.split(",");
 console.log(itCompanies);


 // 07.Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".



 const tech = ["html", "css", "javascript", "pw skills"]
 // finding index of last occurence
 console.log(tech.lastIndexOf("pw skills"))
 
 // finding index of first occurence
 const tech1 = ["pw skills","html", "css", "javascript"]
 console.log(tech1.lastIndexOf("pw skills"))