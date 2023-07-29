const fs = require('fs');
const inquirer = require('inquirer');
const validateColor = require('validate-color').default;
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

// This function makes the SVG code that will be used to write the file
function generateSVG(data) {
    const text = data.text;
    const textColor = data.color;
    const shapeColor = data.shapeColor;
    if(data.shape === 'Circle') { // Makes the new class based on the chosen shape
        var shape = new Circle();
    } else if(data.shape === 'Triangle') {
        var shape = new Triangle();
    } else {
        var shape = new Square();
    }
    shape.changeColor(shapeColor); // Changes the color before it's rendered

    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    ${shape.render()}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  
  </svg>`
}

// Function that will begin the prompts for the user
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter a 3 character text: ',
            validate: function (text){ //Checks if the input is under three characters or not
                if(text.length < 4){
                    return true;
                } else {
                    return "Error: Text must only contain up to 3 characters."
                }
            }
        },
        {
            type: 'input',
            name: 'color', 
            message: 'Enter a text color(hex or keyword): ',
            validate: function (color){
                if(validateColor(color)){ // Uses the Validate-Color package to check if it is a valid HTML color
                    return true;
                } else {
                    return 'Error: Color must be a valid hex code or keyword';
                }
            }
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose the shape of you logo: ',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a shape color(hex or keyword): ',
            validate: function (color){
                if(validateColor(color)){
                    return true;
                } else {
                    return 'Error: Color must be a valid hex code or keyword';
                }
            }
        }
    ])
    .then((response) => {
        console.log(response);
        const fileContent = generateSVG(response);
        fs.writeFile('./examples/logo.svg', fileContent, (err) => {
            err ? console.error(err) : console.log("Generated logo.svg")
        })
    });
}

init()
