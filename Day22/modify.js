//Access and modify object properties.
let object = {
  name: "Kavitha",
  age: 25,
};
//Access Properties
//Dot notation
console.log(object.name);
console.log(object.age);

//Bracket notation
console.log(object["name"]);
console.log(object["age"]);

//Modify Properties
//Change existing values
object.name = "Kavi";
object.age = "26";
console.log(object);

//Add Property
object.city = "Chennai";
console.log(object);

//Delete property
delete object.age;
console.log(object);