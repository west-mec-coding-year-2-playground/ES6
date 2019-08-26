const pizza = [{
        name: "pep",
        number: 3,
        price: 5

    },
    {
        name: "Mushroom",
        number: 3,
        price: 5
    },
    {
        name: "mango",
        number: 3,
        price: 5
    }
];
// console.log(pizza[0].name);

const [pep, mushroom, mango] = pizza;
// console.log(pep.price);

var pizzaObj = {
    pepp: "monday",
    array: [
        1, 2, 3
    ],
    funFunction: function (name) {
        console.log(`I'm ${name}'s function `);
    }
}

// console.log(pizzaObj["array"]);
// pizzaObj.funFunction();

const {
    peppStr,
    arrayArr,
    funFunction
} = pizzaObj;

funFunction("Me");

var dogType = "pug";
var dog = {
    [dogType + 'Bark']() {
        console.log("I'm a Pug!")
    }
}
const {
    pugBark
} = dog;
pugBark();

const dogManifesto =
    `I am a dog.
I bark.
I chase.
I scratch.`;