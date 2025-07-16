export interface Buyable {
    id: number,
    name: string,
    price: number,
    discount?: number
}

export class Cart {
    private items: Buyable[] = [];
    add(item: Buyable) {
        this.items.push(item);
        return item
    }
    sum():number {
        return this.items.reduce((total, item) =>{
            return total + item.price
        },0)
    }
    sumDiscount(): number {
        return this.items.reduce((total, item) => {
            let discountedSum: number;
            if(item.discount !== undefined){
             discountedSum = item.price * (1 - item.discount/100 )
            }
             else {
                discountedSum = item.price
             }
             return total + discountedSum
        },0)
    }
    removeId(id:number): Buyable[] {
         this.items = this.items.filter(item => item.id !== id);
         return this.items
    }
}

