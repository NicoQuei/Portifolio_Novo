// Usando a versão mais simples do EmailJS v4+ via CDN
import { sendForm } from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o envio tradicional

    sendForm(
        'service_niw39h4',   // Substitua pelo seu Service ID
        'template_qa7osh9',  // Substitua pelo seu Template ID
        form,
        'YhNNDbtCDmq9DmNvT'    // Substitua pela sua Public Key
    )
    .then(() => {
        alert('Mensagem enviada! Obrigado pelo contato.');
    })
    .catch(() => {
        alert('Ops! Algo deu errado. Tente novamente.');
    });
});
