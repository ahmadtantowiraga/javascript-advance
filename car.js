class Car{
    constructor(name, brand){
        this.name=name;
        this.brand=brand;
    }
}

function sayHello(){
    console.log('Hello World')
}

let fullName="Dzaki asmara";



module.exports={
    Car,
    sayHello,
    fullName,
} 

// atau bisa
// module.exports={
//     Car : Car,
//     sayHello : sayHello,
//     fullName : fullName,
// }