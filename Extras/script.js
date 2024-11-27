// let botton = document.querySelector(".btn")
// let h1 = document.querySelectorAll("h1")[2]
// let h1s = document.querySelectorAll("h1")
// botton.addEventListener("click", ()=>{
    
//     if (h1.innerText === "I used to hate JavaScript"){
//         h1.innerText = "I love JavaScript"
//     }else{
        
//         h1.innerText = "I used to hate JavaScript"
// }
// })

// h1s.forEach(item =>{
// item.addEventListener("click",()=>{
//    console.log(item.innerText);
// })
// })


// let calculate = document.querySelectorAll('button')[1]
// let span = document.querySelector('span')

// calculate.addEventListener('click', ()=>{
//     let input1 = document.querySelectorAll('input')[0].value
//     let input2 = document.querySelectorAll('input')[1].value
//     let answer = +input1 + +input2
//     span.innerText= answer
// })
let form = document.querySelector('form')
form.addEventListener('submit', (event)=> {
    event.preventDefault()
    console.log(form.elements);
    const {email,password,username} = form.elements
    if(!email.value){
        alert('Please enter an email')
        return
    }else if(!username.value){
        alert('Please enter username')
        return
    }else if(!password.value){
        alert('Please enter password')
        return
    }else{
        alert('The form has been submitted')
    }
})

let h4 = document.querySelector("[sivu]")
let p = document.querySelector("p")

h4.addEventListener("click",()=>{
//    if( p.style.display == "none"
// ){
// p.style.display = "block"
// }else{
//     p.style.display = "none"
// }


p.classList.toggle("hidden")

// if( p.classList == "hidden"){
//     p.classList.remove("hidden")
// }else{
// p.classList.add("hidden")
// }
}

) 