// license links can be found here
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      name: "title",
      message: "What is the title of your project?",
      type: "input",
    },
    {
      name: "description",
      message: "Enter a description of your project",
      type: "input",
    },
    {
      name: "toc",
      message: "Enter your table of conents - separated by commas",
      type: "input",
    },
    {
      name: "installation",
      message: "Enter your installation instructions here",
      type: "input",
    },
    {
      name: "usage",
      message: "Enter usage instructions here",
      type: "input",
    },
    {
      name: "contributing",
      message: "Enter contributions section here",
      type: "input",
    },
    {
      name: "tests",
      message: "Enter tests section here",
      type: "input",
    },
    {
      name: "license",
      message: "Pick a license!",
      type: "list",
      choices: ["Apache 2.0", "MIT", "GNU Gpl 3"],
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers) {
      let template = "";
      if (answers.title) {
        template += `# ${answers.title} \n\n`;
        if (answers.license === "Apache 2.0") {
          console.log(answers.license);
          template += `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`;
        } else if (answers.license === "MIT") {
          1;
          template += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`;
        } else {
          template += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n`;
        }
      }
      if (answers.description) {
        template += `## Description  \n`;
        template += `${answers.description} \n\n`;
      }

      if (answers.toc) {
        template += `## Table Of Contents \n\n`;
        answers.toc.split(",").forEach((answer, index) => {
          template += `${index + 1}. ${answer}\n`;
        });
        template += `\n\n`;
      }
      if (answers.installation) {
        template += `## Installation \n\n`;
        template += `${answers.installation}\n\n`;
      }
      if (answers.usage) {
        template += `## Usage \n\n`;
        template += `${answers.usage}\n\n`;
      }
      if (answers.contributing) {
        template += `## Contributing \n\n`;
        template += `${answers.contributing}\n\n`;
      }
      if (answers.tests) {
        template += `## Tests \n\n`;
        template += `${answers.tests}\n\n`;
      }
      fs.writeFile("README.md", template, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("wrote file");
        }
      });
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });