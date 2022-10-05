/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**COMIENZO AREA INFORMATIVA DE PROTEINAS* */
/**CONTIENE PARTE ASIGNADA DE BRYAN HERNANDEZ Y KAREN VALDES* */
export let lip = document.createElement("div");
lip.innerHTML = 
`

<!--SECCIÓN BRYAN HERNANDEZ-->

<div class="area">
<div class="paraTexto">
    <h1 class="titulo">¿Que son los Lípidos?</h1>
    <p class="parrafo">Los lípidos son un grupo de moléculas biológicas que comparten dos características: son insolubles en agua y son ricas en energía debido al número de enlaces carbono-hidrógeno. </br></br>

    Los dos tipos principales de lípidos en la sangre son el colesterol y los triglicéridos.</br></br>
    
    
    En cuanto a su propósito en el cuerpo humano los lípidos son de crucial importancia para el almacenamiento de energía y el desarrollo de la membrana celular. </p>
</div>
<img class="ImgTres" src="./img/Lípidos 1.png"alt="">
</div>


<!--SECCIÓN KAREN VALDES-->
<div class="para_nutri">
    <img src="./img/para_lipidos.png" class="nutri" alt="">
</div>
<section class="para_video2">
<div class="elementosV1">
    <div class="contenedor_video">
        <video controls class="video1">
        <source src="./Videos/Video síntesis de los lípidos.mp4" type="video/mp4"></video>
    </div>
    <div class="contenedor_personaje">
    <img src="./img/GrupoLi.png" class="sentadoDialogo" alt="">
    </div>
</div> <br>


`;

export function CrearLipidos(){
    let div_lipido = document.querySelector("#Info_Li");
    div_lipido.appendChild(lip);
}
