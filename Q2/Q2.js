// Using interploation method, displaying variables storing first name, last name, marital status, country.

// In this question, to perform the string interpolation, this template literal ${any_varibale} expression wrapped in backticks will work.




const personDetail = {
    firstName :'Aniket',
    lastName :'Khandare',
    maritalStatus :'Single',
    country :'INDIA',

   
    showStatus : function () {
        console.log(`Your status: ${this.firstName}, ${this.lastName}, martital status: ${this.maritalStatus}, from  Country ${this.country}`)
    }
}

personDetail.showStatus();