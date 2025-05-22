// Create new promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random();
        if(success > 0.5){
            resolve('Operation successfully conducted!');
        }
        else{
            reject('Operation failed!');
        }
    }, 2000);
})

myPromise.then(result => console.log(result)).catch(error => console.log(error));
