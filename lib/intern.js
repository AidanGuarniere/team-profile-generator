const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, position, school) {
    super(name, id, email, position);

    this.position = position

    this.school = school;
  }
  getSchool() {
    return {
      school: this.school,
    };
  }
}

module.exports = Intern;