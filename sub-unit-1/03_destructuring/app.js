let LOG = console.log;

// const pizza = [1,2,3];

// LOG(pizza);

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

// LOG(pizza[1]);

const [pep, mushroom] = pizza;

LOG(mushroom.number);