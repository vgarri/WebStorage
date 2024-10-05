//hacer un if para ver si existe el localstorage
//CRUD
console.log("hola");
let contacts = [];


localStorage.setItem("Contactos",JSON.stringify([]));//inicializar variables 
//recoger los datos del formulario
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = event.target.nombre.value;
    const email = event.target.email.value;
    const mensaje = event.target.mensaje.value;
    const url = event.target.url.value;
    //Se guarda en contact
    
    let contact =
    {
    nombre: name,
    email: email,
    mensaje: mensaje,
    url: url
    }
    pintarUser(contact);
    guardarUser(contact);
});
//function para pintar en tarjetitas
function pintarUser(contact){
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    //creamos la imagen
    let img = document.createElement("img");
    img.src="./Ejemplo.png";
    

    let nombre1 = document.createElement("p");
    nombre1.textContent = `Nombre: ${contact.nombre}`;

    let email1 = document.createElement("p");
    email1.textContent = `Email: ${contact.email}`;

    let mensaje1 = document.createElement("p");
    mensaje1.textContent = `Mensaje: ${contact.mensaje}`;

    let imagen1 = document.createElement("p");
    imagen1.textContent = `Imagen de ${contact.nombre}`

    // Unimos todos los p al li
    li.appendChild(nombre1);
    li.appendChild(email1);
    li.appendChild(mensaje1);
    li.appendChild(imagen1);
    li.appendChild(img);
    // Unimos el li al ul
    ul.appendChild(li);
}

function guardarUser(contact) {
    contacts.push(contact);
    // Transformar el array a String y subirlo a Web Storage
    updateUser(contacts);
}

function updateUser(contacts){
    localStorage.setItem("Contactos", JSON.stringify(contacts));
    
}

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
