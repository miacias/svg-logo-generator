const Triangle = require("../lib/triangle");

// my test
// describe("Triangle", () => {
//     it("should create a triangle with with correct shape color, text content, and text color", () => {
//         // arrange test
//         const text = "hi";
//         const txtColor = "yellow";
//         const bgColor = "green";
//         const returnedTriangle = `
// <polygon xmlns="http://www.w3.org/2000/svg" x="100" y="10" points="70 20 70 180 250 100" fill="${bgColor}"/>
// <text x="130" y="125" font-size="50" text-anchor="middle" fill="${txtColor}">${text}</text>
//         `
//         // act on the test
//         const createTriangle = () => new Triangle(text, txtColor, bgColor).render();
//         // assert test
//         expect(createTriangle()).toEqual(returnedTriangle);
//     })
// })

// class-provided test
describe("Triangle", () => {
    it("should create a triangle with a correct background color", () => {
        // arrange
        const shape = new Triangle();
        // act
        shape.setColor("blue");
        // assert
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    })
})
// return `<polygon points="150, 18 244, 182 56, 182" fill="${this.setColor()}"/>`