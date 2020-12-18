const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, position, github) {
    super(name, id, email, position);

    this.position = position

    this.github = github;
  }
  getGithub() {
    return {
      github: this.github,
    };
  }
  getPosition() {
    return {
      position: this.position,
    };
  }
}

module.exports = Engineer;
