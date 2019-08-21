"use script";
var a = 'Test1';
var b = 'Test2';
console.log(`Logged: ${a}`);
const testVar = (params) => {
   let a = 30;
   console.log(`Function Logged: ${a}`);
   if(true) {
       var a = 50;
       console.log(`Block Logged: ${a}`);
   }
   console.log("here: "+a);
}
testVar();
console.log(`END Logged: ${a}`);
Collapse