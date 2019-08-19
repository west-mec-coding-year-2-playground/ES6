var a = 'test1';
let b = 'test2';

const testVar = () => {
    var a = 30;
    if (true) {
        let a = 50;
        console.log(a)
    }
    console.log(a)
}

console.log(a)

testVar();