window.keyState = {
	up: false,
	down: false,
	left: false, 
	right: false
}

var keyMap = {
	38: 'up',
	40: 'down',
	37: 'left',
	39: 'right'
}



document.onkeydown = function(e){
	if(keyMap[e.keyCode] && e.preventDefault) {
		e.preventDefault();
		if(keyState[keyMap[e.keyCode]] === true){
			return;
		}
		keyState[keyMap[e.keyCode]] = true;		
		console.log(keyState);
	}
};

document.onkeyup = function(e){
	if(keyMap[e.keyCode] && e.preventDefault) {
		e.preventDefault();
		if(keyState[keyMap[e.keyCode]] === false){
			return;
		}
		keyState[keyMap[e.keyCode]] = false;
		e.preventDefault();
	}
};


