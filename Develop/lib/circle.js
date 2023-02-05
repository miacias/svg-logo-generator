const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(textChars, textColor, bgColor) {
        super(textChars, textColor, bgColor);
    }
    render() {
        // template literal HTML of circle with background color
        return `
<circle cx="150" cy="100" r="80" fill="${this.bgColor}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textChars}</text>`
    }
}

module.exports = Circle;