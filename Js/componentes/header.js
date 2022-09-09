/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**ESTRUCTURA DE HAEDER* */
export let header = document.createElement("div");
header.innerHTML = 

'<img src="/img/healthy-way-logo 1.png" class="logo">'+
'<ul class="nav">'+
    '<li> <a id="inicia" class="inicia" href="#"> Inicio </a>  </li>'+
    '<li> <a class="carbo" href="#"> Olla alimentaria</a>  </li>'+
    '<li> <a class="calor" href="#"> Estadísticas</a>  </li>'+
    '<li> <a class="lipi" href="#"> Nutrientes</a>  </li>'+
'</ul> ' +
'<button class="boton">'+
    '<div class="linea"></div>'+
    '<div class="linea"></div>'+
    '<div class="linea"></div>'+
'</button>';

export function Crearheader(){
    let div_header = document.querySelector("#header");
    div_header.appendChild(header);
}
