chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ "active_status": 1, "runtime_seconds":60  })
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.match("https:\/\/vcamp\.zendesk.com\/agent\/filters.*")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["milk.js"]
    })
      .then(() => {
        console.log("Refresher has been injected.")
      })
      .catch(err => console.log(err))
  }
});
