// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaAmigos = [];


function agregarAmigo() {
        
        let amigoIngresado=document.getElementById('amigo').value;
        //var ult
        // Validacion nombre blanco
        if ((amigoIngresado=="")){
            alert ("Por favor ingresasr un nombre valido");
        } else {
            // Validar que el nombre no se repita.

            if (listaAmigos.includes(amigoIngresado)){
                console.log(amigoIngresado);
                alert ("Por favor ingresasr nombres diferentes");
                limpiarCaja();
                return agregarAmigo();
                } else {
                    console.log(amigoIngresado);
                    listaAmigos.push(amigoIngresado);
                    //Mostrar los valores en la pagina web
                    let ultimoValor = listaAmigos[listaAmigos.length - 1];
                    let miLista = document.getElementById('listaAmigos');
                    let nuevoElemento = document.createElement('li');
                    nuevoElemento.textContent = ultimoValor;
                    miLista.appendChild(nuevoElemento);
                    // Limpiar caja de ingreso del nombre del amigo

                    limpiarCaja();
                }
        };
        
     return amigoIngresado;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

function sortearAmigo() {
    let cantidadTotalAmigos = listaAmigos.length;
    console.log (cantidadTotalAmigos);
    let amigoElegido = parseInt(Math.random() * cantidadTotalAmigos + 1);
    console.log(amigoElegido);
    console.log(listaAmigos[amigoElegido-1]);

    //Mostrar los valores en la pagina web
       let ultimoValor = listaAmigos[amigoElegido-1];
       let miLista = document.getElementById('resultado');
       let nuevoElemento = document.createElement('li');
       nuevoElemento.textContent = ultimoValor;
       miLista.appendChild(nuevoElemento);
    return;
}