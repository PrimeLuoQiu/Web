// 监听主线程中的消息
//如果消息中的command是"generate"则调用`generatePrimes()`
addEventListener("message",  (message) => {
    if (message.data.command === "generate") {
        generatePrimes(message.data.quota);
    }
});

//生成质数(Low efficiency)
function generatePrimes(quota) {
    function isPrime(n) {
        for(let c = 2; c <= Math.sqrt(n); ++ c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maxinum = 100000;

    while(primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maxinum + 1));
        if(isPrime(candidate)) {
            primes.push(candidate);
        }
    }

    //完成后给主线程发送一条包含生成的质数数量的消息信息
    postMessage(primes.length);
}