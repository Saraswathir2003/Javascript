//Write concise arrow functions.
// Traditional
function addition(y, z) {
  return y + z;
}
console.log(addition(5,5))

// Arrow function (concise)
let add = (a, b) => a + b;
console.log(add(2,3));

// Single parameter (no parentheses needed)
const square = (x) =>  x * x;
console.log(square(2));


let greet = (name, age) => "Name: " + name + ", Age: " + age;
console.log(greet("Saraswathi", 21));
