const SVG = require("./svg");
const { Circle } = require("./shapes");

// SVG TESTS
describe("SVG", () => {
    test("Creates a 300 x 200 svg", () => {
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
        const svg = new SVG();
        expect(svg.render()).toEqual(expected)
    });
    test("Creates svg with text that says 'ABC', and text color that is blue", () => {
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text></svg>';
        const svg = new SVG();
        svg.setText("ABC", "blue")
        expect(svg.render()).toEqual(expected)
    });
    test("Creates svg that is a purple circle", () => {
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="purple" /></svg>';
        const svg = new SVG();
        const shape = new Circle()
        shape.setColor("purple")
        svg.setShape(shape)
        expect(svg.render()).toEqual(expected)
    });
});