// OBJECT TO JSON CONVERSION
const obj = {name : "Veeha", sname : "Pancholi", age : 20}
const jsonStr = JSON.stringify(obj);
console.log(jsonStr); // {"name":"Veeha","sname":"Pancholi","age":20}
console.log(typeof(jsonStr)); // string

// JSON TO OBJECT CONVERSION
const json = '{"name":"Veeha","sname":"Pancholi","isStudent":true}';
const objFormat = JSON.parse(json);
console.log(objFormat); // { name: 'Veeha', sname: 'Pancholi', isStudent: true }
console.log(typeof(objFormat)); // object