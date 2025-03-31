/**
 * Gestión de galerías de imágenes para los proyectos mineros
 * Utiliza lightgallery para crear galerías interactivas
 */

// Configuración de las galerías por proyecto
const galleryConfig = {
  'las-carditas': {
    title: 'Galería Las Carditas',
    folder: 'las-carditas',
    images: [
      { src: 'mina-las-carditas-cobre-chile-vista-01.jpg', thumb: 'mina-las-carditas-cobre-chile-vista-01.jpg', alt: 'Vista panorámica de la mina Las Carditas' },
      { src: 'mina-las-carditas-cobre-chile-vista-02.jpg', thumb: 'mina-las-carditas-cobre-chile-vista-02.jpg', alt: 'Área de exploración Las Carditas' },
      { src: 'mina-las-carditas-cobre-chile-vista-03.jpg', thumb: 'mina-las-carditas-cobre-chile-vista-03.jpg', alt: 'Formación geológica en Las Carditas' },
      { src: 'mina-las-carditas-cobre-chile-vista-04.jpg', thumb: 'mina-las-carditas-cobre-chile-vista-04.jpg', alt: 'Zona de extracción Las Carditas' },
      { src: 'mina-las-carditas-cobre-chile-vista-05.jpg', thumb: 'mina-las-carditas-cobre-chile-vista-05.jpg', alt: 'Terreno minero Las Carditas' },
      { src: 'mina-las-carditas-cobre-chile-vista-06.jpg', thumb: 'mina-las-carditas-cobre-chile-vista-06.jpg', alt: 'Vetas minerales Las Carditas' },
      { src: 'mina-las-carditas-cobre-chile-vista-07.jpg', thumb: 'mina-las-carditas-cobre-chile-vista-07.jpg', alt: 'Paisaje minero Las Carditas' },
      { src: 'mina-las-carditas-cobre-chile-vista-08.jpg', thumb: 'mina-las-carditas-cobre-chile-vista-08.jpg', alt: 'Zona de operaciones Las Carditas' }
    ]
  },
  'pichasca': {
    title: 'Galería Pichasca',
    folder: 'pichasca',
    images: [
      { src: 'proyecto-minero-pichasca-chile-vista-01.jpg', thumb: 'proyecto-minero-pichasca-chile-vista-01.jpg', alt: 'Vista general del proyecto Pichasca' },
      { src: 'proyecto-minero-pichasca-chile-geologica-08.jpg', thumb: 'proyecto-minero-pichasca-chile-geologica-08.jpg', alt: 'Formación geológica en Pichasca' },
      { src: 'proyecto-minero-pichasca-chile-geologica-10.jpg', thumb: 'proyecto-minero-pichasca-chile-geologica-10.jpg', alt: 'Estudio geológico en Pichasca' },
      { src: 'proyecto-minero-pichasca-chile-geologica-15.jpg', thumb: 'proyecto-minero-pichasca-chile-geologica-15.jpg', alt: 'Muestras geológicas de Pichasca' },
      { src: 'proyecto-minero-pichasca-chile-geologica-17.jpg', thumb: 'proyecto-minero-pichasca-chile-geologica-17.jpg', alt: 'Análisis de terreno en Pichasca' },
      { src: 'proyecto-minero-pichasca-chile-geologica-18.jpg', thumb: 'proyecto-minero-pichasca-chile-geologica-18.jpg', alt: 'Zona de exploración Pichasca' },
      { src: 'proyecto-minero-pichasca-chile-geologica-19.jpg', thumb: 'proyecto-minero-pichasca-chile-geologica-19.jpg', alt: 'Área de extracción Pichasca' },
      { src: 'proyecto-minero-pichasca-chile-vista-13.jpg', thumb: 'proyecto-minero-pichasca-chile-vista-13.jpg', alt: 'Panorámica del yacimiento Pichasca' }
    ]
  },
  'tambillo': {
    title: 'Galería Tambillo',
    folder: 'tambillo',
    images: [
      { src: 'yacimiento-minero-tambillo-chile-vista-06.jpg', thumb: 'yacimiento-minero-tambillo-chile-vista-06.jpg', alt: 'Vista principal del yacimiento Tambillo' },
      { src: 'yacimiento-minero-tambillo-chile-panoramica-01.jpg', thumb: 'yacimiento-minero-tambillo-chile-panoramica-01.jpg', alt: 'Panorámica del proyecto Tambillo' },
      { src: 'yacimiento-minero-tambillo-chile-panoramica-03.jpg', thumb: 'yacimiento-minero-tambillo-chile-panoramica-03.jpg', alt: 'Área de operaciones Tambillo' },
      { src: 'yacimiento-minero-tambillo-chile-panoramica-05.jpg', thumb: 'yacimiento-minero-tambillo-chile-panoramica-05.jpg', alt: 'Zona de extracción Tambillo' },
      { src: 'yacimiento-minero-tambillo-chile-vista-07.jpg', thumb: 'yacimiento-minero-tambillo-chile-vista-07.jpg', alt: 'Instalaciones mineras Tambillo' },
      { src: 'yacimiento-minero-tambillo-chile-vista-09.jpg', thumb: 'yacimiento-minero-tambillo-chile-vista-09.jpg', alt: 'Terreno minero Tambillo' },
      { src: 'yacimiento-minero-tambillo-chile-vista-11.jpg', thumb: 'yacimiento-minero-tambillo-chile-vista-11.jpg', alt: 'Área de exploración Tambillo' },
      { src: 'yacimiento-minero-tambillo-chile-vista-12.jpg', thumb: 'yacimiento-minero-tambillo-chile-vista-12.jpg', alt: 'Vetas minerales Tambillo' }
    ]
  }
};

