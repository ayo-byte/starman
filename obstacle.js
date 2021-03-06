class Obstacle {
	constructor(image) {
		this.image = image
		this.x = width
		this.y = (Math.random() * height) / 1.75
		this.width = 200
		this.height = 250
		this.direction = 1
		this.velocity = level*1

	}

	collision(playerInfo) {
		// console.log('collision', playerInfo)
		// get the middle of the player 
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2
		// get the middle of the obstacle
		const obstacleX = this.x + this.width / 2
		const obstacleY = this.y + this.height / 2
		// measure the distance between obstacle and player
		if (dist(obstacleX, obstacleY, playerX, playerY) > 100) {
			// this is not a collision
			return false
		} else {
			mode = -1;
			gameoverSound.play();
			return true 
		}
	}

	draw() {
		//this.y += this.velocity

		this.x--
		if (this.y >= height){
			this.direction = -1
		}
		if (this.y <= 0){
			this.direction = +1
		}
		if (this.direction === -1){
			this.y = this.y-this.velocity
		}
		if (this.direction === +1){
			this.y = this.y+this.velocity
		}
		image(this.image, this.x, this.y, this.width, this.height)
	}
	
}

class Coin {
	constructor(image) {
		this.image = image
		this.x = width
		this.y = (Math.random() * height) / 1
		this.width = 40
		this.height = 45
	}

	collision(playerInfo) {
		
		// console.log('collision', playerInfo)
		// get the middle of the player 
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2
		// get the middle of the obstacle
		const obstacleX = this.x + this.width / 2
		const obstacleY = this.y + this.height / 2
		// measure the distance between obstacle and player
		if (dist(obstacleX, obstacleY, playerX, playerY) > 50) {
			// this is not a collision
			return false
		} else {
			// 
			// game.player.score += 10
			// console.log(game.player.score)
			
			coins += 1 //Timer.millisecond() +1000
			//console.log(typeof score, score)
			coinSound.play()
			return true
		}
			
	}

	draw() {
		this.x-- 
		image(this.image, this.x, this.y, this.width, this.height)
	}
}
