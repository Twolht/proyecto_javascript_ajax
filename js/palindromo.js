function palindromo(){
    // Valor entrada del input
    let palabra = document.getElementById('input-palindromo').value;
    let input = document.getElementById('input-palindromo');
    // DOM donde mostramos estado html
    let estado = document.getElementById('estado-palindromo');

    // Campos vacios
    if(palabra === ""){
        estado.style.color = '#cf4040';
        return estado.textContent = 'Campos vacios!';
    }

    // Invertir palabra
    let palabraInvertida = palabra.split("").reverse().join("");
    
    // Comprobar si la palabra es igual a la invertida
    if(palabra === palabraInvertida){
        input.value = '';
        estado.style.color = '#60db57';
        return estado.textContent = 'Es un palindromo';
    }else{
        input.value = '';
        estado.style.color = '#cf4040';
        return estado.textContent = 'No es un palindromo';
    }
}

// Activar eventos
let buttonPalindromo = document.getElementById('button-palindromo');
buttonPalindromo.addEventListener('click', palindromo);