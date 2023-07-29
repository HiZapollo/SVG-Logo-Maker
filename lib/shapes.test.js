
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Rectangle = require('./rectangle.js');

describe('Shapes', () => {
    describe('Circle', () => {
        it('should create a green circle with a radius of 80', () => {
            const shape = new Circle();
            const result = shape.render();

            expect(result).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>')
        });
        it('should create a blue circle with a radius of 80', () => {
            const shape = new Circle();
            shape.changeColor('blue')
            const result = shape.render();

            expect(result).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>')
        });
    });
    describe('Triangle', () => {
        it('should create a green triangle', () => {
            const shape = new Triangle();
            const result = shape.render();

            expect(result).toEqual('<polygon points="150,5 280,180 20,180" fill="green" />')
        });
        it('should create a blue triangle', () => {
            const shape = new Triangle();
            shape.changeColor('blue');
            const result = shape.render();

            expect(result).toEqual('<polygon points="150,5 280,180 20,180" fill="blue" />')
        });
    });
    describe('Rectangle', () => {
        it('should create a green rectangle with w:175 and h:125', () => {
            const shape = new Rectangle();
            const result = shape.render();

            expect(result).toEqual('<rect width="175" height="125" x="65" y="45" fill="green" />')
        });
        it('should create a blue rectangle with w:175 and h:125', () => {
            const shape = new Rectangle();
            shape.changeColor('blue');
            const result = shape.render();

            expect(result).toEqual('<rect width="175" height="125" x="65" y="45" fill="blue" />')
        });
    });
})