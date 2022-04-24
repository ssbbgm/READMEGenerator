const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the name of this project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Please provide a description for this project: ',
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: 'Describe the installation instructions of this project (if any): ',
        name: 'projectInstallation',
    },
    {
        type: 'input',
        message: 'What is the usage of this project?',
        name: 'projectUsage',
    },
    {
        type: 'list',
        message: 'Which license does this project fall under?',
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
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'projectContributors',
    },
    {
        type: 'input',
        message: 'Are there tests this project?',
        name: 'projectTests',
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'projectContributors',
    },
    {
        type: 'input',
        message: 'Who should be contacted if there are questions about the project?',
        name: 'projectQuestions',
    },
    {
        type: 'input',
        message: 'Please provide the GitHub username: ',
        name: 'projectGitHub',
    },
    {
        type: 'input',
        message: 'Please provide the main POCs email address: ',
        name: 'projectEmail',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
