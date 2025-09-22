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
  },
  'oropesa': {
    title: 'Galería Oropesa',
    folder: 'oropesa',
    images: [
      { src: 'OROPESA-01.jpeg', thumb: 'OROPESA-01.jpeg', alt: 'Vista principal del proyecto Oropesa' },
      { src: 'OROPESA-02.jpeg', thumb: 'OROPESA-02.jpeg', alt: 'Camino a proyecto Oropesa' },
      { src: 'OROPESA-03.jpeg', thumb: 'OROPESA-03.jpeg', alt: 'Vetas minerales Oropesa' },
      { src: 'OROPESA-04.jpeg', thumb: 'OROPESA-04.jpeg', alt: 'Zona de extracción Oropesa' },
      { src: 'OROPESA-05.JPG', thumb: 'OROPESA-05.JPG', alt: 'Terreno minero Oropesa' },
      { src: 'OROPESA-06.JPG', thumb: 'OROPESA-06.JPG', alt: 'Camino a proyecto Oropesa' },
      { src: 'OROPESA-07.JPG', thumb: 'OROPESA-07.JPG', alt: 'Vetas minerales Oropesa' },
    ]
  }
};

/**
 * Inicializa los eventos para las miniaturas de la galería
 */
function initGalleryThumbnails() {
  console.log('Inicializando clics en miniaturas de galería...');
  document.querySelectorAll('.gallery-thumbnails').forEach(container => {
    const galleryId = container.getAttribute('data-gallery');
    if (!galleryId) {
      console.error('Contenedor de miniaturas sin data-gallery:', container);
      return; // Saltar este contenedor si no tiene ID
    }

    // Primero, eliminar los eventos de clic anteriores
    container.querySelectorAll('.gallery-thumbnail').forEach(thumbnail => {
      // Clonar sin eventos pero conservando hijos
      const newThumbnail = thumbnail.cloneNode(true);
      thumbnail.parentNode.replaceChild(newThumbnail, thumbnail);
    });

    // Luego, añadir los nuevos eventos de clic
    container.querySelectorAll('.gallery-thumbnail').forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(`Clic en miniatura ${index} para galería ${galleryId}`);

        // Obtener el elemento de la galería
        const galleryElement = document.getElementById(`gallery-${galleryId}`);
        if (!galleryElement) {
          console.error(`Elemento de galería #gallery-${galleryId} no encontrado.`);
          return;
        }

        // Verificar si existe la instancia de lightGallery
        const lgUid = galleryElement.getAttribute('lg-uid');
        if (!lgUid) {
          console.error(`No se encontró lg-uid en el elemento #gallery-${galleryId}`);
          return;
        }

        // Verificar si window.lgData existe
        if (!window.lgData) {
          console.error('window.lgData no está definido. LightGallery no inicializado correctamente.');
          return;
        }

        // Obtener la instancia de lightGallery
        const lgInstance = window.lgData[`lg${lgUid}`];
        if (!lgInstance) {
          console.error(`No se encontró instancia lg${lgUid} en window.lgData.`);

          // Intentar inicializar nuevamente como último recurso
          try {
            console.warn('Intentando inicializar lightGallery como último recurso...');
            const newLgInstance = lightGallery(galleryElement, {
              selector: '.gallery-item',
              plugins: [lgZoom, lgThumbnail],
              speed: 500,
              download: false,
              thumbnail: true,
              animateThumb: true,
              zoomFromOrigin: false,
              allowMediaOverlap: false,
              toggleThumb: true,
              index: index
            });

            setTimeout(() => {
              try {
                newLgInstance.openGallery(index);
              } catch (e) {
                console.error('Error al abrir galería recién inicializada:', e);
              }
            }, 50);
          } catch (error) {
            console.error('Error al reinicializar lightGallery:', error);
          }
          return;
        }

        // Abrir la galería en el índice correspondiente
        try {
          console.log('Abriendo galería con instancia existente en índice:', index);
          lgInstance.openGallery(index);
        } catch (error) {
          console.error('Error al abrir galería:', error);
        }
      });
    });
  });
}

/**
 * Inicializa las galerías de imágenes para cada proyecto
 */
