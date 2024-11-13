let numbers = [1,2,3,4,5];

for(let i=0; i<numbers.length;i++){
    console.log(numbers[i]);
}

let j = 5
while(j>0){

    console.log(j);
j--
}

for(let i=1; i<=numbers.length;i++){
    if(i%2 == 0){
         console.log(i);
    }
   
}

let sum = 0
for(let i=0; i<numbers.length;i++){
    
    sum += numbers[i]
    
}console.log(sum);