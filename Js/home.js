/**ESTRUCTURA DE HOME* */
export let back = document.createElement("div");
back.innerHTML = 
'<section class="vector" >'+
    '<img src="/img/Cocina 1.png" alt="" class="cocina">'+
    '<h1 class="titulo1"> Aprende a <br> seguir un <br> camino sano </h1>'+

'</section>';

export function Crearfondo(){
    let div_sect = document.querySelector("#sect");
    div_sect.appendChild(back);
}