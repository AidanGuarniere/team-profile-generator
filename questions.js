const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
promptUser = async () => {
  const { name, id, email, position } = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name? (Required)",
            // check that user has answered
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
            // check that user has answered
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
            // check that user has answered
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
            choices: [
                "Intern",
                "Engineer",
                "Manager",
            ],
            // check that user has answered
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
    this.employee.getPosition()
    if(this.employee.getPosition == {"position": "Intern"}){
        promptIntern()
    } else if (this.employee.getPosition == {"position": "Engineer"}){
        promptEngineer()
    } else if (this.employee.getPosition == {"position": "Manager"}) {
        promptManager()
    }
};
promptIntern = async () => {
    const { name, id, email, position, school } = await inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What is your school? (Required)",
            // check that user has answered
            validate: (schoolInput) => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter your school!");
                    return false;
                }
            },
        },
    ])
    this.intern = new Intern(name, id, email, position, school)
}

promptEngineer = async () => {
    const { name, id, email, position, github } = await inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username? (Required)",
            // check that user has answered
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            },
        },
    ])
    this.engineer = new Engineer(name, id, email, position, github)
}

promptManager = async () => {
    const { name, id, email, position, school } = await inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What is your school? (Required)",
            // check that user has answered
            validate: (schoolInput) => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter your school!");
                    return false;
                }
            },
        },
    ])
    this.intern = new Intern(name, id, email, position, school)
}

promptUser();
