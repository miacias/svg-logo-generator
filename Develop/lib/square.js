const Shape = require('./shape.js');

class Square extends Shape {
    constructor(textChars, textColor, bgColor) {
        super(textChars, textColor, bgColor);
    }
    render() {
        // template literal HTML of square with background color
        return `
<rect x="70" y="20" width="160" height="160" fill="${this.setColor()}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textChars}</text>`
    }
}

module.exports = Square;