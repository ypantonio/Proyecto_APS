export let footer = document.createElement("div");
footer.innerHTML = 
`
<div class="caja1">
        <div class="biologos">
            <h4 class="carrera">Biólogos</h4>
            <ul>
                <li  type="disc"> Emili Elisa Gonzalez Gómez </li>
                <li  type="disc"> Karen Jazmin García Rodríguez </li>
                <li  type="disc"> Gershwin Rodrigo González Aguilar </li>
            </ul>
        </div>
        <div class="diseñadoras">
            <h4 class="carrera">Diseñadores</h4>
            <ul>
                <li  type="disc"> Karla Daniela Motta Salguero </li>
                <li  type="disc"> Stephanie Alondra Herrera Juárez </li>
            </ul>
        </div>
        <div class="programadores">
            <h4 class="carrera">Programadores</h4>
            <ul>
                <li  type="disc"> Karen Sophia Valdés Leonardo </li>
                <li  type="disc"> Yasmin Del Pilar Antonio Pérez </li>
                <li  type="disc"> Bryan Estuardo Hernández Ortiz </li>
            </ul>
        </div>
        <h2 class="nombre0"> Healthy Way</h2>
        <img src="./img/healthy-way-logo 1.png" alt=" " class="logofooter"> 
    </div>
       <div class="derechos caja2" >
            <p class="dreservados"> © 2022 Healthy Way - Todos los Derechos Reservados </p>
        </div>
`;

export function Craerfooter(){
    let footerr = document.querySelector("#colegas");
    footerr.appendChild(footer);
}