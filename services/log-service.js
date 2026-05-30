let traceId = 1;

function registrarLog(nivel, mensagem) {
  const log = document.createElement("p");
  log.textContent = "[ação:" + traceId + "] " + nivel + ": " + mensagem;
  log.className = "log-" + nivel.toLowerCase();
  document.getElementById("log-container").prepend(log);
  traceId++;
}