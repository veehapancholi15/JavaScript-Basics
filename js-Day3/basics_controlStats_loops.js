// CONDITIONAL STATEMENTS

// CHECK IF A NUMBER IS EVEN OR ODD [if..else]
function EvenOdd(num){
    if(num%2==0){
        console.log(`${num} is even.`);
    }
    else{
        console.log(`${num} is odd.`);
    }
}

EvenOdd(10);
EvenOdd(5);

// PRINT DAYS OF THE WEEK USING 'SWITCH' CASE
function returnDayName(dayNum){
    switch(dayNum){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number.")
    }
}

returnDayName(6);
returnDayName(3);

// LOOPS

// PRINT NUMBERS FROM 1 TO 10
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// PRINT ALL THE EVEN NUMBERS BETWEEN 1 TO 20
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// ITERATION OVER AN ARRAY OF COLORS
const colors = ["Red", "Blue", "Green", "Yellow"];
for(const col of colors){
    console.log(col);
}

// LOOP CONTROLS [break, continue]

// USE 'BREAK' TO EXIT A LOOP
for(let i=1; i<=10; i++){
    if(i === 5){
        console.log("Break the loop at : ", i);
        break;
    }
    console.log(i);
}

// USE 'CONTINUE' TO SKIP AN ITERATION
for(let i=1; i<=10; i++){
    if(i % 2 !== 0) continue; // Skip all odd nums between 1 to 10
    console.log(i); // Only prints all even nums between 1 to 10
}