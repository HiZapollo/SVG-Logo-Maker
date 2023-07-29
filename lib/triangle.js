const Shape = require('./shapes.js');

class Triangle extends Shape {
    constructor(color = 'green') {
        super(color);
    }
    render() {
        return `<polygon points="150,5 280,180 20,180" fill="${this.color}" />`;
    }
}

module.exports = Triangle;