/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**COMIENZO AREA INFORMATIVA DE PROTEINAS* */
/**CONTIENE PARTE ASIGNADA DE BRYAN HERNANDEZ Y KAREN VALDES* */
export let lip = document.createElement("div");
lip.innerHTML = 
`

<!--SECCIÓN BRYAN HERNANDEZ-->

<!--SECCIÓN KAREN VALDES-->
<div class="para_nutri">
    <img src="./img/Vector_nutricionista1.png" class="nutri" alt="">
</div>
<section class="para_video">
<div class="elementosV1">
    <div class="contenedor_video">
        <video controls class="video1">
        <source src="./Videos/Video síntesis de los lípidos.mp4" type="video/mp4"></video>
    </div>
    <div class="contenedor_personaje">
    <img src="./img/GrupoLi.png" class="sentadoDialogo" alt="">
    </div>
</div>

    

`;

export function CrearLipidos(){
    let div_lipido = document.querySelector("#Info_Li");
    div_lipido.appendChild(lip);
}
