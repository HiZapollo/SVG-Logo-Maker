
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

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
    describe('Square', () => {
        it('should create a green square with w:150 and h:150', () => {
            const shape = new Square();
            const result = shape.render();

            expect(result).toEqual('<rect width="150" height="150" x="75" y="30" fill="green" />')
        });
        it('should create a blue square with w:150 and h:150', () => {
            const shape = new Square();
            shape.changeColor('blue');
            const result = shape.render();

            expect(result).toEqual('<rect width="150" height="150" x="75" y="30" fill="blue" />')
        });
    });
})