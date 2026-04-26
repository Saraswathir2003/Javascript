//Show synchronous vs asynchronous execution.

//Synchronous Example- It waits for each line to finish.

console.log("Hello World");
console.log("Welcome to Hello world");
console.log("Thank You");

//Asynchronous Example (setTimeout)-This task happens later.

console.log("Food ordered");

setTimeout(() => {
  console.log("Food delivered");
}, 3000);//3000 milliseconds=3seconds

console.log("Watching TV");