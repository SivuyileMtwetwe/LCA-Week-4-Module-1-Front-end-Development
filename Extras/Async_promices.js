// console.log(1);

// console.log(2);

// console.log(3);

// setTimeout(() => {
//     console.log(4);
// }, 2000)

// console.log(5); 


// function waiting(){
//     new Promise
// }
let workout = true
// let x  = new Promise((resolve,reject)=>{
// if (workout == true) {
//     resolve("Man\'s looking like Johnny Bravo!")
// } else {
//     reject("Hebana Eish")
// }

// })


// x.then((message)=> console.log( message.split('').reverse().join("")))


async function waiting(){
    let x = await new Promise(()=>{
    if (workout == true) {
        resolve("Man\'s looking like Johnny Bravo!")
    } else {
        reject("Hebana Eish")
    }
})
}

// fetch("https://matthew-dean-brown.github.io/api-data/data.json")
// .then((data)=> data.json())
// .then((x)=>console.log(x))
// .catch(err=> console.error(err))


// async function fetchData(){
//     let data = await fetch("https://matthew-dean-brown.github.io/api-data/data.json")
//     data.json().then((x)=>console.log(x)) 
// }
const  fetchData = async () => {
    let data = await fetch("https://matthew-dean-brown.github.io/api-data/data.json")
    data.json().then((x)=>console.log(x)) 
}



fetchData()