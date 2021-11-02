const game = new Game();

function preload() {
	game.preload()
}
function setup() {
	createCanvas(800, 450)
	game.setup()
}
function draw() {
	game.draw();
	//keyPressed();
	//totalTime = millies();
}
function keyPressed() {
	if (keyCode === 38) {
		// make the player jump
		game.player.jump()
	} //else if (keyCode === 40{
		//game.player.down()
		
	//}
}

//Counters
//let score = 0;
//let totalTime;
