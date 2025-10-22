// Captura o formulário e a notificação
const form = document.getElementById("justificativaForm");
const notificacao = document.getElementById("notificacao");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Aqui poderia ser adicionado um envio real (ex: via API)
    notificacao.classList.add("ativa");

    // Remove a notificação após alguns segundos
    setTimeout(() => {
        notificacao.classList.remove("ativa");
    }, 3000);

    // Limpa o formulário
    form.reset();
});
