//querySelector
//Sirve para seleccionar un elemento del HTML
const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo Heading';
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto Para Enlace';
enlaces[0].classList.add = ('nueva-clase');
// enlaces[0].classList.remove = ('navegacion__enlace');

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A'); // Se crea un elemento de tipo enlace, se usan mayusculas

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);



// Eventos
// console.log(1);

// window.addEventListener('load', function() { // Load espera a que el JS y los archivos que dependen del HTML estén listos
//     console.log(2);
// });

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoader', function() { // Solo espera por el HTML, pero no espera por el CSS o imagenes
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function() {
//     console.log('scrolling...');
// }

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento.target);
//     evento.preventDefault();

//     // Validar un formulario


//     console.log('enviando formulario');
// });



// Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; // Detiene la ejecución del código si se cumple el if
    }
    
    // Crear la alerta de Enviar correctamente
    mostrarAlerta('Mensaje enviado correctamente');
    

});

function leerTexto(e) {
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    // console.log(datos)
}

// Muestra un error en pantalla

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    // Que la alerta desaparezca después de 5 segundos

    setTimeout(() => {
        error.remove();
    }, 5000);
}

// Mostrar una alerta o mensaje que se envio correcta o incorrectamente el formulario

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alexta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    // Que la alerta desaparezca después de 5 segundos

    setTimeout(() => {
        error.remove();
    }, 5000);
}



