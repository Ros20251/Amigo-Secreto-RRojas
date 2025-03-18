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
                    //let ul = document.getElementById('listaAmigos');
                    // let ult = document.querySelector('#listaAmigos');
                    //console.log(ult);
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
    return;
}