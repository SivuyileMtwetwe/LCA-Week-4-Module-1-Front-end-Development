let myString = "LifeChoices"

// console.log(myString.length);

// console.log(myString.toUpperCase())

// console.log(myString.toLowerCase())

// console.log(myString.split(''))

// console.log(myString)

// if (myString == "LifeChoice"){
// console.log(1)
// }else if(typeof myString == "number"){
// console.log(0)
// }else{
//     console.log(2)
// }

// let age = 18

// if ( age >= 18){
// console.log("You can get your licence")
// }else if(age <18 && age >=16 ){
// console.log("You can get your learners but you are young to get a licence")
// }else{
// console.log("Go do your homework!")
// }

let num = 5
// if ( num % 2 == 0){
// console.log("You have an EVEN number")
// }else{
// console.log("You have an ODD number")
// }
// if ( num % 2 == 0){
// console.log("You have an EVEN number")
// }else if(num % 2!=0 ){
// console.log("You have an ODD number")
// }else{
//     console.log("num is null")
// }


let phy = 71
let eng = 55 
let mat = 56



let average = (phy+eng+mat)/3
// let average = 75

if(average>= 80 && average<=100){
    grade = "A"
    message = "Well done!!!"
}else if (average >=70 && average<=79){
    grade = "B"
    message = "Well done!!!"

}else if(average >=60 && average <=69){
    grade = "C" 
    message = "Well done!!!"

}else if (average >=50 && average<=59){
    grade = "D"
    message = "Well done!!!"

}else{
    grade = "F"
    message = "Unfortunately you need to work harder."
}

console.log(`${message} You got ${grade} for your grade.`)