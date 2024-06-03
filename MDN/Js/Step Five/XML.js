const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
    log.textContent = "";
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("loadend", () => {
        log.textContent = `${log.textContent}完成！状态码：${xhr.status}`;
    });
    xhr.open("GET", "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",)
    xhr.send();
    log.textContent = `${log.textContent}请求已发起\n`;
});
document.querySelector("#reload").addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
});