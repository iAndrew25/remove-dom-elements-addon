let style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.hovered-item { border: 2px dashed #000; }';


let handleMouseOver = event => {
	event.target.classList.add('hovered-item');
}

let handleMouseOut = event => {
	event.target.classList.remove('hovered-item');
}

let removeDomElement = event => {
	event.preventDefault();

	event.target.remove();	
}

document.getElementsByTagName('head')[0].appendChild(style);
window.addEventListener('mouseover', handleMouseOver);
window.addEventListener('mouseout', handleMouseOut);
window.addEventListener('click', removeDomElement, true);

//window.removeEventListener('mouseover', handleMouseOver);
//window.removeEventListener('mouseout', handleMouseOut);
//window.removeEventListener('click', removeDomElement, true);