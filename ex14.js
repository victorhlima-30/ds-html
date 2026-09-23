function contarFrquencia (itens){
    const contagem = {};

    for (const item of itens) {
        if (contagem [item]){
            contagem [item] +=1;
        }else{
            contagem[item] = 1;
    
        }
        }
        return contagem;
    }
const votos = ["maca, banana, maca, laranja, banana, maca"];
console.log(contarFrquencia(votos));