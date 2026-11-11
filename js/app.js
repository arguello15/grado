/**
 * Experiencia Interactiva · Carta de Despedida & Libro de Momentos (Up Style)
 * Arquitectura Frontend & Dinámica de Álbum
 */

// LISTA EXACTA DE TUS FOTOGRAFÍAS REALES (Sin repeticiones)
const USER_IMAGES = [
  "20240811_164111~2.jpg",
  "20251023_214637-ANIMATION.gif",
  "427639d6156f0146d31f35aa067b69a2.jpg",
  "IMG-20240221-WA0039.jpg",
  "IMG-20240229-WA0011.jpg",
  "IMG-20240229-WA0072.jpg",
  "IMG-20240303-WA0002.jpg",
  "IMG-20240310-WA0005.jpg",
  "IMG-20240310-WA0008.jpg",
  "IMG-20240323-WA0028.jpg",
  "IMG-20240323-WA0029.jpg",
  "IMG-20240428-WA0000.jpg",
  "IMG-20240508-WA0000.jpg",
  "IMG-20240717-WA0003.jpg",
  "IMG-20240801-WA0039.jpg",
  "received_1100383437610871.jpeg",
  "received_1367616404147921.jpeg",
  "received_2027862220912848.jpeg",
  "received_257912987229661.jpeg",
  "received_315651067852725.jpeg",
  "received_3350950108383775.jpeg",
  "received_351695693902529.jpeg",
  "received_3550552368540603.jpeg",
  "received_989368755493867.jpeg",
  "Screenshot_20240223_080442_WhatsApp.jpg"
];

// LISTA EXACTA DE TUS VIDEOS REALES (11 videos)
const USER_VIDEOS = [
  "FB_VID_3961800546304669826.mp4",
  "lv_7314088062756080903_20240110204758.mp4",
  "lv_7327509765507108097_20240215043755.mp4",
  "lv_7333477171379408129_20240214041214.mp4",
  "VID-20240108-WA0448.mp4",
  "VID-20240108-WA0451.mp4",
  "VID-20240125-WA0022.mp4",
  "VID-20240130-WA0019.mp4",
  "VID-20240229-WA0012.mp4",
  "VID-20240513-WA0002.mp4",
  "VID-20240518-WA0002.mp4"
];

// DESCRIPCIONES CARACTERÍSTICAS Y NOTAS DIVERTIDAS PARA CADA FOTO Y VIDEO
const MEDIA_CAPTIONS = {
  // Fotografías (25)
  "20240811_164111~2.jpg": "Cuando intentamos posar serios y salió esto 😂",
  "20251023_214637-ANIMATION.gif": "Esa chispa tuya que no se apagaba nunca ✨",
  "427639d6156f0146d31f35aa067b69a2.jpg": "Una de mis fotos favoritas de todo el universo 📸",
  "IMG-20240221-WA0039.jpg": "Tu carita de: 'otra foto no, por favor' 🤭",
  "IMG-20240229-WA0011.jpg": "29 de febrero: momento que solo pasa cada 4 años 🗓️",
  "IMG-20240229-WA0072.jpg": "La sonrisa que me reiniciaba el día entero ☀️",
  "IMG-20240303-WA0002.jpg": "Casual, desprevenida y hermosa como siempre 🌸",
  "IMG-20240310-WA0005.jpg": "Aquella tarde donde hablamos de todo y nada ☕",
  "IMG-20240310-WA0008.jpg": "Foto robada sin que te dieras cuenta 🤫",
  "IMG-20240323-WA0028.jpg": "Nivel de complicidad: 100/10 🤝",
  "IMG-20240323-WA0029.jpg": "Justo dos segundos antes del ataque de risa 🤣",
  "IMG-20240428-WA0000.jpg": "Paz y tranquilidad en una sola imagen 🍃",
  "IMG-20240508-WA0000.jpg": "Tu estilo inconfundible y esa forma de ser 🕶️",
  "IMG-20240717-WA0003.jpg": "De esos días que se quedan grabados en la memoria 🌅",
  "IMG-20240801-WA0039.jpg": "El arte de coincidir en el mismo camino 🎨",
  "received_1100383437610871.jpeg": "Me enviaste esto y me hiciste sonreír al instante 📩",
  "received_1367616404147921.jpeg": "Pequeños detalles que atesoré desde el segundo uno 💛",
  "received_2027862220912848.jpeg": "Haciendo caras raras como niños chiquitos 🤪",
  "received_257912987229661.jpeg": "La niña de los ojos más bonitos 👀",
  "received_315651067852725.jpeg": "Un instante que vale más que mil palabras 🪙",
  "received_3350950108383775.jpeg": "Cuando las horas contigo parecían cinco minutos ⏳",
  "received_351695693902529.jpeg": "Tus ocurrencias de las que era imposible no reírse 😆",
  "received_3550552368540603.jpeg": "Ese brillo que solo tú tienes y nadie puede copiar ✨",
  "received_989368755493867.jpeg": "Un pedacito de felicidad guardado con amor 💌",
  "Screenshot_20240223_080442_WhatsApp.jpg": "Captura de esas charlas nocturnas que no quería terminar 💬",

  // Videos (11)
  "FB_VID_3961800546304669826.mp4": "¡En vivo y en directo! Tu risa grabada para la historia 🎬",
  "lv_7314088062756080903_20240110204758.mp4": "Enero y esos recuerdos que se niegan a borrarse 📹",
  "lv_7327509765507108097_20240215043755.mp4": "Pillada en el acto: no pudiste aguantar la risa 😂",
  "lv_7333477171379408129_20240214041214.mp4": "Instantes espontáneos llenos de pura chispa ⚡",
  "VID-20240108-WA0448.mp4": "Comenzando el año con tus locuras 📅",
  "VID-20240108-WA0451.mp4": "Segunda toma porque en la primera nos reímos demasiado 🎥",
  "VID-20240125-WA0022.mp4": "Esa forma tan tuya de explicar las cosas con las manos 🗣️",
  "VID-20240130-WA0019.mp4": "Pequeños segundos que decían más que mil discursos 💫",
  "VID-20240229-WA0012.mp4": "Cosas épicas que solo pasan en año bisiesto 🚀",
  "VID-20240513-WA0002.mp4": "Mayo y una memoria que siempre tendrá su rincón 🌷",
  "VID-20240518-WA0002.mp4": "El último video del carrete... y uno de los más especiales 🎞️"
};

