const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(textChars, textColor, bgColor) {
        super(shape);
    }
    render() {
        // template literal HTML of circle
        // return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        //     <circle cx="25" cy="75" r="20" fill="${bgColor}"/>
        //     <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${textChars}</text>
        // </svg>`
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <circle cx="150" cy="100" r="80" fill="${bgColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${textChars}</text>
        </svg>`
    }
}

module.exports = Circle;