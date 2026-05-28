function numeroMayor(){
    // Obtener los valores de los inputs
    let numUno = document.getElementById('input-numero-uno').value;
    let numDos = document.getElementById('input-numero-dos').value;
    let inputUno = document.getElementById('input-numero-uno');
    let inputDos = document.getElementById('input-numero-dos');
    // DOM donde mostramos estado html
    let estado = document.getElementById('estado-numero-mayor');

    // Campos vacios
    if(numUno === "" || numDos === ""){
        estado.style.color = '#cf4040';
        return estado.textContent = 'Campos vacios!';
    }
    // Convertir los datos en flotantes
    numUno = parseFloat(numUno);
    numDos = parseFloat(numDos);

    
    // Comparar cual es el numero mayor
    if(numUno > numDos){
        inputUno.value = '';
        inputDos.value = '';
        estado.style.color = '#60db57';
        return estado.textContent = `El numero ${numUno} es mayor que ${numDos}`;
    }else if(numDos > numUno){
        inputUno.value = '';
        inputDos.value = '';
        estado.style.color = '#60db57';
        return estado.textContent = `El numero ${numDos} es mayor que ${numUno}`;
    }else{
        inputUno.value = '';
        inputDos.value = '';
        estado.style.color = '#e3b64d';
        return document.getElementById('estado-numero-mayor').textContent = 'Los dos numeros son iguales';
    }
}

// Activar eventos
let buttonNumeroMayor = document.getElementById('button-numero-mayor');
buttonNumeroMayor.addEventListener('click', numeroMayor);