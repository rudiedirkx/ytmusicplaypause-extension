"use strict";

// Listen for play/pause message
// Play/pause

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.cmd === 'play/pause') {
		const meta = document.querySelector('meta[itemprop="genre"][content="Music"]');
		if (!meta && location.hostname != 'music.youtube.com') {
			sendResponse(false);
			return;
		}

		try {
			document.querySelector('#play-pause-button, .ytp-play-button').click();
			sendResponse(true);
			return;
		}
		catch (ex) {}
	}
	sendResponse(false);
});