// ESTRUCTURA DE PÁGINAS DEL ÁLBUM KRAFT (ESTILO "MY ADVENTURE BOOK")
const SCRAPBOOK_PAGES = [
  {
    title: "Capítulo I · Primeras risas y miradas",
    stamp: "Recuerdo Nº 01 · Inicio",
    note: "«El inicio de todo aquello que jamás olvidaré... Tu sonrisa de cara al mundo.»",
    images: USER_IMAGES.slice(0, 4),
    videos: USER_VIDEOS.slice(0, 1)
  },
  {
    title: "Capítulo II · Esos pequeños detalles",
    stamp: "Memorias Nº 02",
    note: "«Tus rarezas, tus cambios de humor y hasta esos pequeños detalles que pensabas que nadie notaba.»",
    images: USER_IMAGES.slice(4, 8),
    videos: USER_VIDEOS.slice(1, 3)
  },
  {
    title: "Capítulo III · Días donde todo tenía sentido",
    stamp: "Aventura Nº 03",
    note: "«La calidez de los abrazos y la ilusión de los días en que sentí que el mundo cobraba sentido.»",
    images: USER_IMAGES.slice(8, 12),
    videos: USER_VIDEOS.slice(3, 5)
  },
  {
    title: "Capítulo IV · Conversaciones y complicidad",
    stamp: "Ecos Nº 04",
    note: "«Las conversaciones largas, las risas espontáneas y las tardes en las que aprendí a querer de verdad.»",
    images: USER_IMAGES.slice(12, 16),
    videos: USER_VIDEOS.slice(5, 7)
  },
  {
    title: "Capítulo V · Instantes sagrados",
    stamp: "Diario Nº 05",
    note: "«Ocupaste un espacio sagrado que ninguna otra persona había tocado jamás.»",
    images: USER_IMAGES.slice(16, 19),
    videos: USER_VIDEOS.slice(7, 9)
  },
  {
    title: "Capítulo VI · La luz que me enseñó a sentir",
    stamp: "Destino Nº 06",
    note: "«Tal vez Dios me permitió conocerte para volver a sentir y enseñarme que podía preocuparme por alguien más.»",
    images: USER_IMAGES.slice(19, 22),
    videos: USER_VIDEOS.slice(9, 10)
  },
  {
    title: "Capítulo VII · Gracias por la aventura",
    stamp: "Final Nº 07 · Gratitud",
    note: "«Gracias por la aventura, por haber sido mi todo... Ahora ve y vive tu más hermosa historia.»",
    images: USER_IMAGES.slice(22, 25),
    videos: USER_VIDEOS.slice(10, 11)
  }
];

