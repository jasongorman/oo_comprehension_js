const RestockLevel = require('./RestockLevel');
const AverageDailySales = require('./AverageDailySales');

const product = {id: 811, leadTime: 14};

const salesHistory = {withinDateRange: () => 45};

const restockLevel = new RestockLevel({fetchProduct: () => product}, new AverageDailySales(salesHistory));

console.log(restockLevel.calculate(811));