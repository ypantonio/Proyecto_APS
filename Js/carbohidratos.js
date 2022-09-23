/*AREA DEL HEADER*/
import { Crearmenu2 } from "./componentes/menu.js";
Crearmenu2();

/*COMIENZO AREA DE CARBOHIDRATO*/
import { CrearCarbohidrato } from "./componentes/infoCarbohidratos.js";

/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**COMIENZO AREA INFORMATIVA DE PROTEINAS* */
/**CONTIENE PARTE ASIGNADA DE BRYAN HERNANDEZ Y KAREN VALDES* */
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
<!--SECCIÓN KAREN VALDES-->
<section class="para_video">

</section>

`;

export function CrearProteina(){
    let div_proteina = document.querySelector("#Info_Pro");
    div_proteina.appendChild(pro);
}
CrearCarbohidrato();

/*MUESTRA ALIMETOS RICOS EN CARBOHIDRATO*/
import { CrearAlimentosCarbo } from "./componentes/alimentosCarbohidrato.js";
CrearAlimentosCarbo();

/** INFORMACIÓN SOBRE EL EQUIPO DE HEALTHY WAY / FOOTER**/
import { creandofooter } from "./componentes/footer.js";
creandofooter();
