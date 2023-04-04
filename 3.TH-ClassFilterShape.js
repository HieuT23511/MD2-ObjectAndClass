//B1: Shape
class Shape {
    color;
    filled;

    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}

let shape1 = new Shape('green', false);

console.log(shape1);

//B2: Circle:
class Circle {
    color;
    filled;
    radius;

    constructor(color, filled, radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea() {
        return 2 * Math.PI * this.radius;
    }

    getPerimeter() {
        return Math.PI * this.radius * this.radius;
    }
}

let circle1 = new Circle('blue', false, 10);
console.log(circle1);
console.log(`The Area is: ${circle1.getArea()}`);
console.log(`The Perimeter is: ${circle1.getPerimeter()}`);

//B3: Rectangle:
class Rectangle {
    color;
    filled;
    width;
    length;

    constructor(color, filled, width, length) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }

    getArea() {
        return 2 * (this.width + this.length);
    }

    getPerimeter() {
        return this.length * this.width;
    }
}
let rect1 = new Rectangle('purple',false,20,10);
console.log(rect1);
console.log(`The Area is: ${rect1.getArea()}`);
console.log(`The Perimeter is: ${rect1.getPerimeter()}`);

//B4: Square:
class Square {
    color;
    filled;
    side;
    constructor(color,filled,side = 1.0) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}
let square1 = new Square('black',false);
console.log(square1);