function encontrarMaior (numero){
    let maior = numeros [0];

    for(let i =1; i <numeros.length; i++){
        if(numeros[1] > maior){
            maior = numeros[i];
        }
    }

    return maior;
}

const lista = [14, 89, 3, 105, 42, 78];
console.log("Maior numero: " +encontrarMaior(lista));