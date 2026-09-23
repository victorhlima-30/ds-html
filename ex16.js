function calcularNotas(valor){
    const cedulas = [100, 50, 20, 10];
    const resultado = {};
    let resultante =valor;

    for (const celula of cedulas){
        const quantidade = Math.floor (restante/cedula);
        if (quantidade > 0){
            resultado[cedula] = quantidade;
            restante = restante % cedula;
        }
    }
return resultado;
}