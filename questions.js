const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");

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
}

promptUser();
