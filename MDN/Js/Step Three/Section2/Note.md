### 类和示例
类只是一种用于创建具体对象的模板。当我们用类创建出一个具体的内容时，我们称内容为类的实例
通常来说，需要将构造函数作为类定义的一部分明确声明，并且构造函数通常具有和类名相同的函数名
例如
~~~ js
class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()
~~~
这样我们就可以创建具体的教授了
~~~ js
walsh = new Profeesor("沃尔什", "心理学")；
lillian = new Professor("李莲", "诗歌")；

walsh.teaches;
walsh.introduceSelf();
~~~

### 继承
学生其实也有很多和教授一样的地方，比如也有自己的名字，或者也想介绍他们自己，那么实际上和教授类差距不大，如果能够用特别的方式来共享他们之间相同的属性，那么就会节省不少精力。继承可以帮助我们完成这个操作。
学生和教授其实都是人，我们可以将人定义为一个新类，让学生和教授根据该类**派生**而来，
sudo code
```
class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
```
每个人都有introduceSelf，那么所有人都想要介绍他们自己，但是会以不同的方式去做这件事，还会为那些不是教授或学生的人设定一个默认的打招呼方法
一个方法拥有相同的函数名，但是在不同的类中可以具有不同的实现时，这一特性叫**多态**，当一个方法在子类当中替换了父类当中的实现时，我们叫**重写/重载**
### 封装
保持对象内部状态的私有性，明确划分对象的公共接口和内部状态，这种特性称之为封装。在对象的内外部设置了一层防火墙。
如，学生只有在二年级才可以选修弓箭课，我们可以将学生的`year`属性暴露给外部，从而外部代码可以检查来判断学生是否可以选修该课程
如果，再为选修这件课程增加其他的要求，那么我们就只需要在Student类里添加一个对应的方法，那么相应代码的逻辑就会集中在一个地方
这样一来，如果要修改弓箭课的规则，只需要在Student当中进行更新即可
private标记对象的私有部分

### 面向对象编程和JS
面向对象的编程方式是基于类的，而js更多的是对于对象的操作。类和对象是两个不同的概念，对象是由类创造出来的实例，定义类的方法(定义类的语法)和实例化对象的方法(构造函数)也是不同的，在js中，更多的使用的是函数或对象字面量创建对象，JS可以在没有特定的类定义的情况下创建对象，会很轻量化
而原型链看起来似乎很像继承，但并非如此，继承当中由子类创建的对象除了包含其本身的定义，还有其父级的定义，而在原型链中，每一个层级都代表了不同的对象。原型链更像是一种委派，在委派模式下，对象可以自己执行该任务，也可以要求另一个对象以其自己的方式执行该任务，可以更灵活的在许多对象之间建立连接。
但是如果只用构造函数和原型实现又比较难，所以js提供了一些额外的特性，在原型的模型之上又抽象出一层模型，从而能够更为直接的在js中使用基于类的面向对象编程中的概念。