class mango extends Baseclass{
    constructor(x,y){
       super(x,y,50,50,(options)); 
       var options = {
        isStatic: true
    }
       this.image= loadImage("Plucking mangoes/mango.png");
      // this.image.scale=2.0;
     
    }
    display() {
     
        
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        super.display();
      }
    }