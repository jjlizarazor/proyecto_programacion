/*import { teatros } from "./teatros"

var teatrosDisponibles = Object.keys(teatros);
var targetTeatro = prompt(`¿Qué teatro elige? ${teatrosDisponibles}`);*/

var tabla = 
[]

window.onload = cargarEventos;

function cargarEventos(){
    document.getElementById("btntabla").addEventListener("click", mostrarTabla, false);

    document.getElementById("nuevoRegistro").addEventListener("submit", nuevoRegistro, false);
}

function mostrarTabla(){
    var tbody = document.getElementById("registroVenta")
    var tablallena="";
 
    for (var i = 0; i < tabla.length; i++) {
        tablallena +=         
        "<tr><td>" 
        + tabla[i].teatro
        + "</td><td>"
        + tabla[i].cantidad
        + "</td><td>$ " 
        + tabla[i].precio
        + "</td></tr>";
    }

    tbody.innerHTML = tablallena;
}

function nuevoRegistro(event){
    event.preventDefault();
    const registroTeatro = document.getElementById("teatro").value;
    const registroCantidad = document.getElementById("cantidad").value;
    const registroPrecio = document.getElementById("precio").value;

    var registroAgregado = {teatro: registroTeatro, cantidad: registroCantidad, precio: registroPrecio*registroCantidad};
    tabla.push(registroAgregado);
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