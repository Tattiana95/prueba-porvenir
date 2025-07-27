document.addEventListener('DOMContentLoaded', () => {
    // Manejo del menú hamburguesa para dispositivos móviles
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMenuButton = document.getElementById('close-menu');

    // Abre el menú móvil
    hamburgerMenu.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('hidden');
        // Pequeño retraso para permitir que la visibilidad cambie antes de la transición
        setTimeout(() => {
            mobileMenuOverlay.classList.add('opacity-100');
            mobileMenuOverlay.children[0].classList.remove('translate-x-full');
            mobileMenuOverlay.children[0].classList.add('translate-x-0');
        }, 10);
    });

    // Cierra el menú móvil
    closeMenuButton.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('opacity-100');
        mobileMenuOverlay.children[0].classList.remove('translate-x-0');
        mobileMenuOverlay.children[0].classList.add('translate-x-full');
        // Pequeño retraso para permitir que la transición termine antes de ocultar
        setTimeout(() => {
            mobileMenuOverlay.classList.add('hidden');
        }, 300); // Coincide con la duración de la transición CSS
    });

    // Cierra el menú móvil si se hace clic fuera del panel (en el overlay oscuro)
    mobileMenuOverlay.addEventListener('click', (event) => {
        if (event.target === mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('opacity-100');
            mobileMenuOverlay.children[0].classList.remove('translate-x-0');
            mobileMenuOverlay.children[0].classList.add('translate-x-full');
            setTimeout(() => {
                mobileMenuOverlay.classList.add('hidden');
            }, 300);
        }
    });

    // Manejo del envío del formulario (ejemplo)
    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Previene el envío por defecto del formulario

            const name = contactForm.querySelector('input[placeholder="Nombre completo"]').value;
            const email = contactForm.querySelector('input[placeholder="Correo electrónico"]').value;
            const phone = contactForm.querySelector('input[placeholder="Teléfono"]').value;
            const acceptsPolicy = contactForm.querySelector('#data-policy').checked;

            // Validación básica
            if (!name || !email || !phone) {
                alert('Por favor, completa todos los campos del formulario.'); // Usar un modal personalizado en producción
                return;
            }
            if (!acceptsPolicy) {
                alert('Debes aceptar las políticas de tratamiento de datos.'); // Usar un modal personalizado en producción
                return;
            }

            // Aquí iría la lógica para enviar los datos del formulario, por ejemplo, a una API
            console.log('Datos del formulario enviados:', { name, email, phone, acceptsPolicy });
            alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.'); // Usar un modal personalizado en producción

            // Opcional: Resetear el formulario después del envío exitoso
            contactForm.reset();
        });
    }

    // Animación de scroll suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
