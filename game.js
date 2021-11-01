class Game {

	setup() {
		this.player = new Player()
		this.background = new Background()
		this.obstacles = []
	}

	constructor() {
		this.backgroundImages
		this.coinImage
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/galaxy.jpeg'), x: 0, speed: 3 },
			//{ src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
			//{ src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
			//{ src: loadImage('assets/background/plx-4.png'), x: 0, speed: 3 },
			//{ src: loadImage('assets/background/plx-5.png'), x: 0, speed: 4 }
		]
		this.playerImage = loadImage('assets/starman.png')
		this.coinImage = loadImage('assets/doge.png')
	}

	draw() {
		// console.log('game drawing')
		clear()
		this.background.draw()
		this.player.draw()
		// here we add coins to the obstacles array
		// frameCount - this is provided by p5
		if (frameCount % 10 === 0) {
			this.obstacles.push(new Obstacle(this.coinImage))
			console.log(this.obstacles)
		}
		// iterate over the obstacles array and call the draw function 
		// for every obstacle inside

		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

		this.obstacles = this.obstacles.filter(obstacle => {
			if (obstacle.collision(this.player) || obstacle.x < 0 - obstacle.width) {
				return false
			} else {
				return true
			}
		})
	}
}
