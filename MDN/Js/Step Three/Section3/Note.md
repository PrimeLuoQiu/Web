## JS中的类
### 类和构造函数
~~~ js
class Person {
    name; //可选，但是最好加上

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

//Use
const giles = new Person("Giles");
giles.introduceSelf();
~~~
如果不需要构造函数，是可以进行省略的。该构造函数会自动生成。

### 继承
声明一个Person的子类
~~~ js
class Professor extends Person { //声明继承
    teaches;  //添加新属性

    constructor(name, teaches) {
        super(name); //调用父类的构造函数，并传递name参数，父类的构造函数会设置对应属性，然后接着设置teaches属性
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    };

    grade(papper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}
//如果子类有任何自己的初始化内容需要完成，必须要先调用父类的构造函数，并传递父类构造函数期望的任何参数

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf();
walsh.grade("my paper");
~~~

### 封装
按照上期当中说的声明Student类
~~~ js
class Student extends Person {
    #year

    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`Hi, I am ${this.name}, and I'm in year ${this.year}.`);
    }

    canStudyArchey() {
        return this.#year > 1;
    }
}
~~~
`#year`是一个私有属性，可以构建一个`Student`对象，在内部使用`year`外部是不可以的。私有数据属性必须在累的声明中声明，而且其名称需要以`#`开头
私有方法和私有数据属性一样，名称也是以`#`开头