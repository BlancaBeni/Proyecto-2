var cuentas = [
    { nombre: "Mali", saldo: 200, password: "123" },
    { nombre: "Gera", saldo: 290, password: "123" },
    { nombre: "Maui", saldo: 67, password: "123" }
  ];
  
  let form = document.getElementById("form")
  let usuario = document.getElementById("usuario")
  let password = document.getElementById("password")
  let saldo = document.getElementById("saldo")
  
  form.addEventListener("submit", function(event){
    event.preventDefault()
    formValidation()
  })
  
  function formValidation() {
    if(usuario.value === cuentas[0].nombre && password.value === cuentas[0].password){
      console.log("El usuario es mali!") 
      localStorage.setItem("usuarioActivo", "{nombre: 'Mali', saldo: 200}"); 
            location ='principal.html';
    } else if( usuario.value === cuentas[1].nombre && password.value === cuentas[1].password){
      console.log("El usuario es gera!")
      localStorage.setItem("usuarioActivo", "{nombre: 'Gera', saldo: 290}");
            location ='principal.html';
    } else if ( usuario.value === cuentas[2].nombre && password.value === cuentas[2].password){
      console.log("El usuario es Maui!")
      localStorage.setItem("usuarioActivo", "{nombre: 'Maui', saldo: 67}");
            location ='principal.html';
    } else {
      alert("El usuario no existe en la base de datos, intenta nuevamente")
    }
  }

  // Función para ingresar saldo
function ingresarSaldo(){
  let dinero = Number(document.getElementById('ingresar-input').value);
  let dineroActualizado = Number(usuario.Saldo) + dinero;
  if (dineroActualizado <= 990){
      usuario.Saldo = dineroActualizado;
      actualizarSaldo(); 
      alert(`Monto ingresado = ${dinero}`, `Nuevo saldo en cuenta = ${dineroActualizado}`, "success");
  }
  else{
      alert(`Operación incorrecta`, `Tu saldo actual excedería 990 pesos por $${dineroActualizado-990}`, "error");
  }  
}
 