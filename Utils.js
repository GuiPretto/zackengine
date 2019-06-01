class Utils {
	
	static drawRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor = "white") {
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
	}

	static clearScreen() {
		Utils.drawRect(0,0, World.canvas.width,World.canvas.height, 'black');
	}

	static drawText(topLeftX, topLeftY, text, font, align, fillColor, stroke){
		World.canvasContext.font = font;
		World.canvasContext.fillStyle = fillColor;
		World.canvasContext.textAlign = align;
		if (stroke == true) {
			World.canvasContext.strokeText(text, topLeftX, topLeftY);
		} else {
			World.canvasContext.fillText(text, topLeftX, topLeftY);
		}
		
	}
	static drawImg(path = 'df.jpg',x, y, width, height){
		var aux = new Image();
		aux.src = path;

		World.canvasContext.drawImage(aux, x, y, width, height);
		
		

	}

	// static actionDown(e){
	// 	alert(e);
	// }

	// static addControls(object, delta, factor = 1){
	// 	World.canvas.addEventListener("keydown", keyDown, false);
	// 	function keyDown(e) {
	// 		Input.action(object,e, delta);
	// 	}
	// }

}
