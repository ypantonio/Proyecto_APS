/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**ESTRUCTURA DE HAEDER* */
export let menu = document.createElement("div");
menu.innerHTML = 
`
<!--ESTE ES EL HEADER-->
<header id="para_header" class="para_header">
    <div class="menu_principal">
        <div class="para_img">
            <img src="./img/healthy-way-logo 1.png" class="logo">
        </div>
        <div class="para_menu">
            <ul class="nav">
                <li> <a id="inicia" class="inicia a" href="#"> Inicio </a>  </li>
                <li> <a class="carbo a" href="#"> Olla alimentaria</a>  </li>
                <li> <a class="calor a" href="#"> Estadísticas</a>  </li>
                <li> <a class="lipi a" href="#"> Nutrientes</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="titulo_proteina">
        <h2 class="tituloParaProteina">Proteinas</h2>
    </div>
</header>
<!--AQUÍ TERMINA EL HEADER-->

`;

export function Crearmenu(){
    let div_menu = document.querySelector("#header");
    div_menu.appendChild(menu);
}