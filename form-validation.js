const nombre = document.getElementById('nombre_input');
const email = document.getElementById('email_input');
const telefono = document.getElementById('tel_input');
const error = document.getElementById('validation_error');
const form = document.getElementById('formulario');

form.addEventListener('submit', formValidation);

function formValidation(event){
    let mensajesError = [];
    let telCheck = new RegExp('[aA-zZ]');

    if (nombre.value == '' || nombre.value == null || email.value == '' || email.value == null || telefono.value == '' || telefono.value == null) {
        mensajesError.push('Los campos de Nombre, Email y Teléfono no pueden estar vacíos');        
    }

    if (telefono.value.length > 0 && telefono.value.length <= 6) {
        mensajesError.push('El Teléfono es demasiado corto');        
    }

    if (telefono.value.length > 6) {
        if (telCheck.test(telefono.value)) {
            mensajesError.push('El Teléfono solo debe tener caracteres numéricos');
        }        
    }

    if (mensajesError.length > 0) {
        event.preventDefault();
        error.innerText = mensajesError.join(' - ');
    }
}