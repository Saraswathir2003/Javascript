//Write a function that accepts a callback.

function addition(a,b,Subtract){
    let result= a + b;
    Subtract(result)
}
function Subtract(result){
    console.log(result-2);
}

addition(5,7,Subtract);

function name(name,callback){
    console.log("My name is : " + name);
    callback();
}
function world(callback){
    console.log("Welcome hello to  world");
}
name("Saraswathi",world);