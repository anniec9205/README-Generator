// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');

const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{   type: "input",
    name: "username",
    message: "What is your Github user name?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
{   type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "description",
    message: "What is the description of your project"
},
{
    type: "input",
    name: "installation",
    message: "What is the installation instructions"
},
{
    type: "input",
    name: "usage",
    message: "What is the project usage"    
},
{
    type: "input",
    name: "licence",
    message: "What is the project licence"
},
{
    type: "input",
    name: "contributing",
    message: "Who are the contributing parties" 
},
{
    type: "input",
    name: "tests",
    message: "What are the the project tests"
},
]

// TODO: Create a function to write README file
inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            const githubInfo = {
                name: res.data.name,
                profile: res.data.html_url,email: res.data.email
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("Successfully created README file");
          });
        });
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
