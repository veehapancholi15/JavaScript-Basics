function fStep(value){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('First Step: ', value);
            resolve(value + 1);
        }, 1000);
    });
}

function sStep(value){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Second Step: ', value);
            resolve(value * 2);
        });
    });
}

function tStep(value){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Third Step: ', value);
            resolve(value - 1);
        }, 100);
    });
}

fStep(10).then(result => sStep(result)).then(result => tStep(result)).then(fresult => console.log('Final Result: ', fresult)).catch(error => console.log(error));
