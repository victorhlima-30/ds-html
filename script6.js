function jogar(){

    let numeroQuebrado = math.random()*6;

    let numeroFinal = math.cell(numeroQuebrado);

    let paragrafo = document.getElementById('resultado');
    paragrafo.innerText = 'Número: '  + numeroFinal;
}