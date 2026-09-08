const botao = document.getElementById('btnMudar');
const paragrafo = document.getElementById ('mensagem');
botao.addEventListener ('clink', () => {
    paragrafo.textContent = 'Texto Alterado com sucesso!';
})