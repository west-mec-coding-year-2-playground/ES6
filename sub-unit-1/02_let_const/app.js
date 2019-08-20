"use strict";

var a = "Test1";
var b = "Test2";

console.log(`Logged: ${a}`);


function testVar() {
    var a = 30;
    console.log(`Function Logged: ${a}`);

    if (true) {
        let a = 50;
        console.log(`Block Logged: ${a}`);
    }
    console.log(`D-Logged: ${a}`);
}
testVar();