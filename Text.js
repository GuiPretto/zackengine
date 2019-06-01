class Text extends Entity{
	constructor(text, posX, posY, color = 'gray', align = 'left', font = "30px Arial", stroke = false){
		super(posX, posY);
		this.color = color;
		this.text = text;
		this.font = font;
		this.stroke = stroke;
		this.align = align;
	}

	draw(){
		Utils.drawText(this.x, this.y, this.text, this.font, this.align, this.color, this.stroke);
	}

	move(deltaTime){
		
	}
}