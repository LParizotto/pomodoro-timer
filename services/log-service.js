function registrarLog(nivel, mensagem) {
  const log = document.createElement("p");
  log.textContent = nivel + ": " + mensagem;
  log.className = "log-" + nivel.toLowerCase();
  document.getElementById("log-container").prepend(log);
}