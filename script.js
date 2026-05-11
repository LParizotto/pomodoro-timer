let tempo = 25 * 60;
let temporizador = null;

const displayTempo = document.getElementById('tempo');
const btnIniciar = document.getElementById('btn-iniciar');
const btnPausar = document.getElementById('btn-pausar');
const btnZerar = document.getElementById('btn-zerar');

function atualizar() {
    let minutos = Math.floor(tempo / 60); 
    let segundos = tempo % 60;

    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    displayTempo.textContent = minutos + ':' + segundos;
}

function iniciar() {

    if (temporizador !== null) return;

    temporizador = setInterval(function() {
        if (tempo > 0) {
            tempo--;
            atualizar();
        } else {
            limparContador(temporizador);
            temporizador = null;
            alert("hora de dormir");
        }
    }, 1000);
}

function pausar() {
    clearInterval(temporizador);
    temporizador = null;
}

function zerar() {
    pausar();
    tempo = 25 * 60; 
    atualizar(); 
}

btnIniciar.addEventListener('click', iniciar);
btnPausar.addEventListener('click', pausar);
btnZerar.addEventListener('click', zerar);

atualizar();