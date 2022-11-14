const { default: inquirer } = require("inquirer");
const fs = require ('fs');
const genterateMarkdown = require('./utils/generateMarkdown');
const { validateHeaderName } = require("http");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
inquirer 
    .prompt([
        {
        type: "input",
        message: "What is the title of this project?",
        name: "why"

        },
        {
        type: "input",
        message: "Why did you build this project?",
        name: "why"

        },
        {
        type: "input",
        message:"What problem  does this solve?",
        name: "problem"
        },

        {
        type: "input",
        message: "What did you learn?",
        name: "learn"
        },
        {
        type: "input",
        message: "How can you install this application?",
        name: "install"
        },
        {
        type:"input",
        message: "List all contributors",
        name: "contribitors"
        }
        {
        type: "input",
        message: "Add your github so others can ask questions",
        name: "github"
        },
        {
        type: "input",
        message: "Choose a license",
        name: "license",
    
        }
    ])
// Project Name

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
