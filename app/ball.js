var Ball= function(){
this.x=20+Math.random()*350;
this.y=20+Math.random()*750;
this.r=w/20;
this.xSpeed=1;
this.ySpeed=1;
this.dx=Math.round(Math.random())*2-1;
this.dy =Math.round(Math.random())*2-1;
this.hitCount = 0;
this.active = true;
};

Ball.prototype.drawCir = function (color) 
{
		context.fillStyle = color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        context.fill();
}

	
Ball.prototype.colCir = function () 
{	
	this.x -= this.xSpeed *this.dx;
	this.y -= this.ySpeed*this.dy;
	
    if (this.y < -50) 
	{
        this.active = false;
		return;
    }
    
	if(this.x <= border+this.r || this.x >= w-border - this.r)
	{
	this.dx =- this.dx;
	}
	if(this.y >= h - border - this.r)
	{
	this.dy =- this.dy;
	}

	if (this.y <= pad.yP + 30 && this.x > pad.xP && this.x <= pad.xP + 100)
	{
	    
	this.dy =- this.dy;
		if (this.hitCount === 10)
	 {
	    this.r = this.r / 4
	    this.hitCount = 0;
	 }

	 this.xSpeed = this.xSpeed*2
	 this.ySpeed = this.ySpeed*2
	 this.hitCount++;
	 }
	 
	 if(this.y>=0&&this.y<=pad.hP&&this.x == pad.xP||this.y>=0&&this.y<=pad.hP&&this.x == pad.xP+pad.wP)
	 {
		this.x= -this.x;
	 }

	
}

function GameOver(ball1,ball2,ball3)
{
	
	if(ball1.y<0&&ball2.y<0&&ball3.y<0)
    { 
	  document.getElementById("Text").innerHTML= "GAME OVER<br>"
	  clearInterval(myVar);
	   
	}
}

function checkCollsion(ball1, ball2){
	
	var dx = ball1.x-ball2.x;
	var dy = ball1.y-ball2.y;
	if (Math.sqrt(dx*dx+dy*dy)<ball1.r+ball2.r)
	{
	var newXSpeed1= Math.abs(2*ball2.xSpeed+ball2.r)
	var newXSpeed2= Math.abs(2*ball1.xSpeed+ball1.r)

	ball1.x -= newXSpeed1;
	ball2.x += newXSpeed2;
	
	}

}


function ballToball(ball1,ball2,ball3)
{
	checkCollsion(ball1, ball2);
	checkCollsion(ball1, ball3);
	checkCollsion(ball2, ball3);
}

function pingpong(context) {

    ballBlue = new Ball();
	ballRed = new Ball();
	ballGreen = new Ball();
    if (ballBlue.active)
    {
        setInterval('ballBlue.drawCir("blue")', 10);
		setInterval('ballBlue.colCir("blue")', 10);
	}
	if(ballRed.active)
	{
		setInterval('ballRed.drawCir("red")',10);
		setInterval('ballRed.colCir("red")',10);
	}
	if(ballGreen.active)
	{
		setInterval('ballGreen.drawCir("green")',10);
		setInterval('ballGreen.colCir("green")',10);
	}
	
	
	setInterval('GameOver(ballBlue,ballRed,ballGreen)',10);
	setInterval('ballToball(ballBlue,ballRed,ballGreen)',10);
	
	
}