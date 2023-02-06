const Circle = require("../lib/circle");

describe("Circle", () => {
    it("should create a circle with with correct shape color, text content, and text color", () => {
        // arrange test
        const text = "hi";
        const txtColor = "yellow";
        const bgColor = "green";
        const returnedCircle = `
<circle cx="150" cy="100" r="80" fill="${bgColor}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${txtColor}">${text}</text>`
        // act on the test
        const createCircle = () => new Circle(text, txtColor, bgColor).render();
        // assert test
        expect(createCircle()).toEqual(returnedCircle);
    })
})