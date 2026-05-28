function mostrarVocales(){
    // Obtener valor de input
    let palabra = document.getElementById('input-mostrar-vocales').value;
    let input = document.getElementById('input-mostrar-vocales');
    // DOM donde mostramos el estado del proceso
    let estado = document.getElementById('estado-mostrar-vocales');

    if(palabra === ""){
        estado.style.color = '#cf4040';
        return estado.textContent = 'El campo esta vacio!';
    }
    // Obtener solo vocales
    let vocales = palabra.match(/[aeiou]/gi);

    estado.style.color = '#cfb540';

    // Vaciar campos input
    input.value = '';
    // Mostramos las vocales
    return estado.textContent = `Vocales encontradas: ${vocales}`
}
// Activar eventos
let buttonMostrarVocales = document.getElementById('button-mostrar-vocales');
buttonMostrarVocales.addEventListener('click', mostrarVocales);