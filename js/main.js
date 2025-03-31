/**
 * Funcionalidad principal del sitio
 */
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar animaciones de hover
  window.setupHoverAnimations();
  
  // Manejar el formulario de contacto
  setupContactForm();
  
  // Configurar menú móvil
  setupMobileMenu();
  
  // Configurar desplazamiento suave para los enlaces de navegación
  setupSmoothScrolling();
});

/**
 * Configura el formulario de contacto
 */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Mostrar indicador de carga
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = '...';
    submitButton.disabled = true;
    
    // Recopilar datos del formulario
    const formData = new FormData(form);
    
    try {
      // Enviar datos al servidor
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      // Mostrar mensaje de éxito o error
      if (result.success) {
        showFormMessage(true, window.languageManager.getTranslation('contact.success'));
        form.reset();
      } else {
        showFormMessage(false, result.message || window.languageManager.getTranslation('contact.error'));
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      showFormMessage(false, window.languageManager.getTranslation('contact.error'));
    } finally {
      // Restaurar el botón
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    }
  });
  
  function showFormMessage(isSuccess, message) {
    if (!formMessage) return;
    
    formMessage.textContent = message;
    formMessage.className = isSuccess ? 'form-success' : 'form-error';
    formMessage.classList.remove('hidden');
    
    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 5000);
  }
}

/**
 * Configura el menú móvil
 */
function setupMobileMenu() {
  const header = document.querySelector('header nav');
  if (!header) return;
  
  // Crear botón de menú móvil
  const mobileMenuButton = document.createElement('button');
  mobileMenuButton.className = 'mobile-menu-button block md:hidden';
  mobileMenuButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  `;
  
  header.appendChild(mobileMenuButton);
  
  // Clonar los enlaces de navegación para el menú móvil
  const navLinks = header.querySelector('.flex.items-center.gap-8');
  if (!navLinks) return;
  
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu hidden';
  mobileMenu.innerHTML = navLinks.innerHTML;
  
  header.appendChild(mobileMenu);
  
  // Alternar la visibilidad del menú móvil
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Cerrar el menú móvil al hacer clic en un enlace
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

/**
 * Configura el desplazamiento suave para los enlaces de navegación
 */
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Calcular la posición de desplazamiento (restar la altura del encabezado fijo)
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        // Desplazamiento suave
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
