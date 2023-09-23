/*=========icon navbar ==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*=========scroll section link ==============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*=========sticky navbar ==============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*=========remove toggle icon and navbar when click navbar link (scroll) ==============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*=========scroll reveal ==============*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .footer-logo', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .contact-div, .footer-text', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .footer-info .social-media, .footer-iconTop', { origin: 'right' });



/*=========typed js ==============*/
const typed = new Typed('.multiple-text', {
    strings: ['Power the Solution'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// Seleciona todos os links dentro da classe "portfolio-layer"
var links = document.querySelectorAll('.portfolio-layer a');

// Adiciona um ouvinte de evento a cada link
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Impede o comportamento padrão do link (navegação)
        event.preventDefault();

         // Obtém o URL do link clicado
        var linkURL = link.getAttribute('href');

        // Abre o link em uma nova aba
        window.open(linkURL, '.blank');
    });
});

