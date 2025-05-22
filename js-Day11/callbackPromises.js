function myPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received');
        }, 1000);
    });
}
myPromise().then(result => console.log(result)).catch(error => console.log(error));
