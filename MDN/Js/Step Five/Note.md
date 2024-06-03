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

### 使用fetch()API
我们这次选择使用一个更加现代的基于Promise的替代XML的办法
~~~ js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  console.log(fetchPromise);

  fetchPromise.then((response) => {
    console.log(`已收到响应:${response.status}`);
});
console.log("已发送请求")
~~~
`fetch`在运行还没结束的时候就返回，使得程序能保持响应性。处理程序返回到的是Promise对象的`then()`方法中

### 链式使用Promise
顾名思义就是一连串的使用Promise，例如我们在得到我们要的对象时，还想获取响应数据，那么就需要调用response对象的json()方法，实际上后者也是异步的，那就不得不调用两个异步函数了
~~~ js
const fetchPromise = fetch (
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then(json) => {
    console.log(json[0].name);
  };
});
~~~
多层回调看起来还是和之前一样很头大，所以Promise的优雅之处在于then本身也会返回一个Promise来指示then中调用的异步函数的完成状态
也就意味着，可以改成这样
~~~ js
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });
~~~

### 错误捕获
fetch可能会因为网络问题产生错误，但如果使用之前的嵌套回调就很麻烦，于是Promise对象提供了一个catch方法，当异步成功时，传递给then的被调用，失败时，转到catch，
只需要添加到Promise链的末尾即可。可以将一个操作实现为几个的连续的异步函数调用，并在一个地方处理所有错误。

~~~ js
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP 请求错误：${response.status}`);
    }
    return response.json();
  })
  .then((json) => {
    console.log(json[0].name);
  })
  .catch((error) => {
    console.error(`无法获取产品列表：${error}`);
  });

~~~

### Promise术语
- 待定：初始状态，调用fetch返回Promise时的状态，此时请求还在进行
- 已兑现：操作完成 then被调用
- 已拒绝：操作失败 catch被调用
- 已敲定：表示兑现和拒绝
- 已解决：已敲定或锁定另一个Promise的状态

### 合并使用多个Promise
通过数组的方式合并一些Promise，然后等数组内的全部执行完成之后返回一个单一的Promise，方式是`Promise.all()`
- 当数组内所有兑现之后，然后通知then生成一个响应数组，响应数组顺序和传入all顺序相同
- 只要有一个被拒绝就会调用catch并提供对应错误
如
~~~ js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}：${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`获取失败：${error}`);
  });
~~~
即使会因为链接不存在返回404，也依旧不耽误请求被兑现
而
~~~ js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}：${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`获取失败：${error}`);
  });
~~~
catch被运行
当只需要数组中有一个可以兑现即可的时候，选择用`Promise.any`，如果都被拒绝，那么它也会被拒绝，不过这种情况下无法预测哪个请求会被先兑现

### async和await
async关键字提供了一种更简单的方法来处理异步的代码，再一个函数的开头添加async，就可以使其成为一个异步函数。
异步函数中，可以在调用一个返回Promise的函数之前使用`await`关键字，使得代码在该点上等待，直到完成Promise，响应被当做返回值，或者被拒绝的被作为错误抛出
例如之前的fetch示例
~~~ js
async function fetchProducts() {
  try {
    //等待fetch调用完成，返回的是一个响应或错误
    const response = await.fetch( //直接得到一个response对象，fetch像一个同步函数
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if(!response.ok) {
      throw new Error(`HTTP 请求错误: ${response.status}`);
    }
    //等待response.json的调用完成 要么返回json对象，要么错误
    const json = await response.json();
    console.log(json[0].name);
  } catch(error) {
    console.log(`w无法获取产品列表：${error}`);
  }
}

fetchProducts();
~~~
try 和 catch也是可以处理错误的，但只在异步函数中有用。
只能在async函数中使用await，除非是js模块，意味着不能再普通脚本中这样：
~~~ js

~~~

await强制异步操作以串联的方式完成。如果下一个操作的结果取决于上一个操作的结果，这是必要的，但如果不是，像promise.all()会有更好的性能。