let currentPageIndex = 0;
let allMediaItems = [];
let currentLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initAudioPlayer();
  initScrollProgress();
  initScrollReveal();
  initAmbientCanvas();
  buildFlatMediaList();
  initScrapbook();
  initLightbox();
  initFarewellAction();
});

/* ==========================================================================
   0. SLIDESHOW DINÁMICO DE FOTOS DIFUMINADAS EN EL FONDO (CINEMÁTICO)
   ========================================================================== */
let slideshowInterval = null;
let currentSlideIndex = 0;
let activeSlideLayer = 'A'; // Alterna entre A y B para crossfade fluido

function startBackgroundSlideshow() {
  const slideA = document.getElementById('bgSlideA');
  const slideB = document.getElementById('bgSlideB');
  if (!slideA || !slideB || USER_IMAGES.length === 0) return;

  // Cargar la primera imagen de inmediato en la capa A
  const firstImgUrl = `assets/images/${encodeURIComponent(USER_IMAGES[0])}`;
  slideA.style.backgroundImage = `url("${firstImgUrl}")`;
  slideA.classList.add('active');
  slideB.classList.remove('active');

  // Pre-cargar la siguiente imagen
  preloadImage(1);

  // Intervalo de cambio suave cada 6.5 segundos
  if (slideshowInterval) clearInterval(slideshowInterval);
  slideshowInterval = setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % USER_IMAGES.length;
    const nextImgUrl = `assets/images/${encodeURIComponent(USER_IMAGES[currentSlideIndex])}`;

    if (activeSlideLayer === 'A') {
      slideB.style.backgroundImage = `url("${nextImgUrl}")`;
      slideB.classList.add('active');
      slideA.classList.remove('active');
      activeSlideLayer = 'B';
    } else {
      slideA.style.backgroundImage = `url("${nextImgUrl}")`;
      slideA.classList.add('active');
      slideB.classList.remove('active');
      activeSlideLayer = 'A';
    }

    // Pre-cargar la próxima para evitar parpadeos
    const nextIndex = (currentSlideIndex + 1) % USER_IMAGES.length;
    preloadImage(nextIndex);
  }, 6500);
}

function preloadImage(index) {
  if (USER_IMAGES[index]) {
    const img = new Image();
    img.src = `assets/images/${encodeURIComponent(USER_IMAGES[index])}`;
  }
}

/* ==========================================================================
   1. REPRODUCTOR DE AUDIO (JVKE - GOLDEN HOUR)
   ========================================================================== */
function initAudioPlayer() {
  const bgMusic = document.getElementById('bgMusic');
  const startBtn = document.getElementById('startBtn');
  const introOverlay = document.getElementById('introOverlay');
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const soundBars = document.getElementById('soundBars');
  const audioLabel = document.getElementById('audioLabel');

  let isPlaying = false;

  // Bucle infinito garantizado (se repite automáticamente si termina)
  bgMusic.loop = true;
  bgMusic.addEventListener('ended', () => {
    bgMusic.currentTime = 0;
    bgMusic.play().catch(err => console.warn('Bucle audio:', err));
  });

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      introOverlay.classList.add('hidden');
      startMusicWithFadeIn();
      // INICIAR EL FONDO CINEMÁTICO DIFUMINADO SÓLO AL DAR COMENZAR VIAJE
      startBackgroundSlideshow();
    });
  }

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      if (isPlaying) {
        pauseMusic();
      } else {
        resumeMusic();
      }
    });
  }

  function startMusicWithFadeIn() {
    bgMusic.volume = 0;
    const playPromise = bgMusic.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlaying = true;
          updateAudioUI(true);
          // Fade-in suave de 3.5 segundos hasta volumen 0.8
          fadeVolume(bgMusic, 0.8, 3500);
        })
        .catch(err => {
          console.info('Aviso audio: Se requiere interacción directa del usuario.', err);
          updateAudioUI(false);
        });
    }
  }

  function resumeMusic() {
    bgMusic.play()
      .then(() => {
        isPlaying = true;
        updateAudioUI(true);
      })
      .catch(err => console.warn('No se pudo reanudar el audio:', err));
  }

  function pauseMusic() {
    bgMusic.pause();
    isPlaying = false;
    updateAudioUI(false);
  }

  function updateAudioUI(playing) {
    if (playing) {
      soundBars.classList.add('playing');
      audioLabel.textContent = 'Golden Hour activa';
    } else {
      soundBars.classList.remove('playing');
      audioLabel.textContent = 'Música pausada';
    }
  }

  function fadeVolume(audio, targetVol, durationMs) {
    const step = 0.05;
    const interval = durationMs / (targetVol / step);
    const timer = setInterval(() => {
      if (audio.volume < targetVol) {
        audio.volume = Math.min(targetVol, audio.volume + step);
      } else {
        clearInterval(timer);
      }
    }, interval);
  }
}

