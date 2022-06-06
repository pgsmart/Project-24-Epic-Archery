class Arrow{
    constructor(x,y,w,h,angle){
        var options = {
            isStatic: true,
            density: 0.02
        }

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        this.angle = angle;
        this.collapse = false;
        this.image = loadImage("assets/arrow.png")
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,40);
    }
    display(){
        if(keyIsDown(LEFT_ARROW) && this.angle > 308){
            this.angle = this.angle - 1;
          }
          if(keyIsDown(RIGHT_ARROW) && this.angle < 398){
            this.angle = this.angle + 1;
          }
      
        push();
        translate(playerArcher.x - 50,playerArcher.y + 8);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y, this.w, this.h);
        pop();
    }
    displayAfter(){
        push();
        translate(playerArcher.x - 50,playerArcher.y + 8);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y, this.w, this.h);
        pop();
    }
    shoot(){
        var velocity = p5.Vector.fromAngle(this.angle * (3.14/180))
        velocity.mult(0.3);

        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x * 180/3.14,y:velocity.y* 180/3.14})
    }
}