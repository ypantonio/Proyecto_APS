export let OllaAlimento = document.createElement("div");
OllaAlimento.innerHTML = 
/**INFORMACIÓN INICIAL POR BRYAN HERNÁNDEZ**/
 
 `<section class="infofood">
<div class="infofood">
    <div class="ventana">
        <div class="izquierda">
            <div class="ventana_barra">
                <h1 class="ventana_titulo1">¿Quien la creo?</h1>
            </div>
                <p class="ventana_titulo">
                Se publicó en el año 1998 gracias al esfuerzo realizado por la comision nacional de Guias Alimetarios'
                (CONGA), con el apoyo de Nutrición Centro América y Panamá(INCAP).
                </p>
        </div>
    </div>
    <div class="derecha">
        <img  class="img_personaje" src="./img/personaje de la pared 1.png" alt="">
    </div>
 </div>
</section>
<section class="dos_cuadros">
    <div class="padreFooter">
        <div class="cuadro">
         <div class="cuadro_barra">
             <h2 class="cuadrover_titulo1">¿Cómo funciona?</h2>
        </div>
             <p class="cuadro_parrafo">En la alla de Guatemala se representan seis grupos de alimentos basicos , asi como la frecunacia de consumo aconsejada, de consumo aconsejada, tanto diaria como semanal,
             de cada uno de
                 ellos todos los dias.
             </p>
    </div>
    <div class="cuadrover abajo">
        <div class="chica">
            <img class="recostada" src="./img/personaje acostado 1.png" alt="">
        </div>
        <div class="la_lista">
            <ul class="lista">
                <li><a id="inicio" class="hijoOption">• Granos (llegumbre), cereales y papas (patatas)</a></li>
                <li><a class="hijoOption">• Hierbas y verduras</a></li>
                <li><a class="hijoOption">• Frutas por lo menos, 1 vez/semana</a></li>
                <li><a class="hijoOption">• Carnes por lo menos, 2 veces/semana</a></li>
                <li><a class="hijoOption">• leche y derivados con moderación</a></li>
                <li><a class="hijoOption">• azúcar  y grasas </a></li>
            </ul>
        </div>
    </div>
</section>

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
        <div class="para_videos">
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
    </div>
`;
export function Crearnutrientes(){
    let div_nutriente = document.querySelector("#Olla");
    div_nutriente.appendChild(nutriente);
}
