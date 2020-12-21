const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const generateUser = require("./src/generate-user");

promptUser = async (currentEmployees) => {
  if (currentEmployees === undefined) {
    currentEmployees = [];
  }
  const { name, id, email, position } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID? (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter your ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "position",
      message: "What is your current position? (Required)",
      choices: ["Intern", "Engineer", "Manager"],
      validate: (positionInput) => {
        if (positionInput) {
          return true;
        } else {
          console.log("Please enter your current position!");
          return false;
        }
      },
    },
  ]);
  this.employee = new Employee(name, id, email, position);
  if (this.employee.position === "Intern") {
    promptIntern(this.employee, currentEmployees);
  } else if (this.employee.position === "Engineer") {
    promptEngineer(this.employee, currentEmployees);
  } else if (this.employee.position === "Manager") {
    promptManager(this.employee, currentEmployees);
  }
};
promptIntern = async (employee, currentEmployees) => {
  const { school } = await inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "What is your school? (Required)",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter your school!");
          return false;
        }
      },
    },
  ]);
  this.intern = new Intern(
    employee.name,
    employee.id,
    employee.email,
    employee.position,
    school
  );
  addEmployee(this.intern, currentEmployees).then((data) => {
    if (data.addUser === true) {
      promptUser(currentEmployees);
      console.log(currentEmployees);
    } else {
      generateUser(currentEmployees);
    }
  });
};

promptEngineer = async (employee, currentEmployees) => {
  const { github } = await inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username? (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
  ]);
  this.engineer = new Engineer(
    employee.name,
    employee.id,
    employee.email,
    employee.position,
    github
  );
  addEmployee(this.engineer, currentEmployees).then((data) => {
    if (data.addUser === true) {
      promptUser(currentEmployees);
      console.log(currentEmployees);
    } else {
      generateUser(currentEmployees);
    }
  });
};

promptManager = async (employee, currentEmployees) => {
  const { office } = await inquirer.prompt([
    {
      type: "input",
      name: "office",
      message: "What is your office number? (Required)",
      validate: (officeInput) => {
        if (officeInput) {
          return true;
        } else {
          console.log("Please enter your office number!");
          return false;
        }
      },
    },
  ]);
  this.manager = new Manager(
    employee.name,
    employee.id,
    employee.email,
    employee.position,
    office
  );
  addEmployee(this.manager, currentEmployees).then((data) => {
    if (data.addUser === true) {
      promptUser(currentEmployees);
      console.log(currentEmployees);
    } else {
      generateUser(currentEmployees);
    }
  });
};

addEmployee = async (employee, currentEmployees) => {
  currentEmployees.push(employee);
  console.log(currentEmployees);
  return inquirer.prompt([
    {
      type: "confirm",
      name: "addUser",
      message: "Do you want to add another employee?",
      default: false,
    },
  ]);
};

promptUser();
