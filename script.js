function multiply(x,y,z){

    return x*y*z
}
console.log(multiply(3,2,2));


let convertToSeconds = function(numberOfMinutes){
    return numberOfMinutes*60
}

console.log(convertToSeconds(2));

function fahrenheitToCelsius(temperature){
    return temperature*(9/5) + 32
}

console.log(fahrenheitToCelsius(90));


function reverseString(string){
    return string.split('').reverse().join('')
}
console.log(reverseString("Sivuyile"));

let vowels = ["a","e","i","o","u","A","E","I","O","U"]
let numberOfVowels = 0
function countVowels(word){

    for (let i = 0; i <= word.length; i++) {
        if (vowels.includes(word[i])) {
          numberOfVowels++;
        }
      }
    
    return numberOfVowels
}

console.log(countVowels("ABracaDabra"));


function isPrime(number){
    if((number%number == 0) && (number/1 == number) &&( number !=1) && (number%2 !=0) || (number%3 !=1) ){
        return true
    }else{

        return false
    }

}

console.log(isPrime(5));