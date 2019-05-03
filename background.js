let isActive = false;

function updateIcon() {
	browser.browserAction.setIcon({
		path: isActive ? {
			32: "icons/logo-active-32.png",
			64: "icons/logo-active-64.png"
		} : {
			32: "icons/logo-inactive-32.png",
			64: "icons/logo-inactive-64.png"
		}
	});
}
	
function toggleAddonActive() {
	isActive = !isActive;

	updateIcon();

	browser.tabs.executeScript(null, {
		file: '/index.js'
	});

	browser.runtime.sendMessage({
		isActive
	});
}

browser.browserAction.onClicked.addListener(toggleAddonActive);