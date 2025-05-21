// callbacks is a function that is passed as an argument to another function and is executed after the completion of that function

function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

function sayGoodbye(){
    console.log("Goodbye!");
}

function sayHello(){
    console.log("Welcome!");
}

greet("Veeha", sayHello);
greet("Veeha", sayGoodbye);

// callback pitfall
// nested callbacks can make code hard to read and maintain

setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
            setTimeout(() => {
                console.log("Step 4");
                setTimeout(() => {
                    console.log("Step 5");
                }, 1000);
            }, 1000);
        }, 1000);
    })
})