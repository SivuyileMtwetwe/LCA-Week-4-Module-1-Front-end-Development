const spellArea = document.getElementById('spellArea');
const generateButton = document.getElementById('generateButton');
const ingredientsList = document.getElementById('ingredientsList').getElementsByTagName("li")
// const ingredientsList = document




console.log(ingredientsList);
generateButton.addEventListener("click",() =>{
   spellArea.innerHTML= [Math.floor(Math.random() * ingredients.length)].textContent;
})