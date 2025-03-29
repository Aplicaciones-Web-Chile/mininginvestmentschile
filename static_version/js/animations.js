/**
 * Maneja las animaciones de entrada de las secciones
 * Reemplaza la funcionalidad de Framer Motion
 */
document.addEventListener('DOMContentLoaded', () => {
  // Configuración del observador de intersección
  const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% del elemento visible
  };

  // Callback para cuando un elemento entra en el viewport
  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Una vez que se ha animado, ya no necesitamos observarlo
        observer.unobserve(entry.target);
      }
    });
  };

  // Crear el observador
  const observer = new IntersectionObserver(handleIntersect, options);

  // Observar todas las secciones con la clase animate-section
  document.querySelectorAll('.animate-section').forEach(section => {
    observer.observe(section);
  });

  // Animar el hero section inmediatamente
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    setTimeout(() => {
      heroSection.classList.add('visible');
    }, 300);
  }

  // Función para animar elementos con retraso (para componentes dentro de secciones)
  window.animateWithDelay = (elements, baseDelay = 100) => {
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, baseDelay * index);
    });
  };
});

// Función para crear animaciones de hover
window.setupHoverAnimations = () => {
  document.querySelectorAll('.hover-scale').forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.05)';
      element.style.transition = 'transform 0.3s ease';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
    });
  });
};
