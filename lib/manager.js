const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, position, office) {
    super(name, id, email, position);

    this.position = position

    this.office = office;
  }
  getOffice() {
    return {
      office: this.office,
    };
  }
}

module.exports = Manager;