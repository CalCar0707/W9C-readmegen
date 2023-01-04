// TODO: Include packages needed for this application
const inquirer = require('inquirer');

//fs is for reading and writing files
const fs = require('fs');

//link to js file
const generate = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?', 
    
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a project description.',
    
    },
    {
        type: 'input',
        name: 'table',
        message: 'Please provide a Table of Contents.'
    },
    { 
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions for your project:',
    
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add any additional usage information for the user:',
        
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: [ 
            'Apache License 2.0', 
            'MIT License',
            'Mozilla Public License 2.0',
            'The Unilicense',
        ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Add any additional contributors to your project:',
        
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide test insructions:',
    
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please  provide your GitHub username for questions:',
    },
    {
        type: 'email',
        name: 'email',
        message: 'Please provide your email address',
    }
    
];

// TODO: Create a function to write README file
function writeToFile(README, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//prompts user to answer questions
inquirer.prompt(questions)
.then((data) => {
    fs.writeFile('ReadME.md', JSON.stringify(data), (error) => {
    return error
    ? console.error(error)
    : console.log('File written sucessfully!');
    }
    )}
);
// response.confirm  reponse.title, reponse.testing and on and on)