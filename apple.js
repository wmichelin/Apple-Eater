function apple(origin) {
		var self = this;

		self.consumable = true;
		self.image = document.getElementById('apple');


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

		self.move = function() {
			self.x += self.xVelocity;
			self.y += self.yVelocity;
			self.checkBounds();
		}

		self.render = function() {
			context.drawImage(self.image, self.x,self.y,self.height, self.width);
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