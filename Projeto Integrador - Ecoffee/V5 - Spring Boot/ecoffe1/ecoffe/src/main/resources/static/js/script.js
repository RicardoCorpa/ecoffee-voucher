// Alternância do menu móvel (Mobile menu toggle)
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener("click", function () {
            navbarMenu.classList.toggle("active");
        });
    }

    // Scroll suave para links de ancoragem (Smooth scroll for anchor links)
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Carrossel de depoimentos (Testimonials carousel)
    const track = document.querySelector(".faixa-depoimentos");
    const cards = document.querySelectorAll(".cartao-depoimento");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".carrossel-btn.prev");
    const nextBtn = document.querySelector(".carrossel-btn.next");
    let currentIndex = 0;

    if (track && cards.length > 0 && prevBtn && nextBtn) {
        function updateCarousel() {
            cards.forEach((card, index) => {
                card.classList.toggle("active", index === currentIndex);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentIndex);
            });
        }

        function changeSlide(direction) {
            currentIndex = (currentIndex + direction + cards.length) % cards.length;
            updateCarousel();
        }

        nextBtn.addEventListener("click", () => changeSlide(1));
        prevBtn.addEventListener("click", () => changeSlide(-1));

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        let autoAdvance = setInterval(() => changeSlide(1), 5000);

        track.addEventListener("mouseenter", () => clearInterval(autoAdvance));
        track.addEventListener("mouseleave", () => autoAdvance = setInterval(() => changeSlide(1), 5000));
    }

    // Envio do formulário de contato (Form submission)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
            this.reset();
        });
    }

    // Alternância de tema escuro/claro com persistência (Dark mode toggle with localStorage)
    const themeToggle = document.querySelector("#theme-toggle");
    if (themeToggle) {
        const darkMode = localStorage.getItem("dark-theme") === "true";
        document.body.classList.toggle("dark-theme", darkMode);
        themeToggle.textContent = darkMode ? "☀️" : "🌙";

        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-theme");
            const isDark = document.body.classList.contains("dark-theme");
            localStorage.setItem("dark-theme", isDark);
            themeToggle.textContent = isDark ? "☀️" : "🌙";
        });
    }
});