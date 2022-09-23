export let OllaAlimento = document.createElement("div");
OllaAlimento.innerHTML = 
/**INFORMACIÓN INICIAL POR BRYAN HERNÁNDEZ**/
 `

`;

export function CrearOlla(){
    let div_olla = document.querySelector("#Olla");
    div_olla.appendChild(OllaAlimento);
}


/**SIGUIENTE INFORMACIÓN POR YASMIN ANTONIO**/
export let nutriente = document.createElement("div");
nutriente.innerHTML = 

`

<div class="title1">
<div class = "blancoArriba"></div>
    <h2 id="Estadisticas" class="title2">PORCENTAJES DE NUTRIENTES <br> NECESARIOS PARA EL ORGANISMO</h2>
<div class = "blancoAbajo"></div>
</div>
<div class="nutrientes">
<div class="fondo">
    <div class="chico_sentado"><img src="./img/personaje sentado 1.png" alt="" class="sentado">
        <p class="text">
            Según la OMS estos son los  
            porcentajes necesarios de los 
            nutrientes para el correcto  
            funcionamiento del  organismo:
        </p>
    </div>
    <div class="las-graficas">
            <img src="./img/Gráfica.png" alt="" class="grafica">
            <ul class="listaG">
                <li class="carboi"> Carbohidratos </li>
                <li class="lip"> Lípidos </li>
                <li class="protei"> Proteínas </li>
                <li class="vita"> Vitaminas </li>
            </ul>
    <p class="nota">NOTA: La cantidad/porcentajes de vitaminas varían según el cuerpo de cada persona.</p>
    </div>
</div>                
</div>
        <div id="Nutrientes" class="esencial">
        
           <!--  TITULO DE NUTRIENTES ESENCIALES -->
            <div class="caja-titulo"> 
                <h1 class="titleEsen">
                    NUTRIENTES 
                    ESCENCIALES
                </h1>
                <img src="./img/niña-sentada 1.png" alt="" class="niña">
            </div>

        <!--SECCIÓN DE VÍDEOS -->
            <!-- SECCIÓN CARBOHIDRATOS -->
            <div class="carbohidratos">
                <h3 class="subtitle1">Carbohidratos</h3>
                <p class="descrip1">Una de las fuentes más importantes  <br>
                    de energía para nuestro.
                </p><br>
                <a class="mas1" href="./carbohidratos.html"> Ver más </a>
                <img src="./img/Carbohidratos 1.png" alt="" class="img1">
            </div>

            <!--SECCIÓN LÍPIDOS-->
            <div class="lipidos">
                <h3 class="subtitle1">Lípidos</h3>
                <p class="descrip1">De crucial importancia para el <br>almacenamiento de energía.</p><br>
                <a class="mas1"> Ver más </a>
                <img src="./img/Lípidos 1.png" alt="" class="img1">
            </div>

        <!--SECCIÓN PROTEÍNAS-->
        <div class="proteinas">
                <img src="./img/proteínas 1.png" alt="" class="img2">
                <h3 class="subtitle2">Proteínas</h3>
                <p class="descrip2">Formadas por muchos aminoácidos <br> diferentes unidos entre sí.</p><br>
                <a class="mas" href="./proteina.html"> Ver más </a>
            </div>
        
            <!-- SECCIÓN DE VITAMINAS-->
            <div class="vitaminas">
                <img src="./img/vitaminas 1.png" alt="" class="img2">
                <h3 class="subtitle2">Vitaminas</h3>
                <p class="descrip2"> Los pequeños nutrientes que nos <br> dan vida. </p><br>
                <a class="mas"> Ver más </a>
            </div>
        </div>


`;
export function Crearnutrientes(){
    let div_nutriente = document.querySelector("#Olla");
    div_nutriente.appendChild(nutriente);
}
