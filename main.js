const game = new Game();
let mode = 0;
let score = 0;
let coins = 0;
let startTime = 0;
let level = 1;
let coinSound;
let gameoverSound;

let bestscore = 0;
let bestscoreElement = document.querySelector("#score")

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
		text("GAME OVER\nScore: " + score.toFixed(0) + "\nPRESS SPACE TO RESTART", 160, 225)
		fill(255)
		textSize(40)
		if (score > bestscore) {
			bestscore = score;
			bestscoreElement.innerHTML = bestscore.toFixed(0) 
		}
	} 	
}

function keyPressed() {
	if (keyCode === 32){
		mode = 1
		startTime = millis()
		coins = 0;

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
//EXTRAS
//GIF of player with fire
//score counter (best score)