/* ==========================================================================
   2. BARRA DE PROGRESO DE LECTURA
   ========================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${percent}%`;
  }, { passive: true });
}

/* ==========================================================================
   3. ANIMACIONES SCROLL REVEAL
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   4. CANVAS DE POLVO DORADO & AMBIENTE CÁLIDO
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const count = 40;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Ember {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 40;
      this.size = Math.random() * 2.5 + 0.8;
      this.speedY = Math.random() * 0.4 + 0.18;
      this.speedX = (Math.random() - 0.5) * 0.25;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.color = Math.random() > 0.4 ? '255, 201, 113' : '244, 162, 89';
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      if (this.y < height * 0.15) this.opacity -= 0.006;
      if (this.y < 0 || this.opacity <= 0) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${Math.max(0, this.opacity)})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = `rgba(${this.color}, 0.5)`;
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) {
    const p = new Ember();
    p.y = Math.random() * height;
    particles.push(p);
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
}

/* ==========================================================================
   5. LISTA PLANA DE TODOS LOS MEDIOS PARA EL LIGHTBOX
   ========================================================================== */
function buildFlatMediaList() {
  allMediaItems = [];

  // Recorrer las páginas en orden
  SCRAPBOOK_PAGES.forEach((page, pIdx) => {
    page.images.forEach(imgName => {
      allMediaItems.push({
        type: 'image',
        filename: imgName,
        src: `assets/images/${imgName}`,
        pageTitle: page.title
      });
    });
    page.videos.forEach(vidName => {
      allMediaItems.push({
        type: 'video',
        filename: vidName,
        src: `assets/videos/${vidName}`,
        pageTitle: page.title
      });
    });
  });
}

/* ==========================================================================
   6. LÓGICA DEL ÁLBUM DE RECUERDOS (UP STYLE)
   ========================================================================== */
function initScrapbook() {
  const spreadContainer = document.getElementById('scrapbookSpread');
  const btnPrev = document.getElementById('btnPrevPage');
  const btnNext = document.getElementById('btnNextPage');
  const indicator = document.getElementById('pageIndicator');

  const btnModeBook = document.getElementById('btnModeBook');
  const btnModeGrid = document.getElementById('btnModeGrid');
  const bookEl = document.getElementById('scrapbookBook');
  const gridEl = document.getElementById('scrapbookGridView');
  const navContainer = document.getElementById('pageNavigation');

  // Alternar vista: Hojear Libro vs Ver Todo
  if (btnModeBook && btnModeGrid) {
    btnModeBook.addEventListener('click', () => {
      btnModeBook.classList.add('active');
      btnModeGrid.classList.remove('active');
      bookEl.style.display = 'block';
      gridEl.classList.add('hidden');
      navContainer.style.display = 'flex';
    });

    btnModeGrid.addEventListener('click', () => {
      btnModeGrid.classList.add('active');
      btnModeBook.classList.remove('active');
      bookEl.style.display = 'none';
      gridEl.classList.remove('hidden');
      navContainer.style.display = 'none';
      renderFullGridView();
    });
  }

  // Navegación de páginas
  if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => {
      if (currentPageIndex > 0) {
        currentPageIndex--;
        renderScrapbookPage(currentPageIndex);
      }
    });

    btnNext.addEventListener('click', () => {
      if (currentPageIndex < SCRAPBOOK_PAGES.length - 1) {
        currentPageIndex++;
        renderScrapbookPage(currentPageIndex);
      }
    });
  }

  renderScrapbookPage(0);
}

