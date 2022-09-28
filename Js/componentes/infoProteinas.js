/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**COMIENZO AREA INFORMATIVA DE PROTEINAS* */
/**CONTIENE PARTE ASIGNADA DE BRYAN HERNANDEZ Y KAREN VALDES* */
export let pro = document.createElement("div");
pro.innerHTML = 
`

<!--SECCIÓN BRYAN HERNANDEZ-->

<div class="area">
<div class="paraTexto">
    <h1 class="titulo">¿Que son las proteínas?</h1>
    <p class="parrafo">
    Las proteínas son los componentes principales de los músculos y de otros sistemas que sean capaces de transformar la energía química de los alimentos en trabajo mecánico y también las encontramos formando parte de los sensores que nos permiten ver, oír y degustar.    </p>
</div>
<img class="Img1" src="./img/Proteinas_img1.png" alt="">
</div>
<!--SECCIÓN KAREN VALDES-->
<div class="para_nutri">
    <img src="./img/Vector_nutricionista1.png" class="nutri" alt="">
</div>
<section class="para_video">
<div class="elementosV1">
    <div class="contenedor_video">
        <video controls class="video1">
            <source src="./Videos/Video síntesis de la proteínas.mp4" type="video/mp4">
        </video>
    </div>
    <div class="contenedor_personaje">
        <img src="./img/Group 57.png" class="sentadoDialogo" alt="">
    </div>
</div>
</section>

    

`;

export function CrearProteina(){
    let div_proteina = document.querySelector("#Info_Pro");
    div_proteina.appendChild(pro);
}
