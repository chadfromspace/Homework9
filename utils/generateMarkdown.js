//Generate Markdown formatted README file.
function generateMarkdown(data) {
  return `# ${data.projectname}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  ${data.installation} is used to install dependencies.

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Have a question? Email me directly at ${data.email}.
  Check out my other projects at [${data.username}](https://github.com/${data.projectname}).`;
}
//Export function for us with index.js.
module.exports = generateMarkdown;