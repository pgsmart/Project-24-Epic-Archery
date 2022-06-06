class PlayerArcher {
  constructor(x, y, width, height,angle) {

    const options = {
      isStatic: true
    };

 
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.angle = angle + 90;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);
    Matter.Body.setAngle(this.body, 40);
  }

  display() {
    
    if(keyIsDown(LEFT_ARROW) && this.angle > 220){
      this.angle = this.angle - 1;
    }
    if(keyIsDown(RIGHT_ARROW) && this.angle < 310){
      this.angle = this.angle + 1;
    }

    push();
    translate(280,245);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image,0,0, this.width, this.height);
    pop();
  }
}




