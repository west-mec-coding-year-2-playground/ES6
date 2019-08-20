"use strict";

var a = 'Test1';
var b = 'Test2';

console.log('logged: ${a}');

function testVar(){
var a = 30;
console.log(`Function Logged: ${a}`);

if(true){
    let a = 50;
    console.log(`Blocked Logged: ${a}`);
}
console.log("he`e:" + a);
}

testVar();
console.log(`_END Logged: ${a}`);


