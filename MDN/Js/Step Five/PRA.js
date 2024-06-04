const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

// function setAlarm() {
//     window.setTimeout(() => {
//         output.textContent = "Wake up";
//     }, 1000);
// }

// button.addEventListener("click", setAlarm);

//或者这样

// function alarm(person, delay) {
//     return new Promise((resolve, reject) => {
//         if(delay < 0) {
//             throw new Error("Alarm delay must not be negative");
//         }
//         window.setTimeout(() => {
//             resolve(`Wake up, ${person}`);
//         }, delay);
//     });
// }

//使用alarm() API
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if(delay < 0) {
            throw new Error("Alarm delay must not be negative");
        }
        window.setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

button.addEventListener("click", () => {
    alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => output.textContent = `Couldn't set alarm: ${error}`);
});