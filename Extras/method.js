// let person = {
//     hairStyle: "Chiskop",
//     shoeSize: 6,
//     eyeColor: "Brown",
//     glasses: false
// }
// console.log(person);

// function createPerson(hairStyle, shoeSize, eyeColor, glasses){
//     return{
//         hairStyle: hairStyle,
//         shoeSize: shoeSize,
//         eyeColor: eyeColor,
//         glasses: glasses
//     }
// }

// person = createPerson("Inkqayi",10,"Black",true)

// console.log(person);


function times(a,b){
    if(typeof a != "number" || typeof b != "number") throw new Error ("Woah there, a or b is not a number")
   
 return a*b
}
try{

console.log(times(2,8));
console.log('Hi there');
}catch(e){ 
console.log(e);
console.log('This is after the error');
}finally{
    console.log("Yay, I have ran and tired");
}
