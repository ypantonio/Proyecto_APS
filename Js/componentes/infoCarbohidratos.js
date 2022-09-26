/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**COMIENZO AREA INFORMATIVA DE CARBOHIDRATOS* */
/**CONTIENE PARTE ASIGNADA DE YASMIN ANTONIO* */
export let carbohi = document.createElement("div");
carbohi.innerHTML = 
`
<div class="area2">
<div class="paraTexto2">
    <h1 class="titulo2">¿Que son los carbohidratos?</h1>
    <p class="parrafo2">
        Los carbohidratos son moléculas de azúcar. Junto con las proteínas y las grasas, los 
        carbohidratos son uno de los tres nutrientes que se encuentran en alimentos y bebidas.
        El cuerpo descompone los carbohidratos en  glucosa. La glucosa, o azúcar en la sangre,
        es la principal fuente de energía para las células, tejidos y órganos del cuerpo. La
        glucosa puede usarse inmediatamente o 
        almacenarse en el hígado y los músculos para su uso posterior.   
    </p>
</div>
<img class="alimentocar" src="./img/carbohidrato1.png" alt="">
</div>
<div class="para_nutri">
    <img src="./img/Vector_nutricionista1.png" class="nutri" alt="">
</div>

<section class="para_video2">
<div class="elementosV2">
    <div class="contenedor_video2">
        <video controls class="video2">
            <source src="./Videos/Video síntesis de la proteínas.mp4" type="video/mp4">
        </video>
    </div>
    <div class="contenedor_personaje">
        <img src="./img/Group5-7.png" class="sentadoDialogo" alt="">
    </div>
</div>
</section>

`;

export function CrearCarbohidrato(){
    let div_carbohidra = document.querySelector("#Info_Carbo");
    div_carbohidra.appendChild(carbohi);
}