function initGalleries() {
  console.log("Llamando a createGalleryContainers...");
  // Primero, asegurarse de que los contenedores existan (o crearlos)
  createGalleryContainers(); // Crea los divs ocultos #gallery-xxx y los divs visibles .gallery-thumbnails

  console.log("Inicializando instancias de LightGallery...");
  let galleryPromises = []; // Array para almacenar las promesas de inicialización

  for (const projectId in galleryConfig) {
    const galleryEl = document.getElementById(`gallery-${projectId}`);
    if (galleryEl) {
      // Crear una promesa para cada inicialización de lightGallery
      const promise = new Promise((resolve, reject) => {
        try {
          // Verificar si el contenedor tiene elementos de galería
          const galleryItems = galleryEl.querySelectorAll('.gallery-item');
          if (galleryItems.length === 0) {
            console.log(`El contenedor #gallery-${projectId} está vacío, recreando elementos de galería`);
            // Intentar recrear los elementos de galería
            const config = galleryConfig[projectId];
            const basePath = `img/yacimientos/${config.folder}/`;

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
              galleryEl.appendChild(item);
            });

            console.log(`Recreados ${config.images.length} elementos para #gallery-${projectId}`);
          }

          // Destruir instancia previa si existe (importante para reinicialización)
          const existingLgUid = galleryEl.getAttribute('lg-uid');
          if (existingLgUid && window.lgData && window.lgData[`lg${existingLgUid}`]) {
            console.log(`Destruyendo instancia previa de lightGallery para ${projectId}`);
            window.lgData[`lg${existingLgUid}`].destroy();
            // Limpiar lg-uid para evitar conflictos
            galleryEl.removeAttribute('lg-uid');
          }

          // Inicializar lightGallery
          const lgInstance = lightGallery(galleryEl, {
            selector: '.gallery-item',
            plugins: [lgZoom, lgThumbnail],
            speed: 500,
            download: false,
            thumbnail: true,
            animateThumb: true,
            zoomFromOrigin: true,
            allowMediaOverlap: false,
            toggleThumb: true,
            licenseKey: 'development', // Usar 'development' para desarrollo
          });

          // Verificar que se haya asignado un lg-uid
          const newLgUid = galleryEl.getAttribute('lg-uid');
          if (!newLgUid) {
            console.warn(`No se asignó lg-uid a #gallery-${projectId} automáticamente, asignando manualmente`);

            // Forzar la asignación de un ID
            // Primero, asegurar que window.lgData exista
            if (!window.lgData) window.lgData = {};

            // Generar un ID único para esta instancia
            const randomId = `manual${Math.floor(Math.random() * 10000)}`;

            // Asignar el ID al elemento y registrar la instancia
            galleryEl.setAttribute('lg-uid', randomId);
            window.lgData[`lg${randomId}`] = lgInstance;

            console.log(`Asignado manualmente lg-uid=${randomId} a #gallery-${projectId}`);

            // Verificar que la instancia esté correctamente registrada
            if (window.lgData[`lg${randomId}`]) {
              console.log(`Instancia registrada correctamente en window.lgData[lg${randomId}]`);
            } else {
              console.error(`Fallo al registrar instancia en window.lgData[lg${randomId}]`);
            }
          }

          console.log(`LightGallery inicializada para ${projectId}. UID: ${galleryEl.getAttribute('lg-uid')}`);
          resolve(); // Resolver la promesa

        } catch (error) {
          console.error(`Error inicializando LightGallery para ${projectId}:`, error);
          reject(error); // Rechazar la promesa en caso de error
        }
      });
      galleryPromises.push(promise); // Añadir la promesa al array
    } else {
      console.log(`Elemento #gallery-${projectId} no encontrado. Creando contenedor...`);
      // Crear el contenedor si no existe
      const galleryContainer = document.createElement('div');
      galleryContainer.id = `gallery-${projectId}`;
      galleryContainer.className = 'hidden-gallery';
      document.body.appendChild(galleryContainer);

      // Ahora que existe, intentar inicializarlo
      const config = galleryConfig[projectId];
      const basePath = `img/yacimientos/${config.folder}/`;

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

      console.log(`Creado contenedor #gallery-${projectId} con ${config.images.length} elementos`);

      // Crear una promesa para la inicialización de este nuevo contenedor
      const newPromise = new Promise((resolve, reject) => {
        try {
          const lgInstance = lightGallery(galleryContainer, {
            selector: '.gallery-item',
            plugins: [lgZoom, lgThumbnail],
            speed: 500,
            download: false,
            thumbnail: true,
            animateThumb: true,
            zoomFromOrigin: true,
            allowMediaOverlap: false,
            toggleThumb: true,
            licenseKey: 'development', // Usar 'development' para desarrollo
          });

          console.log(`LightGallery inicializada para ${projectId} (nuevo contenedor)`);
          resolve();
        } catch (error) {
          console.error(`Error inicializando LightGallery para ${projectId} (nuevo contenedor):`, error);
          reject(error);
        }
      });
      galleryPromises.push(newPromise);
    }
  }

  // Esperar a que todas las promesas de inicialización se completen
  return Promise.all(galleryPromises)
    .then(() => {
      console.log("Todas las instancias base de LightGallery (re)inicializadas.");
      // Ahora que las instancias están listas (y tienen lg-uid), inicializar los listeners
      initGalleryThumbnails();
      initMainImages(); // También (re)inicializar listeners de imágenes principales
    })
    .catch(error => {
      console.error("Error durante la inicialización de una o más galerías:", error);
      // Aún así intentar inicializar listeners, aunque podrían fallar
      console.warn("Intentando inicializar listeners a pesar del error anterior.");
      initGalleryThumbnails();
      initMainImages();
      // Devolver el error para que se sepa que algo falló
      throw error;
    });
}

