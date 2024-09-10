const luces = ['rojo.jpg', 'verde.png', 'amarillo.jpg'];
let indice = 0;

function cambiarLuz() {
    const imagen = document.getElementById('light');
    imagen.src = luces[indice];
    
    if (indice === 0) {
        // De rojo pasa a verde
        indice = 1;
    } else if (indice === 1) {
        // De verde pasa a amarillo
        indice = 2;
    } else {
        // De amarillo pasa a rojo
        indice = 0;
    }
}

setInterval(cambiarLuz, 2000);
