# Need A READme?

## Description
Need A READme is an application offering the ability to generate a READme.md file for the user. Need A READme is made to help make the lives of creators signifcantly easier by generating a high-quality READme.md file for them. All they have to do is answer a few questions!


## Installation
Inquirer was already installed in the creation of this project, so users will only need to ensure they have Node installed in order to run this application.

## Usage
Upon opening the application, the user will be asked a variety of questions to better understand what to include in the user's personalized READme.md file. Users will be able to respond to these questions with a series of messages they can type in themselves in addition to a list of licenses the user can choose from. For example, the application will ask a questions such as "What is your application title?" The user can type a message into a corresponding box and the response will be logged and returned in Node through the JavaScript file.

Additionally, when the user is asked to choose a license for their project, they will be shown a list of items which they can navigate using their up arrow key and their down arrow key. They will select the particular license, or lackthereof, by pressing their "enter" or "return" key, thereby logging and returning their response in Node. These questions work through inputs and lists that run by the inquirer package in JavaScript.

When users have finished responding to the questions in the application, this project will then do a few things to return not only the answers, but also a fully fleshed out READme.md file! The index.js file and the generateMarkdown.js file will be communicating through functions and conditionals to take in user responses, write a READme.md file, initialize the application, and call the data from user input.

For example, the generateMarkdown.js file will utilize three conditionals based on user input to return a license badge, section, and link- or none of the above. If the user chooses MIT in the list of items offered through the license section of the questionnaire, the functions will return the corresponding license link, badge, and section, similar to what is viewed in this READme.md file below. Then, this generateMarkdown.js file will utilize a function that links the user responses to return the data from the index.js file in an easy-to-view format. This information will be passed through the dist folder, where users will find a personalized READme.md file at which, users can right click on the file and 'open preview' to view their READme.md file!

If engagement with this project proves successful, users will have a READme.md file with the following information:

1. The project title

2. A functioning Table of Contents section that, upon clicking a section of the READme.md, will take the user to the corresponding location.

3. A detailed Description section, illustrating the 

4. An Installation section with any necessary packages or features future users will need in order to install or use the project.

5. A Usage section detailing how users can utilize their project.

6. A Contributing section discussing contributors to the project.

7. A License section providing details and a viewable badge to protect the intellectual property of the software.

8. A Tests section discussing any tests that were required to run the application with examples.

9. A section providing information about the creator of the project, so that future users can reach out with any questions.

## Contributors
Dana Welsh

## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tests
N/A

## Questions?
For any questions, please contact me!

GitHub: https://github.com/danawelsh

Deployed Repo: https://danawelsh.github.io/need-a-readme/

Email: danawelsh17@yahoo.com