const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

function getInfo(){
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the name of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description for this project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Describe the installation instructions of this project (if any): ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage of this project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license does this project fall under?',
        choices: [
            'Apache',
            'BSD-3 Clause',
            'BSD-2 Clause',
            'GNU General Public License (GPL)',
            'GNU Library or "Lesser" General Public License (LGPL)',
            'MIT',
            'Mozilla Public License',
            'Common Development and Distribution',
            'Eclipse',
            'None'
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Are there tests for this project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Who should be contacted if there are questions about the project?',
        name: 'contact',
    },
    {
        type: 'input',
        message: 'Please provide the GitHub username (without the @): ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please provide the main POCs email address: ',
        name: 'email',
    }
  ]);
};
  
