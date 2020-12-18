const inquirer = require("inquirer");
const Employee = require("./lib/employee");
promptUser = async () => {
  const { name, id, email, position } = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name? (Required)",
            // check that user has answered
            validate: (nameInput_1) => {
                if (nameInput_1) {
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
            validate: (idInput_1) => {
                if (idInput_1) {
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
            validate: (emailInput_1) => {
                if (emailInput_1) {
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
            validate: (positionInput_1) => {
                if (positionInput_1) {
                    return true;
                } else {
                    console.log("Please enter your current position!");
                    return false;
                }
            },
        },
    ]);
    this.employee = new Employee(name, id, email, position);
    console.log(this.employee);
};

promptUser();
