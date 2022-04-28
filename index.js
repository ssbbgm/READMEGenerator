const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the name of this project?',
        name: 'title',
        validate: function (data) {
            if (data.length < 1) {
                return console.log("A valid name for the project is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please provide a description for this project: ',
        name: 'description',
        validate: function (data) {
            if (data.length < 1) {
                return console.log("A valid description for the project is required.");
            }
            return true;
        }
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
        validate: function (data) {
            if (data.length < 1) {
                return console.log("A valid usage for the project is required.");
            }
            return true;
        }
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
        validate: function (data) {
            if (data.length < 1) {
                return console.log("Please add contributor(s).");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Who should be contacted if there are questions about the project?',
        name: 'contact',
        validate: function (data) {
            if (data.length < 1) {
                return console.log("Please add content.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please provide the GitHub username (without the @): ',
        name: 'github',
        validate: function (data) {
            if (data.length < 1) {
                return console.log("Please add your Github information.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please provide the main POCs email address: ',
        name: 'email',
        validate: function (data) {
            if (data.length < 1) {
                return console.log("Please add an email address.");
            }
            return true;
        }
    }
  ])
  .then((data) => {
    fs.writeFileSync(`${data.title}.md`, generateMarkdown(data))
    // .then(() => console.log('Successfully wrote to README'))
    // .catch((err) => console.error(err))
   });

// const init = () => {
//     getInfo()
//       .then((data) => fs.writeFileSync('${data.title}.md', generateMarkdown(data))
//       .then(() => console.log('Successfully wrote to README'))
//       .catch((err) => console.error(err)))
// };

// init();
  
  
  
