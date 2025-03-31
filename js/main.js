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
  console.log('Configurando menú móvil...');
  
  // Obtener elementos del menú móvil
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!mobileMenuButton) {
    console.error('No se encontró el botón del menú móvil');
    return;
  }
  
  if (!mobileMenu) {
    console.error('No se encontró el contenedor del menú móvil');
    return;
  }
  
  console.log('Menú móvil encontrado, configurando eventos...');
  
  // Alternar la visibilidad del menú móvil al hacer clic en el botón
  mobileMenuButton.addEventListener('click', function() {
    console.log('Clic en botón de menú móvil');
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      console.log('Menú móvil mostrado');
    } else {
      mobileMenu.classList.add('hidden');
      console.log('Menú móvil ocultado');
    }
  });
  
  // Cerrar el menú móvil al hacer clic en cualquier enlace
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      console.log('Clic en enlace del menú móvil');
      mobileMenu.classList.add('hidden');
    });
  });
  
  // Configurar el cambio de idioma en el menú móvil
  const languageSwitchMobile = document.getElementById('language-switch-mobile');
  if (languageSwitchMobile) {
    languageSwitchMobile.addEventListener('click', function() {
      if (window.languageManager) {
        window.languageManager.toggleLanguage();
        const currentLangMobile = document.getElementById('current-lang-mobile');
        if (currentLangMobile) {
          currentLangMobile.textContent = window.languageManager.currentLanguage.toUpperCase();
        }
      }
      mobileMenu.classList.add('hidden');
    });
  }
  
  console.log('Configuración del menú móvil completada');
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