function renderScrapbookPage(pageIdx) {
  const spreadContainer = document.getElementById('scrapbookSpread');
  const indicator = document.getElementById('pageIndicator');
  const btnPrev = document.getElementById('btnPrevPage');
  const btnNext = document.getElementById('btnNextPage');

  const page = SCRAPBOOK_PAGES[pageIdx];
  if (!page) return;

  // Actualizar indicador
  indicator.textContent = `Página ${pageIdx + 1} de ${SCRAPBOOK_PAGES.length}`;
  btnPrev.disabled = pageIdx === 0;
  btnNext.disabled = pageIdx === SCRAPBOOK_PAGES.length - 1;

  // Renderizar la página del libro kraft
  spreadContainer.innerHTML = `
    <div class="scrapbook-page-header">
      <h3 class="scrapbook-page-title">${page.title}</h3>
      <span class="vintage-stamp">✦ ${page.stamp}</span>
    </div>

    <div class="scrap-note-card">
      <div class="washi-tape"></div>
      <p class="note-text">${page.note}</p>
    </div>

    <div class="scrapbook-items-grid" id="pageItemsGrid"></div>
  `;

  const itemsGrid = document.getElementById('pageItemsGrid');

  // Insertar fotos de esta página
  page.images.forEach((imgName, idx) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'scrap-item';
    const caption = MEDIA_CAPTIONS[imgName] || "Foto de la memoria";
    itemEl.innerHTML = `
      <div class="washi-tape"></div>
      <div class="corner-tl"></div>
      <div class="corner-tr"></div>
      <div class="corner-bl"></div>
      <div class="corner-br"></div>
      <div class="scrap-media-wrapper">
        <img src="assets/images/${encodeURIComponent(imgName)}" alt="Foto del recuerdo" loading="lazy">
      </div>
      <p class="scrap-caption">${caption}</p>
    `;

    itemEl.addEventListener('click', () => {
      openLightboxByFilename(imgName);
    });

    itemsGrid.appendChild(itemEl);
  });

  // Insertar videos de esta página (con reproducción automática continua)
  page.videos.forEach((vidName, idx) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'scrap-item';
    const caption = MEDIA_CAPTIONS[vidName] || "Instante en movimiento";
    itemEl.innerHTML = `
      <div class="washi-tape"></div>
      <div class="corner-tl"></div>
      <div class="corner-tr"></div>
      <div class="corner-bl"></div>
      <div class="corner-br"></div>
      <div class="scrap-media-wrapper">
        <video autoplay loop muted playsinline preload="auto">
          <source src="assets/videos/${encodeURIComponent(vidName)}" type="video/mp4">
        </video>
        <div class="video-play-overlay">
          <div class="play-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
        <span class="media-tag-badge">▶ Video en vivo</span>
      </div>
      <p class="scrap-caption">${caption}</p>
    `;

    itemEl.addEventListener('click', () => {
      openLightboxByFilename(vidName);
    });

    itemsGrid.appendChild(itemEl);
  });

  // Asegurar que los videos inicien solos en bucle silencioso
  setTimeout(() => {
    itemsGrid.querySelectorAll('video').forEach(v => {
      v.play().catch(e => { /* Control de política del navegador */ });
    });
  }, 100);
}

// Vista en mosaico completo de todas las imágenes y videos
function renderFullGridView() {
  const gridEl = document.getElementById('scrapbookGridView');
  gridEl.innerHTML = '';

  allMediaItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'scrap-item';
    const caption = MEDIA_CAPTIONS[item.filename] || "Recuerdo especial";

    if (item.type === 'image') {
      card.innerHTML = `
        <div class="corner-tl"></div>
        <div class="corner-tr"></div>
        <div class="corner-bl"></div>
        <div class="corner-br"></div>
        <div class="scrap-media-wrapper">
          <img src="${item.src}" alt="Foto" loading="lazy">
        </div>
        <p class="scrap-caption" style="font-size:0.95rem;">${caption}</p>
      `;
    } else {
      card.innerHTML = `
        <div class="corner-tl"></div>
        <div class="corner-tr"></div>
        <div class="corner-bl"></div>
        <div class="corner-br"></div>
        <div class="scrap-media-wrapper">
          <video autoplay loop muted playsinline preload="auto">
            <source src="${item.src}" type="video/mp4">
          </video>
          <div class="video-play-overlay">
            <div class="play-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        </div>
        <p class="scrap-caption" style="font-size:0.95rem;">${caption}</p>
      `;
    }

    card.addEventListener('click', () => {
      openLightboxByFilename(item.filename);
    });

    gridEl.appendChild(card);
  });

  setTimeout(() => {
    gridEl.querySelectorAll('video').forEach(v => {
      v.play().catch(e => {});
    });
  }, 100);
}

