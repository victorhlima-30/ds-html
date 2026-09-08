const lampada = document.getElementById('lampada');
const btnLigar = document.getElementById('btnLigar');
const bntDesligar = document.getElementById('btnDesligar'); 

btnLigar.addEventListener('click', () => {
    lampada.style.backgroundColor =" #ffff"
});

btnLigar.addEventListener('click', () => {
    lampada.style.backgroundColor = "#bbbbb"
});