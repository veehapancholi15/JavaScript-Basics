// TYPES OF LOOPS
//  FOR LOOP
//  FOR OF LOOP
//  FOR IN LOOP
//  WHILE LOOP
//  DO WHILE LOOP

// FOR LOOP
// IT TAKES PARAMETERS AS (VARIABLE, CONDITION, INCREMENT/DECREMENT)
for(let i=1; i<=10; i++){
    console.log(i);
}

// TABLE PRINTING LOOP
const table = 5;
for(let i=1; i<=10; i++){
    console.log(table*i)
}

// WHILE LOOP
// RUNS AS LONG AS CONDITION IS TRUE

// // INFINITE LOOP
// while(true){
//     console.log()
// }

// CONDITION WHILE LOOP
let m = 0;
while(m<2){
    console.log('Greater') //condition
    m++; //increment
}

let k = 0;
while(k<5){
    console.log('Hello World');
    k++;
}

// DO WHILE LOOP
// EXECUTES THEN CHECKS THE CONDITION
let num = 0;
do{
    console.log('Hey!'); //execution of task
    num++;
}
while(num<5); //condition

// FOR OF LOOP USED TO ITERATE OVER THE LIST
// ITERATES OVER OBJECT LIKE ARRAYS
const fruits = ['Apples', 'Bananas', 'Pineapples', 'Oranges'];
for(const i of fruits){
    console.log(i);
}

// ITERATES OVER THE PROPERTIES OF THE OBJECTS
const obj = {
    "availability" : "yes",
    "category" : "Laptop",
    "company" : "AMZ",
    "discount" : 15,
    "id" : 131,
    "price" : 1500,
    "product_name" : "Laptop_1",
    "rating" : 4.6
};
for(const key in obj){
    console.log(`${key} ${obj[key]}`);
}

// BREAK STATEMENT
for(let v=0; v<=10; v++){
    if(v===5) break; // it exits the loop after condition is satisfied
    console.log(v);
}

// CONTINUE STATEMENT
for(let z=0; z<10; z++){
    if(z>5) continue;
    console.log(`${z}`);
}