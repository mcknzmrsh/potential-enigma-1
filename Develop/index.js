const { default: inquirer } = require("inquirer");
const fs = require ('fs');
const genterateMarkdown = require('./utils/generateMarkdown');
const { validateHeaderName } = require("http");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
inquirer 
    .prompt([
        {
        type: "input",
        message: "What is the title of this project?",
        name: "project"
    
    
        },
        {
        type: "input",
        message: "Why did you build this project?",
        name: "build"
          
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
        },
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
     )then (data)  {
        console.log(data);
        fs.writeFile('README.md', generateMarkdown(data)),
        error => {
            if (error) {
                console.log('Please input all data')
            }
            console.log('Your README was generated')
        }
    }
    function init() {
        inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md" , generateMarkdown(userInput));

        });
    };
    init();