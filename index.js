// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: 'input',
        message: 'What is your github repository?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'What is your application title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is a detailed description of your application?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is your installation process?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How does one use your application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who is receiving credit for this application?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What is your application license?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'How to run the tests to your application?',
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
    console.log(response);
    const template = generateMarkdown(response)
    writeToFile('README.md', template);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then(handleResponse);
}

// Function call to initialize app
init();