/**
 * Inicializa las galerías de imágenes para cada proyecto
 */
function initGalleries() {
  // Crear contenedores para las galerías
  createGalleryContainers();
  
  // Inicializar LightGallery para cada proyecto
  for (const projectId in galleryConfig) {
    const galleryEl = document.getElementById(`gallery-${projectId}`);
    if (galleryEl) {
      lightGallery(galleryEl, {
        selector: '.gallery-item',
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
        thumbnail: true,
        animateThumb: true,
        zoomFromOrigin: true,
        allowMediaOverlap: false,
        toggleThumb: true
      });
    }
  }
  
  // Inicializar miniaturas de galería
  initGalleryThumbnails();
}

/**
 * Crea los contenedores HTML para las galerías
 */
function createGalleryContainers() {
  // Buscar los contenedores de proyectos
  const projectCards = document.querySelectorAll('#projects-grid > div');
  
  projectCards.forEach((card, index) => {
    // Determinar qué proyecto es basado en el orden o el contenido
    let projectId = null;
    
    // Intentar identificar el proyecto por su título
    const titleEl = card.querySelector('h3');
    if (titleEl) {
      const title = titleEl.textContent.toLowerCase();
      if (title.includes('carditas')) {
        projectId = 'las-carditas';
      } else if (title.includes('pichasca')) {
        projectId = 'pichasca';
      } else if (title.includes('tambillo')) {
        projectId = 'tambillo';
      }
    }
    
    // Si no se pudo identificar por título, usar el índice
    if (!projectId) {
      const projectIds = Object.keys(galleryConfig);
      if (index < projectIds.length) {
        projectId = projectIds[index];
      }
    }
    
    // Si tenemos un ID de proyecto válido, crear la galería
    if (projectId && galleryConfig[projectId]) {
      createGalleryForProject(card, projectId);
    }
  });
}

/**
 * Crea una galería para un proyecto específico
 */
