
/**ESTRUCTURA DE HOME* */

export let back = document.createElement("div");
back.innerHTML = 
`<section class="vector">
    <!--<div id="Menu-interno"></div>-->
    <div class="el-titulo"><h1 class="titulo1"> Aprende a <br> seguir un <br> camino sano </h1></div>
    <div class="la-img"><img src="./img/Cocina 1.png" alt="" class="cocina"></div>
</section>
`;

export function Crearfondo(){
    let div_sect = document.querySelector("#sect");
    div_sect.appendChild(back);
}

