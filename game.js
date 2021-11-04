class Game {

	setup() {
		this.player = new Player()
		this.background = new Background()
		this.obstacles = []
        this.timer = new Timer()


	}

	constructor() {
		this.backgroundImages
		this.coinImage
        this.bezosImage
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/Space Background/Backgrounds/1.png'), x: 0, speed: 0.25 },
			{ src: loadImage('assets/Space Background/Star Layers/1.png'), x: 0, speed: 0.5 },
			{ src: loadImage('assets/Space Background/Star Layers/2.png'), x: 0, speed: 1 },
			{ src: loadImage('assets/Space Background/Star Layers/3.png'), x: 0, speed: 1.5 },
		]
        this.cloudImage = loadImage('assets/Space Background/3 Purple Clouds/2blue.png')

		this.playerImage = loadImage('assets/starman.png')
		this.coinImage = loadImage('assets/doge2.png')
        this.bezosImage = loadImage('assets/pngwing.com.png')
	}

	draw() {
		// console.log('game drawing')
		//clear()
		this.background.draw()
		this.player.draw()
        this.timer.draw()
		// here we add coins to the obstacles array
		// frameCount - this is provided by p5
		if (frameCount % 150 === 0) { //randomize
			this.obstacles.push(new Coin(this.coinImage))
			console.log(this.obstacles)
		}
		// iterate over the obstacles array and call the draw function 
		// for every obstacle inside
        if (frameCount % 500 === 0) { //randomize
			this.obstacles.push(new Obstacle(this.bezosImage))
			console.log(this.obstacles)
            
		}
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


