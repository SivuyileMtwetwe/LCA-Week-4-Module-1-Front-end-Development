let person = {
    hairStyle: "Chiskop",
    shoeSize: 6,
    eyeColor: "Brown",
    glasses: false
}
console.log(person);

function createPerson(hairStyle, shoeSize, eyeColor, glasses){
    return{
        hairStyle: hairStyle,
        shoeSize: shoeSize,
        eyeColor: eyeColor,
        glasses: glasses
    }
}

person = createPerson("Inkqayi",10,"Black",true)

console.log(person);