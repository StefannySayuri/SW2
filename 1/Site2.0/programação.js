function mostrarConteudo() {
    var feijaoTropeiro = document.getElementById("feijaoTropeiro");
    if (feijaoTropeiro.style.display === "none") {
        feijaoTropeiro.style.display = "block"; // Mostra o conteúdo
    } else {
        feijaoTropeiro.style.display = "none"; // Esconde o conteúdo novamente se clicar de novo
    }
}