/**
 * Función para reinicializar los listeners de la galería.
 * Útil después de cambios dinámicos en el DOM (como cambio de idioma).
 */
function reinitializeGalleryListeners() {
  console.log("Reinicializando listeners de galería (miniaturas e imágenes principales)...");

  // Verificar si las galerías están inicializadas correctamente
  let allGalleriesReady = true;
  for (const projectId in galleryConfig) {
    const galleryEl = document.getElementById(`gallery-${projectId}`);
    if (!galleryEl || !galleryEl.getAttribute('lg-uid')) {
      console.warn(`Galería para ${projectId} no está inicializada correctamente. Reinicializando...`);
      allGalleriesReady = false;
    }
  }

  // Si alguna galería no está lista, reinicializar todo desde cero
  if (!allGalleriesReady) {
    console.log('Reinicializando todas las galerías desde cero...');
    initGalleries().then(() => {
      console.log('Galerías reinicializadas correctamente.');
    }).catch(err => {
      console.error('Error al reinicializar galerías:', err);
      // Aún así intentar inicializar los listeners
      initGalleryThumbnails();
      initMainImages();
    });
  } else {
    // Si las galerías están bien, solo reinicializar los listeners
    console.log('Las galerías base están bien, solo reinicializando listeners...');
    initGalleryThumbnails(); // Vuelve a buscar .gallery-thumbnail y añade listeners
    initMainImages();      // Vuelve a buscar .project-main-image y añade listeners
  }
}

/**
 * Inicializa los eventos para las imágenes principales de los proyectos
 */
function initMainImages() {
  // Esperar un poco para asegurar que los elementos y las galerías estén listos
  setTimeout(() => {
    console.log('Inicializando clics en imágenes principales...');

    document.querySelectorAll('.project-main-image').forEach(imageContainer => {
      // Aplicar estilo de cursor pointer para indicar que es clickeable
      imageContainer.style.cursor = 'pointer';
      imageContainer.title = 'Haz clic para ver la galería'; // Tooltip

      // Agregar un pequeño indicador visual si no existe ya
      if (!imageContainer.querySelector('.gallery-indicator')) {
        const indicator = document.createElement('div');
        indicator.className = 'gallery-indicator';
        indicator.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
        imageContainer.appendChild(indicator);
      }

      // Agregar evento de clic
      imageContainer.addEventListener('click', () => {
        // **CAMBIO:** Obtener el ID de galería directamente del atributo data-gallery-id
        // Asumimos que el contenedor de la imagen principal o la propia tarjeta del proyecto
        // tiene este atributo, por ejemplo: data-gallery-id="las-carditas"
        let galleryId = imageContainer.closest('[data-gallery-id]')?.dataset.galleryId || imageContainer.dataset.galleryId;

        if (!galleryId) {
          console.error('No se encontró data-gallery-id en la imagen principal o su contenedor.');
          // Intentar obtenerlo del data-project-id como fallback (si aún existe)
          const projectIdFallback = imageContainer.getAttribute('data-project-id');
          const fallbackMap = { '1': 'las-carditas', '2': 'pichasca', '3': 'tambillo', '4': 'oropesa' }; // Kebab-case now!
          const galleryIdFallback = fallbackMap[projectIdFallback];
          if (!galleryIdFallback) {
            console.error('Fallback con data-project-id también falló.');
            return;
          }
          console.warn('Usando fallback data-project-id. Es mejor añadir data-gallery-id.');
          galleryId = galleryIdFallback; // Usar el ID del fallback
        }


        console.log('Intentando abrir galería:', galleryId);

        // Buscar el elemento contenedor de la galería oculta
        const galleryElement = document.getElementById(`gallery-${galleryId}`);
        if (!galleryElement) {
          console.error('No se encontró el elemento de la galería para:', galleryId);
          return;
        }

        // **CAMBIO:** Intentar obtener la instancia existente de lightGallery
        const lgUid = galleryElement.getAttribute('lg-uid');
        const lgInstance = lgUid ? window.lgData[`lg${lgUid}`] : null;

        if (lgInstance) {
          console.log('Instancia de lightGallery encontrada, abriendo galería...');
          lgInstance.openGallery(0); // Abrir desde la primera imagen
        } else {
          // Si no hay instancia (¡raro!), inicializarla y abrirla (como en thumbnails)
          console.warn('No se encontró instancia de lightGallery, inicializando sobre la marcha para', galleryId);
          try {
            const newLgInstance = lightGallery(galleryElement, {
              selector: '.gallery-item',
              plugins: [lgZoom, lgThumbnail],
              speed: 500,
              download: false,
              thumbnail: true,
              animateThumb: true,
              zoomFromOrigin: true, // Intentar zoom desde origen si es posible
              allowMediaOverlap: false,
              toggleThumb: true,
              index: 0
            });
            // Esperar un instante mínimo para que se registre y luego abrir
            setTimeout(() => newLgInstance.openGallery(0), 50);
          } catch (error) {
            console.error('Error al inicializar lightGallery sobre la marcha:', error);
          }
        }
      });
    });
  }, 800); // Mantener espera por si acaso
}

