//Global Scope ,Local Scope
let globalVar = "Hello World";

function display() {
  let localVar = "Welcome to My World";

  console.log(globalVar);
  console.log(localVar);  
}

display();
console.log(globalVar); 
