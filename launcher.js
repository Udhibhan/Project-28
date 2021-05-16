class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    display(){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        push();

        stroke(48,22,8);    

        pop();
    }
 }
