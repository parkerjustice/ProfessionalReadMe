const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js")

const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a project name');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please explain');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Explain');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'How should people add onto this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on this assignment');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'testing',
        message: 'This project will be tested how?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Explain');
                return false;
            }
        }
    },

    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license',
        choices: ['Apache', 'MIT', 'MP', 'GP', 'CDistribution',],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Pick your license');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter your github user');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please include your contact',
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};


init();
