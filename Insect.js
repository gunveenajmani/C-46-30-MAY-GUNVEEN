class Insect{
    constructor(x, y, width, height, img) {
        var options = {
         // isStatic:true,
            'restitution':2.5,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage(img)
        /*
var rand = Math.round(random(1,3))
        switch(rand){
          case 1:this.image = loadImage("sprites/insect1.png");break;
          case 2:this.image = loadImage("sprites/insect2.png");break;
          case 3:this.image = loadImage("sprites/insect3.png");break;
          default: break;
        }
        */
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}