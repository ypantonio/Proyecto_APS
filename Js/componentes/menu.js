/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**ESTRUCTURA DE HAEDER DE PROTEINAS */
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
                        <li> <a id="inicia" class="inicia a" href="./index.html"> Inicio </a>  </li>
                        <li> <a class="carbo a" href="./index.html#Olla-Alimentaria"> Olla alimentaria</a>  </li>
                        <li> <a class="calor a" href="./index.html#Estadisticas"> Estadísticas</a>  </li>
                        <li> <a class="lipi a" href="./index.html#Nutrientes"> Nutrientes</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="titulo_proteina">
                <h2 class="tituloParaProteina">Proteínas</h2>
                <img src="./img/proteínas 1.png" class="img_de_proteinas" alt="">
            </div>
        </header>
        <!--AQUÍ TERMINA EL HEADER--> 

`;

export function Crearmenu(){
    let div_menu = document.querySelector("#header");
    div_menu.appendChild(menu);
}

/************************************** */
/**ESTRUCTURA DE HEADER CARBOHIDRATOS */
export let menu2 = document.createElement("div");
menu2.innerHTML = 
`
<!--ESTE ES EL HEADER-->
<header id="para_header" class="para_header2">
    <div class="menu_principal">
        <div class="para_img">
            <img src="./img/healthy-way-logo 1.png" class="logo">
        </div>
        <div class="para_menu">
            <ul class="nav">
                <li> <a id="inicia" class="inicia a" href="./index.html"> Inicio </a>  </li>
                <li> <a class="carbo a" href="./index.html#Olla-Alimentaria"> Olla alimentaria</a>  </li>
                <li> <a class="calor a" href="./index.html#Estadisticas"> Estadísticas</a>  </li>
                <li> <a class="lipi a" href="./index.html#Nutrientes"> Nutrientes</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="titulo_proteina">
        <h2 class="tituloParaProteina">Carbohidratos</h2>
    </div>
</header>
<!--AQUÍ TERMINA EL HEADER-->

`;

export function Crearmenu2(){
    let div_menu2 = document.querySelector("#header");
    div_menu2.appendChild(menu2);
}