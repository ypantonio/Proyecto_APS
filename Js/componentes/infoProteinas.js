/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**COMIENZO AREA INFORMATIVA DE PROTEINAS* */
export let pro = document.createElement("div");
pro.innerHTML = 
`
<div class="area">
<div class="paraTexto">
    <h1 class="titulo">¿Que son las proteínas?</h1>
    <p class="parrafo">
    Las proteínas son los componentes principales de los músculos y de otros sistemas que sean capaces de transformar la energía química de los alimentos en trabajo mecánico y también las encontramos formando parte de los sensores que nos permiten ver, oír y degustar.    </p>
</div>
<img class="Img1" src="./img/Proteinas_img1.png" alt="">
</div>

`;

export function CrearProteina(){
    let div_proteina = document.querySelector("#Info_Pro");
    div_proteina.appendChild(pro);
}