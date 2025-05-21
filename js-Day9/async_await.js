// async & await simplify working with promises

async function fetchdata() {
    try{
        let res1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let res2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
        let res3 = await fetch("https://jsonplaceholder.typicode.com/todos/3");
        let data1 = await res1.json();
        let data2 = await res2.json();
        let data3 = await res3.json();
        console.log(data1);
        console.log(data2);
        console.log(data3);
    }
    catch(error){
        console.log('Error:', error);
    }
}
fetchdata();