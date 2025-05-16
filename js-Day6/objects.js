// DECLARING AN OBJECT
const details = {
    name : "John",
    age : 30,
    isEmployed : true
}

// ACCESSING OBJECT PROPERTIES
console.log(details.name); // John
console.log(details['age']); // 30
console.log(details.isEmployed); // true

// ADDING PROPERTIES TO AN OBJECT
details.city = "New York";
console.log(details);

// UPDATING OBJECT PROPERTIES
details.age = 31;
console.log(details);

// DELETING OBJECT PROPERTIES
delete details.isEmployed;
console.log(details);

// LOOPING THROUGH OBJECT PROPERTIES
for(let key in details){
    console.log(key, details[key]);
}