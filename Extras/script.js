

const numbers = [1,2,3,4,5];


numbers.forEach( 
    numbers => {
    console.log(numbers);}
);



let coolCars = ['BMW','Bugati','Ferrari','McLaren', 'Mercedes'];

coolCars[3] = "Lamborghini";


console.log(coolCars);

for(let i=0; i<coolCars.length; i++){

    console.log(coolCars[i]);
}

let reversedCars = coolCars.reverse()

console.log(reversedCars);

let removedCar = coolCars.reverse().pop();

console.log(coolCars);
console.log(removedCar);

coolCars.unshift(removedCar)

console.log(coolCars);


let age = 17;

if (age>=18){
    console.log("You are older than 18");
}else{
    console.log("You are younger than 18");
}

switch(true){
    case 18:
        console.log("You are older than 18");
    break;

    default:
        console.log(age >18? "You are older than 18": "You are younger than 18");
}

let car = 0
// while(car<coolCars.length){

//     console.log(coolCars[car]);
// car++ 
// }

do{
    console.log(coolCars[car]);
    car++ 
}while(car<coolCars.length)