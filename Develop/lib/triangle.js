const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(bgColor) {
        super(bgColor);
    }
    render() {
        return `<polygon xmlns="http://www.w3.org/2000/svg" x="100" y="10" points="150 10, 80 150, 220 150" fill="${this.bgColor}"/>`
    }
}

module.exports = Triangle;