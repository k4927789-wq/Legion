document.addEventListener('DOMContentLoaded', () => {
    // Animación de aparición gradual escalonada para las reglas
    const ruleCards = document.querySelectorAll('.rule-card');

    ruleCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });

    // Consola decorativa de bienvenida
    console.log('%c IMPERIO GUERREROS OSCUROS ', 'background: #050508; color: #ffc107; font-size: 16px; font-weight: bold; border: 1px solid #ff2a42;');
    console.log('%c Código desarrollado por Kiri ', 'color: #ff2a42; font-size: 12px;');
});
