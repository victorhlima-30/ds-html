const campoNome = document.getElementById('campoNome');
const btnEnviar = document.getElementById('btnEnviar');
const resposta = document.getElementById('resposta');

        btnEnviar.addEventListener('click', () => {
            const nome = campoNome.value.trim();

            if (nome === ''){
                resposta.textContent = 'Por favor, preencha seu nome.';
                resposta.style.color='red';
            } else {
                resposta.textContent = 'Ola, ${nome}! Seja bem-vindo(a).';
                resposta.style.color='green';
            }
        })