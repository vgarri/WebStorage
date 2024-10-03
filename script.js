console.log("hola");
let usuarios = [];
//recoger los datos del formulario

// JSON.stringify()
// JSON.parse()
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

const name = event.target.nombre.value;
const email = event.target.email.value;
const mensaje = event.target.mensaje.value;
const url = event.target.url.value;
document.createElement("ol");
for (let i = 0; i < 4; i++) {
    let li= document.createElement("li");
    document.querySelector("ol").appendChild(li);
    li.id=(`li-${i+1}`);
}

let li = document.createElement("li");
document.querySelector("ol").appendChild(li);
let textoNombre = document.createTextNode(JSON.stringify(name));
document.querySelector("li").appendChild(textoNombre);
//por id??? deberian printearse ordenados en la lista
//document.getElementById("li#0").appendChild(textoNombre);
let textoEmail = document.createTextNode(JSON.stringify(email));
document.querySelector("li").appendChild(textoEmail);
let textoMensaje = document.createTextNode(JSON.stringify(mensaje));
document.querySelector("li").appendChild(textoMensaje);
//creamos la imagen
let img = document.createElement("img")
document.querySelector("div1").appendChild(img);
let src = document.createTextNode(JSON.stringify(url));
img.src=src;
// localStorage.setItem("name",name);
// localStorage.setItem("email",email);
// localStorage.setItem("mensaje",mensaje);
// localStorage.setItem("url", url);
console.log(name,email,mensaje,url);
let objeto =
    {
      nombre: name,
      email: email,
      mensaje: mensaje,
      url: url
    }


usuarios.push(objeto);
localStorage.setItem("Contactos",JSON.stringify(usuarios))
console.log(usuarios);

});

document.getElementById("borrarTodo").addEventListener("click", function () {
    let confirmacion = confirm("Estás seguro?")
    
    if(confirmacion){
        localStorage.removeItem("usuario");
        usuarios.length = 0;
        localStorage.clear();
       alert("Todos los usuarios han sido borrados");
    }
 

});
document.getElementById("borrarContacto").addEventListener("click", function () {
 let contactoBorrar = prompt("introduce aquí el contacto que se borrará");
//     function deleteContact(index) {
//     const contacts = getContacts();
//     contacts.splice(index, 1);
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//     loadContacts(); // Actualizar la lista
//}
});
document.getElementById("borrarDOM").addEventListener("click", function () {
    let confirmacion = confirm("Estás seguro?");
    
    if(confirmacion){
        
        const div1 = document.querySelector("ol");
        div1.remove();
        alert("DOM borrado");
    }
 

});
