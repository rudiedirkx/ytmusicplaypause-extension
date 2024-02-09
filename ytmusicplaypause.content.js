"use strict";

// Listen for play/pause message
// Play/pause

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.cmd === 'play/pause') {
		try {
			document.querySelector('#play-pause-button').click();
			sendResponse(true);
		}
		catch (ex) {}
	}
	sendResponse(false);
});
