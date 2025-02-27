document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    let ratingValue = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            ratingValue = star.getAttribute('data-value');
            updateStars(ratingValue);
        });

        star.addEventListener('mouseover', () => {
            const hoveredValue = star.getAttribute('data-value');
            updateStars(hoveredValue);
        });

        star.addEventListener('mouseout', () => {
            updateStars(ratingValue);
        });
    });

    function updateStars(value) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= value) {
                star.style.color = '#D2691E'; // Estrela dourada
            } else {
                star.style.color = 'white'; // Estrela branca
            }
        });
    }
});



/* Foi usado o JS, pois o "marcar a estrela" e "alterar a cor da estrela" exigie interação personalizada que não é possível diretamente usando o Bootstrap, que por si só, não 
possui um componente de estrelas de avaliação interativo. Usando Bootstrap você perde a interatividade das estrelas ao passar o mouse e a mudança de cor dinâmica 
- Teria que ser usado btn-check e ficaria feio */