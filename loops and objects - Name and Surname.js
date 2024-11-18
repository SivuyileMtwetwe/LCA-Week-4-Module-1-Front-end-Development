let numbers = [3,6,9,12,15,18]

for (let i=0 ; i<numbers.length; i++){
    console.log(numbers[i]);
}

let sum = 0

for(let j=0; j<numbers.length;j++){
    sum += numbers[j]
    
}console.log(sum);

let oddSum = 0 

for(let k = 0 ; k<numbers.length;k++){
    if(numbers[k]%2!=0){
   oddSum += numbers[k]
    }

    
}console.log(oddSum);