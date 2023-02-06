const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(textChars, textColor, bgColor) {
        super(textChars, textColor, bgColor);
    }
    render() {
// right-pointing triangle
return `
<polygon xmlns="http://www.w3.org/2000/svg" x="100" y="10" points="70 20 70 180 250 100" fill="${this.setColor()}"/>
<text x="130" y="125" font-size="50" text-anchor="middle" fill="${this.setTxtColor()}">${this.setText()}</text>
        `
    }
}

module.exports = Triangle;