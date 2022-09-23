/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**ESTRUCTURA DE HAEDER* */
/**ESTRUCTURA DE HOME* */

export let back = document.createElement("div");
back.innerHTML = 
`
<!--ESTE ES EL HEADER-->
<header id="header" class="header">
    <div class="menu_principal">
        <div class="para_img">
            <img src="./img/healthy-way-logo 1.png" class="logo">
        </div>
        <div class="para_menu">
            <ul class="nav">
                <li> <a id="inicia" class="inicia a" href="./index.html"> Inicio </a>  </li>
                <li> <a class="olla a" href="#Olla-Alimentaria"> Olla alimentaria</a>  </li>
                <li> <a class="esta a" href="#Estadisticas"> Estadísticas</a>  </li>
                <li> <a class="nutri a" href="#Nutrientes"s> Nutrientes</a>  </li>
            </ul>
        </div>
    </div>
    
<!--COMIENZA HOME-->        
<section class="vector">
    <!--<div id="Menu-interno"></div>-->
    <div class="el-titulo"><h1 class="titulo1"> Aprende a <br> seguir un <br> camino sano </h1></div>
    <div class="la-img"><img src="./img/Cocina 1.png" alt="" class="cocina"></div>
</section>
</header>
<!--AQUÍ TERMINA EL HEADER-->
   
`;

export function Crearfondo(){
    let div_sect = document.querySelector("#sect");
    div_sect.appendChild(back);
}