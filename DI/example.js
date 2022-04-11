/**
 * Store Class
 */
var Store = /** @class */ (function () {
    function Store(name, profit) {
        this.name = name;
        this.profit = profit;
    }
    Store.prototype.getName = function () {
        return this.name;
    };
    Store.prototype.getProfit = function () {
        return this.profit;
    };
    return Store;
}());

/**
 * FashionProduct Class
 */
var FashionProduct = /** @class */ (function () {
    function FashionProduct(store, name, price) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    FashionProduct.prototype.sell = function () {
        console.log("".concat(this.name, " harganya adalah ").concat(this.store.getProfit() + this.price));
    };
    return FashionProduct;
}());

// create new store
var storeOne = new Store('Example Store', 190000);

// new fashion product
var fashionOne = new FashionProduct(storeOne, 'Shirt', 28000);
fashionOne.sell();
