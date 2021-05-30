class Immunity{
    constructor(x, y, width, height) {
        var options = {
          isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/immunity.png");
        World.add(world, this.body);
        this.Visibility =255;
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
      
      disappear(){
      
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
      score(){
        if(this.Visibility===0){
          health = health +50;

        }
      }
    
}
/*
if(this.body.speed < 3){
  super.display();
 }
 else{
   World.remove(world, this.body);
   push();
   this.Visiblity = this.Visiblity - 5;
   tint(255,this.Visiblity);
   image(this.image, this.body.position.x, this.body.position.y, 50, 50);
   pop();
 }

 */