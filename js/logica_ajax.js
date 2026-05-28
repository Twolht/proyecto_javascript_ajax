// Mostrar url de la pagina
window.onload = function(){
    document.getElementById('url').textContent = window.location.href;
}

function cargarContenido(){
    // Obtener url del input
    let url = document.getElementById('input-url').value;
    let estadoPeticion= document.getElementById('estado-peticion');
    let cabeceras = document.getElementById('cabeceras');
    let codigoEstado = document.getElementById('codigo-estado');
    let contenidos = document.getElementById('contenidos');
    // Crear objeto ajax
    let peticion = new XMLHttpRequest();

    // Campos vacios
    if(url === ""){
        estadoPeticion.textContent = 'Sin respuesta';
        cabeceras.textContent = 'Sin respuesta';
        codigoEstado.textContent = 'Sin respuesta';
        contenidos.textContent = 'Sin respuesta';
        return;
    }
    // Preparar peticion
    peticion.onreadystatechange = function(){
        let mensajeEstado = '';

        switch(peticion.readyState){
            case 0:{
                mensajeEstado = '#0: Peticion no iniciada';
                break;
            }
            case 1:{
                mensajeEstado = "#1: Conexion establecida";
                break;
            }
            case 2:{
                mensajeEstado = "#2: Peticion recibida";
                break;
            }
            case 3:{
                mensajeEstado = "#3: Procesando peticion";
                break;
            }
            case 4:{
                mensajeEstado = '#4: Peticion completada';
                break;
            }

        }

        // Mostrar estado
        estadoPeticion.textContent = mensajeEstado;

        // Si la peticion termina
        if(peticion.readyState == 4){
            // Mostrar cabeceras HTTP
            cabeceras.textContent = peticion.getAllResponseHeaders();
            // Mostrar codigo estado
            codigoEstado.textContent = peticion.status + " - "+peticion.statusText;
            // Mostrar el contenido recibido
            contenidos.textContent = peticion.responseText;
        }
    };

    // Configurar peticion 
    peticion.open('GET', url, true);

    // Enviar peticion
    peticion.send();
}

//Eventos
let buttonMostrarContenidos = document.getElementById('button-mostar-contenidos');
buttonMostrarContenidos.addEventListener('click', function(){
    cargarContenido();
});