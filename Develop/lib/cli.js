const inquirer = require("inquirer");
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSvg } = require('./create-svg.js');


class CLI {
    constructor(fileName, textChars, shape, designs) {
        this.fileName = fileName;
        this.textChars = textChars;
        this.shape = shape;
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
                },
                {
                    type: "input",
                    name: "bgColor",
                    message: "Which BACKGROUND color would you like to use? (Hint: Type in a color by name OR a hexadecimal starting with #)",
                    default: "black",
                }
            ])
            .then( ({fileName, textChars, shape, textColor, bgColor}) => {
                this.fileName = `${fileName.split(" ").join("-")}.svg`; // replaces spaces with hyphens
                this.designs.push({textChars, shape, textColor, bgColor});
            })
            .then(() => {
                return writeFile(
                    join(__dirname, "..", "example-logos", `${this.fileName}`),
                    createSvg(this.designs)
                )
            })
            .catch((error) => {
                console.log("There was an issue creating your logo file.")
                throw new Error(error);
            });
    }

    // addColor() {
    //     return inquirer
    //         .prompt([
    //             {
    //                 type: "input",
    //                 name: "color",
    //                 message: "What color would you like to use? (Hint: Type in a color by name OR a hexadecimal starting with #)",
    //                 // choices: [ // CSS color keywords in list of choices
    //                 //     "black",
    //                 //     "silver",
    //                 //     "gray",
    //                 //     "white",
    //                 //     "maroon",
    //                 //     "red",
    //                 //     "purple",
    //                 //     "fuchsia",
    //                 //     "green",
    //                 //     "lime",
    //                 //     "olive",
    //                 //     "yellow",
    //                 //     "navy",
    //                 //     "blue",
    //                 //     "teal",
    //                 //     "aqua",
    //                 //     "Other: I have a custom color."
    //                 // ],
    //                 // default: "black",
    //             }
    //         ])
    //         // saves standard color OR asks for custom color
    //         .then(( { color }) => {
    //             // if (color === "Other: I have a custom color.") {
    //             //     return this.addHexColor();
    //             // } else {
    //                 this.designs.push({color});
    //                 return
    //             // }
    //         });
    // }
    // addHexColor() {
    //     return inquirer
    //         .prompt([
    //             {
    //                 type: "input",
    //                 name: "hex",
    //                 message: "Please input custom hexadecimal color beginning with #",
    //                 // validate(hexadecimal) {
    //                 //     // https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format
    //                 //     const pass = hexadecimal.match(
    //                 //         ^#(?:[0-9a-fA-F]{3}){1,2}$
    //                 //     );
    //                 //     if (pass) {
    //                 //         return true;
    //                 //     }
    //                 //     return "Please enter a valid hexadecimal color."
    //                 // }
    //                 default: "#ffffff", //white
    //             }
    //         ])
    //         .then(({ hex }) => {
    //             this.designs.push({hex});
    //         })
    // }
}

module.exports = CLI;