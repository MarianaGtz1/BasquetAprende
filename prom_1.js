console.log('como le hago para imprimir el resultado');

//Funciones en JavaScript
function sumarUno(numero, callback){
    //simular función asincrona
    setTimeout(function(){
        callback(numero + 1);
    }, 1500);
}

sumarUno(5, function(nuevoValor){
    console.log(nuevoValor);
    sumarUno(nuevoValor, function(nuevoValor2){
        console.log(nuevoValor2);
        sumarUno(nuevoValor2, function(nuevoValor3){
            console.log(nuevoValor3);
        })
    })
})