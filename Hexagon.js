class Hexagon{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.hexagon = Constraint.create(options);
        World.add(world, this.sling);
      
    }

    fly(){
        this.hexagon.bodyA = null;
    }

    display(){
        
        if(this.hexagon.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
          
        }
    }
    
}