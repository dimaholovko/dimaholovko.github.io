var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function colisionCheck(){
	if (x > canvas.width || x < 0){
		dx*= -1;
	}
	if (y > canvas.height || y < 0){
		dy*= -1;
	}
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    colisionCheck();
    if ( document.getElementById("a").value > 0){
		dx*= document.getElementById("a").value / Math.abs(dx);
		dy*= document.getElementById("a").value / Math.abs(dy);}
}

setInterval(draw, 10);