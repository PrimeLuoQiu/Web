//在 generate.js中创建一个新的worker
const worker = new Worker("./generate.js");

//当用户点击"Generate primes"时，给worker发送一条消息。
//消息中command属性是generate，还包含另外一个属性"quota"，即要生成的质数

document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    worker.postMessage({
        command: "generate", //希望worker所做事情的字符串。
        quota: quota, //要生成的质数数量。
    });
});
//当worker给主线程回发一条消息时，为用户更新output框，包含生成的质数，从message中获取
worker.addEventListener("message", (message) => {
    document.querySelector("#output").textContent = 
        `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value = 'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();    
});

// 使用Web Animation API对图像进行动画处理
// alice1.animate(aliceTumbling, aliceTiming);
//element.animate返回的是一个Animation对象，该对象有一个finished属性，这个属性才是Promise

