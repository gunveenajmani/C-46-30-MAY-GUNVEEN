class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 180, 20);
        image(this.sling2, 150, 20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x<190){
            strokeWeight(4);
            stroke(48, 22, 8);
            line(pointA.x-25, pointA.y, pointB.x-20, pointB.y);
            stroke(84, 39, 15);
            line(pointA.x-25, pointA.y, pointB.x+20, pointB.y-15);
            image(this.sling3, pointA.x-25, pointA.y-20, 15, 35);
            }
            else{
                stroke(48, 22, 8);
                line(pointA.x+25, pointA.y, pointB.x-20, pointB.y);
                stroke(84, 39, 15);
                line(pointA.x+25, pointA.y, pointB.x+20, pointB.y-15);
                image(this.sling3, pointA.x+25, pointA.y-10, 15, 35);

            }
            pop();
            
        }
    }
    
}