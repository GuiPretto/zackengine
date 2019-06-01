class Ball extends Entity{
	constructor(path, posX, posY, width, height){
		super(posX, posY, width, height);
		this.path = path;
		this.velocityX = 0.2;
		this.velocityY = 0.3;
	}

	draw(){
		Utils.drawImg(this.path,this.x, this.y, this.width, this.height);
	}

	move(deltaTime){
		this.x += this.velocityX * deltaTime;
		this.y += this.velocityY * deltaTime;

	}
}