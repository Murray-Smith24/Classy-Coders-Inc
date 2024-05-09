const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees{
#programmingLanguages = [];    
    constructor(name, title, salary, languages) {
        super(name, title, salary)
        this.languages = languages;
        this.#programmingLanguages = languages;
    }

    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }

    setProgrammingLanguages(language) {
        this.#programmingLanguages.push(language);
    }
}

module.exports = {
    SoftwareEngineer,
}