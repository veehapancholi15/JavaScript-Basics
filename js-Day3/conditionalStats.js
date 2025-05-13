// CONDITIONAL STATEMENTS - EXECUTES CODE USING CONDITIONS
// IF..ELSE

// EXAMPLE-1
// EXECUTES CODE ON A SINGLE CONDITION
if(true){
    console.log(123)
}

// EXAMPLE-2 (VOTING AGE PROGRAM USING IF..ELSE)
// 'IF' CONDITION EXECUTES ON CONDITION SATISFACTION
// 'ELSE' CONDITION IS EXECUTED VICE VERSA OF 'IF' CONDITION
let age = 18;
if(age >= 18){
    console.log("You can vote!");
}
else{
    console.log("You can't vote!");
}

// EXAMPLE-3 (NESTED IF..ELSE)
// 'ELSE IF' IS USED TO GIVE ANOTHER CONDITION UPON THE ELSE CONDITION
let a = 10;
let b = 20;
let c = 30;

if(a > b & c){
    console.log(`${a} is greater`);
}
else if(b > a & c){
    console.log(`${b} is greater`);
}
else{
    console.log(`${c} is greater`);
}

// EXAMPLE-4 (SWITCH CASE - CLEANER WAY TO HANDLE MULTIPLE CASES/CONDITIONS)
 let day = 5;
 switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thrusday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Sunday');
        break;
 }
//  'DEFAULT CASE' IS THE CASE WHERE IT SHOWS THE DEFAULT VALUE