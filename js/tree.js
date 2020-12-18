class Tree{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.BBwidth=500;    // Bottom Body width
		this.SBheight=400;   // Side wall ( left and right) height
		this.Bthick=20;		 // height of bottom body and width of side walls
		this.angle=0;	     

		this.image = loadImage('images/tree.png')
		
	
		//creating bottom body(BB)
		this.BB=Bodies.rectangle(this.x, this.y, this.BBwidth/16, this.Bthick, {isStatic:true})

		//creating left wall(LW)
		//this.LW=Bodies.rectangle(0, this.y-this.SBheight/2, this.Bthick, this.BBheight, {isStatic:true})
		
		//creating right wall(RW)
		//this.RW=Bodies.rectangle(this.x+this.BBwidth/2, this.y-this.SBheight/2, this.Bthick, this.SBheight, {isStatic:true})

		World.add(world, this.BB)
		//World.add(world, this.LW)
		//World.add(world, this.RW);

	}
	display(){
		
			
	
			var posBottom=this.BB.position;
push()
			fill('red')
			//rectMode(CENTER)
			//rect(posBottom.x, posBottom.y,this.BBwidth/16, this.Bthick)
		//	rect(posBottom.x, posBottom.y-80,this.BBwidth, this.SBheight*1.5); 

			imageMode(CENTER)
			image(this.image,posBottom.x, posBottom.y-80,this.BBwidth, this.SBheight*1.5); 
		
			//adjust accordingly
			pop()
	}

}