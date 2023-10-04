const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

// SVG TESTS
describe("SVG", () => {
    test("Creates a 300 x 200 svg", () => {
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
        const svg = new SVG();
        expect(svg.render()).toEqual(expected);
    });
    test("Creates svg with text that says 'ABC', and text color that is blue for Circle", () => {
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text></svg>';
        const svg = new SVG();
        const shape = new Circle();
        shape.setColor("purple");
        svg.setShape(shape);
        svg.setText("ABC", "blue", "Circle");
        expect(svg.render()).toEqual(expected);
    });
    test("Creates svg that is a purple circle", () => {
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="purple" /></svg>';
        const svg = new SVG();
        const shape = new Circle();
        shape.setColor("purple");
        svg.setShape(shape);
        expect(svg.render()).toEqual(expected);
    });
    test("Creates svg with text that says 'DEF', and text color that is red for Triangle", () => {
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="150" font-size="60" text-anchor="middle" fill="red">DEF</text></svg>';
        const svg = new SVG();
        const shape = new Triangle();
        shape.setColor("green");
        svg.setShape(shape);
        svg.setText("DEF", "red", "Triangle");
        expect(svg.render()).toEqual(expected);
    });
    test("Creates svg with text that says 'GHI', and text color that is orange for Square", () => {
        const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">XYZ</text></svg>';
        const svg = new SVG();
        const shape = new Square();
        shape.setColor("blue");
        svg.setShape(shape);
        svg.setText("XYZ", "orange", "Square");
        expect(svg.render()).toEqual(expected);
    });
});