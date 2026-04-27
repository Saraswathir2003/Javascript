//Write a function that accepts a callback.

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function bye() {
  console.log("Goodbye!");
}

greet("Saraswathi", bye);
