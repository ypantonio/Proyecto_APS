export let footer = document.createElement("div");
footer.innerHTML = `
<section class="infoInfood">
<div class="infoInfood">
<div class="ventana">

 <div class="ventana_barra">
 <h1 class="ventana_titulo1">¿Quien la creo?</h1>
 </div>
 <p class="ventana_titulo">
 Se publicó en el año 1998 gracias al esfuerzo realizado por la comision nacional de Guias Alimetarios'
 (CONGA), con el apoyo de Nutrición Centro América y Panamá(INCAP).
 </p>

</div>
</div>
</div>
<div class="padreFooter">

<div class="cuadro">
 <div class="cuadro_barra">
     <h2 class="cuadro_titulo">¿cómo funciona?</h2>
     <p class="cuadro_parrafo">En la alla de Guatemala se representan seis grupos de alimentos basicos , asi como la frecunacia de consumo aconsejada, de consumo aconsejada, tanto diaria como semanal,
     de cada uno de 
         ellos todos los dias.
     </p>

     

  <div class="cuadrover">
     <div class="cuadrover_titulo1">
     <ul>
     <li><a id="inicio" class="hijoOption">Granos (llegumbre), cereales y papas (patatas)</a></li>
         <li><a class="hijoOption">Hierbas y verduras</a></li>
         <li><a class="hijoOption">Frutas por lo menos, 1 vez/semana</a></li>
         <li><a class="hijoOption">Carnes por lo menos, 2 veces/semana</a></li>
         <li><a class="hijoOption">leche y derivados con moderación</a></li>
         <li><a class="hijoOption">azúcar  y grasas </a></li>
    </ul>
 </div>
 </div>
</div>
     
 </div>


</section>
`;


export function CrearFooter(){
    let div_footer = document.querySelector("#footer");
    div_footer.appendChild(footer);
}