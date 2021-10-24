const canvas = document.getElementById("jsCanvas")
const context = canvas.getContext("2d");

canvas.width = 500
canvas.height = 500

canvas.strokeStyle = "black";

let painting = false;

function startPainting(){
    console.log("start painting");
    painting = true;
}

function stopPainting(){
    console.log("stop painting")
    painting = false;
}

function onMouseMove(event){

    const offsetX = event.offsetX;
    const offsetY = event.offsetY;

    if(painting == true){ //드래그 중
        context.lineTo(offsetX, offsetY);
        context.stroke();
    }else if(painting == false){
        context.beginPath();
        context.moveTo(offsetX, offsetY)
    }
}

if(canvas){
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
}