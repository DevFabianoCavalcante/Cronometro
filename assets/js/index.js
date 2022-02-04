function countdown() {

const timerStart = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function getTimeOfSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hours12: false,
        timeZone: 'GMT',
    })
}

function startWatch() {
    timer = setInterval(function(){
        segundos++;
        timerStart.innerHTML = getTimeOfSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const elemento = e.target;

    if(elemento.classList.contains('iniciar')){
        timerStart.classList.remove('pausar');
        clearInterval(timer);
        startWatch();
    } else if(elemento.classList.contains('pausar')) {
        timerStart.classList.add('pausar');
        clearInterval(timer);
        iniciar.innerHTML = 'Continuar';
    } else if (elemento.classList.contains('zerar')) {
        timerStart.classList.remove('pausar');
        clearInterval(timer);
        timerStart.innerHTML = '00:00:00';
        segundos = 0;
        iniciar.innerHTML = 'Iniciar';
    }
        
});
}

countdown();
