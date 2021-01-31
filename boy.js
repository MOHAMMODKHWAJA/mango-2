class boy extends Baseclass{
    constructor(x,y){
       super(x,y,400,400); 
       this.image= loadImage("Plucking mangoes/boy.png");
      // this.image.scale=2.0;
    }
    display() {
  //this.body.position.x = mouseX;
  //      this.body.position.y = mouseY;
        super.display();
      }
    }
