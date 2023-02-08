class Shape {
    constructor(textChars, textColor, bgColor) {
        this.textChars = textChars;
        this.textColor = textColor;
        this.bgColor = bgColor;
    }
    render() {
        throw new Error('Must implement a render() method.');
    }
    // takes in value, sets given value to background color
    setColor(bgColor) {
        this.bgColor = bgColor;
    }
    // takes in value, sets given value to characters
    setText(textChars, textColor) {
        this.textChars = textChars;
        this.textColor = textColor;
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textChars}</text>`
    }
    // takes in value, sets given value to text color
    // setTxtColor(textColor) {
    //     this.textColor = textColor;
    // }
}

module.exports = Shape;