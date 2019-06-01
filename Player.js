class Player extends Entity{
	constructor(path, posX, posY, width, height){
		super(posX, posY, width, height);
		this.path = path;
	}

	draw(){
		Utils.drawImg(this.path,this.x, this.y, this.width, this.height);
	}

	move(deltaTime){}
}