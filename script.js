//hacer un if para ver si existe el localstorage
//CRUD

let contacts = [];

//comprobar si habia datos etc.
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
function pintarUser(contact) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    //creamos la imagen
    let img = document.createElement("img");
    img.src = "./Ejemplo.png";


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

function updateUser(contacts) {
    localStorage.setItem("Contactos", JSON.stringify(contacts));

}

document.getElementById("borrarTodo").addEventListener("click", function () {
    let confirmacion = confirm("Estás seguro?")

    if (confirmacion) {

        localStorage.clear();
        alert("Todos los usuarios han sido borrados");
    }


});
document.getElementById("borrarContacto").addEventListener("click", function () {
    let contactos = JSON.parse(localStorage.getItem("Contactos"));
    console.log(contactos);
    let emailBorrar = prompt("introduce aquí el email del contacto que se borrará");
    console.log(emailBorrar);
    for (let i = 0; i < contactos.length; i++) {
        console.log(contactos[i].email)
        if (contactos[i].email == emailBorrar) {
            contactos = contactos.filter(contac => contac.email!== emailBorrar);
            
            console.log(contactos);
        }
        updateUser(contactos);
    }

    alert(`El contacto con email: ${emailBorrar} ha sido eliminado`);
});
document.getElementById("borrarDOM").addEventListener("click", function () {
    let confirmacion = confirm("Estás seguro?");

    if (confirmacion) {

        const div1 = document.querySelector("ul");
        div1.remove();
        alert("DOM borrado");
    }


});
//
document.getElementById("Editar").addEventListener("click", function () {
    let contactoEditar = prompt("introduce aquí el nombre del contacto que deseas editar");

});
