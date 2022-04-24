const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Please provide a description for your project: ',
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: 'Describe the installation instructions of your project (if any): ',
        name: 'projectInstallation',
    },
    {
        type: 'input',
        message: 'What is the usage of your project?',
        name: 'projectUsage',
    },
    {
        type: 'list',
        message: 'Which license does your project fall under?',
        choices: [
            'Apache',
            'Academic',
            'BSD-3 Clause',
            'BSD-2 Clause',
            'GNU General Public License (GPL)',
            'GNU Library or "Lesser" General Public License (LGPL)',
            'MIT',
            'Mozilla Public License',
            'Common Development and Distribution',
            'Eclipse'
        ],
        name: 'projectLicense',
    }
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
