class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image=loadImage("sprites/sling1.png")
        this.image1=loadImage("sprites/sling2.png")
        this.image2=loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body
    }
    
    
    display(){
        image(this.image,200,20)
        image(this.image1,170,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(4);
            stroke(48,22,8)
            if(pointA.x<220){
                strokeWeight(7)
                line(pointA.x-25, pointA.y, pointB.x-15, pointB.y);
                line(pointA.x-25,pointA.y,pointB.x+30,pointB.y)
                image(this.image2,pointA.x-30,pointA.y-15,15,30)
            }else{
            line(pointA.x+25, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y)
            image(this.image2,pointA.x-30,pointA.y-15,15,30)
            }
            pop()
        }
    }
    
}