console.log("init");

let style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.hovered-item { border: 2px dashed #000; }';

let handleMouseOver = event => event.target.classList.add('hovered-item'), 
	handleMouseOut = event => event.target.classList.remove('hovered-item'), 
	removeDomElement = event => {
		event.preventDefault();
		event.target.remove();
	};

function handleMessage(message, sender, sendResponse) {
	console.log("sendResponse", sendResponse);
	console.log("sender", sender);
	console.log("message", message);
	if(message.isActive) {
		document.getElementsByTagName('head')[0].appendChild(style);
		window.addEventListener('mouseover', handleMouseOver);
		window.addEventListener('mouseout', handleMouseOut);
		window.addEventListener('click', removeDomElement, true);
	} else {
		window.removeEventListener('mouseover', handleMouseOver);
		window.removeEventListener('mouseout', handleMouseOut);
		window.removeEventListener('click', removeDomElement, true);			
	}
};

browser.runtime.onMessage.addListener(handleMessage);