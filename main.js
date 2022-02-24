var mouse_event = "empty";
var last_position_x;
var last_position_y;

canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");

color="red";
width_line=1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){

    //
    color = document.getElementById("colour").value;
    width_line = document.getElementById("line_width").value;
    //

    mouse_event= "mouseDown";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouse_event== "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= width_line;
  
    console.log("last position of x and y coordinates = ");
    console.log("x= "+ last_position_x+ "y= "+ last_position_y);
    ctx.moveTo(last_position_x,last_position_y);

    console.log("current position of x and y coordinates = ");
    console.log("x= "+ current_position_of_x+ "y= "+ current_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);

    ctx.stroke();
    }

    last_position_x = current_position_of_x;
    last_position_y = current_position_of_y;
}


canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){

    

    mouse_event= "mouseleave";

}


canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){

    

    mouse_event= "mouseUP";

}

function cleararea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
