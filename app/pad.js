var Paddle = function()
{
this.xP = 400 ;
this.yP = 0;
this.wP = 100;
this.hP = 10;
}

var paddleOnMouse= function(e)
{	
	var xp = e.clientX - canvas.offsetLeft;
	if(xp > border && xp < w-border - pad.wP){
	    pad.xP = xp;
	}
}
