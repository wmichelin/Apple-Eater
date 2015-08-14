	
document.addEventListener("DOMContentLoaded", function(event) { 
	window.canvas = document.getElementById("main");
	window.context = canvas.getContext("2d");

	function detectCollisions() {
        for(var i = 0; i < gameObjects.length; i++){
        	// gameObjects[i].value.render();
        	for(var j = 0; j < gameObjects.length; j++){
        		if(i !== j) {
	        		if (((gameObjects[i].value.x + gameObjects[i].value.width) >= (gameObjects[j].value.x)) && ((gameObjects[i].value.x + gameObjects[i].value.width) < (gameObjects[j].value.x + gameObjects[j].value.width ))){
	        			if (((gameObjects[i].value.y + gameObjects[i].value.height) >= (gameObjects[j].value.y)) && ((gameObjects[i].value.y + gameObjects[i].value.height) < (gameObjects[j].value.y + gameObjects[j].value.height ))){
	        				if(gameObjects[i].value.consumable) {
	        					//remove it
	        					gameObjects.splice(i, 1);
	        					createApple();
	        					break;
	        				} else if(gameObjects[j].value.consumable){
	        					//remove it
	        					gameObjects.splice(j, 1);
	        					createApple();
	        					break;
	        				}
	        			}
	        		}
    			}
        		// console.log(gameObjects[i].value.x + gameObjects[i].value.width);
        	}
        }
	
	}

	gameObjects = [
	{
		key: 'box',
		value: new box()
	}];


	function createApple(){
		var x = Math.floor(Math.random() * canvas.width);  
		var y = Math.floor(Math.random() * canvas.height);  
		gameObjects.unshift({
			key: 'apple',
			value: new apple({x: x, y: y})
		});
	}

	for(var i = 0; i < 20; i++){
		createApple();
	}

	

	setInterval(function(){
        context.clearRect(0, 0, canvas.width, canvas.height);

        for(var i = 0; i < gameObjects.length; i++){
        	gameObjects[i].value.render();
        }

        detectCollisions();
        
	}, 10);





});
