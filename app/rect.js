
var drawRect = function()
{
	context.fillStyle="silver";
	context.fillRect(0,0,w,h);
	context.fillStyle="green";
	context.fillRect(pad.xP,pad.yP,pad.wP,pad.hP);
	context.fillStyle="white";
	context.fillRect(0,0,border,h);
	context.fillRect(0,h-border,w,border);
	context.fillRect(w-border,0,border,h);
}
	
var gameBoard = function()
{
	setInterval('drawRect()',10);
}