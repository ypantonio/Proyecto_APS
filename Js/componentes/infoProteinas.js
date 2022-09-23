/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**COMIENZO AREA INFORMATIVA DE PROTEINAS* */
/**CONTIENE PARTE ASIGNADA DE BRYAN HERNANDEZ Y KAREN VALDES* */
export let pro = document.createElement("div");
pro.innerHTML = 
`
<!--SECCIÓN BRYAN HERNANDEZ-->

<!--SECCIÓN KAREN VALDES-->
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