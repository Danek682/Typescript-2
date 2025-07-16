"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const cart = new index_1.Cart();
const bread = {
    id: 1,
    name: "bread",
    price: 30,
};
const crocs = {
    id: 2,
    name: "crocs",
    price: 300,
    discount: 30
};
const milk = {
    id: 3,
    name: "milk",
    price: 70,
    discount: 10
};
cart.add(bread);
cart.add(crocs);
cart.add(milk);
cart.removeId(3);
console.log("Сумма: " + cart.sum());
console.log("Сумма со скидкой: " + cart.sumDiscount());
