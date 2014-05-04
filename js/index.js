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

$(function(){
	$("#rslider, #gslider, #bslider").slider({
		max: 255,
		value: 255,
		range: "min",
		slide: slide,
		change: slide
	});
	$("#rslider").slider("value", 50);
});

function slide()
{
	red=$("#rslider").slider("value");
	green=$("#gslider").slider("value");
	blue=$("#bslider").slider("value");
	$("#r").innerHTML=red;
	$("#g").innerHTML=green;
	$("#b").innerHTML=blue;
	color = "rgb("+red+","+green+","+blue+")";
	$("#output").css("background-color", color);
}
