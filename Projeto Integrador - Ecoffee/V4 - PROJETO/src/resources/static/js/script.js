// Mobile menu toggle
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-menu').classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonials carousel
const track = document.querySelector('.faixa-depoimentos');
const cards = document.querySelectorAll('.cartao-depoimento');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.carrossel-btn.prev');
const nextBtn = document.querySelector('.carrossel-btn.next');
let currentIndex = 0;

function updateCarousel() {
    // Update cards
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentIndex) {
            card.classList.add('active');
        }
    });

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Auto-advance carousel
let autoAdvance = setInterval(nextSlide, 5000);

// Pause auto-advance on hover
const carousel = document.querySelector('.carrossel-depoimentos');
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoAdvance);
});

carousel.addEventListener('mouseleave', () => {
    autoAdvance = setInterval(nextSlide, 5000);
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});