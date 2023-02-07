// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license === 'ISC') {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  else if (license === 'Mozilla') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  else {
    return ''}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "[MIT](https://opensource.org/licenses/MIT)"
  }
  else if (license === 'ISC') {
    return "[ISC](https://opensource.org/licenses/ISC)"
  }
  else if (license === 'Mozilla') {
    return "[Mozilla](https://opensource.org/licenses/MPL-2.0)"
  }
  else {
    return ''}

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  }
  else if (license === 'ISC') {
    return "Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies."
  }
  else if (license === 'Mozilla') {
    return "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
  }
  else {
    return ''}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

# Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [License](#License)
* [Tests](#Tests)
* [Questions](#Questions)
  
  ## Description
  *What is my application? Why was it created?*
    ${data.description}

  ## Installation
  *How to install my project:*
    ${data.installation}

  ## Usage
  *Instructions on how to use my application:*
    ${data.usage}

  ## Contributing
    ${data.contributing}
  
  ## License
    ${data.license}
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
    ${renderLicenseSection(data.license)}
  
  ## Tests
  *Tests for my application:*
    ${data.tests}

  ## Questions?
  *For any questions, please contact me!*
   ${data.github}
   ${data.email}
`;
}

module.exports = generateMarkdown;
