import { Component } from './component';

export class Product extends Component {
    get template() {
        return `
            <div class="product card mb-3 text-center">
                <img class="product-image" src="XXX" />
                <div class="card-body">
                    <h5 class="card-title mb-0">XXX</h5>
                </div>
                <div class="card-footer">
                    <button class="btn btn-small btn-success">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }
}
