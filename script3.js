let total =0;
const visor = document.getElementById('contador');
const botaoContador = document.getElementById('btnIncrementar');

botaoContador.addEventListener('click',() => {
    total++;
    visor.textContent= total;
})