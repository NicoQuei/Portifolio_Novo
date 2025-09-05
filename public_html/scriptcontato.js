<<<<<<< Updated upstream
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
=======
// Configuração EmailJS
emailjs.init('YhNNDbtCDmq9DmNvT');

const CONFIG = {
    serviceId: 'service_niw39h4',
    templateParaVoce: 'template_0yfqo4u'
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const button = form.querySelector('button[type="submit"]');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const nome = form.from_name.value.trim();
        const email = form.reply_to.value.trim();
        const mensagem = form.message.value.trim();
        
        if (!nome || !email || !mensagem) {
            alert('Preencha todos os campos!');
            return;
        }
        
        // Loading
        button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        button.disabled = true;
        
        try {
            // Email único com auto-reply
            console.log('Enviando email...');
            await emailjs.sendForm(CONFIG.serviceId, CONFIG.templateParaVoce, form);
            console.log('✅ Email enviado com auto-reply!');
            
            // Sucesso
            button.innerHTML = '<i class="fa-solid fa-check"></i> Enviado!';
            button.style.backgroundColor = '#4caf50';
            button.style.color = 'white';
            
            // Reset após 3 segundos
            setTimeout(() => {
                form.reset();
                button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar email';
                button.style.backgroundColor = '';
                button.style.color = '';
                button.disabled = false;
            }, 3000);
            
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar. Tente novamente!');
            
            button.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar email';
            button.disabled = false;
        }
>>>>>>> Stashed changes
    });
});