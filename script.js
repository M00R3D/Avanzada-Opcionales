const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let drawing = false;let var_x = 0;let var_y = 0;

ctx.strokeStyle = "blue";
ctx.lineWidth = 5; 
ctx.lineCap = "round";

myCanvas.addEventListener("mousedown", (e) => {
    drawing = true; 
        var_x = e.clientX - myCanvas.getBoundingClientRect().left;
        var_y = e.clientY - myCanvas.getBoundingClientRect().top;
});

myCanvas.addEventListener("mousemove", (e) => {
    if (!drawing) return; 
    const x = e.clientX - myCanvas.getBoundingClientRect().left;
    const y = e.clientY - myCanvas.getBoundingClientRect().top;
        ctx.beginPath();
        ctx.moveTo(var_x, var_y);  ctx.lineTo(x, y);
        ctx.stroke();
    var_x = x; var_y = y;
});
myCanvas.addEventListener("mouseup", () => {drawing = false;});
myCanvas.addEventListener("mouseleave", () => {drawing = false;});