/**
 * Crea los contenedores HTML para las galerías
 */
function createGalleryContainers() {
  console.log('Creando contenedores de galerías...');
  // Buscar los contenedores de proyectos
  const projectCards = document.querySelectorAll('#projects-grid > div');

  // Primero, limpiar cualquier contenedor de galería existente para evitar duplicados
  document.querySelectorAll('[id^="gallery-"]').forEach(galleryEl => {
    // No eliminar los contenedores, solo asegurarse de que no haya instancias activas
    const lgUid = galleryEl.getAttribute('lg-uid');
    if (lgUid && window.lgData && window.lgData[`lg${lgUid}`]) {
      console.log(`Destruyendo instancia previa de lightGallery para ${galleryEl.id}`);
      try {
        window.lgData[`lg${lgUid}`].destroy();
      } catch (e) {
        console.error('Error al destruir instancia:', e);
      }
    }
  });

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
      } else if (title.includes('oropesa')) {
        projectId = 'oropesa';
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
      // Verificar si ya existe un contenedor de miniaturas para este proyecto
      const existingThumbnails = card.querySelector('.gallery-thumbnails');
      if (existingThumbnails) {
        console.log(`Miniaturas ya existentes para ${projectId}, no se crean nuevas`);
        // Asegurar que tenga el atributo data-gallery correcto
        existingThumbnails.setAttribute('data-gallery', projectId);
      } else {
        console.log(`Creando nuevas miniaturas para ${projectId}`);
        createGalleryForProject(card, projectId);
      }
    }
  });
}

/**
 * Crea una galería para un proyecto específico
 */
function createGalleryForProject(projectCard, projectId) {
  const config = galleryConfig[projectId];
  const basePath = `img/yacimientos/${config.folder}/`;

  // Añadir atributo data-gallery-id a la tarjeta del proyecto para facilitar la identificación
  projectCard.setAttribute('data-gallery-id', projectId);

  // Buscar la imagen principal y añadirle también el atributo data-gallery-id
  const mainImage = projectCard.querySelector('.project-main-image');
  if (mainImage) {
    mainImage.setAttribute('data-gallery-id', projectId);
    console.log(`Añadido data-gallery-id=${projectId} a imagen principal`);
  }

  // Verificar si ya existe un contenedor de galería para este proyecto
  let galleryContainer = document.getElementById(`gallery-${projectId}`);

  // Si no existe, crearlo
  if (!galleryContainer) {
    console.log(`Creando nuevo contenedor de galería para ${projectId}`);
    galleryContainer = document.createElement('div');
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
  } else {
    console.log(`Contenedor de galería para ${projectId} ya existe, no se crea uno nuevo`);
  }

  // Verificar si ya existe un contenedor de miniaturas
  const existingThumbnails = projectCard.querySelector('.gallery-thumbnails');
  if (existingThumbnails) {
    console.log(`Contenedor de miniaturas para ${projectId} ya existe, no se crea uno nuevo`);
    return;
  }

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

  // Insertar las miniaturas en el proyecto - método simplificado
  // Simplemente añadimos al final del div que contiene el proyecto
  try {
    const projectInner = projectCard.querySelector('.flex-col');
    if (projectInner) {
      // Insertar antes del último div (que contiene el botón)
      const lastDiv = projectInner.querySelector('.mt-4');
      if (lastDiv) {
        projectInner.insertBefore(thumbnailsContainer, lastDiv);
      } else {
        projectInner.appendChild(thumbnailsContainer);
      }
    } else {
      // Si no encontramos la estructura esperada, lo añadimos directamente al proyecto
      projectCard.appendChild(thumbnailsContainer);
    }
  } catch (error) {
    console.error('Error al insertar miniaturas:', error);
    // Método alternativo si falla la inserción
    try {
      projectCard.appendChild(thumbnailsContainer);
    } catch (e) {
      console.error('Error en método alternativo de inserción:', e);
    }
  }
}

// Inicializar galerías cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    console.log('DOM cargado, inicializando galerías por primera vez...');
    initGalleries().catch(err => {
      console.error("Fallo en la inicialización inicial de galerías:", err);
    });
  }, 500); // Espera inicial
});
