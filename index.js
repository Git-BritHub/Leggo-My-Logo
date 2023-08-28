// packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Circle, Triangle, Square } = require("./lib/shapes");
const SVG = require("./lib/svg");

// array of logo related questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters of text for your logo: ",
    },
    {
        type: "input",
        name: "textColor",
        message: "What would you like the color of your text to be? (Enter color name or hexadecimal number)",
    },
    {
        type: "list",
        name: "shape",
        message: "What shape would you like your svg to be?",
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape to have? (Enter color name or hexadecimal number)",
    },
];

const initLogo = () => {
    inquirer.prompt(questions).then((data) => {
        let shape;
        if (data.shape === "Circle") {
            shape = new Circle()
        } else if (data.shape === "Triangle") {
            shape = new Triangle()
        } else if (data.shape === "Square") {
            shape = new Square()
        }
        shape.setColor(data.shapeColor)

        const svg = new SVG()
        svg.setShape(shape)
        svg.setText(data.text, data.textColor)
        return writeFile("logo.svg", svg.render())
    }).then(() => {
        console.log("Generated logo.svg!")
    })
        .catch((error) => {
            console.log(error)
            console.log("Something went wrong!")
        })
};

initLogo();