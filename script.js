console.log("hola");
let usuarios = [{},{},{},{}];
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
});




