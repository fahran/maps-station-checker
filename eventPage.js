var mapsTabId = null;

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        'url': "https://www.google.co.uk/maps/"
    }, function(tab) {
    	mapsTabId = tab.id;
    });
});

chrome.tabs.onUpdated.addListener(function(tabId , info) {
    if (mapsTabId !== null && tabId === mapsTabId && info.status === "complete") {
        // your code ...
    }
});