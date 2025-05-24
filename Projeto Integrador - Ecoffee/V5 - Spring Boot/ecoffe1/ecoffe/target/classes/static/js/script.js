document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener("click", function () {
            const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true' || false;
            navbarToggle.setAttribute('aria-expanded', !isExpanded);
            navbarMenu.classList.toggle("active");
        });
    }

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
                if (navbarMenu && navbarMenu.classList.contains("active")) {
                    navbarMenu.classList.remove("active");
                    navbarToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    const track = document.querySelector(".faixa-depoimentos");
    const cards = document.querySelectorAll(".cartao-depoimento");
    const dotsContainer = document.querySelector(".carrossel-dots");
    const prevBtn = document.querySelector(".carrossel-btn.prev");
    const nextBtn = document.querySelector(".carrossel-btn.next");
    
    let currentIndex = 0;
    let autoAdvanceInterval;

    if (track && cards.length > 0 && prevBtn && nextBtn && dotsContainer) {
        function updateCarousel() {
            const offset = -currentIndex * 100;
            track.style.transform = `translateX(${offset}%)`;

            const dots = dotsContainer.querySelectorAll(".dot");
            if (dots.length > 0) {
                dots.forEach((dot, index) => {
                    dot.classList.toggle("active", index === currentIndex);
                });
            }
        }

        function changeSlide(direction) {
            currentIndex = (currentIndex + direction + cards.length) % cards.length;
            updateCarousel();
        }

        function startAutoAdvance() {
            clearInterval(autoAdvanceInterval);
            autoAdvanceInterval = setInterval(() => changeSlide(1), 5000);
        }
        
        function stopAutoAdvance() {
            clearInterval(autoAdvanceInterval);
        }

        nextBtn.addEventListener("click", () => {
            changeSlide(1);
            startAutoAdvance(); 
        });
        prevBtn.addEventListener("click", () => {
            changeSlide(-1);
            startAutoAdvance();
        });

        const dots = dotsContainer.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentIndex = index;
                updateCarousel();
                startAutoAdvance();
            });
        });
        
        const carouselWrapper = document.querySelector(".carrossel-depoimentos-wrapper");
        if (carouselWrapper) {
            carouselWrapper.addEventListener("mouseenter", stopAutoAdvance);
            carouselWrapper.addEventListener("mouseleave", startAutoAdvance);
        }
        
        // Pausar com foco (acessibilidade)
        const focusableElements = [prevBtn, nextBtn, ...dots];
        focusableElements.forEach(el => {
            el.addEventListener('focus', stopAutoAdvance);
            el.addEventListener('blur', startAutoAdvance);
        });


        updateCarousel();
        startAutoAdvance();
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
            this.reset();
        });
    }

    const themeToggle = document.querySelector("#theme-toggle");
    if (themeToggle) {
        const darkMode = localStorage.getItem("dark-theme") === "true";
        if (darkMode) {
            document.body.classList.add("dark-theme");
        }
        themeToggle.textContent = darkMode ? "☀️" : "🌙";

        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-theme");
            const isDark = document.body.classList.contains("dark-theme");
            localStorage.setItem("dark-theme", isDark);
            themeToggle.textContent = isDark ? "☀️" : "🌙";
        });
    }
});