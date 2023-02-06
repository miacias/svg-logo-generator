const Triangle = require("../lib/triangle");


const shape = new Triangle("hi", "yellow", "green");
// shape.setColor("blue");
expect(shape.render()).toMatch(`<polygon xmlns="http://www.w3.org/2000/svg" x="100" y="10" points="70 20 70 180 250 100" fill="green"/>
<text x="130" y="125" font-size="50" text-anchor="middle" fill="yellow">hi</text>`);

describe("Triangle")