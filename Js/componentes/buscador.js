/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**ESTRUCTURA DE BUSCADOR* */
/**DENTRO DE ESTRUCTURA DE HOME* */

export let bus = document.createElement("div");
bus.innerHTML = 
`

        
<!--COMIENZA BUSCADOR / KAREN VALDES-->
<div class="navegacion">
<ul class="menu">
  <li><div class="search">Search ...</div>
    <div class="submenu">
      <ul class="opciones">
       <li class="arribaCarbo" onclick ="mostrar();">Carbohidratos</li>
        <li class="arribali" id ="texto_de_li" onclick ="mostrar2();">Lípidos</li>
        <li class="arriba3" id ="texto_de_pro" onclick ="mostrar3();">Proteínas</li>
      </ul>
  </div>
  </li>
</ul>
<img class="lupa" src="https://i.postimg.cc/K8Mc5qc5/lupa.png" alt="">
</div>
</div>

<div id="Opciones_de_Carb" class="Opciones_de_Carb">
    <!--VENTANACARBOHIDRATOS-->
<section class="fondo02" id="fondo02" onclick ="esconder();">
<div class="espacio1">
    <div class="el2_titulo"><p>Alimentos Ricos en Carbohidratos</p></div>
    <div class="contieneImgCar">
        <div class="espacioI"><img onclick ="banano();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 189.png" alt=""></div>
        <div class="espacioI"><img onclick ="cebolla();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 190.png" alt=""></div>
        <div class="espacioI"><img onclick ="pina();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 209.png" alt=""></div>
        <div class="espacioI"><img onclick ="calabaza();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 210.png" alt=""></div>
        <div class="espacioI"><img onclick ="gSaladas();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 211.png" alt=""></div>
        <div class="espacioI"><img onclick ="avena();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 212.png" alt=""></div>
        <div class="espacioI"><img onclick ="dona();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 191.png" alt=""></div>
        <div class="espacioI"><img onclick ="pan();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 192.png" alt=""></div>



    </div>
</div>
</section>
<!--VENTANA LÍPIDOS-->
<div id="Opciones_de_Carb" class="Opciones_de_Carb">
    <!--VENTANA LÍPIDOSS-->
<section class="fondo03" id="fondo03" onclick ="esconder2();">
<div class="espacio1">
    <div class="el2_titulo"><p>Alimentos Ricos en Lípidos</p></div>
    <div class="contieneImgCar">
        <div class="espacioI"><img onclick ="mantequilla();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 221.png" alt=""></div>
        <div class="espacioI"><img onclick ="tocino();"class="cuadrodeImg" src="./img/alimentos_buscador/Group 222.png" alt=""></div>
        <div class="espacioI"><img onclick ="tomate();"class="cuadrodeImg" src="./img/alimentos_buscador/Group 223.png" alt=""></div>
        <div class="espacioI"><img onclick ="aceitunas();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 224.png" alt=""></div>
        <div class="espacioI"><img onclick ="aceitunasN();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 225.png" alt=""></div>
        <div class="espacioI"><img onclick ="oliva();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 226.png" alt=""></div>
        <div class="espacioI"><img onclick ="Cblanco();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 227.png" alt=""></div>
        <div class="espacioI"><img onclick ="coco();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 228.png" alt=""></div>




    </div>
</div>
</section>
<!--VENTANA PROTEINAS-->
<div id="Opciones_de_Carb" class="Opciones_de_Carb">
    <!--VENTANA LÍPIDOSS-->
<section class="fondo04" id="fondo04" onclick ="esconder3();">
<div class="espacio1">
    <div class="el2_titulo"><p>Alimentos Ricos en Proteínas</p></div>
    <div class="contieneImgCar">
        <div class="espacioI"><img onclick ="pollo();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 213.png" alt=""></div>
        <div class="espacioI"><img onclick ="res();" class="cuadrodeImg" src="./img/alimentos_buscador/Group 214.png" alt=""></div>
        <div class="espacioI"><img onclick ="pez();"class="cuadrodeImg" src="./img/alimentos_buscador/Group 215.png" alt=""></div>
        <div class="espacioI"><img onclick ="camaron();"class="cuadrodeImg" src="./img/alimentos_buscador/Group 217.png" alt=""></div>
        <div class="espacioI"><img onclick ="aguacate();"class="cuadrodeImg" src="./img/alimentos_buscador/Group 216.png" alt=""></div>
        <div class="espacioI"><img onclick ="arroz();"class="cuadrodeImg" src="./img/alimentos_buscador/Group 218.png" alt=""></div>
        <div class="espacioI"><img onclick ="fideo();"class="cuadrodeImg" src="./img/alimentos_buscador/Group 219.png" alt=""></div>
        <div class="espacioI"><img onclick ="trigo();"class="cuadrodeImg" src="./img/alimentos_buscador/Group 220.png" alt=""></div>





    </div>
</div>
</section>
</header>
<!--AQUÍ TERMINA EL HEADER-->

    <div class="para_verde" id="banano" >
    <img class="Imag_verde_car" src="./img/carbohidratos/Banano2.png" alt="">
    <img class="Imag_verde_car2" src="./img/carbohidratos/celular/banano.png" alt="">
    <div class ="cerrar" onclick ="quitar2();">
        <p>Cerrar</p>
    </div>
</div>
<div class="para_verde" id="cebolla" >
<img class="Imag_verde_car" src="./img/carbohidratos/cebolla2.png" alt="">
<img class="Imag_verde_car2" src="./img/carbohidratos/celular/Cebolla.png" alt="">
<div class ="cerrar" onclick ="quitar();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="pina" >
<img class="Imag_verde_car" src="./img/carbohidratos/piña2.png" alt="">
<img class="Imag_verde_car2" src="./img/carbohidratos/celular/Piña.png" alt="">
<div class ="cerrar" onclick ="quitar3();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="calabaza" >
<img class="Imag_verde_car" src="./img/carbohidratos/calabaza1.png" alt="">
<img class="Imag_verde_car2" src="./img/carbohidratos/celular/Calabaza.png" alt="">
<div class ="cerrar" onclick ="quitar4();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="gSaladas" >
<img class="Imag_verde_car" src="./img/carbohidratos/galletas2.png" alt="">
<img class="Imag_verde_car2" src="./img/carbohidratos/celular/saladas.png" alt="">
<div class ="cerrar" onclick ="quitar5();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="avena" >
<img class="Imag_verde_car" src="./img/carbohidratos/avena2.png" alt="">
<img class="Imag_verde_car2" src="./img/carbohidratos/celular/avena.png" alt="">
<div class ="cerrar" onclick ="quitar6();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="dona" >
<img class="Imag_verde_car" src="./img/carbohidratos/dona1.png" alt="">
<img class="Imag_verde_car2" src="./img/carbohidratos/celular/dona.png" alt="">
<div class ="cerrar2" onclick ="quitar7();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="pan" >
<img class="Imag_verde_car" src="./img/carbohidratos/pan2.png" alt="">
<img class="Imag_verde_car2" src="./img/carbohidratos/celular/blanco.png" alt="">
<div class ="cerrar" onclick ="quitar8();">
    <p>Cerrar</p>
</div>
</div>

<!--LÍPIDOS-->
<div class="para_verde" id="mantequilla" >
    <img class="Imag_verde_car" src="./img/ventanaLípidos/Mantequilla.png" alt="">
    <img class="Imag_verde_car2" src="./img/ventanaLípidos/Mantequilla 2.png" alt="">
    <div class ="cerrar" onclick ="quitar9();">
        <p>Cerrar</p>
    </div>
</div>
<div class="para_verde" id="tocino" >
<img class="Imag_verde_car" src="./img/ventanaLípidos/Tocino.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaLípidos/Tocino 2.png" alt="">
<div class ="cerrar" onclick ="quitar01();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="tomate" >
<img class="Imag_verde_car" src="./img/ventanaLípidos/tomate.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaLípidos/Tomate 2.png" alt="">
<div class ="cerrar" onclick ="quitar02();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="aceitunas" >
<img class="Imag_verde_car" src="./img/ventanaLípidos/Aceitunas.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaLípidos/Aceitunas 2.png" alt="">
<div class ="cerrar" onclick ="quitar03();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="aceitunasN" >
<img class="Imag_verde_car" src="./img/ventanaLípidos/Aceituna negra.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaLípidos/Aceituna negra 2.png" alt="">
<div class ="cerrar" onclick ="quitar04();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="oliva" >
<img class="Imag_verde_car" src="./img/ventanaLípidos/Aceite oliva.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaLípidos/Aceite de oliva.png" alt="">
<div class ="cerrar" onclick ="quitar05();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="Cblanco" >
<img class="Imag_verde_car" src="./img/ventanaLípidos/Chocolate blanco.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaLípidos/Chocolate blanco 2.png" alt="">
<div class ="cerrar2" onclick ="quitar06();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="coco" >
<img class="Imag_verde_car" src="./img/ventanaLípidos/Coco.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaLípidos/Coco 2.png" alt="">
<div class ="cerrar" onclick ="quitar07();">
    <p>Cerrar</p>
</div>
</div>

<!--PROTEINAS-->
<div class="para_verde" id="pollo" >
    <img class="Imag_verde_car" src="./img/ventanaProteinas/Pollo2.png" alt="">
    <img class="Imag_verde_car2" src="./img/ventanaProteinas/cel/Pollo.png" alt="">
    <div class ="cerrar" onclick ="quitar08();">
        <p>Cerrar</p>
    </div>
</div>
<div class="para_verde" id="res" >
<img class="Imag_verde_car" src="./img/ventanaProteinas/carne de res 2.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaProteinas/cel/res.png" alt="">
<div class ="cerrar" onclick ="quitar09();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="pez" >
<img class="Imag_verde_car" src="./img/ventanaProteinas/caren de pescado 2.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaProteinas/cel/pescado.png" alt="">
<div class ="cerrar" onclick ="quitar001();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="camaron" >
<img class="Imag_verde_car" src="./img/ventanaProteinas/camarones 2.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaProteinas/cel/camarones.png" alt="">
<div class ="cerrar" onclick ="quitar002();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="aguacate" >
<img class="Imag_verde_car" src="./img/ventanaProteinas/Aguacate 2.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaProteinas/cel/aguacate.png" alt="">
<div class ="cerrar" onclick ="quitar003();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="arroz" >
<img class="Imag_verde_car" src="./img/ventanaProteinas/Arroz 2.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaProteinas/cel/arroz.png" alt="">
<div class ="cerrar" onclick ="quitar004();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="fideo" >
<img class="Imag_verde_car" src="./img/ventanaProteinas/Fideos 2.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaProteinas/cel/fideos.png" alt="">
<div class ="cerrar2" onclick ="quitar005();">
    <p>Cerrar</p>
</div>
</div>
<div class="para_verde" id="trigo" >
<img class="Imag_verde_car" src="./img/ventanaProteinas/Pan de trigo 2.png" alt="">
<img class="Imag_verde_car2" src="./img/ventanaProteinas/cel/pan.png" alt="">
<div class ="cerrar" onclick ="quitar006();">
    <p>Cerrar</p>
</div>
</div>

    
        
 
    
   
`;



/*
export function Crearbuscador(){
    let div_sect = document.querySelector("#sect");
    div_sect.appendChild(back);
}
*/
