/*ESTO ES UNA PRUEBA PARA VER QUE VISUALIZACIÓN NOS FAVORECE MÁS*/ 

let elementos = ['','¿Qué es la bromatología?'];

let root = document.querySelector("#root");

function agregar_al_dom(){

    elementos.forEach(function (contenido, indice){
        let div = document.createElement("div");
        div.innerHTML ='<h1 class = "espacio">'+contenido+'</h1>',
        root.appendChild(div);
    });
}
agregar_al_dom();

function activar_letra(){

    let las_cosas_del_dom = document.querySelectorAll(".espacio");
    las_cosas_del_dom.forEach();
}

activar_letra();