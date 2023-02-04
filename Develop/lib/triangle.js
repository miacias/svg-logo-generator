const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(textChars, textColor, bgColor) {
        super(textChars, textColor, bgColor);
    }
    render() {
        return `<polygon xmlns="http://www.w3.org/2000/svg" x="100" y="10" points="150 10, 80 150, 220 150" fill="${this.bgColor}"/>
        <text x="133" y="97" font-size="50" text-anchor="middle" fill=${this.textColor}>${this.textChars}</text>
        `
    }
}

module.exports = Triangle;