// import here
const Triangle = require("./triangle.js");
const Circle = require("./circle.js");

function createSvg(textChars, shape) {
    // create variables to go into rendered code
    // render things here with .render()
    // standard SVG document format
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shape} ${shapeDimensions} fill="${bgColor}"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${textChars}</text>
</svg>`
}

module.exports = {createSvg};

// delete file!