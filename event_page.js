var nextMapsTabId = null;

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        url: "https://www.google.co.uk/maps/"
    }, function onTabCreated(tab) {
        nextMapsTabId = tab.id;
        chrome.tabs.onUpdated.addListener(onTabLoaded);
    });
});

function onTabLoaded(tabId , info) {
    if (nextMapsTabId !== null && tabId === nextMapsTabId && info.status === "complete") {
        // Google Maps has loaded, do something!

        // Only run the code below once per click of browser action button.
        chrome.tabs.onUpdated.removeListener(onTabLoaded);

        chrome.tabs.executeScript(tabId, {file: "content_script.js"}, function(arrayOfAnyResult) {});
    }
}