//Create a promise that resolves or rejects.

function addition(){
    return new Promise((resolve)=>{
        let a=3,
        b=5;
        resolve(a+b);
    })
}
addition() 
.then((value)=>{
    console.log(value*3);
})
