// HIGHER ORDER FUNCTIONS

function operation(type){
    if(type == 'add'){
        return (a, b) => a+b;
    }
    else if(type == 'sub'){
        return (a, b) => a-b;
    }
    else if(type == 'mul'){
        return (a, b) => a*b;
    }
    else if(type == 'div'){
        return (a, b) => a/b;
    }
    else{
        return (a, b) => a%b;
    }
}
const func = operation('add')
console.log(func(15, 26)); // calling the function