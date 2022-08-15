class RestockLevel {
    _warehouse;
    _averageDailySales;

    constructor(warehouse, averageDailySales) {
        this._warehouse = warehouse;
        this._averageDailySales = averageDailySales;
    }

    calculate(productId) {
        const product = this._warehouse.fetchProduct(productId);
        return Math.ceil(this._averageDailySales.forProduct(productId) * product.leadTime);
    }
}

module.exports = RestockLevel;