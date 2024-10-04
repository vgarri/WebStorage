//hacer un if para ver si existe el localstorage
//CRUD
console.log("hola");
let usuarios = [];

localStorage.setItem("Contactos",JSON.stringify([]));//inicializar variables 
//recoger los datos del formulario

// JSON.stringify()
// JSON.parse()
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

const name = event.target.nombre.value;
const email = event.target.email.value;
const mensaje = event.target.mensaje.value;
const url = event.target.url.value;
//para pintar en el dom
for (let i = 0; i < 4; i++) {
    let li= document.createElement("li");
    document.querySelector("ul").appendChild(li);
    li.id=(`li-${i}`);
    let textoNombre = document.createTextNode(name);
    document.getElementById(`li-${i}`).appendChild(textoNombre);
//por id??? deberian printearse ordenados en la lista
    document.getElementById(`li-${i}`).appendChild(textoNombre);
    let textoEmail = document.createTextNode(email);
    document.getElementById(`li-${i}`).appendChild(textoEmail);
    let textoMensaje = document.createTextNode(mensaje);
    document.getElementById(`li-${i}`).appendChild(textoMensaje);
    // document.createElement("button")
    
    // let textotarjeta = document.createTextNode("borrar tarjeta")
    // document.querySelector("button").appendChild(textotarjeta);
}



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

//aqui se guardan los objetos en el array de objetos
usuarios.push(objeto);
localStorage.setItem("Contactos",JSON.stringify(usuarios))
console.log(usuarios);

});

document.getElementById("borrarTodo").addEventListener("click", function () {
    let confirmacion = confirm("Estás seguro?")
    
    if(confirmacion){
        
        localStorage.clear();
       alert("Todos los usuarios han sido borrados");
    }
    

});
document.getElementById("borrarContacto").addEventListener("click", function () {
    //se puede hacer con un filter
    //leer de la web,filtrar,quitar, actualizar y volver a subir
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
        
        const div1 = document.querySelector("ul");
        div1.remove();
        alert("DOM borrado");
    }
 

});
//
document.getElementById("Editar").addEventListener("click", function () {
    let contactoEditar = prompt("introduce aquí el nombre del contacto que deseas editar");
    








});
