// PRELOAD DA PAGINA

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.classList.add('hidden');
}, 500);
});

// Script da tradução da pagina

i18next.init({
        lng: 'pt', // idioma padrão
        resources: {
            pt: {
                translation: {
                    btn1: "Inicio",
                    btn2: "Sobre mim",
                    btn3: "Projetos",
                    apresentacao__p: "Desenvolvedor web apaixonado por criar experiências digitais modernas, elegantes e funcionais.",
                    apresentacao__a: "Ver meus projetos",
                    projetos: "Projetos",
                    card1__p: "Sistema que calcula a melhor combinação de caixas em um espaço 2D, maximizando a ocupação sem alterar suas orientações.",
                    servicos: "Meus serviços",
                    card3__p: "Sistema que calcula a melhor combinação de caixas em um espaço 2D, maximizando a ocupação sem alterar suas orientações.",
                    servico1__h3: "Criação de Sites",
                    servico1__p: "Sites modernos, responsivos e rápidos para empresas e projetos pessoais.",
                }
            },
            en: {
                translation: {
                    btn1: "Home",
                    btn2: "About me",
                    btn3: "Projects",
                    apresentacao__p: "Web developer passionate about creating modern, elegant, and functional digital experiences.",
                    apresentacao__a: "See my projects",
                    projetos: "Projects",
                    card1__p: "Digital catalog project built with HTML, CSS, and JavaScript, integrated with Firebase for data management. The system was designed to be responsive and support future e-commerce features, making the solution flexible and scalable.",
                    servicos: "My services",
                    servico1__h3: "Website Creation",
                    servico1__p: "Modern, responsive, and fast websites for businesses and personal projects.",
                }
            }
        }
    }, function(err, t) {
        updateText();
    });

    function updateText() {
        document.getElementById('btn1').textContent = i18next.t('btn1');
        document.getElementById('btn2').textContent = i18next.t('btn2');
        document.getElementById('btn3').textContent = i18next.t('btn3');
        document.getElementById('apresentacao__p').textContent = i18next.t('apresentacao__p');
        document.getElementById('apresentacao__a').textContent = i18next.t('apresentacao__a');
        document.getElementById('projetos').textContent = i18next.t('projetos');
        document.getElementById('card1__p').textContent = i18next.t('card1__p');
        document.getElementById('servicos').textContent = i18next.t('servicos');
        document.getElementById('servico1__h3').textContent = i18next.t('servico1__h3');
        document.getElementById('servico1__p').textContent = i18next.t('servico1__p');
    }

    // Botão para mudar idioma
    document.getElementById('btnIdioma').addEventListener('click', () => {

        const preloader = document.getElementById('preloader');

        preloader.classList.add('show');
        preloader.classList.remove('hidden');

        const novoIdioma = i18next.language === 'pt' ? 'en' : 'pt';
        i18next.changeLanguage(novoIdioma, () => {
            updateText();
            document.getElementById('btnIdioma').textContent = i18next.language === 'pt' ? 'en' : 'pt';
        });

        setTimeout(() => {
            preloader.classList.remove('show');
            preloader.classList.add('hidden');
        }, 500); 
});

// Script que muda o tema da pagina

const btnTema = document.getElementById('btnTema');
const icon = btnTema.querySelector('i');
const logo = document.getElementById('logo');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('day');
    
    if(document.body.classList.contains('day')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        logo.src = "assets/logo N preta.png";
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        logo.src = "assets/logo N.png";
    }
});

// Script que faz os elementos aparecerem de acordo com o Scroll

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

//Função pra abrir nav no celular

const hamb = document.getElementById('hamburguer');
const i = hamb.querySelector('i');

const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    i.classList.remove("fa-bars");
    i.classList.add("fa-xmark");
  } else {
    i.classList.remove("fa-xmark");
    i.classList.add("fa-bars");
  }
});

//Cabecalho diminui ao scroll

const cabecalho = document.querySelector('.cabecalho');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        cabecalho.classList.add('scroll');
    } else {
        cabecalho.classList.remove('scroll');
    }
});