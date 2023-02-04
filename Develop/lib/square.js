const Shape = require('./shape.js');

class Square extends Shape {
    constructor(bgColor) {
        super(bgColor);
    }
    render() {
        // template literal HTML of square with background color
        return `<rect x="70" y="20" width="160" height="160" fill="${this.bgColor}"/>`
    }
}

module.exports = Square;