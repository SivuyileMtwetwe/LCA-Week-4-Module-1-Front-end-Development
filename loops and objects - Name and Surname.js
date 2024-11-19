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


let friend1 = {
    name: "Siphenathi",
    nickname: "Nathi",
    favFoods: ["Chicken Biryani", "Rice and Chicken"],
    hobbies: ["Gardening", "Coding"]

}

console.log(`Hi my name is ${friend1.name}, and my friends call me ${friend1.nickname}. I always eat ${friend1.favFoods[0]} and ${friend1.favFoods[1]}. I love to do some ${friend1.hobbies[0]} on my spare time but what I have been doing a lot these days is ${friend1.hobbies[1]}`);

function friend(name,nickname, favFoods, hobbies){
    this.name = name,
    this.nickname = nickname,
    this.favFoods = favFoods,
    this.hobbies = hobbies
}

let friend2 = new friend("Mila","Milz",["Spaghetti", "African Salad"], ["Eating", "Soccer"])

let friend3 = new friend("Juan","John Wick",["Burgers", "Steak"], ["Paragliding","Being Boring"])

let friend4 = new friend("Zenande","Zen",["Umfino","Umngqusho"],["Sleeping","Studying"])

// console.log(friend2);
// console.log(friend3);
// console.log(friend4);

let friends = []

friends.push(friend1,friend2,friend3,friend4)

for(let i = 0 ; i<friends.length;i++){
    console.log(friends[i]);
}
for (let k = 0; k < friends.length; k++) {
    for (let j = 0; j < friends[k].hobbies.length; j++) {
        if (friends[k].hobbies[j] === "Soccer") {
            console.log(friends[k]);
            
        }
    }
}


for(let z = 0 ; z< friends.length;z++){
    friends[z].hobbies.push("Being a legend");
    
}

console.log(friends);