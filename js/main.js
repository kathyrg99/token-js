let guardarToken = []

/* genera un número random de 6 dígitos y lo muestra en el html */
function token(min, max) {
    let resultado = (Math.random() * (max - min) + min).toFixed(0);
    document.querySelector("#numAleatorio").innerText=`${resultado}`
    }

    token(100000, 999999) 



let progress = document.querySelector("#barra")

let intervalo = 1
progress.value = 0


let generarToken = setInterval(() => {
    token(100000,999999);
}, 30000);

function progreso(){
    if (intervalo < 30){
    progress.value = intervalo
    intervalo++
    console.log(intervalo)
    } else{
        intervalo = 1
    }
    
    
}
progreso()
let barraToken = setInterval(() => {
    progreso();
}, 1000);


/* let barraToken = setInterval((progreso), 1000); */




/* let tokenIntervalo = serInterval(() => {
    progress.value = intervalo
    intervalo++
}, 3000) */

/* setTimeout(function(){
    console.log("Hola Mundo");
}, 2000); */