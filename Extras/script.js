let botton = document.querySelector(".btn")
let h1 = document.querySelectorAll("h1")[2]
let h1s = document.querySelectorAll("h1")
botton.addEventListener("click", ()=>{
    
    if (h1.innerText === "I used to hate JavaScript"){
        h1.innerText = "I love JavaScript"
    }else{
        
        h1.innerText = "I used to hate JavaScript"
}
})

h1s.forEach(item =>{
item.addEventListener("click",()=>{
   console.log(item.innerText);
})
})


let calculate = document.querySelectorAll('button')[1]
let span = document.querySelector('span')

calculate.addEventListener('click', ()=>{
    let input1 = document.querySelectorAll('input')[0].value
    let input2 = document.querySelectorAll('input')[1].value
    let answer = +input1 + +input2
    span.innerText= answer
})