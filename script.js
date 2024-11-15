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
// console.log(sum(5));

function factorial(number){
    if(number == 0 || number == 1){
        return 1;
    }else{
        return number * factorial(number - 1);
    }
}


// console.log(factorial(6));

function funkyMath(a,b,c,d){
    if(arguments.length == 2){
        return b-a
    }else if(arguments.length == 3){
        return a+b+c
    }else if(arguments.length == 4){

        return (a+b)/(c+d)

    }
}



// console.log(funkyMath(8,2,3,5));


let arr = [1, 2 , 33, 45, 6,44]
let oddArr = []
for (let i = 0; i<arr.length;i++){
    console.log(arr[i]);

    if(arr[i]%2 !=0){
        oddArr.push(arr[i])
    }

    
}
function arrange(){
    
}

console.log(oddArr);