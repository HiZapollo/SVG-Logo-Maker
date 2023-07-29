const Shape = require('./shapes.js');

class Square extends Shape {
    constructor(color = 'green') {
        super(color);
    }
    render() {
        return `<rect width="150" height="150" x="75" y="30" fill="${this.color}" />`;
    }
}

module.exports = Square;