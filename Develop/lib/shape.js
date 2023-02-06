class Shape {
    constructor(textChars, textColor, bgColor) {
        this.textChars = textChars;
        this.textColor = textColor;
        this.bgColor = bgColor;
    }
    render() {
        throw new Error('Must implement a render() method.');
    }
    setColor() {
        return `${this.bgColor}`;
    }
    setText() {
        return `${this.textChars}`;
    }
    setTxtColor() {
        return `${this.textColor}`;
    }
}

module.exports = Shape;