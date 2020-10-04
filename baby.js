class Baby{
    constructor(){
        var option={
            'isStatic':true,
            'setVelocity':5
        }
        this.body=Bodies.rectangle(200,550,300,300,option);
  
        this.width = 200;
        this.height = 200;
        this.body.velocity.x=5;
        this.image=loadImage("boy10.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
       
        image(this.image,pos.x,pos.y,this.width , this.height );
    }
}