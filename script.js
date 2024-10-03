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


let textoNombre = document.createTextNode(JSON.stringify(name));
document.getElementById("li-1").appendChild(textoNombre);
//por id??? deberian printearse ordenados en la lista
document.getElementById("li-2").appendChild(textoNombre);
let textoEmail = document.createTextNode(JSON.stringify(email));
document.getElementById("li-3").appendChild(textoEmail);
let textoMensaje = document.createTextNode(JSON.stringify(mensaje));
document.getElementById("li-4").appendChild(textoMensaje);
//creamos la imagen
let img = document.createElement("img")
document.querySelector("div1").appendChild(img);
let src = document.createTextNode(JSON.stringify(url));
img.src="./Ejemplo.png";

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
 let contactoBorrar = prompt("introduce aquí el nombre del contacto que se borrará");
    if (Object.values(usuarios).includes(JSON.stringify(contactoBorrar))){
        for (let j = 0; j < usuarios.length; j++) {
            if (JSON.parse(contactoBorrar) === Object.values(usuarios)[j]){
                Object.values(usuarios)[j] === 0;
            }
            
        }
    }
 alert(`Contacto: ${contactoBorrar} ha sido eliminado`);
});
document.getElementById("borrarDOM").addEventListener("click", function () {
    let confirmacion = confirm("Estás seguro?");
    
    if(confirmacion){
        
        const div1 = document.querySelector("li");
        div1.remove();
        alert("DOM borrado");
    }
 

});
