const pencil = document.getElementById("freehand");
let isPencilActive = false;
freehand.addEventListener("click", onPencilClick);

colorpicker.addEventListener("change", () => {
    drawingColor = colorpicker.value;
});
 
function onPencilClick(){
    freehand.classList.toggle("active");
    isPencilActive = !isPencilActive;
    if(isPencilActive){
        canvas.style.cursor="crosshair";
        canvas.addEventListener("mousedown", onMouseDown);
    }
    else{
        canvas.style.cursor="auto";
        canvas.removeEventListener("mousedown", onMouseDown);
    }

}