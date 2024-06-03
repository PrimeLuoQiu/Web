# JS异步
## JS简介

类似..多线程？在对一个长期运行的任务时还可以对其他任务做出响应。

### 同步编程
之前很多函数大多都是逐步执行的，一步一步地进行下去。但是如果同步函数需要很长时间的话，例如，生成素数(generatePrimeNumber)是个耗时的问题

在运行时不能做任何事情
所以我们想要一种方法，可以通过一个函数来启动一个长期运行的操作，开始操作并立即返回，操作完成后通知我们最后的结果

### 事件处理程序

以当事件为"异步操作已经完成"时再调用提供的函数，那么就可以看到事件如何被用来通知调用者异步函数调用的结果

一个使用`XMLHttpRequest`的API就使用的是异步，可以添加监听器来让程序在请求进展和最终完成时获得通知
如例

### 回调
事件处理程序是一种特殊的回调函数，它曾是js中实现异步函数的主要方式，当回调还需要回调的时候，就变得麻烦起来了
~~~ js
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}
function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}
function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}
function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`结果：${result3}`);
      });
    });
  });
}
doOperation();
~~~
## 使用Promise
一个由异步函数返回的对象，指示操作当前所处的状态。