const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
const colorpicker = document.getElementById("color-picker");

// canvas.addEventListener("mousedown", onMouseDown);

let previousPosition = null;
let drawingColor = "";
function onMouseDown(e){
    previousPosition= [e.clientX,e.clientY];
    c.strokeStyle = drawingColor;
    c.lineWidth = 10;
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mouseup",onMouseUp);
    

}

function onMouseMove(e){
    let currentPosition = [e.clientX,e.clientY];
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.lineCap = "round";
    c.lineJoin = "round";
    c.stroke();
    c.closePath();
    previousPosition = currentPosition ;
}
function onMouseUp(e){
    
    canvas.removeEventListener("mousemove", onMouseMove);
}

const formState= {
    strokewidth: 3,
    strokestyle:"black"
}
const form = document.querySelector(".form");

function toggleMenu(){
    form.classList.toggle("hide");
}

function onInput(element) {
    const newValue = element.value;
    if (element.name === "strokewidth")
        formState[element.name] = parseInt(newValue);
    else
        formState[element.name] = newValue;

    console.log(formState);
}





