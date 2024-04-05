"use strict";

// Listen for play/pause message
// Play/pause

function getVideoMeta() {
	const metas = document.querySelectorAll('script[type="application/ld+json"]');
	for (const el of metas) {
		const json = el.textContent.trim();
		try {
			const data = JSON.parse(json);
			if (data['@type'] === 'VideoObject') {
				return data;
			}
		}
		catch (ex) {}
	}
}

function videoIsMusic(data) {
	return data && data.genre === 'Music';
}

function doPlayPause(sendResponse) {
	try {
		document.querySelector('#play-pause-button, .ytp-play-button').click();
		sendResponse(true);
		return true;
	}
	catch (ex) {}
	return false;
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.cmd === 'play/pause') {
		if (location.hostname == 'music.youtube.com') {
			if (doPlayPause(sendResponse)) return;
		}

		if (videoIsMusic(getVideoMeta())) {
			if (doPlayPause(sendResponse)) return;
		}
	}
	sendResponse(false);
});
