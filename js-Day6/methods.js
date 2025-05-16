const car = {
    brand : "Tesla",
    start(){
        console.log(`${this.brand} Car Started`);
    }
}
car.start();

// NESTED OBJECTS
const user = {
    fname : "Veeha",
    lname : "Pancholi",
    address : {
        city : "Vadodara",
        state : "Gujarat",
        country : "India",
        pin : 390019
    }
}
console.log(user.fname); // Veeha
console.log(user.lname); // Pancholi
console.log(user.address.city); // Vadodara
console.log(user.address.state); // Gujarat
console.log(user.address.country); // India
console.log(user.address.pin); // 390019