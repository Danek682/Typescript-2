import { Cart } from "../index"

test("Добавление товара в корзину", () => {
    const cart = new Cart();
    const bread = {
    id:1,
    name: "bread",
    price: 30,
}
    const result = cart.add(bread);
    expect(result).toBe(bread)
})

test("Подсчет суммы без скидки", () => {
    const cart = new Cart();
    const bread = {
    id:1,
    name: "bread",
    price: 30,
}
    cart.add(bread);
    const result = cart.sum();
    expect(result).toBe(30)
})

test("Подсчет суммы со скидкой", () => {
    const cart = new Cart();

const bread = {
    id:1,
    name: "bread",
    price: 30,
}

const crocs = {
    id:2,
    name: "crocs",
    price: 300,
    discount:30
}

cart.add(bread);
cart.add(crocs);

const result = cart.sumDiscount()
expect(result).toBe(240)
})

test("Удаление товара по ID", () => {
    const cart = new Cart();

const bread = {
    id:1,
    name: "bread",
    price: 30,
}

const crocs = {
    id:2,
    name: "crocs",
    price: 300,
    discount:30
}

const milk = {
    id:3,
    name: "milk",
    price: 70,
    discount:10
}

cart.add(bread);
cart.add(crocs);
cart.add(milk);

const result = cart.removeId(3)
expect(result).toEqual([bread,crocs])
})