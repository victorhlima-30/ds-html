const usuarios = [
    { nome: "isac newton", idade: 18},
    { nome: "alana", idade: 45},
    { nome: "fernando", idade: 56},
    { nome: "caua", idade: 32},
    { nome: "eduarda", idade: 38},
];

function filtrarMotoristas (lista){
    return lista,filter(function (usuario){
        return usuario.idade>=18;
    });
}

console.log(filtrarMotoristas(usuarios))