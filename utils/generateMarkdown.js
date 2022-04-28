// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ## Description
  ${data.description}

  ##Table of Contents

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##Visuals
  ![This is a screenshot/demo of the project.](Insert Picture Link Info Here)

  ##License
  ${data.license}

  ##Tests

  ${data.tests}

  ##Contributors

  ${data.contributors}

  ##Contact

  If you have any questions about this project please contact: ${data.contact}

  Github: ${data.github}

  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
