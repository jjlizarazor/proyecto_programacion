/*import { teatros } from "./teatros"
*/

var tabla = 
[
    {compra:"Compra1", precio:"$ 1000"},
    {compra:"Compra2", precio:"$ 2000"},
    {compra:"Compra3", precio:"$ 3000"}
]

window.onload = cargarEventos;

function cargarEventos(){
    document.getElementById("btntabla").addEventListener("click", mostrarTabla, false);

    document.getElementById("btnRegistro").addEventListener("submit", nuevoRegistro, false);
}

function mostrarTabla(){
    var tbody = document.getElementById("registroVenta")
    var tablallena="";
 
    for (var i = 0; i < tabla.length; i++) {
        tablallena +=         
        "<tr><td>" 
        + tabla[i].compra
        + "</td><td>" 
        + tabla[i].precio 
        + "</td></tr>";
    }

    tbody.innerHTML = tablallena;
}

function nuevoRegistro(event){
    event.preventDefault();

    var registro = { compra: "Compra4" , precio: "Precio4" };
    tabla.push(registro);
}
/*
cant personas 
tarifa localidad
teatros
bono
cineco?
    si -> descuento
miercoles?
    si -> mitad
*/