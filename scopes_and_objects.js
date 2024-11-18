let globalCount =0

console.log("The global is equal to " + globalCount);


function demoLocalScope(){
    let localCount = 0

    // localCount +=2
    console.log("The local is  equal to " + localCount);
}

demoLocalScope()

function modBoth(){
    
    
    try {
        
        globalCount ++
            
        console.log("The updated global is equal to " + globalCount);
            localCount +=2
            console.log("The updated local is equal to " + localCount);

} catch (error) {
    console.log("Could not update "+ error);
}

}

modBoth()


function student(firstName, lastName, age ){

    this.firstName = firstName,
    this.lastName = lastName,
    this.age =age
    
} 

const student1 = new student("Sivuyile", "Mtwetwe", 24)
const student2 = new student("Zenande", "Nocanda", 19)
const student3 = new student("Siyavuya", "Khohlani", 25)


console.log(student1);
console.log(student2);
console.log(student3);

let user = {
names: {
   firstName: "Emily",
    nickName: "Emmy"},


    lastName: "Johnson",
//  fullname (){
//    return this.names.firstName + " " +  this.names.nickName+ " " + this.lastName; 
// },
age: 28,
gender: "female",
hair: {
  color: "Brown",
  type: "Curly"
}
}

console.log(user);