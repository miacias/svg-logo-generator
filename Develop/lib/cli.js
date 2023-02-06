const inquirer = require("inquirer");
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSvg } = require('./create-svg.js');
// const Triangle = require("./triangle.js");
// const Circle = require("./circle.js");
// const Square = require("./square.js");



class CLI {
    constructor(fileName, designs) {
        this.fileName = fileName;
        this.designs = []; // will carry array of objects
    }

    run() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "fileName",
                    message: "Please give a name for your file."
                },
                {
                    type: "input",
                    name: "textChars",
                    message: "What letter(s) or character(s) would you like to represent in your logo? (Maximum: 3)",
                    // user can enter up to 3 characters
                    validate(chars) {
                        if (chars.length <= 3) {
                            return true
                        }
                        return "Max length exceeded. Please provide 1, 2, or 3 total characters."
                    }
                },
                {
                    type: "list",
                    name: "shape",
                    message: "Please select a shape.",
                    choices: [
                        "circle",
                        "triangle",
                        "square"
                    ]
                },
                {
                    type: "input",
                    name: "textColor",
                    message: "Which TEXT color would you like to use? (Hint: Type in a color by name OR a hexadecimal starting with #)",
                    default: "white",
                    validate: function (response) {
                        // checks color hexadecimals (https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format)
                        if (response.includes("#")) {
                            const pass = response.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
                            if (pass === null) {
                                return "Please enter a valid hexadecimal color."
                            } else { 
                                return true;
                            }
                        }
                        // checks color words
                        if (!response.includes("#")) {
                            const pass = response.match(/^[a-zA-Z\s]+$/)
                            if (pass === null) {
                                return "Please enter a valid color word."
                            } else {
                                return true;
                            }
                        }
                    }
                },
                {
                    type: "input",
                    name: "bgColor",
                    message: "Which BACKGROUND color would you like to use? (Hint: Type in a color by name OR a hexadecimal starting with #)",
                    default: "black",
                    validate: function (response) {
                        // checks color hexadecimals (https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format)
                        if (response.includes("#")) {
                            const pass = response.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
                            if (pass === null) {
                                return "Please enter a valid hexadecimal color."
                            } else { 
                                return true;
                            }
                        }
                        // checks color words
                        if (!response.includes("#")) {
                            const pass = response.match(/^[a-zA-Z\s]+$/)
                            if (pass === null) {
                                return "Please enter a valid color word."
                            } else {
                                return true;
                            }
                        }
                    }
                }
            ])
            .then(({ fileName, textChars, shape, textColor, bgColor }) => {
                this.fileName = `${fileName.split(" ").join("-")}.svg`; // replaces spaces with hyphens
                this.textColor = textColor.toLowerCase();
                this.bgColor = bgColor.toLowerCase();
                this.designs.push({ textChars, shape, textColor, bgColor });
                // let newShape;
                // switch(shape) {
                //     case "circle":
                //         newShape = new Circle(textChars, textColor, bgColor);
                //         break;
                //     case "square":
                //         newShape = new Square(textChars, textColor, bgColor);
                //         break;
                //     case "triangle":
                //         newShape = new Triangle(textChars, textColor, bgColor);
                //         break;
                // }
                // return writeFile(
                //     join(__dirname, "..", "example-logos", `${this.fileName}`),
                //     newShape.render()
                // )
            })
            .then(() => {
                return writeFile(
                    join(__dirname, "..", "example-logos", `${this.fileName}`),
                    createSvg(this.designs)
                )
            })
            .then(() => {
                console.log("Success! New logo saved.")
            })
            .catch((error) => {
                console.log("There was an issue creating your logo file.", error)
            });
    }
}

module.exports = CLI;