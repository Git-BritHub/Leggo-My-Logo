class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color
    }
}

Circle => `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;

Triangle => `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;

Square => `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;

module.exports = { Circle, Triangle, Square };