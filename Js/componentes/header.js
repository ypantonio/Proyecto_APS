/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
export let header = document.createElement("div");
header.innerHTML = 

'<img src="/img/healthy-way-logo 1.png" class="logo">'+
'<ul class="nav">'+
    '<li> <a id="inicia" class="inicia" href="#"> Inicio </a>  </li>'+
    '<li> <a class="carbo" href="#"> Carbohidratos</a>  </li>'+
    '<li> <a class="calor" href="#"> Calorías</a>  </li>'+
    '<li> <a class="lipi" href="#"> Lípidos</a>  </li>'+
    '<li> <a class="vita" href="#"> Vitaminas</a>  </li>'+
'</ul> ' ;

export function Crearheader(){
    let div_header = document.querySelector("#header");
    div_header.appendChild(header);
}
