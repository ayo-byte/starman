class Player {

	constructor() {
		this.score = 0;
		this.velocity = 0;
		//this.gravity = 0.2;
		this.width = 150;
		this.height = 70;
		this.x = 30;
		this.y = height - this.height -300;
	}

	draw() {
		// this pushes the player down
		//this.velocity += this.gravity
		this.y += this.velocity
		// if bb8 moves lower than the bottom of the canvas we need to correct
		// his position
		if (this.y >= height - this.height) {
			// reset to his starting position
			this.y = height - this.height;
		}
		image(game.playerImage, this.x, this.y, this.width, this.height)
	}

	jump() {
		console.log('jump 🚁')
		this.velocity = - 1.4
	}
	moveDown(){
		this.velocity = 1.4
	}
}