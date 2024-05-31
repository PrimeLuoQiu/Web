//接下来，我们希望你创建一个继承自 Shape 的 Square 类，并添加一个 calcArea() 方法，用于计算正方形的面积。同时，设置构造函数，
//以便 Square 对象实例的 name 属性自动设置为 square，sides 属性自动设置为 4。因此，在调用构造函数时，你只需要提供 sideLength 属性。
//创建一个使用适当属性值的 Square 类的实例，名为 square，并调用它的 calcPerimeter() 和 calcArea() 方法，以表明其是否正常工作。

class Shape {
    name = '';
    sides = '';
    sideLength = '';

    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcuPerimeter() {
        console.log(this.sides * this.sideLength);
    }
}

class Square extends Shape {
    sideLength;

    constructor(name, sides, sideLength) {
        super(name, sides);
        this.sideLength = sideLength;
    }

    calcArea(sideLength) {
        console.log(sideLength * sideLength);
    }
}

const square = new Square('square', 4, 5);
square.calcuPerimeter();
square.calcArea(5);