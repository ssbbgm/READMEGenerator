

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    let licenseBadge = '';
    switch(data) {
      case 'Apache':
      licenseBadge += `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
      break;
      case 'BSD-3 Clause':
      licenseBadge += `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
      break;
      case 'BSD-2 Clause':
      licenseBadge += `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
      break;
      case 'GNU General Public License (GPL)':
      licenseBadge += `![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;   
      case 'GNU Library or "Lesser" General Public License (LGPL)':
      licenseBadge += `![License](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
      break; 
      case 'MIT':
      licenseBadge += `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break; 
      case 'Mozilla Public License':
      licenseBadge += `![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
      break; 
      case 'Common Development and Distribution':
      licenseBadge += `![License](https://repology.org/badge/vertical-allrepos/cddl.svg)`;
      break; 
      case 'Eclipse':
      licenseBadge += `![License](https://repology.org/badge/vertical-allrepos/cddl.svg)`;
      break; 
      default:
      licenseBadge;
      break;
    }
    return licenseBadge;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseLink = '';
  switch(data) {
    case 'Apache':
    licenseLink += `(https://opensource.org/licenses/Apache-2.0)`;
    break;
    case 'BSD-3 Clause':
    licenseLink += `(https://opensource.org/licenses/BSD-3-Clause)`;
    break;
    case 'BSD-2 Clause':
    licenseLink += `(https://opensource.org/licenses/BSD-2-Clause)`;
    break;
    case 'GNU General Public License (GPL)':
    licenseLink += `(https://opensource.org/licenses/gpl-license)`;
    break;   
    case 'GNU Library or "Lesser" General Public License (LGPL)':
    licenseLink += `(https://opensource.org/licenses/lgpl-license)`;
    break; 
    case 'MIT':
    licenseLink += `(https://opensource.org/licenses/MIT)`;
    break; 
    case 'Mozilla Public License':
    licenseLink += `(https://opensource.org/licenses/MPL-2.0)`;
    break; 
    case 'Common Development and Distribution':
    licenseLink += `(https://opensource.org/licenses/CDDL-1.0)`;
    break; 
    case 'Eclipse':
    licenseLink += `(https://opensource.org/licenses/EPL-2.0)`;
    break; 
    default:
    licenseLink = 'No license in place';
    break;
  }
  return licenseLink;

}


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseBadge = renderLicenseBadge(data);
  let licenseLink = renderLicenseLink(data);
  let licenseRender = `## License
   ${licenseBadge}${licenseLink}
   `
  return licenseRender;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title} 

  ## Description
  ${data.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Visuals](#visuals)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Contact](#contact)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Visuals
  ![This is a screenshot/demo of the project.](Insert Picture or Link Info Here)

  ## Tests

  ${data.tests}

  ## Contributors

  ${data.contributors}

  ## Contact

  If you have any questions about this project please contact: ${data.contact}

  Github: [${data.github}](http://github.com/${data.github})

  Email: ${data.email}

  ${renderLicenseSection (data.license)}
`
}

module.exports = generateMarkdown;

