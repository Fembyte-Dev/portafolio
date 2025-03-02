document.addEventListener('DOMContentLoaded', function () {
    // Navegación entre secciones
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        if (!button.classList.contains('blog-button')) {
            button.addEventListener('click', function () {
                // Remover clase activa de todos los botones
                navButtons.forEach(btn => {
                    btn.classList.remove('active');
                });

                // Añadir clase activa al botón clickeado
                this.classList.add('active');

                // Ocultar todas las secciones
                contentSections.forEach(section => {
                    section.classList.remove('active');
                });

                // Mostrar la sección correspondiente
                const sectionId = this.getAttribute('data-section');
                const section = document.getElementById(sectionId);
                section.classList.add('active');

                // Reseteamos las animaciones
                const animatedElements = section.querySelectorAll('.animated-text');
                animatedElements.forEach(el => {
                    el.style.animation = 'none';
                    setTimeout(() => {
                        el.style.animation = '';
                    }, 10);
                });

                // Efecto de sonido de máquina de escribir
                playTypeSound();

                // Animación de efecto de escritura para los títulos
                animateTypingEffect();
            });
        }
    });

    // Blog button hover effect
    const blogButton = document.querySelector('.blog-button');
    blogButton.addEventListener('click', function (e) {
        e.preventDefault();
        alert("Mi blog estará disponible próximamente. ¡Estamos trabajando en ello!");
    });

    // Mostrar modales de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    const projectModals = document.querySelectorAll('.project-modal');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project-id');
            const modal = document.getElementById(`project-modal-${projectId}`);
            modal.classList.add('active');
            // Prevenir scroll en el body cuando el modal está abierto
            document.body.style.overflow = 'hidden';
        });
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.project-modal');
            modal.classList.remove('active');
            // Restaurar scroll en el body
            document.body.style.overflow = 'auto';
        });
    });

    // Cerrar modal al hacer clic fuera del contenido
    projectModals.forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Simulación de sonido al escribir
    function playTypeSound() {
        // En un caso real, aquí se podría implementar un sonido
        console.log("Click");
    }

    // Animación de efecto de escritura
    function animateTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-effect');
        typingElements.forEach(element => {
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = 'typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite';
            }, 10);
        });
    }

    // Inicializar animaciones al cargar la página
    animateTypingEffect();

    // Animar elementos con clase .animated-text
    const animatedElements = document.querySelectorAll('.animated-text');
    setTimeout(() => {
        animatedElements.forEach(el => {
            if (el.closest('.content-section.active')) {
                el.style.animation = '';
            }
        });
    }, 100);
});