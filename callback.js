// function p1(){
//     console.log('p1 done')
// }

// function p2(callBack){
//     setTimeout(()=>{
//         console.log('p2 done');
//         callBack();
//     }, 3000)
// }

// function p3(){
//     console.log('p3 done');
// }


// p1();
// p2(p3);

function request(cb){
    console.log('Request processing...'); // proces 3
    setTimeout(()=>{
        const result=[{id: '1', name: 'Kangkung', price: 1000},]
        console.log('Process Done'); //process 4
        cb(result)
    }, 2000)
}

let data=null;

function callbackFromAPI(result){
    console.log(result);//proses 5
    data=result;
    console.log(data);//process 6
}

request(callbackFromAPI);//process 1

console.log(data);//process 2

