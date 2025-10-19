document.addEventListener("DOMContentLoaded", function () {
  const phrases = [
    "Sophisticated capital structures for shareholders.",
    "Excellence in financial advice.",
    "Restructuring of stressed companies.",
  ];

  const el = document.getElementById("rotating-text");
  if (!el) return;

  let index = 0;
  // garante texto inicial
  el.textContent = phrases[index];

  // cada 3000ms trocamos: fade out (600ms), mudar texto, fade in
  const switchInterval = 3000;
  const fadeDuration = 600; // deve bater com transition no CSS (em ms)

  setInterval(() => {
    // inicia fade out
    el.classList.add("hidden");

    // após o fade (600ms) troca texto e remove a classe para fade in
    setTimeout(() => {
      index = (index + 1) % phrases.length;
      el.textContent = phrases[index];
      el.classList.remove("hidden");
    }, fadeDuration);
  }, switchInterval);
});
