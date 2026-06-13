// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    '.card, .plan, .gallery-grid img, .about, .contact'
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (position < screenPosition) {

            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';

        }

    });

}

revealElements.forEach((element) => {

    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'all 0.8s ease';

});

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();