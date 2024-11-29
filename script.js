const lienzo = document.getElementById("clockCanvas");
const contexto = lienzo.getContext("2d");

const radioReloj = lienzo.width / 2;
const centroX = lienzo.width / 2;
const centroY = lienzo.height / 2;

function dibujarReloj() {
    contexto.clearRect(0, 0, lienzo.width, lienzo.height);

    contexto.beginPath();
    contexto.arc(centroX, centroY, radioReloj - 10, 0, Math.PI * 2);
    contexto.fillStyle = "white";
    contexto.fill();
    contexto.lineWidth = 10;
    contexto.strokeStyle = "black";
    contexto.stroke();
    contexto.closePath();

    dibujarNumeros();

    const ahora = new Date();
    dibujarManecillas(ahora);

    contexto.beginPath();
    contexto.arc(centroX, centroY, 5, 0, Math.PI * 2);
    contexto.fillStyle = "black";
    contexto.fill();
    contexto.closePath();
}

function dibujarNumeros() {
    contexto.font = `${radioReloj * 0.1}px Arial`;
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    for (let num = 1; num <= 12; num++) {
        const angulo = (Math.PI / 6) * (num - 3);
        const x = centroX + Math.cos(angulo) * (radioReloj - 40);
        const y = centroY + Math.sin(angulo) * (radioReloj - 40);
        contexto.fillStyle = "black";
        contexto.fillText(num.toString(), x, y);
    }
}

function dibujarManecillas(ahora) {
    const horas = ahora.getHours() % 12;
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    dibujarManecilla(
        (Math.PI / 6) * horas + (Math.PI / 360) * minutos,
        radioReloj * 0.5,
        8,
        "black"
    );

    dibujarManecilla(
        (Math.PI / 30) * minutos + (Math.PI / 1800) * segundos,
        radioReloj * 0.7,
        6,
        "gray"
    );

    dibujarManecilla((Math.PI / 30) * segundos, radioReloj * 0.8, 2, "red");
}

function dibujarManecilla(angulo, longitud, grosor, color) {
    contexto.beginPath();
    contexto.moveTo(centroX, centroY);
    contexto.lineTo(
        centroX + Math.cos(angulo - Math.PI / 2) * longitud,
        centroY + Math.sin(angulo - Math.PI / 2) * longitud
    );
    contexto.lineWidth = grosor;
    contexto.strokeStyle = color;
    contexto.lineCap = "round";
    contexto.stroke();
    contexto.closePath();
}

setInterval(dibujarReloj, 1000);
dibujarReloj();
