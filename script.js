// TASK 5: Interactividad dinámica
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mensaje de bienvenida
    alert("¡Bienvenido a mi portafolio, soy Keiner Martinez!");

    const btnContacto = document.querySelector('#inicio .btn');
const parrafoHero = document.querySelector('.hero-text p');

    // 2. Interactividad: Cambiar texto al hacer clic
    btnContacto.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Acción de cambio de texto
        parrafoHero.textContent = "¡Gracias por contactarme! He recibido tu interés. El portafolio ahora es interactivo.";
        
        // 3. Efecto dinámico (Cambio de estilo)
        parrafoHero.style.color = "var(--primary-color)";
        parrafoHero.style.fontWeight = "bold";
    });
});
