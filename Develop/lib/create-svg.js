// imports shape type classes
const Circle = require("./circle.js");
const Square = require("./square.js");
const Triangle = require("./triangle.js");

function createSvg(designs) {
    // creates variables to go into rendered code
    const { textChars, shape, textColor, bgColor } = designs[0];
    let newShape;
    // renders a specific shape-type with .render()
    switch (shape) {
        case "circle":
            newShape = new Circle(textChars, textColor, bgColor).render();
            break;
        case "square":
            newShape = new Square(textChars, textColor, bgColor).render();
            break;
        case "triangle":
            newShape = new Triangle(textChars, textColor, bgColor).render();
            break;
    }
    // standard SVG document format
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${newShape}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${textChars}</text>
</svg>`
}

module.exports = { createSvg };