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

function onMouseMove(event){

    console.log(event)
    
    /*if(painting == true){ //드래그 중

    }else if(painting == false){
        context.beginPath();

    }*/
}

if(canvas){
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
}