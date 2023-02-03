class Shape {
    constructor(textChars, textColor, bgColor) {
        this.textChars = textChars;
        this.textColor = textColor;
        this.bgColor = bgColor;
    }
    render() {
        throw new Error('Must implement a render() method.');
    }
    // 
    renderInnerSvg() {
        // Loop over designs and convert any designs that aren't strings to an html string by calling its render method.
        return this.designs
            .map((design) => {
                if (typeof design === "string") {
                    return design
                }
                return design.render();
            })
            .join("")
    }
}

module.exports = Shape;