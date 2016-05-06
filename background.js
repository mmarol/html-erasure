console.log("background js initialized");

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, {
    file: "jquery-1.6.1.min.js"
  }, function() {
    chrome.tabs.executeScript(null, {
      file: "erase.js"
    });
  });
});

// chrome.browserAction.onClicked.addListener(function (tab) {
// 	chrome.tabs.executeScript(tab.ib, {
// 		file: 'erase.js'
// 	});
// });

console.log("background js completed");
