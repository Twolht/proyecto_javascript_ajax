function contarVocales(){
    // Obtener el valor de input 
    let palabra = document.getElementById('input-contar-vocales').value.toLowerCase();
    let input = document.getElementById('input-contar-vocales');
    // DOM donde mostramos el estado del proceso
    let a= document.getElementById('a');
    let e = document.getElementById('e');
    let i = document.getElementById('i');
    let o = document.getElementById('o');
    let u = document.getElementById('u');

    // Campos vacios
    if(palabra === ''){
        a.style.color = '#cf4040';
        e.textContent = '';
        i.textContent = '';
        o.textContent = '';
        u.textContent = '';
        return a.textContent = 'Campos vacios!';
    }

    // Creamos un diccionario para tener un estado de vocales existentes
    let vocales = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }

    // Hacemos el recorrido de toda la palabra
    for(let letra of palabra){
        if(vocales.hasOwnProperty(letra)){
            vocales[letra]++;
        }
    }

    a.style.color = '#cfb540';
    e.style.color = '#cfb540';
    i.style.color = '#cfb540';
    o.style.color = '#cfb540';
    u.style.color = '#cfb540';
    // Mostramos en el DOM
    a.textContent = (`a: ${vocales.a}`);
    e.textContent = (`e: ${vocales.e}`);
    i.textContent = (`i: ${vocales.i}`);
    o.textContent = (`o: ${vocales.o}`);
    u.textContent = (`u: ${vocales.u}`);

    // Vaciar campos input
    input.value = '';

}
// Activar eventos
let buttonContarVocales = document.getElementById('button-contar-vocales');
buttonContarVocales.addEventListener('click', contarVocales);