"use strict";

// Find music tab
// Send play/pause message to content script

chrome.action.onClicked.addListener(async function(tab0) {
	const tabs = await chrome.tabs.query({
		// url: /\/\/music.youtube.com\//,
		url: "*://music.youtube.com/*",
	});
	console.log(tabs);
	if (tabs.length != 1) return;

	const response = await chrome.tabs.sendMessage(tabs[0].id, {cmd: "play/pause"});
	console.log(response);
});