function createGalleryForProject(projectCard, projectId) {
  const config = galleryConfig[projectId];
  const basePath = `img/yacimientos/${config.folder}/`;
  
  // Crear contenedor de galería oculto
  const galleryContainer = document.createElement('div');
  galleryContainer.id = `gallery-${projectId}`;
  galleryContainer.className = 'hidden';
  
  // Crear elementos de galería
  config.images.forEach(image => {
    const item = document.createElement('a');
    item.href = `${basePath}${image.src}`;
    item.className = 'gallery-item';
    item.setAttribute('data-src', `${basePath}${image.src}`);
    item.setAttribute('data-sub-html', `<h4>${image.alt}</h4>`);
    
    const img = document.createElement('img');
    img.src = `${basePath}${image.thumb}`;
    img.alt = image.alt;
    img.className = 'hidden';
    
    item.appendChild(img);
    galleryContainer.appendChild(item);
  });
  
  // Agregar galería al DOM
  document.body.appendChild(galleryContainer);
  
  // Crear miniaturas visibles en la tarjeta del proyecto
  const thumbnailsContainer = document.createElement('div');
  thumbnailsContainer.className = 'gallery-thumbnails mt-4 grid grid-cols-4 gap-2';
  thumbnailsContainer.setAttribute('data-gallery', projectId);
  
  // Agregar solo las primeras 4 imágenes como miniaturas
  config.images.slice(0, 4).forEach((image, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.className = 'gallery-thumbnail relative cursor-pointer overflow-hidden rounded-lg h-20';
    thumbnail.style.backgroundImage = `url(${basePath}${image.thumb})`;
    thumbnail.style.backgroundSize = 'cover';
    thumbnail.style.backgroundPosition = 'center';
    
    // Si es la última miniatura y hay más imágenes, mostrar contador
    if (index === 3 && config.images.length > 4) {
      thumbnail.className += ' relative';
      
      const overlay = document.createElement('div');
      overlay.className = 'absolute inset-0 bg-black/60 flex items-center justify-center';
      
      const counter = document.createElement('span');
      counter.className = 'text-white font-medium';
      counter.textContent = `+${config.images.length - 4}`;
      
      overlay.appendChild(counter);
      thumbnail.appendChild(overlay);
    }
    
    thumbnailsContainer.appendChild(thumbnail);
  });
  
  // Buscar dónde insertar las miniaturas (antes del botón)
  const buttonContainer = projectCard.querySelector('.mt-4');
  if (buttonContainer) {
    projectCard.insertBefore(thumbnailsContainer, buttonContainer);
  } else {
    // Si no se encuentra el contenedor del botón, agregar al final
    projectCard.appendChild(thumbnailsContainer);
  }
}

/**
 * Inicializa los eventos para las miniaturas de la galería
 */
function initGalleryThumbnails() {
  document.querySelectorAll('.gallery-thumbnails').forEach(container => {
    const galleryId = container.getAttribute('data-gallery');
    
    container.querySelectorAll('.gallery-thumbnail').forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        const galleryElement = document.getElementById(`gallery-${galleryId}`);
        if (galleryElement) {
          // Obtener la instancia de lightGallery
          const lgInstance = window.lgData[`lg${galleryElement.getAttribute('lg-uid')}`];
          if (lgInstance) {
            lgInstance.openGallery(index);
          } else {
            // Si la galería aún no se ha inicializado, inicializarla y abrirla
            const lgInstance = lightGallery(galleryElement, {
              selector: '.gallery-item',
              plugins: [lgZoom, lgThumbnail],
              speed: 500,
              download: false,
              thumbnail: true,
              animateThumb: true,
              zoomFromOrigin: true,
              allowMediaOverlap: false,
              toggleThumb: true,
              index: index
            });
            
            // Abrir la galería inmediatamente
            lgInstance.openGallery(index);
          }
        }
      });
    });
  });
}

// Inicializar galerías cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Esperar a que los proyectos se carguen (se generan dinámicamente)
  setTimeout(initGalleries, 500);
});
