import { Component } from './component';
import { Product } from './product';

export class Cart extends Component {
    constructor() {
        super();
        this.list = [];
    }

    get template() {
        return `
            <div class="cart">
                <button class="btn btn-primary">
                    Cart (${this.list.length})
                </button>
            </div>
        `;
    }

    addProduct(product) {
        const ENDING_WITH_ER = /er$/;

        return new Promise((resolve, reject) => {
            if (product instanceof Product) {
                if (product.model && ENDING_WITH_ER.test(product.model.name)) {
                    reject(this.list.length);
                    return;
                }
                //update model
                this.list.push(product);
                // udpate UI
                this.update();
                resolve(this.list.length);
            } else {
                reject(this.list.length);
            }
        });
    }

    // async addProduct(product) {
    //     return new Promise((resolve, reject) => {
    //         if (product instanceof Product) {
    //             this.list.push(product);
    //             return this.list.length;
    //         } else {
    //             throw new Error(String(this.list.length));
    //         }
    //     });
    // }
}
