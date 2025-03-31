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
    
    // Guardar referencias a las miniaturas existentes antes de limpiar
    const existingThumbnails = {};
    document.querySelectorAll('.gallery-thumbnails').forEach(thumbnails => {
      const galleryId = thumbnails.getAttribute('data-gallery');
      if (galleryId) {
        existingThumbnails[galleryId] = thumbnails.cloneNode(true);
        console.log(`Guardando miniaturas para galería ${galleryId}`);
      }
    });

    // Limpiar contenido existente
    projectsGrid.innerHTML = '';

    // Crear elementos para cada proyecto
    for (let i = 1; i <= 3; i++) {
      const projectTitleKey = `projects.project${i}.title`;
      const projectSubtitleKey = `projects.project${i}.subtitle`;
      const projectLocationKey = `projects.project${i}.location`;
      const projectAreaKey = `projects.project${i}.area`;
      const projectConcessionKey = `projects.project${i}.concessions`;
      const projectExplorationKey = `projects.project${i}.exploration`;
      const projectReservesKey = `projects.project${i}.reserves`;
      const projectCertificationKey = `projects.project${i}.certification`;
      const projectHistoryKey = `projects.project${i}.history`;
      const projectWaterKey = `projects.project${i}.water`;
      const projectInvestmentKey = `projects.project${i}.investment`;
      const projectOptionsKey = `projects.project${i}.options`;
      const projectPriceKey = `projects.project${i}.price`;
      const projectImageKey = `projects.project${i}.image`;
      const requestInfoKey = 'projects.requestInfo';

      const projectTitle = this.getTranslation(projectTitleKey);
      const projectSubtitle = this.getTranslation(projectSubtitleKey);
      const projectLocation = this.getTranslation(projectLocationKey);
      const projectArea = this.getTranslation(projectAreaKey);
      const projectPrice = this.getTranslation(projectPriceKey);
      const projectImage = this.getTranslation(projectImageKey);
      const requestInfo = this.getTranslation(requestInfoKey);
      
      if (projectTitle && projectPrice) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'bg-dark-light p-8 rounded-lg animate-section';
        
        // Construir información adicional según el proyecto
        let projectDetails = '';
        
        // Información común para todos los proyectos
        if (projectSubtitle) {
          projectDetails += `<p class="text-primary font-medium mb-4">${projectSubtitle}</p>`;
        }
        
        if (projectLocation) {
          projectDetails += `<p class="text-white/80 mb-2">${projectLocation}</p>`;
        }
        
        if (projectArea) {
          projectDetails += `<p class="text-white/80 mb-2">${projectArea}</p>`;
        }
        
        // Información específica por proyecto
        const projectConcession = this.getTranslation(projectConcessionKey);
        if (projectConcession) {
          projectDetails += `<p class="text-white/80 mb-2">${projectConcession}</p>`;
        }
        
        const projectExploration = this.getTranslation(projectExplorationKey);
        if (projectExploration) {
          projectDetails += `<p class="text-white/80 mb-2">${projectExploration}</p>`;
        }
        
        const projectReserves = this.getTranslation(projectReservesKey);
        if (projectReserves) {
          projectDetails += `<p class="text-white/80 mb-2">${projectReserves}</p>`;
        }
        
        const projectCertification = this.getTranslation(projectCertificationKey);
        if (projectCertification) {
          projectDetails += `<p class="text-white/80 mb-2">${projectCertification}</p>`;
        }
        
        const projectHistory = this.getTranslation(projectHistoryKey);
        if (projectHistory) {
          projectDetails += `<p class="text-white/80 mb-2">${projectHistory}</p>`;
        }
        
        const projectWater = this.getTranslation(projectWaterKey);
        if (projectWater) {
          projectDetails += `<p class="text-white/80 mb-2">${projectWater}</p>`;
        }
        
        const projectInvestment = this.getTranslation(projectInvestmentKey);
        if (projectInvestment) {
          projectDetails += `<p class="text-white/80 mb-2">${projectInvestment}</p>`;
        }
        
        const projectOptions = this.getTranslation(projectOptionsKey);
        if (projectOptions) {
          projectDetails += `<p class="text-white/80 mb-2">${projectOptions}</p>`;
        }
        
        // Construir el HTML del proyecto
        let projectHTML = `
          <div class="flex flex-col h-full">
            <div class="mb-4">
              ${projectImage ? `<div class="project-main-image cursor-pointer" data-project-id="${i}">
                <img src="${projectImage}" alt="${projectTitle}" class="w-full h-48 object-cover rounded-lg mb-4">
              </div>` : ''}
              <h3 class="text-xl font-semibold mb-2">${projectTitle}</h3>
            </div>
            <div class="flex-grow">
              ${projectDetails}
            </div>
            <div class="mt-4">
              <p class="text-primary font-semibold text-lg mb-4">${projectPrice}</p>
              <div class="flex flex-col space-y-2">
                <button class="w-full py-2 px-4 bg-primary/10 text-primary border border-primary/20 rounded hover:bg-primary/20 transition-colors request-info-btn" data-project="${projectTitle}">
                  ${requestInfo}
                </button>
                <a href="https://wa.me/56987605326?text=Hola,%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20${encodeURIComponent(projectTitle)}" target="_blank" class="flex items-center justify-center py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        `;
        
        projectDiv.innerHTML = projectHTML;
        projectsGrid.appendChild(projectDiv);
        
        // Restaurar las miniaturas si existían previamente
        if (projectId && existingThumbnails[projectId]) {
          const projectContainer = projectDiv.querySelector('.flex-col');
          if (projectContainer) {
            // Buscar el último div (botón) para insertar antes de él
            const lastDiv = projectContainer.querySelector('.mt-4');
            if (lastDiv) {
              projectContainer.insertBefore(existingThumbnails[projectId], lastDiv);
            } else {
              projectContainer.appendChild(existingThumbnails[projectId]);
            }
            console.log(`Restauradas miniaturas para proyecto ${i} (${projectId})`);
          }
        }
      }
    }

    // Animar los elementos con un pequeño retraso
    setTimeout(() => {
      const projectElements = projectsGrid.querySelectorAll('.animate-section');
      window.animateWithDelay(projectElements, 200);
      
      // Añadir funcionalidad a los botones de solicitar información
      document.querySelectorAll('.request-info-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          const projectName = button.getAttribute('data-project');
          const contactSection = document.getElementById('contact');
          
          // Desplazarse a la sección de contacto
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            
            // Si hay un campo de asunto, prellenarlo
            const subjectField = document.querySelector('input[name="subject"], textarea[name="subject"]');
            if (subjectField) {
              subjectField.value = `Solicitud de información: ${projectName}`;
            }
            
            // Si hay un campo de mensaje, añadir texto predeterminado
            const messageField = document.querySelector('textarea[name="message"]');
            if (messageField) {
              messageField.value = `Hola, me gustaría recibir más información sobre el proyecto ${projectName}.`;
            }
            
            // Enfocar el primer campo del formulario
            const firstInput = contactSection.querySelector('input, textarea');
            if (firstInput) {
              setTimeout(() => firstInput.focus(), 800);
            }
          }
        });
      });
      
      // Reinicializar las galerías y sus listeners después de actualizar los proyectos
      // Esto es crucial para que las imágenes sean clickeables después de cambiar el idioma
      console.log('Llamando a reinitializeGalleryListeners desde language.js');
      if (typeof reinitializeGalleryListeners === 'function') {
        // Dar un poco de tiempo para que el DOM se estabilice
        setTimeout(() => {
          reinitializeGalleryListeners();
        }, 100);
      } else {
        console.error('La función reinitializeGalleryListeners no está disponible. Asegúrate de que gallery.js se carga antes que language.js');
      }
    }, 300);
  }
}

// Inicializar el sistema de idiomas cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.languageManager = new LanguageManager();
  window.languageManager.init();
});
