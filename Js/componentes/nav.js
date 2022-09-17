/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**ESTRUCTURA DE HAEDER* */
export let header = document.createElement("div");
header.innerHTML =
`
<div class="general">
    <div class="para_img">
        <img src="./img/healthy-way-logo 1.png" class="logo">
    </div>
    <div class="para_menu">
        <ul class="nav">
            <li> <a id="inicia" class="inicia a" href="#"> Inicio </a>  </li>
            <li> <a class="carbo a" href="#"> Olla alimentaria</a>  </li>
            <li> <a class="calor a" href="#"> Estadísticas</a>  </li>
            <li> <a class="lipi a" href="#"s> Nutrientes</a>  </li>
        </ul>
    </div>
</div>
<!--<button class="boton">
<div class="linea"></div>
<div class="linea"></div>
<div class="linea"></div>
</button>-->

`;

export function Crearheader(){
    let div_header = document.querySelector("#header");
    div_header.appendChild(header);
}
