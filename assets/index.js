// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const generateMarkdown = require("./generateMarkdown")

const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the name of your GitHub repo?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'What is your application title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a detailed description of your application, including what a user should expect to see and buttons or items they can utilize.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'If applicable, provide instructions on how to install your application.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples of your application in use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'If applicable, provide information about any and all contributors to the application.',
        name: 'contributors',
    },
    {
        type: 'list',
        message: 'What is your application license?',
        name: 'license',
        choices: ['MIT', 'ISC', 'Mozilla', 'None']
    },
    {
        type: 'input',
        message: 'If applicable, provide a list of tests written for your application with examples.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

const handleResponse = (response) => {
    const template = generateMarkdown(response)
    console.log(template);
    writeToFile('./assets/README.md', template);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Success! Your README.md file has been generated!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then(handleResponse)
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();