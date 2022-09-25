/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**INFORMACION DE ALIMENTOS* */
export let alimentos_pro = document.createElement("div");
alimentos_pro.innerHTML = 
`

<section class="alimentosP">
<<<<<<< HEAD
<div class="ConoceP">
    <h1 class="tituloA"> Conoce algunos alimentos <br> ricos en proteína</h1>
</div>
</section>
<!--CONTIENE INFORMACION DE ALIMENTOS RICOS EN PROTEINAS-->
<div class="InfoAlimento">
<div class="contenido_pro">
</div>
</div>


=======
    <div class="ConoceP">
        <h1 class="tituloA"> Conoce algunos alimentos <br> ricos en proteína</h1>
    </div>
   
</section>
>>>>>>> 928e2154de60e13592c7a8413f44bb286e51ec42
`;

export function CrearAlimentosPro(){
    let proteina = document.querySelector("#esquema");
    proteina.appendChild(alimentos_pro);
}