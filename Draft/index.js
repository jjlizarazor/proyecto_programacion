/*onclick = */
function validar() {
  var usuario = document.getElementById("usuario").value;
  var Contraseña = document.getElementById("pass").value;
  
  if (usuario == "admin" && Contraseña == "1234") {
    //alert("Usuario y Contraseña validos");
    window.location = "ventas.html";
  } else {
    alert("Verifique sus credenciales");
  }
}

function algoritmo() {
  let clientes_atendidos;
  let total_de_la_compra, total_de_ventas;
  total_de_la_compra = parseFloat(
    document.formulario1.total_de_la_compra.value
  );
  total_de_ventas = total_de_ventas + total_de_la_compra;
  clientes_atendidos = parseInt(clientes_atendidos) + 1;
  alert(clientes_atendidos);
}

/*import { teatros, teatros } from "./teatros";

const disponibilidadTeatros = Object.keys(teatros);
const targetTeatro = prompt(`¿En que cinema desea alquirir su boleta? ${disponibilidadTeatros}`);

if (disponibilidadTeatros.includes(targetTeatro)) {
const quantityAsText = prompt("¿Cuántas boletas quiere?");
const quantity = parseInt(quantityAsText);
const teatros = teatros[targetTeatro];

const total = teatros.unitPriceGeneral * quantity;
//const label = quantity > 1 ? teatros.pluralLabel : teatros.label;

alert(`El precio a pagar por ${quantity} es: $ ${total}`);
} else {
alert("Cinema incorrecto");
}
*/
  /*
  function Login() {
    var done = 0;
    var usuario = document.login.usuario.value;
    var password = document.login.password.value;
    if (usuario == "USUARIO1" && password == "CONTRASEÑA1") {
      window.location = "TU_PAGINA_WEB.HTML";
    }
    if (usuario == "USUARIO2" && password == "CONTRASEÑA2") {
      window.location = "TU_PAGINA_WEB.HTML";
    }
    if (usuario == "" && password == "") {
      window.location = "errorpopup.html";
    }
  }
  */  