/**INFORMACION DE ALIMENTOS* */
export let alimentos_carb = document.createElement("div");
alimentos_carb.innerHTML = 
`

<section class="alimentosC">
    <div class="ConoceC">
        <h1 class="tituloC"> Conoce algunos alimentos <br> ricos en carbohidratos</h1>
        <h1 class="tituloD"> Alimentos <br> ricos en proteína</h1>
    </div>
</section>
<!--CONTIENE INFORMACION DE ALIMENTOS RICOS EN CARBOHIDRATOS-->
<div class="InfoAlimento">
<div class="contenido_pro">
</div>
</div>


`;

export function CrearAlimentosCarbo(){
    let carbo = document.querySelector("#alimentoC");
    carbo.appendChild(alimentos_carb);
}