// efeito do header
const nav = document.querySelector('.header');
function fixednav() {
    if (window.scrollY > 250) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed')
    }
}
window.addEventListener('scroll' , fixednav);



$(document).ready(function() {
    // função para adicionar a classe "active" ao link da navegação
    function setActiveLink() {
        var scrollPos = $(document).scrollTop(); // obtém a posição de rolagem atual

        // percorre cada seção e verifica se está visível na janela
        $('section').each(function() {
            var currLink = $(this);
            var refElement = $(currLink).attr("id");

            if (currLink.position().top <= scrollPos && currLink.position().top + currLink.height() > scrollPos) {
                // remove a classe 'active' de todos os links
                $('.navbar-nav a').removeClass("active");

                // adiciona a classe 'active' ao link da seção visível
                $('.navbar-nav').find('a[href="#' + refElement + '"]').addClass("active");
            }
        });
    }

    // chama a função ao carregar a página e ao rolar
    setActiveLink();
    $(document).scroll(function() {
        setActiveLink();
    });
});



// Efeito digitando 
const typed = new Typed('.multiple-text', {
    strings: ['Code Web'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// Perguntas frequentes
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});




