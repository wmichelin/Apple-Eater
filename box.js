function box(origin) {
		var self = this;

		self.consumable = false;


		if(origin) {
			self.x = origin.x;
			self.y = origin.y;
		}
		else {
			self.x = 0;
			self.y = 0;
		}

		self.height = 50;
		self.width = 50;


		self.xVelocity = 5;
		self.yVelocity = 10;

		self.speed = 5;

		self.move = function() {
			self.x += self.xVelocity;
			self.y += self.yVelocity;
			self.checkBounds();
		}

		self.checkMove = function() {
			self.xVelocity = window.keyState.right ? self.speed : 0;
			self.yVelocity = window.keyState.down ? self.speed : 0;

			if(self.xVelocity === 0){
				self.xVelocity = window.keyState.left ? self.speed*-1 : 0;
			}

			if(self.yVelocity === 0){
				self.yVelocity = window.keyState.up ? self.speed*-1 : 0;
			}
		}


		self.render = function() {
			self.checkMove();
			self.move();
			context.fillStyle = "#FF0000";
			context.fillRect(self.x, self.y, self.width, self.height);
		}

		self.checkBounds = function() {
			if (self.x > (canvas.width - self.width) || self.x < 0) {
				self.xVelocity *= -1;
			}

			if (self.y > (canvas.height  - self.height) || self.y < 0) {
				self.yVelocity *= -1;
			}
		}
	}