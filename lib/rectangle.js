const Shape = require('./shapes.js');

class Rectangle extends Shape {
    constructor(color = 'green') {
        super(color);
    }
    render() {
        return `<rect width="175" height="125" x="65" y="45" fill="${this.color}" />`;
    }
}

module.exports = Rectangle;