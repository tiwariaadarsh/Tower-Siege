class Box extends BaseClass {
    constructor(x, y, width, height){
      isStatic: true
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  display(){
  if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     pop();
   }
  
  }
  