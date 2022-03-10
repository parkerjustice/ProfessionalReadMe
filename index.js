const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    // Project name
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
    // Description of project
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
    // Installation Instructions
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
    // Usage Information
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
    // Contribution Guidlines
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
    // Test Instructions 
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
    // License Options
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
    // Github Username
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
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Please include your contact',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
