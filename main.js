const game = new Game();
let mode = 0;
let score = 0;
let coins = 0;
let startTime = 0;

function preload() {
	game.preload()
}
function setup() {
	createCanvas(800, 450);
	mode = 0;
	game.setup()
}
function draw() {
	clear();
	if (mode === 0){
		text("PRESS SPACE TO GO TO SPACE", 160, 225)
		fill(255)
		textSize(40)
	} 
	if (mode === 1){
		game.draw();
	}
	if (mode === -1){
		text("GAME OVER\nScore: " + score.toFixed(0), 160, 225)
		fill(255)
		textSize(40)
	} 	
}

function keyPressed() {
	if (keyCode === 32){
		mode = 1
		startTime = millis()

		//console.log(mode)
	}
	else if (keyCode === 38) {
		// make the player jump
		game.player.jump()
	} else if (keyCode === 40){
		game.player.moveDown()
		
	}
}


//TODO
//coins and obstacles dont collide
//add score via DOM 
//add coins to score
//define losing (giant bezos head that needs to be avoided or rocket with bezos face?)
//add start button
//game over screen
//EXTRAS
//GIF of player with fire
//score counter (best score)

