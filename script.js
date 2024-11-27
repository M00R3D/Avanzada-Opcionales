const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let drawing = false;let var_x = 0;let var_y = 0;
let linea="flaca";
let timeLinea=5;
ctx.strokeStyle = "blue";
ctx.shadowColor = "blue";
// ctx.lineWidth = 4; 
ctx.lineCap = "round";
// ctx.setLineDash([2, 19]);

myCanvas.addEventListener("mousedown", (e) => {
    drawing = true; 
        // ctx.shadowBlur=4;
        var_x = e.clientX - myCanvas.getBoundingClientRect().left;
        var_y = e.clientY - myCanvas.getBoundingClientRect().top;
    });
    
    myCanvas.addEventListener("mousemove", (e) => {
        if (!drawing) return; 
        if(timeLinea>0){timeLinea=timeLinea-1;}else
        {
            switch (linea) {
                case "flaca":
                    linea="gorda";
                    ctx.lineWidth=2;
                    timeLinea=1;
                    break;
            
                case "gorda":
                    linea="flaca";
                    ctx.lineWidth=5;
                    timeLinea=2;
                    break;
            }
        }
        const x = e.clientX - myCanvas.getBoundingClientRect().left;
        const y = e.clientY - myCanvas.getBoundingClientRect().top;
        ctx.beginPath();
        ctx.moveTo(var_x, var_y);  ctx.lineTo(x, y);
        ctx.stroke();
    var_x = x; var_y = y;
});
myCanvas.addEventListener("mouseup", () => {drawing = false;});
myCanvas.addEventListener("mouseleave", () => {drawing = false;});