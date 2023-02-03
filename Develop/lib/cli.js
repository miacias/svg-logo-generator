const inquirer = require("inquirer");

class CLI {
    constructor() {

    }
    run() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "text",
                    message: "What letter(s) or character(s) would you like to represent in your logo? (Maximum: 3)"
                },
                { // CSS color keywords
                    type: "list",
                    name: "color",
                    message: "What background color would you like?",
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
                        "Input hexadecimal color code instead"
                    ]
                }
            ])
    }
}