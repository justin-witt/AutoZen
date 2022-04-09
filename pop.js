let toggler = document.getElementById("toggler");

chrome.storage.local.get(["active_status"], function (data) {
    if (data.active_status) {
        toggler.innerHTML = "Disable";
    } else {
        toggler.innerHTML = "Enable";
    }
});

toggler.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true });
    if (toggler.innerHTML==="Disable") {
        chrome.storage.local.set({ "active_status":0 });
    } else {
        chrome.storage.local.set({ "active_status":1 });
    }
    window.close();
});
