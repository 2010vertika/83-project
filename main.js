//var current_position_of_mouse_X,current_position_of_mouse_Y;
//var current_position_of_touch_X,current_position_of_touch_Y;
//var last_position_of_mouse_X, last_position_of_mouse_Y;
//var last_position_of_touch_X, last_position_of_touch_Y;

canvas =
document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width=screen.width;
var new_width = screen.width-70;
var new_height = screen.height-300;

if(width<992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}



canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color= document.getElementById("color").value;
    width= document.getElementById("Width_line").value;
    mouseEvent="mouseDown";
}


canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) 
{
mouseEvent="mouseUp";
}


canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) 
{
    current_position_of_mouse_X= e.clientX- canvas.offsetLeft;
    current_position_of_mouse_Y= e.clientY- canvas.offsetTop;
    
    if (mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= Width_line;
        ctx.moveTo(last_position_of_mouse_X,last_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y);
        ctx.stroke();
    }
    last_position_of_mouse_X= current_position_of_mouse_X;
    last_position_of_mouse_Y= current_position_of_mouse_Y;
}


canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart (e) {
    color = document.getElementById("color").value;
    width = document.getElementById("Width_line").value;

    last_position_of_touch_X= e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_Y= e.touches[0].clientY - canvas.offsetTop;
    
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove (e) {


    current_position_of_touch_X= e.touches[0].clientX - canvas.offsetLeft;
  current_position_of_touch_Y= e.touches[0].clientY - canvas.offsetTop;

  ctx.beginPath();
  ctx.strokeStyle= color;
  ctx.lineWidth= Width_line;
  ctx.moveTo(last_position_of_touch_X,last_position_of_touch_Y);
  ctx.lineTo(current_position_of_touch_X,current_position_of_touch_Y);
  ctx.stroke();

  last_position_of_touch_X = current_position_of_touch_X;
  last_position_of_touch_Y = current_position_of_touch_Y;
    
}
function Clear_drawing() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}