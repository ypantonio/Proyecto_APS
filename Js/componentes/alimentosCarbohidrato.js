/**INFORMACION DE ALIMENTOS* */
export let alimentos_carb = document.createElement("div");
alimentos_carb.innerHTML = 
`

<section class="alimentosC">
    <div class="ConoceC">
        <h1 class="tituloC"> Conoce algunos alimentos <br> ricos en carbohidratos</h1>
    </div>
</section>


`;

export function CrearAlimentosCarbo(){
    let carbo = document.querySelector("#alimentoC");
    carbo.appendChild(alimentos_carb);
}