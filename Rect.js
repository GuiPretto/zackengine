class Rect extends Entity{
	constructor(posX, posY, width, height,color){
		super(posX, posY, width, height,color);

	}

	draw(){
		Utils.drawRect(this.x, this.y, this.width, this.height, this.color);

	}

	move(deltaTime){
		
	}
}