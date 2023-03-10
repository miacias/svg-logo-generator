const Square = require("../lib/square");

describe("Square", () => {
    it("should create a square with with correct shape color, text content, and text color", () => {
        // arrange test
        const text = "hi";
        const txtColor = "yellow";
        const bgColor = "green";
        const returnedSquare = `
<rect x="70" y="20" width="160" height="160" fill="${bgColor}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${txtColor}">${text}</text>`
        // act on the test
        const createSquare = () => new Square(text, txtColor, bgColor).render();
        // assert test
        expect(createSquare()).toEqual(returnedSquare);
    })
})