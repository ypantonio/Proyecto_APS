// en esta sección se agrega los objetos de la base de datos
// YASMIN ANTONIO
window.onload = function () {
    // Variables
    const IMAGENES = [
        'img/carbohidratos/Banano2.png',
        'img/carbohidratos/cebolla2.png',
        'img/carbohidratos/piña2.png',
        'img/carbohidratos/calabaza1.png',
        'img/carbohidratos/galletas2.png',
        'img/carbohidratos/avena2.png',
        'img/carbohidratos/dona1.png',
        'img/carbohidratos/pan blanco2.png'
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
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }


    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    // Iniciar
    renderizarImagen();
} 

