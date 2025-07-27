// Função para alternar entre as seções do site
function mostrarPagina(pagina) {
    // Oculta todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(p => p.style.display = 'none');

    // Exibe a página selecionada
    document.getElementById(pagina).style.display = 'block';
}

// Função para lidar com o envio do formulário
function enviarFormulario(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe uma mensagem de confirmação
    alert('Mensagem enviada com sucesso!');

    // Redireciona para a página "Sobre mim"
    mostrarPagina('sobre');

    // Limpa o formulário
    document.getElementById('formContato').reset();
}
