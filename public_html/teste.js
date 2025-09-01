//Cabecalho diminui ao scroll

const cabecalho = document.querySelector('.cabecalho');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        cabecalho.classList.add('scroll');
    } else {
        cabecalho.classList.remove('scroll');
    }
});