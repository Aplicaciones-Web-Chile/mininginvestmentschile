/**
 * Sistema de internacionalización simple
 * Reemplaza la funcionalidad de i18next
 */
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'es';
    this.translations = {};
    this.langButton = document.getElementById('language-switch');
    this.langDisplay = document.getElementById('current-lang');
  }

  async init() {
    // Cargar traducciones
    try {
      const response = await fetch(`locales/${this.currentLanguage}.json`);
      this.translations = await response.json();
      
      // Configurar el botón de cambio de idioma
      if (this.langButton) {
        this.langButton.addEventListener('click', () => this.toggleLanguage());
      }
      
      // Actualizar la interfaz con el idioma actual
      this.updateLanguageDisplay();
      this.updateDOM();
    } catch (error) {
      console.error('Error al cargar las traducciones:', error);
    }
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('language', this.currentLanguage);
    
    // Recargar traducciones y actualizar la interfaz
    this.init();
  }

  updateLanguageDisplay() {
    if (this.langDisplay) {
      this.langDisplay.textContent = this.currentLanguage.toUpperCase();
    }
  }

  updateDOM() {
    // Actualizar todos los elementos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      if (translation) {
        element.textContent = translation;
      }
    });

    // Actualizar placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = this.getTranslation(key);
      if (translation) {
        element.placeholder = translation;
      }
    });

    // Actualizar servicios y proyectos
    this.updateServices();
    this.updateProjects();
  }

  getTranslation(key) {
    // Obtener traducción a partir de una clave anidada (ej: "hero.title")
    return key.split('.').reduce((obj, i) => obj && obj[i], this.translations);
  }

  updateServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    // Limpiar contenido existente
    servicesGrid.innerHTML = '';

    // Iconos para los servicios
    const icons = {
      service1: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-primary mb-4"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>',
      service2: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-primary mb-4"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
      service3: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-primary mb-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
      service4: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-primary mb-4"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M4 15v-3a6 6 0 0 1 6-6h0"></path><path d="M14 6h0a6 6 0 0 1 6 6v3"></path></svg>',
      service5: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-primary mb-4"><path d="M15 12H9"></path><path d="M12 9v6"></path><path d="M10 16H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-5 5v-5z"></path></svg>'
    };

    // Crear elementos para cada servicio
    for (let i = 1; i <= 5; i++) {
      const serviceKey = `services.service${i}`;
      const serviceText = this.getTranslation(serviceKey);
      
      if (serviceText) {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'p-6 bg-dark rounded-lg border border-primary/20 hover:border-primary/40 transition-colors animate-section';
        serviceDiv.innerHTML = `
          ${icons[`service${i}`]}
          <p class="text-lg">${serviceText}</p>
        `;
        servicesGrid.appendChild(serviceDiv);
      }
    }

    // Animar los elementos con un pequeño retraso
    setTimeout(() => {
      const serviceElements = servicesGrid.querySelectorAll('.animate-section');
      window.animateWithDelay(serviceElements, 150);
    }, 300);
  }

  updateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    // Limpiar contenido existente
    projectsGrid.innerHTML = '';

    // Crear elementos para cada proyecto
    for (let i = 1; i <= 2; i++) {
      const projectTitleKey = `projects.project${i}.title`;
      const projectReservesKey = `projects.project${i}.reserves`;
      const projectPriceKey = `projects.project${i}.price`;
      const projectCertificationKey = `projects.project${i}.certification`;
      const projectAreaKey = `projects.project${i}.area`;
      const requestInfoKey = 'projects.requestInfo';

      const projectTitle = this.getTranslation(projectTitleKey);
      const projectReserves = this.getTranslation(projectReservesKey);
      const projectPrice = this.getTranslation(projectPriceKey);
      const requestInfo = this.getTranslation(requestInfoKey);
      
      if (projectTitle && projectReserves && projectPrice) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'bg-dark-light p-8 rounded-lg animate-section';
        
        let additionalInfo = '';
        if (i === 1) {
          const certification = this.getTranslation(projectCertificationKey);
          if (certification) {
            additionalInfo = `<p class="text-white/80 mb-2">${certification}</p>`;
          }
        } else if (i === 2) {
          const area = this.getTranslation(projectAreaKey);
          if (area) {
            additionalInfo = `<p class="text-white/80 mb-2">${area}</p>`;
          }
        }
        
        projectDiv.innerHTML = `
          <h3 class="text-xl font-semibold mb-4">${projectTitle}</h3>
          <p class="text-white/80 mb-2">${projectReserves}</p>
          ${additionalInfo}
          <p class="text-primary font-semibold mb-4">${projectPrice}</p>
          <button class="w-full py-2 px-4 bg-primary/10 text-primary border border-primary/20 rounded hover:bg-primary/20 transition-colors">
            ${requestInfo}
          </button>
        `;
        
        projectsGrid.appendChild(projectDiv);
      }
    }

    // Animar los elementos con un pequeño retraso
    setTimeout(() => {
      const projectElements = projectsGrid.querySelectorAll('.animate-section');
      window.animateWithDelay(projectElements, 200);
    }, 300);
  }
}

// Inicializar el sistema de idiomas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.languageManager = new LanguageManager();
  window.languageManager.init();
});
