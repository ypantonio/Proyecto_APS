
/**ESTRUCTURA DE HOME* */

export let back = document.createElement("div");
back.innerHTML = 
`
<section class="vector" >
    <div id="Menu-interno"></div>
    <h1 class="titulo1"> Aprende a <br> seguir un <br> camino sano </h1>
    <img src="./img/Cocina 1.png" alt="" class="cocina">
</section>
`;

export function Crearfondo(){
    let div_sect = document.querySelector("#sect");
    div_sect.appendChild(back);
}

