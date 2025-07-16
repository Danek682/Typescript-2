"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    sum() {
        return this.items.reduce((total, item) => {
            return total + item.price;
        }, 0);
    }
    sumDiscount() {
        return this.items.reduce((total, item) => {
            let discountedSum;
            if (item.discount !== undefined) {
                discountedSum = item.price * (1 - item.discount / 100);
            }
            else {
                discountedSum = item.price;
            }
            return total + discountedSum;
        }, 0);
    }
    removeId(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
}
exports.Cart = Cart;
