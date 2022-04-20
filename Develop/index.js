// ************ Pseudocode for hw ************ //
const inquirer = require('inquirer');

// TODO: Include packages needed for this application

// STEPS
// 1. User answers questions.
// --> inquirer prompt
// 2. Pass answers in the .then() [[[where the answers are available]]].
// --> import generateMarkdown
// 3. Hand off to generateMarkdown to create markdown syntax.
// Pass markdwon to writetofile.

// TODO: Create an array of questions for user input


const questions = [];


// ^^^ Creating an array of questions for user input! ^^^

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    // use fs.writefile here
    // How do I use the markdown file here???    <<< RESEARCH vvv
    // --> Maybe a rest operator?
    // --> import markdown functions?
    // LINK TO SOURCE: 
    // How to send answers from users into markdown functions???
    // 
}

// TODO: Create a function to initialize app
function init() {
    // Write inquirer prompt here
    // Call "writetofile" inside .then()
    // "How to send answers from users into markdown functions?"
    // Pass answers to writetofile here.
}

// vvv Function call to initialize app. vvv

init();
