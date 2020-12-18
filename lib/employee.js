class Employee {
  constructor(name, id, email, position) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.position = position;
  }

  getName() {
    return {
      name: this.name,
    };
  }
  getId() {
    return {
      id: this.id,
    };
  }

  getEmail() {
    return {
      email: this.email,
    };
  }
  getPosition() {
    return {
      position: this.position,
    };
  }
}

module.exports = Employee;
