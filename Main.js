window.onload = function() {
	var gameWorld = new World();
	gameWorld.init();

	// var placar = new Placar();
	var textP1 = new Text(Placar.p1, 30, 40, 'white', 'center');
	var textP2 = new Text(Placar.p2, World.canvas.width - 30, 40, 'white', 'center');
	var p1 = new Player('images/p1.png', 20,World.canvas.height/2 - 60,30,140);
	var p2 = new Player('images/p2.png', World.canvas.width - 50, World.canvas.height/2 - 60, 30, 140);
	var ball = new Ball('images/ball.png',World.canvas.width/2, World.canvas.height/2 - 15, 29, 29);
	
	gameWorld.addObject(p1);
	gameWorld.addObject(p2);
	gameWorld.addObject(ball);
	gameWorld.addObject(textP1);
	gameWorld.addObject(textP2);
	
}