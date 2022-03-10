const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What project is this?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a name");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
