//Call an object method.

let person = {
  name: "Saraswathi",
  age: 23,
  method: function () {
    console.log("Hello, my name is " + this.name);
  },
};
person.method();