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
    <p class="parrafo">Los lípidos constituyen la reserva energética de uso tardío o diferido del organismo. Su contenido calórico es muy alto (10 Kcal/gramo), y representan una forma compacta y anhidra de almacenamiento de energía.</p>
</div>
<img class="Img3" src="./img/Lípidos 1.png"alt="">
</div>


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
