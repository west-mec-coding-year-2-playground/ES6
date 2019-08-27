"use script";
var a='test1'
var b='test2'

console.log(`Logged: ${a}`);

const testVar = (params) => {
    let a = 30;
    console.log(`Function logged: ${a}`);
    if(true){
        var a = 50;
        console.log(`Block logged: ${a}`);
    }
    console.log("Here:"+a);
}

testVar();
console.log(`END logged: ${a}`);