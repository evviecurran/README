// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown= require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'productDescription',
      message: 'Enter a description of your project',
    },
    {
     
      type: 'input',
      name: 'features',
      message: 'Add in your project features:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions for your project:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing guidelines for your project:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter credits for your project:'
    },
      {
        type: 'list',
        message: 'What license did you use?',
        choices: 
        [
            'MIT', 
            'Apache license 2.0', 
            'ISC License (ISC)', 
            'GNU GPL v3', 
            'None'
        ],
        name: 'license',
    },
  ];

  
  inquirer.prompt(questions)
  .then((answers) => {
      const readmeContent = generateMarkdown(answers);

      fs.writeFile('README.md', readmeContent, (err) =>
          err ? console.log(err) : console.log('Generating your high quality readMe!')
      )
  });
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
