//要求：向这个类添加构造函数。构造函数接受 name、sides 和 sideLength 属性的参数，并对它们进行初始化。
//向这个类添加一个新的 calcPerimeter() 方法，用于计算它的周长（形状外边缘的长度），并将结果记录到控制台中。
//创建 Shape 类的一个新的实例，名为 square。将其 name 属性值设为 square，sides 属性值设为 4，sideLength 属性值设为 5。
//调用 calcPerimeter() 方法，以查看它是否按预期将计算结果记录到浏览器的控制台中。
//创建 Shape 类的一个新的实例，名为 triangle。将其 name 属性值设为 triangle，sides 属性值设为 3，sideLength 属性值设为 3。
//调用 triangle.calcPerimeter()，以查看它是否正常工作。

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

const square = new Shape('square', 4, 5);
square.calcuPerimeter(); 
const triangle = new Shape('triangle', 3, 3);
triangle.calcuPerimeter();


//如果在calcu那里想要执行side * sideLength的时候，那么下面的调用方法就必须加入对应的参数。