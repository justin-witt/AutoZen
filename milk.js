function identifyTarget() {
    let selection = document.querySelectorAll("button");
    for (const i in selection) {
        if (selection[i].ariaLabel === "Refresh views pane" && selection[i].type === "button") {
            return selection[i];
        }
    }
}

let init = function ClickRefresh() {
    chrome.storage.local.get(['active_status'], function (data) {
        if (data.active_status) {
            identifyTarget().click();
        }
    });
}

chrome.storage.local.get(['runtime_seconds'], function (data) {
    setInterval(init, (data.runtime_seconds * 1000));
});
