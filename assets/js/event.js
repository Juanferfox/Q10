// AOS.init();
AOS.init({
    duration: 1200,
    easing: 'ease',
    disable: function() {
        var maxWidth = 1024;
        return window.innerWidth < maxWidth;
    }
});

//toggle menu
const ham = document.querySelector('.hamburguer');
const enlaces = document.querySelector('.enlaces-menu2');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
});

//Load chatbox
window.onload = function() {
    fadeElement('conv1', '200');
    fadeElement('conv2', '2000');
    fadeElement('conv3', '700');
};

function fadeElement(item, time) {
    setTimeout(function fadeElement() {
        let itemElement = document.getElementById(item);
        itemElement.classList.add("animate-box");
    }, time);
}

// Number increment
addEventListener('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.contador_cantidad');

    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                    valor_actual = +contador.innerText,
                    incremento = +contador.dataset.incremento;
                if (valor_actual < cantidad_maxima) {
                    contador.innerText = Math.ceil(valor_actual + incremento);
                    setTimeout(actualizar_contador, 10);
                } else {
                    contador.innerText = cantidad_maxima;
                }
            };
            actualizar_contador();
        }
    };

    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                animarContadores();
            }
        });
    };

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.1
    });

    const elemntosHTML = document.querySelectorAll('.cards');
    elemntosHTML.forEach(elementosHTML => {
        observer.observe(elementosHTML);
    });
});


