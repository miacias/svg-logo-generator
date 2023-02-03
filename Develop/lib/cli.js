const inquirer = require("inquirer");

class CLI {
    constructor() {
        this.design = [];
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "text",
                    message: "What letter(s) or character(s) would you like to represent in your logo? (Maximum: 3)",
                    // user can enter up to 3 characters
                    validate(chars) {
                        if (chars.length <= 3) {
                            return true
                        }
                        return "Max length exceeded. Please provide 1, 2, or 3 total characters."
                    }
                }
            ])
            .then( ({ text}) => {
                this.design.push( {text});
                return this.shape() // asks for shape
            });
    }
    shape() {
        return inquirer
            .prompt([
                {
                    type: "list",
                    name: "shape",
                    message: "Please select a shape.",
                    choices: [
                        "circle",
                        "triangle",
                        "square"
                    ]
                }
            ])
            .then( ({ shape}) => {
                this.design.push(shape);
                return this.addColor();
            })
    }
    addColor() {
        return inquirer
            .prompt([
                { // CSS color keywords in list of choices
                    type: "list",
                    name: "color",
                    message: "What color would you like?",
                    choices: [
                        "black",
                        "silver",
                        "gray",
                        "white",
                        "maroon",
                        "red",
                        "purple",
                        "fuchsia",
                        "green",
                        "lime",
                        "olive",
                        "yellow",
                        "navy",
                        "blue",
                        "teal",
                        "aqua",
                        "Other: I have a custom color."
                    ]
                }
            ])
            // saves standard color OR asks for custom color
            .then(( { color }) => {
                if (color === "Other: I have a custom color.") {
                    return this.addHexColor();
                } else {
                    this.design.push({color});
                }
            });
    }
    addHexColor() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "hex",
                    message: "Please input custom hexadecimal color beginning with #",
                    // validate(hexadecimal) {
                    //     // https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format
                    //     const pass = hexadecimal.match(
                    //         ^#(?:[0-9a-fA-F]{3}){1,2}$
                    //     );
                    //     if (pass) {
                    //         return true;
                    //     }
                    //     return "Please enter a valid hexadecimal color."
                    // }
                }
            ])
            .then(({ hex }) => {
                this.design.push({hex});
            })
    }
}

module.exports = CLI;