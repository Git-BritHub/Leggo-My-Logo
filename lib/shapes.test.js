const { Circle, Triangle, Square } = require("./shapes")

// CIRCLE TESTS
describe("Circle", () => {
    test("Renders a blue circle", () => {
        const expected = '<circle cx="150" cy="100" r="80" fill="blue" />'
        const circle = new Circle()
        circle.setColor("blue")
        const creation = circle.render()
        expect(creation).toEqual(expected)
    })
    test("Renders a blue circle", () => {
        const expected = '<circle cx="150" cy="100" r="80" fill="red" />'
        const circle = new Circle()
        circle.setColor("red")
        const creation = circle.render()
        expect(creation).toEqual(expected)
    })
})

// TRIANGLE TESTS
describe("Triangle", () => {
    test("Renders a purple triangle", () => {
        const expected = '<polygon points="150, 18 244, 182 56, 182" fill="purple" />'
        const triangle = new Triangle()
        triangle.setColor("purple")
        const creation = triangle.render()
        expect(creation).toEqual(expected)
    })
    test("Renders a green triangle", () => {
        const expected = '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
        const triangle = new Triangle()
        triangle.setColor("green")
        const creation = triangle.render()
        expect(creation).toEqual(expected)
    })
})

// SQUARE TESTS
describe("Square", () => {
    test("Renders a orange square", () => {
        const expected = '<rect x="90" y="40" width="120" height="120" fill="orange" />'
        const square = new Square()
        square.setColor("orange")
        const creation = square.render()
        expect(creation).toEqual(expected)
    })
    test("Renders a yellow square", () => {
        const expected = '<rect x="90" y="40" width="120" height="120" fill="yellow" />'
        const square = new Square()
        square.setColor("yellow")
        const creation = square.render()
        expect(creation).toEqual(expected)
    })
})