/*** FAVOR NO EDITAR EL DOCUMENTO ***/
export let datos = document.createElement("div");
datos.innerHTML = 
`

        <div class="area">
            <div class="paraTexto">
                <h1 class="titulo">¿Qué es la bromatología?</h1>
                <p class="parrafo">
                    Es la ciencia de los alimentos. Estudia en profundidad todo lo relativo a los alimentos en cuanto a su composición, nutrientes y otras sustancias, características fisicoquímicas, cualidades organolépticas.  Es básica para tratar los alimentos de una forma adecuada para que sean mejores para el consumo humano, no solo nutricionalmente, sino también más seguros, con mejores propiedades técnicas para su preparación y con mejor aspecto en general.
                </p>
            </div>
            <img class="Img1" src="./img/bromatolog-a-1.png" alt="">
            </div>
            
            <div class="area largo" id="Olla-Alimentaria">
            <div class="CImg">
                <div class="ParaImg">
                    <img class="Frente img2Olla" src="./img/Olla.png" alt="">
                    <img class="ImgFrente2" src="./img/Cartel-con-título 1.png" alt="">
                </div>
            </div>
            </div>
            
            <div class="TextoEncima">
                <p class="parrafo2">
                    Es un instrumento para orientar a la población sobre cómo nutrirse saludablemente, es una de las guías alimentarias. En el caso de Guatemala, las recomendaciones se resumen en la figura de una olla. La olla alimentaria posee 6 niveles de alimentos, en donde podemos encontrar los alimentos que se cultivan en Guatemala y el por qué es importante comerlas con frecuencia.
                </p>
                <div class="img2_visible">
                    <img class="ImgFrente img2V" src="./img/Olla.png" alt="">
                </div>
            </div>
            </div>
    

`;

export function AñadirInfo(){
    let divParaInfo = document.querySelector("#Info");
    divParaInfo.appendChild(datos);
}