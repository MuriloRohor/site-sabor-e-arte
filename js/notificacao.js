function handleFormSubmit(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Seleciona a notificação
    const notification = document.getElementById('notification');

    // Adiciona a classe para exibir a notificação
    notification.classList.add('show');

    // Remove a classe para ocultar após 4 segundos
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}