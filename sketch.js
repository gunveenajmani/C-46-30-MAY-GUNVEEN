const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var w1, w2, w3, w4, w5, w6;
var w7,w8,w9,w10;
var i1, i2, i3;
var girl;
var bg1;
var immunity1, immunity2, immunity3;
var health=0;
function preload() {
   bg1 = loadImage("sprites/bg1.png")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
     
    w1 = new Wall(150, 70, 50, 300)
    w2 = new Wall(350, 170, 50, 300)
    w3 = new Wall(550, 270, 50, 300)
    w4 = new Wall(750, 470, 300, 30)
    w5 = new Wall(750, 650, 300, 30)
    w6 = new Wall(1050, 400, 50, 300)
    w7 = new Wall(100, 380, 300, 30)
    w8 = new Wall(500, 600, 300, 30)
    w9 = new Wall(1000, 200, 300, 30)
    w10 = new Wall(800, 200, 50, 300)


    girl = new Girl(50, 80, 50, 100);

    i1 = new Insect(750, 550, 70, 70,"sprites/insect1.png");
    i2 = new Insect(500, 200, 70, 70,"sprites/insect2.png");
    i3 = new Insect(200, 200, 70, 70,"sprites/insect3.png");

    immunity1 = new Immunity(200, 300, 40, 40);
    immunity2 = new Immunity(500, 500, 40, 40)
    immunity3 = new Immunity(1000, 600, 40, 40)

}

function draw(){
    background(bg1);
    textSize(20);
    fill("white")
    text("HEALTH SCORE:"+health, 1000,30)
    textSize(10)
    text("STARTING POINT", 10,20);
    Engine.update(engine);
    
    w1.display();
    w2.display();
    w3.display();
    w4.display();
    w5.display();
    w6.display();
    w7.display();
    w8.display();
    w9.display();
    w10.display();

    girl.display();

    i1.display();
    i2.display();
    i3.display();

if(detectCollision(girl, immunity1)){
   immunity1.disappear();  
   immunity1.score();
}
else{
immunity1.Visibility= 255;
immunity1.display();}  

if(detectCollision(girl, immunity2)){
    immunity2.disappear();
    immunity2.score();
    
 }
 else{
    immunity2.Visibility= 255; 
    immunity2.display();}

 if(detectCollision(girl, immunity3)){
    immunity3.disappear();
    immunity3.score();
 }
 else{
    immunity3.Visibility= 255; 
    immunity3.display();}

   



    
}
/*
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
*/

function keyPressed(){
    if(keyCode===LEFT_ARROW){
     girl.body.position.x -= 50;
    }
    if(keyCode===RIGHT_ARROW){
    girl.body.position.x += 50;
    }
    if(keyCode===UP_ARROW){
        girl.body.position.y -= 50;
    }
    if(keyCode===DOWN_ARROW){
        girl.body.position.y += 50;
    }
}

function detectCollision(a,b){

    aPosition=a.body.position
    bPosition=b.body.position
    
    var distance=dist(aPosition.x, aPosition.y, bPosition.x, bPosition.y)
   
        if(distance<=(a.width+b.width)/2)
      { 
       return true;
//        console.log("true")
      }
   
}
