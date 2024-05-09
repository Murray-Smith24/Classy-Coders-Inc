class Employees {
#salary;
#isHired = true;
static #allEmployees = [];
constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.#salary = salary;
    Employees.#allEmployees.push(this);
}

static getEmployees() {
    return this.#allEmployees;
}
static getTotalPayroll() {
    let sum = 0;
        for(let i = 0; i < this.#allEmployees.length; i++) {
            let temp = this.#allEmployees[i].getSalary();
                sum += temp;
    }
    return sum;
}


getSalary() {
    return this.#salary;
}
setSalary(amount) {
    this.#salary = amount;
}

getStatus() {
    return this.#isHired;
}
setStatus(command) {
    if(command == "hire") {
        this.#isHired = true;
    } else if(command == "fire") {
        this.#isHired = false;
    }
}

    
}

module.exports = {
    Employees,
}