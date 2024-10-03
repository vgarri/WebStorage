console.log("hola");
let usuarios = [...{}];
//recoger los datos del formulario

// JSON.stringify()
// JSON.parse()
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

const name = event.target.nombre.value;
const email = event.target.email.value;
const mensaje = event.target.mensaje.value;
const url = event.target.url.value;
// localStorage.setItem("name",name);
// localStorage.setItem("email",email);
// localStorage.setItem("mensaje",mensaje);
// localStorage.setItem("url", url);
console.log(name,email,mensaje,url);
localStorage.setItem(
    "usuario",
    JSON.stringify({
      nombre: name,
      email: email,
      mensaje: mensaje,
      url: url
    })
  );
localStorage.getItem("usuario");
//stringify, push y luego set item 
//const contactosJson = JSON.stringify

});
document.getElementById("borrarTodo").addEventListener("click", function () {
    let confirmacion = confirm("Estás seguro?")
    
    if(confirmacion){
        localStorage.removeItem("usuario");
        localStorage.clear();
       alert("Todos los usuarios han sido borrados");
    }
 

});



