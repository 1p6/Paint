var c;
var diameter;
var canvas;
var color;

function init(e)
{
diameter = 0.2;
color = "rgb(0, 0, 0)";

canvas = document.getElementById("canvas");
c = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
document.getElementById("size").value = diameter;

canvas.addEventListener('mousedown', function(e)
{
	draw(e);
	canvas.addEventListener('mousemove', draw);
});
document.body.addEventListener('mouseup', function(e)
{
	canvas.removeEventListener('mousemove', draw);
	document.getElementById('save').href = canvas.toDataURL();
});
}

function clearCanvas(e)
{
	c.fillStyle = "#FFFFFF";
	c.fillRect(0, 0, canvas.width, canvas.height);
}

function setSize(value)
{
	diameter = value;
}

function draw(e)
{
	c.beginPath();
	c.arc(e.offsetX, e.offsetY, diameter*50, 0, Math.PI*2);
	c.fillStyle = color;
	c.fill();
}
