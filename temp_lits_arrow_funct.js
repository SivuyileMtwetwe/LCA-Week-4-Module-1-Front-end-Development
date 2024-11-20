let string = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quae dignissimos molestias inventore, incidunt hic provident illo reiciendis aspernatur ullam temporibus soluta accusantium numquam aliquid, minima ab esse distinctio et.
`


console.log(string);


function generator(header,text){

    return `<div>
    <h1>${header}</h1>
    <p>${text}</p>
    
    </div>`
}

console.log(generator("This is a header","This is a text"));

let generatorArrow = (header,text ) => {
    return `<div>
    <h1>${header}</h1>
    <p>${text}</p>
    
    </div>`
}

console.log(generatorArrow("This is a header","This is a text"));


const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


 