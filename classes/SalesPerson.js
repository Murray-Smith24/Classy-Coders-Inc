const { Employees } = require("./Employees");

class SalesPerson extends Employees{
#totalSales = 0;
    constructor(name, title, salary, clients) {
        super(name, title, salary)
        this.clients = []
    }
    getSalesNumber() {
        return this.#totalSales
    }
    makeSale(amount) {
        this.#totalSales += amount;
    }
    
}

module.exports = {
    SalesPerson,
}