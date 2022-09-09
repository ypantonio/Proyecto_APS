export let back = document.createElement("div");
back.innerHTML = 
'<section class="fondo">'+
    '<img src="/img/Cocina 1.png" alt="" class="cocina">'+

'</section>';

export function Crearfondo(){
    let div_sect = document.querySelector("#sect");
    div_sect.appendChild(back);
}