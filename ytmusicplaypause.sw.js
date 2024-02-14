"use strict";

// Find music tab
// Send play/pause message to content script

async function sendPlayPause() {
	const tabs = await chrome.tabs.query({
		// url: /\/\/music.youtube.com\//,
		url: "*://music.youtube.com/*",
	});
	console.log(tabs);
	if (tabs.length != 1) return;

	const response = await chrome.tabs.sendMessage(tabs[0].id, {cmd: "play/pause"});
	console.log(response);
}

chrome.action.onClicked.addListener(function() {
	sendPlayPause();
});

chrome.commands.onCommand.addListener(function(command) {
	if (command === 'ytplaypause') {
		sendPlayPause();
	}
});
