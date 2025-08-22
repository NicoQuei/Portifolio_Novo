const elementos = document.querySelectorAll('.animacao');

function aparecerAoScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const elTop = el.getBoundingClientRect().top;

        if(elTop < triggerBottom) {
            el.classList.add('aparecer');
        }
    });
}

window.addEventListener('scroll', aparecerAoScroll);
aparecerAoScroll();