class SVG {
    constructor() {
        this.text = "";
        this.shape = "";
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }

    setText(value, color) {
        if (value.length > 3) {
            throw new Error("Your text input should be 3 characters or less.")
        }
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${value}</text>`
    }

    setShape(shape) {
        this.shape = shape.render()
    }
}

module.exports = SVG;



