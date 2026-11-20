const fs= require("fs");
console.log("1. Application started.");

//Synchronous execution
function greet(){
    console.log("2.Hello Developer");
};
greet();

//Asynchronous execution
fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("6. File Content",data);
});

// Timer
setTimeout(() => {
    console.log("5. Timer executed");
}, 0);

// Promise microtask
Promise.resolve().then(() => {
    console.log("4. Promise executed");
});

console.log("3. Application finished");