function init(e)
{
var radius = 10 //in pixels

var canvas = document.getElementById("canvas");
var c = canvas.getContext('2d');
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
	radius = value;
}

function draw(e)
{
	c.beginPath();
	c.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
	c.fill();
}