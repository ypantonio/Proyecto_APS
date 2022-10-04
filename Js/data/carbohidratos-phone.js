// en esta sección se agrega los objetos de la base de datos
// YASMIN ANTONIO
window.onload = function () {
    // Variables
    const imagen = [
        'img/carbohidratos/celular/banano.png',
        'img/carbohidratos/celular/Cebolla.png',
        'img/carbohidratos/celular/Piña.png',
        'img/carbohidratos/celular/Calabaza.png',
        'img/carbohidratos/celular/saladas.png',
        'img/carbohidratos/celular/avena.png',
        'img/carbohidratos/celular/dona.png',
        'img/carbohidratos/celular/blanco.png'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= imagen.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        Imagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 1) {
            posicionActual = imagen.length - 1;
        } else {
            posicionActual--;
        }
        Imagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function Imagen () {
        $imagen.style.backgroundImage = `url(${imagen[posicionActual]})`;
    }


    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    // Iniciar
    Imagen();
} 

