class Entity{
	constructor(posX, posY, width, height,color){
		this.x = posX;
		this.y = posY;
		this.width = width
		this.height = height
		this.velocityX = 0
		this.velocityY = 0
		this.color = color
	}

	draw(){}

	move(deltaTime){}
}