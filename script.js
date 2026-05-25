let tempo = 25 * 60;
let temporizador = null;

const displayTempo = document.getElementById('tempo');
const btnIniciar = document.getElementById('btn-iniciar');
const btnPausar = document.getElementById('btn-pausar');
const btnZerar = document.getElementById('btn-zerar');

function registrarLog(nivel, mensagem) {
  const log = document.createElement("p");
  log.textContent = nivel + ": " + mensagem;
  log.className = "log-info";
  document.getElementById("log-container").prepend(log);
}

function atualizar() {
  let minutos = Math.floor(tempo / 60);
  let segundos = tempo % 60;

  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;

  displayTempo.textContent = minutos + ':' + segundos;
}

function iniciar() {
  if (temporizador !== null) return;

  registrarLog("INFO", "temporizador iniciado");

  temporizador = setInterval(function() {
    if (tempo > 0) {
      tempo--;
      atualizar();
    } else {
      clearInterval(temporizador);
      temporizador = null;
      registrarLog("WARN", "tempo esgotado");
      alert("hora de descansar");
    }
  }, 1000);
}

function pausar() {
  if (temporizador === null) return;
  clearInterval(temporizador);
  temporizador = null;
  registrarLog("INFO", "temporizador pausado");
}

function zerar() {
  clearInterval(temporizador);
  pausar();
  tempo = 25 * 60;
  atualizar();

  registrarLog("INFO", "temporizador zerado");
}

btnIniciar.addEventListener('click', iniciar);
btnPausar.addEventListener('click', pausar);
btnZerar.addEventListener('click', zerar);

atualizar();