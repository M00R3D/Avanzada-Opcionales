const myCanvas = document.getElementById("myCanvas");const ctx = myCanvas.getContext("2d");

myCanvas.addEventListener('mousedown', (event) => {
    const rect = myCanvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    dibujar(x, y);
});

function dibujar(x, y) 
{
    ctx.fillStyle = "black"; 
    ctx.fillRect(x, y, 3, 3);
}
