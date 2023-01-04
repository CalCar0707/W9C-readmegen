// TODO: Include packages needed for this application
const inquirer = require('inquirer');

//fs is for reading and writing files
const fs = require('fs');


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
        name: 'installation',
        message: 'Please provide the installation instructions for your project:',
    
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add any additional usage information for the user:',
        
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
    //{
      //  type: 'checkbox',
       // name: 'license',
        //message: 'Please choose a license for your project:',
        //choices: [  INSERT LICENSE CHOICES
          //  '',
            //'',
            //''
        //]
    //}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();