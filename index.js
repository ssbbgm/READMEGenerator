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
      }
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
