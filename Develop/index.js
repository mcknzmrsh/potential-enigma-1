const inquirer = require("inquirer");
const fs = require ('fs');
const genterateMarkdown = require('./utils/generateMarkdown');


const questions = [
        {
        type: "input",
        message: "What is the title of this project?",
        name: "project",
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue');
                return false;
            }
            
        }
       
        
    },

        type, "input",
        message, "Why did you build this project?",
        name, "build",
        validate, buildInput => {
          if (buildInput) {
        return true;
          } else {
            console.log('Why did you build this project?');
            return false;

          }
        },
    
    {
        type: "input",
        message:"What problem  does this solve?",
        name: "problem",
        validate: problemInput => {
         if (problemInput) {
            return true;
         } else {
            console.log('What problem does this solve?');
            return false;
         }
         }
        },

    {
        type: "input",
        message: "What did you learn?",
        name: "learn",
        validate: learnInput => {
        if (learnInput) {
            return true;
        } else {
            console.log("What did you learn?")
            return false;
        }
    }
        },
        
        type, "input",
        message, "How can you install this application?",
        name, "install",
        validate, installInput => {
        if (installInput) {
            return true;
        } else {
            console.log('How can you install this application?');
            return false;
        }
        },
        
        type,"input",
        message, "List all contributors",
        name, "contribitors",
        validate, contributorsInput => {
        if (contributorsInput) {
            return true;
        } else {
            console.log('List all contributors');
            return false;
        }

        },
        
        
        type, "input",
        message, "Add your github so others can ask questions",
        name, "github",
        validate, githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Enter your github to continue');
        }
        },
        
        type, "input",
        message, "Choose a license",
        name, "license",
        validate, licenseImput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Choose a license for the README');
        }
    
        }
        ] 
        
        function writeToFile(fileName, data)  
        fs.writeFile('fileName', data, (err)),
        error => {
            if (err) {
                throw err;
                console.log('Please input all data')
            }
            console.log('Your README was generated')
        },
    
    
    function init() {
        inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md" , generateMarkdown(userInput));

        });
    };
    init(); 