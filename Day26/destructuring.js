//Extract values from an array/object using destructuring.

//Array Destructuring
let colors = ["red", "green", "blue"];

// Destructuring
let [first, second, third] = colors;

console.log(first);
console.log(second); 
console.log(third); 

//Object Destructuring
let person = {
  name: "Saraswathi",
  age: 22,
  city: "Chennai"
};

// Destructuring
let { name, age, city } = person;

console.log(name); 
console.log(age);  
console.log(city); 