function verificarSituacao (nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3)/3

    if (media >=5){
        return "Media" + media.toFixed(1) + ": Aprovado";
        } else if (media >=5){
        return "Media" + media.toFixed(1) + ": Recuperação";
        } else if (media >=5){
        return "Media" + media.toFixed(1) + ": Reprovado";
    }
}

console.log(verificarSituacao(8, 7.5, 9));
console.log(verificarSituacao(8, 9, 5));
console.log(verificarSituacao(4, 8, 7));