const mensagemDaListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemDaListaVazia.style.display = "block"
    } else {
        mensagemDaListaVazia.style.display = "none"
    }
}

export default verificarListaVazia;