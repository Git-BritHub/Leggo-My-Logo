// packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Circle, Triangle, Square } = require("./lib/shapes");
const svg = require("./lib/svg");

// array of logo related questions for user input
const questions = [
    {
        type: "input",
        name: "logoText",
        message: "Enter up to three characters of text for your logo: ",
    },
    {
        type: "input",
        name: "textColor",
        message: "What would you like the color of your text to be? (Enter color name or hexadecimal number)",
    },
    {
        type: "input",
        name: "shape",
        message: "What shape would you like your color to be?",
        choices: ["circle", "triangle", "square"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape to have? (Enter color name or hexadecimal number)",
    }, 
];

const initLogo = () => {
    inquirer.prompt(questions).then((data) => {
        writeFile("logo.svg", { Circle, Triangle, Square }, svg(data))
    });
};

initLogo();