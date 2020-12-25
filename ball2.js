class Ball1{

    constructor(x,y,radious){
 var options={

    isStatic:false,
    restitution:1,
    friction:1,
    density:1.2 
}

        this.body=Bodies.circle(x,y,radious-50,options);
       this.radious=radious;
        World.add(world,this.body);
         
     
      
    }

    display(){

        var pos= this.body.position;
        rectMode(CENTER);
        fill("blue");
        stroke("black");
        circle(pos.x,pos.y,this.radious); 
        
        
    }
}