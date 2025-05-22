function valAge(age){
    if(age >= 18){
        console.log('You are eligible to vote');
    }
    else{
        console.log('You are not eligible to vote');
    }
}
valAge(10);

function checkAge(age){
    if(age < 18){
        throw new Error('You are not eligible to vote!');
    }
    return 'You are eligible to vote';
}
valAge(23);