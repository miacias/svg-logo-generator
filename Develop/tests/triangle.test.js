const Triangle = require("../lib/triangle");

describe("Triangle", () => {
    it("should create a triangle with with correct shape color, text content, and text color", () => {
        // arrange test
        const text = "hi";
        const txtColor = "yellow";
        const bgColor = "green";
        const returnedTriangle = `
<polygon xmlns="http://www.w3.org/2000/svg" x="100" y="10" points="70 20 70 180 250 100" fill="${bgColor}"/>
<text x="130" y="125" font-size="50" text-anchor="middle" fill="${txtColor}">${text}</text>
        `
        // act on the test
        const createTriangle = () => new Triangle(text, txtColor, bgColor).render();
        // assert test
        expect(createTriangle()).toEqual(returnedTriangle);
    })
})