try{
    let num = 10/0;
    console.log(num); // this will handle the logic written in this block
    console.log(variable); // this will throw an error because variable is not defined
}
catch(error){
    console.log('Error:', error); // if error occurs this will handle the error
}
finally{
    console.log('Error is there'); // finally block will execute at the end
}