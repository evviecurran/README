  // TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();



const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ projectName, productDescription, github }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! ${projectName}</h1>
      <p class="lead">A description of my project ${productDescription}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projecName',
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
        type: 'checkbox',
        name: 'license',
        message: 'Enter license information for your project:',
        choices: [
            'Feature 1',
            'Feature 2',
            'Feature 3',
        ]
    }
  ])   
  
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('README', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });
