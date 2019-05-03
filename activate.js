var handleMouseOver = handleMouseOut = removeDomElement = undefined;

var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.hovered-item { border: 2px dashed #000; }';

handleMouseOver = event => event.target.classList.add('hovered-item');
handleMouseOut = event => event.target.classList.remove('hovered-item');
removeDomElement = event => {
	event.preventDefault();
	event.target.remove();
};

document.getElementsByTagName('head')[0].appendChild(style);
window.addEventListener('mouseover', handleMouseOver);
window.addEventListener('mouseout', handleMouseOut);
window.addEventListener('click', removeDomElement, true);