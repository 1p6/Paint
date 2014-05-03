var c;
var diameter;

function init(e)
{
diameter = 0.1; //in inches

var canvas = document.getElementById("canvas");
c = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
document.getElementById("size").value = radius;

canvas.addEventListener('mousedown', function(e)
{
	draw(e);
	canvas.addEventListener('mousemove', draw);
});
document.body.addEventListener('mouseup', function(e)
{
	canvas.removeEventListener('mousemove', draw);
	document.getElementById('img').src = canvas.toDataURL();
});
}

function setSize(value)
{
	diameter = value;
}

function draw(e)
{
	c.beginPath();
	c.arc(e.offsetX, e.offsetY, diameter*50, 0, Math.PI*2);
	c.fill();
}
