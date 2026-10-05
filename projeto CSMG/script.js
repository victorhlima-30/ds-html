if (!localStorage.getItem('usuarios')) {
    const bancoInicial = [
        { usuario: 'admin', senha: '123' },
        { usuario: 'mafer', senha: '1322' }
    ];
    localStorage.setItem('usuarios', JSON.stringify(bancoInicial)); 
}

// Logica de Login (executa apenas na tela com o formulario)
const formLogin = document.getElementById('form');
if (formLogin) {
    formLogin.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuarioDigitado = document.getElementById('usuario').value;
        const senhaDigitada = document.getElementById('senha').value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios'));

        const usuarioEncontrado = usuarios.find(function (user) {
            return user.usuario === usuarioDigitado && user.senha === senhaDigitada;
        });

        if (usuarioEncontrado) {
            localStorage.setItem('usuarioLogado', usuarioDigitado);
            window.location.href = 'home.html';
        } else {
            alert('Usuario ou senha incorreta');
        }
    });
}

// Logica da Tela de Treinos (executa apenas na tela de treinos)
const btnTreinoA = document.getElementById('btnTreinoA');
if (btnTreinoA) {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        window.location.href = 'index.html';
    }

    const treinos = {
        A: {
            titulo: 'Treino A: Peito e Triceps',
            exercicios: [
                'Supino reto - 4x10',
                'Voador - 3x12',
                'Crucifixo inclinado - 3x15',
                'Triceps corda - 4x10',
                'Triceps Frances - 4x10'
            ]
        },
        B: {
            titulo: 'Treino B: Costas e Biceps',
            exercicios: [
                'Puxada Frontal - 4x10',
                'Remada Curvada - 4x10',
                'Remada Baixa - 3x12',
                'Rosca Direta - 4x10',
                'Rosca Martelo - 3x12'
            ]
        },
        C: {
            titulo: 'Treino C: Pernas e Ombros',
            exercicios: [
                'Agachamento Livre - 4x10',
                'Leg Press - 4x10',
                'Cadeira Extensora - 3x12',
                'Desenvolvimento halteres - 4x10',
                'Elevação Lateral - 3x12'
            ]
        }
    };

    function exibirTreino(tipo) {
        const dados = treinos[tipo];
        document.getElementById('tituloTreino').textContent = dados.titulo;

        const lista = document.getElementById('listaExercicios');
        lista.innerHTML = '';

        dados.exercicios.forEach(function (exercicio) {
            const li = document.createElement('li');
            li.textContent = exercicio;
            lista.appendChild(li);
        });
    }

    btnTreinoA.addEventListener('click', function () {
        exibirTreino('A');
    });

    document.getElementById('btnTreinoB').addEventListener('click', function () {
        exibirTreino('B');
    });

    document.getElementById('btnTreinoC').addEventListener('click', function () {
        exibirTreino('C');
    });

    document.getElementById('btnVoltar').addEventListener('click', function () {
        window.location.href = 'home.html';
    });
}

const formCadastro = document.getElementById('formCadastro');
if (formCadastro){
    formCadastro.addEventListener('submit', function(e){
        e.preventDefault();

        const novoUsuario = document.getElementById('novoUsuario').value.trim();
        const novaSenha = document.getElementById('novasenha').value;

            const user.usuarios = JSON.parce(localStorage,getItem('usuarios')) || [];

            const jaexiste = usuarios.some(function (user){
                return user.usuario.toLowerCase() === novoUsuario.toLowerCase();
            });

            if (jaexiste){
                alert('Esse nome de usario já existe');
                return;
            }

            usuario.push({ usuario: novoUsuario, senha: novaSenha});
            localStorage.setItem('usuario', JSON.stringify(usuarios));

            alert('usuario cadstrado com sucesso!');
            window.location.href='home.html';
        });
    }
