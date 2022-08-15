class AverageDailySales {
    _salesHistory;

    constructor(salesHistory) {
        this._salesHistory = salesHistory;
    }

    forProduct(productId){
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 30);
        return this._salesHistory.withinDateRange(productId, startDate, endDate)/30.0;
    }
}

module.exports = AverageDailySales;