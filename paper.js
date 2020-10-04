class Paper{
 constructor(x,y,r){
     var option={

'restitution':0.3,
'friction':0.5,

'density':1.2

     }
this.body=Bodies.circle(200,100,50,option);
this.r=50/2;
World.add(world,this.body);

 }
 display(){
    var pos=this.body.position;
     fill("red");
     strokeWeight(4);
   
     ellipse(pos.x,pos.y,this.r);
 }
}