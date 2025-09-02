document.addEventListener('DOMContentLoaded', function() {
    // Inicializa EmailJS
    emailjs.init('YhNNDbtCDmq9DmNvT'); // seu User ID

    const form = document.getElementById('contato-form');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        emailjs.sendForm('service_niw39h4', 'template_0yfqo4u', this)
            .then((response) => {
                console.log('Sucesso!', response.status, response.text);
                feedback.textContent = 'Mensagem enviada com sucesso!';
                feedback.className = 'success';
                form.reset(); // limpa o formulário
            })
            .catch((err) => {
                console.error('Erro:', err);
                feedback.textContent = 'Erro ao enviar mensagem. Verifique os IDs e tente novamente.';
                feedback.className = 'error';
            });
    });
});