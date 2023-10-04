class SVG {
    constructor() {
        this.text = "";
        this.shape = null; // Track the current shape
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.text}</svg>`;
    }

    setText(value, color) {
        if (value.length > 3) {
            throw new Error("Your text input should be 3 characters or less.");
        }

        let y = 125;

        // Check the current shape type and adjust the y attribute accordingly
        if (this.shape && this.shape.constructor.name === "Triangle") {
            y = 150;
        }

        this.text = `<text x="150" y="${y}" font-size="60" text-anchor="middle" fill="${color}">${value}</text>`;
    }

    setShape(shape) {
        this.shape = shape;
    }
}

module.exports = SVG;
