/***NO CREAR MAS COSAS EN ESTE DOCUMENTO ***/
/**ESTRUCTURA DE HAEDER* */
/**ESTRUCTURA DE HOME* */

export let back = document.createElement("div");
back.innerHTML = 
`

        
<!--ESTE ES EL HEADER-->
<header id="header" class="header">
    <div class="menu_principal">
        <div class="para_img">
            <img src="./img/healthy-way-logo 1.png" class="logo">
        </div>
        <div class="para_menu">
            <ul class="nav">
                <li> <a id="inicia" class="inicia a" href="./index.html"> Inicio </a>  </li>
                <li> <a class="olla a" href="#Olla-Alimentaria"> Olla alimentaria</a>  </li>
                <li> <a class="esta a" href="#Estadisticas"> Estadísticas</a>  </li>
                <li> <a class="nutri a" href="#Nutrientes"s> Nutrientes</a>  </li>
            </ul>
        </div>
    </div>
    
<!--COMIENZA HOME-->        
<section class="vector">
    <div class="el-titulo"><h1 class="titulo1"> Aprende a <br> seguir un <br> camino sano </h1></div>
    <div class="la-img"><img src="./img/Cocina 1.png" alt="" class="cocina"></div>
</section>
<div class="navegacion">
<ul class="menu">
  <li><div class="search">Search ...</div>
    <div class="submenu">
      <ul class="opciones">
       <li class="arribaCarbo" id ="texto_de_car" onclick ="mostrar();">Carbohidratos</li>
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
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 189.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 190.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 191.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 192.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 189.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 190.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 191.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 192.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 189.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 190.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 191.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 192.png" alt=""></div>

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
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 189.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 190.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 191.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 192.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 189.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 190.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 191.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 192.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 189.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 190.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 191.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 192.png" alt=""></div>

    </div>
</div>
</section>
<!--VENTANA PROTEINAS-->
<div id="Opciones_de_Carb" class="Opciones_de_Carb">
    <!--VENTANA LÍPIDOSS-->
<section class="fondo04" id="fondo04" onclick ="esconder3();">
<div class="espacio1">
    <div class="el2_titulo"><p>Alimentos Ricos en Proteinas</p></div>
    <div class="contieneImgCar">
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 189.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 190.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 191.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 192.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 189.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 190.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 191.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 192.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 189.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 190.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 191.png" alt=""></div>
        <div class="espacioI"><img class="cuadrodeImg" src="./img/carbohidratos_alimentos/Group 192.png" alt=""></div>

    </div>
</div>
</section>
</header>
<!--AQUÍ TERMINA EL HEADER-->

  
      
   
`;




export function Crearfondo(){
    let div_sect = document.querySelector("#sect");
    div_sect.appendChild(back);
}

