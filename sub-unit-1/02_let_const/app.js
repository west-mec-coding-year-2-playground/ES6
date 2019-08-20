"use strict";

var a = 'Test1';
var b = 'Test2';

console.log(`Logged: ${a}`);

function testVar() {
    var a = 30;

    if (true) {
        var a = 50;
        console.log()
    }
}