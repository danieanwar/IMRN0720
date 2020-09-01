// Soal No.1 - Mengubah Fungsi menjadi Arrow
console.log("Soal No.1 - Mengubah Fungsi menjadi Arrow");
console.log("");

let golden = () => {
  console.log("this is golden!!");
}
 
golden("");

console.log("");

// Soal No.2 - Object literal ES6
console.log("Soal No.2 - Object literal ES6");
console.log("");

let newFunction = (firstName, lastName) => {
  return {
    fullName(){
      console.log(firstName + " " + lastName)
      return 
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName() 

console.log("");

// Soal No.3 - Destructuring
console.log("Soal No.3 - Destructuring");
console.log("");

let newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

let {firstName, LastName, destination, occupation, spell} = newObject;
console.log(newObject);

console.log("");

// Soal No.4 - Array Spreading
console.log("Soal No.4 - Array Spreading");
console.log("");

let west = ["Will", "Chris", "Sam", "Holly"]
let east = ["Gill", "Brian", "Noel", "Maggie"]

//Driver Code
let combined = [[...west], [...east]];
console.log(combined);
console.log("");

// Soal No.5 - Template Literals
console.log("Soal No.5 - Template Literals");
console.log("");

let planet = "earth";
let view = "glass";

let before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;
 
console.log(before);