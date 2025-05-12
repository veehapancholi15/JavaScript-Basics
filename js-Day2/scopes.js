function pracVar(){
    var a = 10
    if(true){
        var a = 20
        console.log(a) //20
    }
    console.log(a) //20
}
pracVar()
// here both condition prints same value as we have update the value and as it is true condition it accepts it everywhere

function pracLet(){
    let b = 20
    if(true){
        let b = 10
        console.log(b) //10
    }
    console.log(b) //20
}
pracLet()
// here both condition prints there respective outputs as 'let' variable only updates after call value inside the scope

function pracConst(){
    const c = 30
    console.log(c)
    // c = 25 // here it returns error as constant values cannot be changed
}
pracConst()