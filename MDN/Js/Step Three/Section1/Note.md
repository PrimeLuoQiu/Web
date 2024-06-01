对象由很多成员组成。

当对象的成员是函数时，语法会更简单。可以用`bio()`来代替`bio: function()`
想要传输一系列结构换相关的数据项时，创建一个对象，发送一个对象比分别发送这些数据更有效率。

### 点表示法
#### 子命名空间
用一个对象来做另一个对象成员的值
~~~ js
const person = {
    name: {
        first:Bob,
        last: Smith,
    },
}
~~~

### 括号表示法
点表示法比括号表示法好用的多，而且更简洁易于阅读，但是当对象属性名称保存在**变量**中时，则必须用括号表示法
### 设置对象成员
括号表示法有用的地方是它不仅可以动态设置对象成员的值，还可以动态的设置成员的名字。如果需要能够在两个文本之间键入名称和值，在人员数据中存储自定义的值类型
~~~ js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
~~~
~~~ js
person[myDataName] = myDataValue;
~~~
e.g
~~~ js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

person.height
~~~

### this的含义
this属于定义域内的变量引用

### 构造函数
使用`new`关键字调用的函数。调用时，创建新对象、将this绑定到新对象、运行代码、返回新对象

~~~ js
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`你好，我是${this.name}。`);
    };
}
~~~

### 原型链
所有的对象都有一个内置属性，称为原型，原型链终止与拥有`null`作为其原型的对象上
有个对象叫`Object.protoype`，是最基础的原型，所有对象都默认拥有它，它的原型是null，位于原型链的终点
一个对象的原型不总是`Object.prototype`，例如 `const myDate = new Date`，它的原型就是`Date.prototype`再到`Op`

### 设置原型
两种方法，分别是`Object.create()`方法创建一个新的对象
示例

### 属性遮蔽
当对象的原型对象有一个属性，而前一个对象也有对应属性是，就会引发遮蔽

### 设置原型一共有两种方式
分别是Object.create和构造函数
#### 自有属性
方法是在原型上定义的，数据属性是在构造函数中定义的，方法通常对我们创建的每个对象都是一样的，而我们通常希望每个对象的数据属性都有自己的值

直接在对象中定义的属性，被称为自由属性，可以通过`Object.hasOwn()`检查

### 原型和继承
原型是js的一个强大且非常灵活的功能，使得重用代码和组合对象成为可能，特别是支持某种意义的继承，继承是面向对象的编程语言的一个特点，让程序员可以表达系统中的一些对象是其他对象的更专门的版本

例如，教授和学生都继承自人，在js中，如果`Professor`和`Student`具有原型`Person`那么他们可以继承共同的属性，同时增加和定义那些需要不同的属性。

##