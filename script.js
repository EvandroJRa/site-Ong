// script.js
// inicio animação carrossel paragrado//
let currentSlide = 1;

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (n > slides.length) {
        currentSlide = 1;
    } else if (n < 1) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';

        // Oculta os parágrafos de cada slide
        const paragraphs = slides[i].querySelectorAll('p');
        for (let j = 0; j < paragraphs.length; j++) {
            paragraphs[j].classList.add('hidden');
        }
    }

    slides[currentSlide - 1].style.display = 'block';

    // Exibe os parágrafos do slide atual com atraso
    const currentParagraphs = slides[currentSlide - 1].querySelectorAll('p');
    currentParagraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.classList.remove('hidden');
            paragraph.style.animation = 'fadenIn 1s forwards';
        }, index * 2000); // Atraso de 2 segundos para cada parágrafo
    });
}

function changeSlide(n) {
    showSlide(currentSlide += n);
}

// Função para avançar automaticamente para o próximo slide
function autoAdvance() {
    changeSlide(1);
    setTimeout(autoAdvance, 10000); // 10000 milissegundos (10 segundos)
}

// Inicie o avanço automático ao carregar a página
setTimeout(autoAdvance, 10000); // Inicialize após 10 segundos

// Exibir o primeiro slide ao carregar a página
showSlide(currentSlide);

 //Fim da Animação do carrossel//
 
// Menu Amburguer dispositivos moveis



