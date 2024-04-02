"use strict";

// Find music tab
// Send play/pause message to content script

async function sendPlayPause() {
	const tabs = await chrome.tabs.query({
		url: "*://*.youtube.com/*",
	});
	console.log('tabs', tabs);
	// if (tabs.length != 1) return;

	for (const tab of tabs.reverse()) {
		const response = await chrome.tabs.sendMessage(tab.id, {cmd: "play/pause"});
		console.log(tab.url, response);
		if (response === true) break;
	}
}

chrome.action.onClicked.addListener(function() {
	sendPlayPause();
});

chrome.commands.onCommand.addListener(function(command) {
	if (command === 'ytplaypause') {
		sendPlayPause();
	}
});