/* ==========================================================================
   7. VISOR / LIGHTBOX FULLSCREEN
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const backdrop = document.getElementById('lightboxBackdrop');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => navigateLightbox(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateLightbox(1));

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightboxByFilename(filename) {
  const index = allMediaItems.findIndex(m => m.filename === filename);
  if (index !== -1) {
    currentLightboxIndex = index;
    renderLightboxItem();
    const modal = document.getElementById('lightboxModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function renderLightboxItem() {
  const body = document.getElementById('lightboxBody');
  const captionIndex = document.getElementById('captionIndex');
  const captionName = document.getElementById('captionName');
  const item = allMediaItems[currentLightboxIndex];
  const customCaption = MEDIA_CAPTIONS[item.filename] || item.pageTitle;

  body.innerHTML = '';

  if (item.type === 'image') {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = `Fotografía`;
    body.appendChild(img);
    captionIndex.textContent = `Recuerdo ${currentLightboxIndex + 1} de ${allMediaItems.length}`;
    captionName.textContent = customCaption;
  } else {
    const video = document.createElement('video');
    video.src = item.src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;

    // Atenuar música de fondo para escuchar con nitidez el audio del video
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) bgMusic.volume = 0.12;

    video.onended = () => {
      if (bgMusic) bgMusic.volume = 0.8;
    };

    body.appendChild(video);
    captionIndex.textContent = `Video ${currentLightboxIndex + 1} de ${allMediaItems.length}`;
    captionName.textContent = customCaption;
  }
}

function navigateLightbox(dir) {
  currentLightboxIndex += dir;
  if (currentLightboxIndex < 0) currentLightboxIndex = allMediaItems.length - 1;
  if (currentLightboxIndex >= allMediaItems.length) currentLightboxIndex = 0;
  renderLightboxItem();
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  const body = document.getElementById('lightboxBody');
  const video = body.querySelector('video');
  if (video) {
    video.pause();
    video.src = '';
  }

  // Restaurar el volumen pleno de la música de fondo
  const bgMusic = document.getElementById('bgMusic');
  if (bgMusic) bgMusic.volume = 0.8;

  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   8. ACCIÓN FINAL: TU PRÓXIMO CAPÍTULO 💙
   ========================================================================== */
function initFarewellAction() {
  const releaseBtn = document.getElementById('releaseBtn');
  const releasedMsg = document.getElementById('releasedMessage');

  if (releaseBtn && releasedMsg) {
    releaseBtn.addEventListener('click', () => {
      releaseBtn.style.pointerEvents = 'none';
      releaseBtn.innerHTML = `<span>Elevando los mejores deseos...</span> 💙`;

      launchBlueHeartParticles();

      setTimeout(() => {
        releaseBtn.style.display = 'none';
        releasedMsg.classList.remove('hidden');
      }, 700);
    });
  }
}

function launchBlueHeartParticles() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const startX = window.innerWidth / 2;
  const startY = window.innerHeight * 0.75;
  const sparks = [];

  const colors = [
    '77, 171, 247',  // Azul cielo corazón
    '51, 154, 240',  // Azul vibrante
    '255, 201, 113', // Oro cálido
    '244, 162, 89',  // Ámbar suave
    '255, 255, 255'  // Destello blanco
  ];

  for (let i = 0; i < 70; i++) {
    sparks.push({
      x: startX + (Math.random() - 0.5) * 160,
      y: startY,
      vx: (Math.random() - 0.5) * 5.5,
      vy: -(Math.random() * 7.5 + 4),
      alpha: 1,
      size: Math.random() * 5 + 2.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function renderSparks() {
    let alive = false;
    sparks.forEach(s => {
      s.x += s.vx;
      s.y += s.vy;
      s.alpha -= 0.012;

      if (s.alpha > 0) {
        alive = true;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${s.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${s.color}, 0.8)`;
        ctx.fill();
      }
    });

    if (alive) requestAnimationFrame(renderSparks);
  }

  renderSparks();
}
