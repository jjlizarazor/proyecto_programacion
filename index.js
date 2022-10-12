/*onclick = */function validar() {
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;
  
    if (usuario == "admin" && Contraseña == "1234") {
      //alert("Usuario y Contraseña validos");
      window.location = "ventas.html";
    } else {
      alert("Verifique sus credenciales");
    }
  }
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