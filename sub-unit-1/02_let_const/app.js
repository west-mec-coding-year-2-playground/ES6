let LOG = console.log;



const pizza = [1,2,3];

console.log(pizza);


const pizza = [
    {
        name: "pep",
        number: 3,
        price: 5
    },
    {
        name: "mushroom",
        number: 3,
        price: 5
    },
    {
        name: "mango",
        number: 3,
        price: 5
    }
];




const [pep, mushroom] = pizza;

LOG(pep.name);