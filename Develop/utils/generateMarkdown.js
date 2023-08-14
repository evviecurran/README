// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// `};

// // function writeToFile(fileName, data) {
// //   fs.writeFile(fileName, data, (err) => {
// //       if (err) {
// //           console.log(err);
// //       } else {
// //           console.log('File saved successfully!');
// //       }
// //   });
// // }
 
// module.exports = generateMarkdown;

// ./Develop/utils/generateMarkdown.js

function generateMarkdown(answers) {
  // Create the Markdown content using the answers
  const markdown = `
# ${answers.projectName}

## Description
${answers.productDescription}

## Features
${answers.features}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Credits
${answers.credits}

## License
This project is licensed under the ${answers.license} License.

`;

  return markdown;
}

module.exports = generateMarkdown;
