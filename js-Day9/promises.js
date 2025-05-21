// Promises means a value that may be available now, or in the future, or never.
// 3 states of a promise:
// Pending, Resolved, Rejected

let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Promise resolved successfully");
    }
    else{
        reject("Promise rejected");
    }
})

myPromise.then(result => console.log(result)).catch(error => console.log(error));