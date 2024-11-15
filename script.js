// function to create sum of the numbers from 1 to the number passed
function sum(x) { 
    
    let sum = 0;
    if (typeof x!= "number" || x % 1 !== 0){
        return "The value passed is not a number"
    } else if(x<0){
        return "The value passed is a negative number"
    } else{
       
        for (let i = 0; i <= x; i++) {
            sum += i;
        }
        return sum;
    }

}
console.log(sum(5));


//function to calculate the factorial of the number passed
function factorial(number){
    if(number == 0 || number == 1){
        return 1;
    }else{
        return number * factorial(number - 1);
    }
}


console.log(factorial(4));


//function to create calculations based on the number of arguments passed
function funkyMath(a,b,c,d){
    if(arguments.length == 2){
        return b-a
    }else if(arguments.length == 3){
        return a+b+c
    }else if(arguments.length == 4){

        return (a+b)/(c+d)

    }
}



console.log(funkyMath(8,2,3,5));



//for loop to push odd numbers to an array
let arr = [1, 2 , 33, 45, 6,44]
let oddArr = []
for (let i = 0; i<arr.length;i++){

    if(arr[i]%2 !=0){
        oddArr.push(arr[i])
    }

    
}
console.log(oddArr);
//reverse the odd array so that I can be able to sort it.
oddArr.reverse()

console.log(oddArr);
//Making sure that the array is sorted in ascending order
oddArr.sort()

console.log(oddArr);

//creating an object
let me ={
    firstName: "Sivuyile",
    lastName: "Mtwetwe",
    age: 24,
    favColor: "Blue",
    dreamCar: "Ferrari 250 GT"
    
}
//adding a key with its value to an object
me["favFood"] = "Chicken Biryani"

console.log(me);
//deleting a key and its value from an object
delete me.age

console.log(me);