/* =====================================
   GASTRÔ SELECTION
   SCRIPT PRINCIPAL
===================================== */


/* =====================================
   ELEMENTOS PRINCIPAIS
===================================== */

const campoPesquisa = document.getElementById("search");

const restaurantes = document.querySelectorAll(".restaurant-card");

const botoesFiltro = document.querySelectorAll(".filter");

const mensagemResultados =
    document.getElementById("noResults");


/* =====================================
   FILTRAR RESTAURANTES
===================================== */

function filtrar(categoria, botao) {

    let encontrados = 0;


    /*
     * Remove o estado "active"
     * de todos os botões.
     */

    botoesFiltro.forEach(function(button) {

        button.classList.remove("active");

    });


    /*
     * Ativa o botão selecionado.
     */

    if (botao) {

        botao.classList.add("active");

    }


    /*
     * Percorre todos os restaurantes.
     */

    restaurantes.forEach(function(restaurante) {

        const categoriaRestaurante =
            restaurante.dataset.category;


        /*
         * "Todos" mostra todos os restaurantes.
         */

        if (
            categoria === "todos" ||
            categoriaRestaurante === categoria
        ) {

            restaurante.style.display = "block";

            encontrados++;

        }

        else {

            restaurante.style.display = "none";

        }

    });


    /*
     * Mostra mensagem caso não
     * existam resultados.
     */

    mostrarMensagem(encontrados);


    /*
     * Limpa a pesquisa.
     */

    if (campoPesquisa) {

        campoPesquisa.value = "";

    }

}



/* =====================================
   PESQUISA
===================================== */

function buscar() {

    if (!campoPesquisa) {
        return;
    }


    /*
     * Pega o texto digitado.
     */

    const termo =
        campoPesquisa.value
            .toLowerCase()
            .trim();


    let encontrados = 0;


    /*
     * Remove o estado ativo
     * dos filtros.
     */

    botoesFiltro.forEach(function(button) {

        button.classList.remove("active");

    });


    /*
     * Ativa "Todos" quando
     * uma pesquisa é realizada.
     */

    if (botoesFiltro.length > 0) {

        botoesFiltro[0].classList.add("active");

    }


    /*
     * Percorre todos os restaurantes.
     */

    restaurantes.forEach(function(restaurante) {

        const textoPesquisa =
            restaurante.dataset.search
                .toLowerCase();


        /*
         * Também pesquisa no conteúdo
         * visível do card.
         */

        const textoCard =
            restaurante.innerText
                .toLowerCase();


        const encontrou =
            textoPesquisa.includes(termo) ||
            textoCard.includes(termo);


        if (encontrou) {

            restaurante.style.display = "block";

            encontrados++;

        }

        else {

            restaurante.style.display = "none";

        }

    });


    mostrarMensagem(encontrados);

}



/* =====================================
   MENSAGEM DE RESULTADOS
===================================== */

function mostrarMensagem(quantidade) {

    if (!mensagemResultados) {
        return;
    }


    if (quantidade === 0) {

        mensagemResultados.style.display = "block";

    }

    else {

        mensagemResultados.style.display = "none";

    }

}



/* =====================================
   PESQUISA COM ENTER
===================================== */

if (campoPesquisa) {

    campoPesquisa.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                buscar();

            }

        }
    );

}



/* =====================================
   BOTÃO DE PESQUISA
===================================== */

const botaoPesquisa =
    document.querySelector(".search button");


if (botaoPesquisa) {

    botaoPesquisa.addEventListener(
        "click",
        function() {

            buscar();

        }
    );

}



/* =====================================
   LIMPAR PESQUISA
===================================== */

function limparPesquisa() {

    if (campoPesquisa) {

        campoPesquisa.value = "";

    }


    /*
     * Mostra todos os restaurantes.
     */

    restaurantes.forEach(function(restaurante) {

        restaurante.style.display = "block";

    });


    /*
     * Ativa o filtro "Todos".
     */

    botoesFiltro.forEach(function(button) {

        button.classList.remove("active");

    });


    if (botoesFiltro.length > 0) {

        botoesFiltro[0].classList.add("active");

    }


    mostrarMensagem(restaurantes.length);

}



/* =====================================
   CLIQUE NOS FILTROS
===================================== */

botoesFiltro.forEach(function(botao) {

    botao.addEventListener(
        "click",
        function() {

            if (campoPesquisa) {

                campoPesquisa.value = "";

            }

        }
    );

});



/* =====================================
   ANIMAÇÃO DOS CARDS
===================================== */

restaurantes.forEach(function(restaurante) {

    restaurante.addEventListener(
        "mouseenter",
        function() {

            restaurante.classList.add("card-hover");

        }
    );


    restaurante.addEventListener(
        "mouseleave",
        function() {

            restaurante.classList.remove("card-hover");

        }
    );

});



/* =====================================
   LINKS DE DELIVERY
===================================== */

const linksDelivery =
    document.querySelectorAll(
        '.card-footer a'
    );


linksDelivery.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            /*
             * Abre links externos em
             * uma nova aba quando necessário.
             */

            const destino =
                link.getAttribute("href");


            if (
                destino &&
                destino.startsWith("http")
            ) {

                link.setAttribute(
                    "target",
                    "_blank"
                );

                link.setAttribute(
                    "rel",
                    "noopener noreferrer"
                );

            }

        }
    );

});



/* =====================================
   SCROLL SUAVE PARA OS LINKS
===================================== */

const linksInternos =
    document.querySelectorAll(
        'a[href^="#"]'
    );


linksInternos.forEach(function(link) {

    link.addEventListener(
        "click",
        function(event) {

            const destino =
                link.getAttribute("href");


            if (
                !destino ||
                destino === "#"
            ) {

                return;

            }


            const elemento =
                document.querySelector(destino);


            if (elemento) {

                event.preventDefault();


                elemento.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }
    );

});



/* =====================================
   INICIALIZAÇÃO
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
         * Garante que todos os restaurantes
         * apareçam inicialmente.
         */

        restaurantes.forEach(
            function(restaurante) {

                restaurante.style.display =
                    "block";

            }
        );


        /*
         * Ativa o primeiro filtro.
         */

        if (botoesFiltro.length > 0) {

            botoesFiltro.forEach(
                function(button) {

                    button.classList.remove(
                        "active"
                    );

                }
            );


            botoesFiltro[0].classList.add(
                "active"
            );

        }

    }
);
