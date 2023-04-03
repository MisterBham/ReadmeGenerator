// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (input) => {
            if(input == "") {
                return console.log("Cannot proceed with a blank title, this is a required field.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: ' What is a good description of your project?',
        validate: (input) => {
            if(input == "") {
                return console.log("Cannot proceed with a blank description, this is a required field.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Provide the proper installation instructions',
        validate: (input) => {
            if(input == "") {
                return console.log("Cannot proceed with blank installation instructions, this is a required field.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can this project be used? Provide some usage details/examples...',
        validate: (input) => {
            if(input == "") {
                return console.log("Cannot proceed with blank usage details, this is a required field.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license appropriate for your project:',
        choices: ['Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','GNU Affero General Public License v3.0','GNU General Public License v2.0','GNU Lesser General Public License v2.1','Mozilla Public License 2.0','The Unlicense']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Describe how to contribute to your project',
        validate: (input) => {
            if(input == "") {
                return console.log("Cannot proceed with blank contribution details, this is a required field.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Explain how can your project be adequately tested?',
        validate: (input) => {
            if(input == "") {
                return console.log("Cannot proceed with blank testing details, this is a required field.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUn',
        message: 'Provide your GitHub username',
        validate: (input) => {
            if(input == "") {
                return console.log("Cannot proceed without providing your GitHub username, this is a required field.")
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'Provide your email address',
        validate: (input) => {
            if(input == "") {
                return console.log("Cannot proceed without providing your email, this is a required field.")
            } else {
                return true;
            }
        }
    },
    ]

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('createdReadMe/README.md', data, (err) => err ? console.log(err) : console.log('Your README was successfully created! You can find it in the createdReadMe folder.'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
