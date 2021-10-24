const canvas = document.getElementById("jsCanvas")
const context = canvas.getContext("2d");

let painting = false;

function startPainting(){
    console.log("start painting");
    painting = true;
}

function stopPainting(){
    console.log("stop painting")
    painting = false;
}

function onMouseMove(){
    if(painting == true){

    }else if(painting == false){
        
    }
}

if(canvas){
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
}