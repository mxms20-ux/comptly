// =============================================
// DATOS DEL PORTAFOLIO — Edita aquí tu información
// =============================================

const PROYECTOS = [
  // 1. Atria X Solutions
  {
    "img": "assets/web-atriaxsolutions.png",
    "color": "linear-gradient(135deg, #ebecd6, #f8ee5e)",
    "cat": "UX/UI Design",
    "link": "./projects/atriaxsolutions.html",
    "tags": [
      "Web Design",
      "Responsive UI",
      "Conversion"
    ],
    "en": {
      "t": "Atria X Solutions",
      "d": "End-to-end brand and website design for Atria X Solutions, from logo and visual identity to a responsive corporate web experience."
    },
    "es": {
      "t": "Atria X Solutions",
      "d": "Diseño integral de marca y sitio web para Atria X Solutions, desde el logotipo e identidad visual hasta una experiencia web corporativa responsiva."
    }
  },
   // 2. SANCTORUM
  {
  "img": "assets/azul_traasp.png",
  "color": "linear-gradient(135deg, #e8e1f5, #f5e5d8)",
  "cat": "UX/UI Design",
  "link": "./projects/santos-catolicos.html",
  "tags": [
    "Product Design",
    "UX Research",
    "UI Design"
  ],
  "en": {
    "t": "Sanctorum",
    "d": "Digital experience focused on bringing Catholic saints closer to younger audiences through an engaging and accessible platform."
  },
  "es": {
    "t": "Sanctorum",
    "d": "Diseño de una experiencia digital que busca acercar la vida de los santos católicos a los jóvenes mediante una plataforma atractiva y accesible."
  }
},
{
  "img": "assets/cristabela.png",
  "color": "linear-gradient(135deg, #f5dce5, #f8e9c8)",
  "cat": "UX/UI Design",
  "link": "./projects/cristabela.html",
  "tags": [
    "UX Research",
    "Redesign",
    "Responsive UI"
  ],
  "en": {
    "t": "Cristabela – Playroom",
    "d": "UX/UI redesign of a children's playroom website, focused on improving navigation, visual communication, and the overall user experience."
  },
  "es": {
    "t": "Cristabela – Ludoteca",
    "d": "Rediseño UX/UI del sitio web de una ludoteca, enfocado en mejorar la navegación, la comunicación visual y la experiencia general de sus usuarios."
  }
},
  // 3. Adi - Education App
  {
    "img": "assets/capturalogin.png",
    "color": "linear-gradient(135deg, #dbeafe, #439472)",
    "cat": "UX/UI Design",
    "link": "./projects/ada.html",
    "tags": [
      "Figma",
      "UX Research",
      "Prototypes"
    ],
    "en": {
      "t": "Adi - Education App",
      "d": "Complete UX redesign of an educational platform designed for students, teachers, and young learners, improving user retention."
    },
    "es": {
      "t": "Adi - App Educativa",
      "d": "Rediseño UX completo de una plataforma educativa diseñada para estudiantes, profesores y jóvenes aprendices, mejorando la retención de usuarios."
    }
  },
   // 2. Vogue
  {
    "img": "assets/vogue.png",
    "color": "linear-gradient(135deg, #dbeafe, #f7efef)",
    "cat": "UX/UI Design",
    "link": "https://behance.net",
    "tags": [
      "Design System",
      "Figma",
      "Tokens"
    ],
    "en": {
      "t": "Vogue",
      "d": "Redesign of the Vogue platform with key improvements to usability, performance, and user experience."
    },
    "es": {
      "t": "Vogue",
      "d": "Rediseño de la plataforma Vogue con mejoras clave en usabilidad, rendimiento y experiencia de usuario."
    }
  },

  
  // 4. Beojnamu Ecommerce
  {
    "img": "assets/ecommerce.webp",
    "color": "linear-gradient(135deg, #dbeafe, #eec0b4)",
    "cat": "Web Development",
    "link": "https://behance.net",
    "tags": [
      "UX Audit",
      "Wireframes",
      "Figma"
    ],
    "en": {
      "t": "Beojnamu Ecommerce",
      "d": "Korean fashion e-commerce platform with UX audit and full redesign to improve the shopping experience."
    },
    "es": {
      "t": "Beojnamu Ecommerce",
      "d": "Plataforma de comercio electrónico de moda coreana con auditoría UX y rediseño completo para mejorar la experiencia de compra."
    }
  },
  // 5. Los demás proyectos...
  {
    "img": "assets/capturalogin.png",
    "color": "linear-gradient(135deg, #dbeafe, #439472)",
    "cat": "Web Development",
    "link": "https://example.com",
    "tags": [
      "React",
      "Shopify",
      "CSS"
    ],
    "en": {
      "t": "Sustainable Fashion Store",
      "d": "Responsive e-commerce with smooth shopping experience and 4.2% conversion rate."
    },
    "es": {
      "t": "Tienda online de moda sostenible",
      "d": "E-commerce responsivo con experiencia de compra fluida y conversión optimizada al 4.2%."
    }
  },
  {
    "img": "assets/capturalogin.png",
    "color": "linear-gradient(135deg, #dbeafe, #439472)",
    "cat": "Web Development",
    "link": "https://example.com",
    "tags": [
      "React",
      "Node.js",
      "Maps API"
    ],
    "en": {
      "t": "Vacation Rental Platform",
      "d": "Web platform with interactive map, advanced search and online booking system."
    },
    "es": {
      "t": "Plataforma de rentas vacacionales",
      "d": "Sitio web con mapa interactivo, búsqueda avanzada y sistema de reservas en línea."
    }
  },
  {
    "img": "assets/capturalogin.png",
    "color": "linear-gradient(135deg, #dbeafe, #439472)",
    "cat": "Web Development",
    "link": "https://example.com",
    "tags": [
      "HTML",
      "CSS",
      "JS"
    ],
    "en": {
      "t": "Podcast Landing Page",
      "d": "High-conversion landing page for a podcast launch, achieving 1,200 subscribers in the first month."
    },
    "es": {
      "t": "Landing page para podcast",
      "d": "Landing de alta conversión para el lanzamiento de un podcast, logrando 1,200 suscriptores el primer mes."
    }
  },
  {
    "img": "assets/capturalogin.png",
    "color": "linear-gradient(135deg, #dbeafe, #439472)",
    "cat": "Web Development",
    "link": "https://example.com",
    "tags": [
      "Vue.js",
      "Dashboard",
      "API REST"
    ],
    "en": {
      "t": "Data Analytics Dashboard",
      "d": "Interactive control panel for a logistics company with real-time visualization of 15+ key business metrics."
    },
    "es": {
      "t": "Dashboard de análisis de datos",
      "d": "Panel de control interactivo para una empresa de logística con visualización en tiempo real de 15 métricas."
    }
  },
  {
    "img": "assets/capturalogin.png",
    "color": "linear-gradient(135deg, #dbeafe, #439472)",
    "cat": "Talks",
    "link": "https://youtube.com",
    "tags": [
      "TEDx",
      "Design Thinking"
    ],
    "en": {
      "t": "“Designing the Future” – TEDx",
      "d": "Talk for 800 people on the impact of human-centered design. 50,000+ views on YouTube."
    },
    "es": {
      "t": "“Diseñando el futuro” – TEDx",
      "d": "Charla ante 800 personas sobre el impacto del diseño centrado en el humano. +50,000 vistas en YouTube."
    }
  },
  {
    "img": "assets/capturalogin.png",
    "color": "linear-gradient(135deg, #dbeafe, #439472)",
    "cat": "Talks",
    "link": "https://campusparty.com",
    "tags": [
      "Taller",
      "Startup",
      "Campus Party"
    ],
    "en": {
      "t": "“UX for Startups” – Campus Party",
      "d": "3-hour workshop for 200 entrepreneurs on applying UX with limited resources."
    },
    "es": {
      "t": "“UX para startups” – Campus Party",
      "d": "Taller de 3 horas para 200 emprendedores sobre cómo aplicar UX con recursos limitados."
    }
  },
  {
    "img": "assets/capturalogin.png",
    "color": "linear-gradient(135deg, #dbeafe, #439472)",
    "cat": "Talks",
    "link": "https://unam.mx",
    "tags": [
      "Universidad",
      "Inspiración",
      "LATAM"
    ],
    "en": {
      "t": "Design & Innovation – UNAM",
      "d": "Keynote for 300 design students on the real UX/UI industry in LATAM."
    },
    "es": {
      "t": "Diseño e Innovación – UNAM",
      "d": "Conferencia magistral para 300 estudiantes de diseño sobre la industria del UX/UI en LATAM."
    }
  },
  {
    "img": "assets/capturalogin.png",
    "color": "linear-gradient(135deg, #dbeafe, #439472)",
    "cat": "Talks",
    "link": "https://example.com",
    "tags": [
      "Producto",
      "Empresarial",
      "Workshop"
    ],
    "en": {
      "t": "“User-Centered Product” – Santander",
      "d": "2-day corporate workshop for Santander Mexico product team on user-centered design methodologies."
    },
    "es": {
      "t": "“Producto centrado en el usuario” – Santander",
      "d": "Workshop corporativo de 2 días para el equipo de producto de Santander México."
    }
  }
];

// =============================================
// ESTADO
// =============================================
let catActiva = "All";
let idx       = 0;
let lang      = "en";
const POR_PAG = 4;

// =============================================
// NAVBAR
// =============================================
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 20);
});
document.getElementById("navbar-toggle").addEventListener("click", () => {
  document.getElementById("navbar-links").classList.toggle("open");
});
document.querySelectorAll("#navbar-links a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("navbar-links").classList.remove("open"));
});

// =============================================
// MARCAS — fallback logos
// =============================================
document.querySelectorAll(".marca-logo").forEach(img => {
  img.addEventListener("error", () => {
    img.style.display = "none";
    img.nextElementSibling.style.display = "flex";
  });
});

// =============================================
// PORTAFOLIO — helpers
// =============================================
function filtered() {
  return catActiva === "All" ? PROYECTOS : PROYECTOS.filter(p => p.cat === catActiva);
}
function pages(arr) {
  const r = [];
  for (let i = 0; i < arr.length; i += POR_PAG) r.push(arr.slice(i, i + POR_PAG));
  return r;
}

// Diccionario de traducción para las categorías
function traducirCategoria(cat, idioma) {
  const mapa = {
    "All": { en: "All", es: "Todos" },
    "UX/UI Design": { en: "UX/UI Design", es: "UX/UI Design" },
    "Web Development": { en: "Web Development", es: "Desarrollo Web" },
    "Talks": { en: "Talks", es: "Conferencia" }
  };
  return mapa[cat] ? mapa[cat][idioma] : cat;
}

// =============================================
// PORTAFOLIO — render
// =============================================
function renderTabs() {
  const tabs = document.getElementById("portfolio-tabs");
  if (!tabs) return;

  const cats = ["All", "UX/UI Design", "Web Development", "Talks"];

  tabs.innerHTML = cats.map(c => {
    const label = traducirCategoria(c, lang);

    const cnt = c === "All"
      ? PROYECTOS.length
      : PROYECTOS.filter(p => p.cat === c).length;

    return `
      <button 
        class="portfolio-tab${catActiva === c ? " active" : ""}" 
        onclick="cambiarCat('${c}')">
        ${label} <span class="tab-count">${cnt}</span>
      </button>`;
  }).join("");
}

function renderPortfolio() {
  const track = document.getElementById("carrusel-track");
  if (!track) return;

  const titulo = document.getElementById("portfolio-titulo");
  if (titulo) {
    titulo.textContent = lang === "en" ? "Featured Projects" : "Proyectos destacados";
  }

  const pags = pages(filtered());
  const tot  = pags.length;

  track.style.transform = `translateX(calc(-${idx} * (100% + 24px)))`;

  track.innerHTML = pags.map(pag => {
    const cards = pag.map(p => `
      <div class="project-card">
       <div class="project-thumbnail" style="background:${p.color}">
         <img src="${p.img}" alt="${p[lang].t}" class="project-img" />
       </div>
        <div class="project-card-body">
          <div class="project-category">${traducirCategoria(p.cat, lang)}</div>
          <h3>${p[lang].t}</h3>
          <p>${p[lang].d}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
          <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn-ver-proyecto">
            ${lang === "en" ? "View project" : "Ver proyecto"}
            <span class="btn-arrow">&#x2197;</span>
          </a>
        </div>
      </div>
    `).join("");

    return `
      <div class="carrusel-slide">
        <div class="carrusel-grid">${cards}</div>
      </div>
    `;
  }).join("");

  const btnAnterior = document.getElementById("btn-anterior");
  const btnSiguiente = document.getElementById("btn-siguiente");
  const dots = document.getElementById("carrusel-dots");
  const counter = document.getElementById("carrusel-counter");

  if (btnAnterior) btnAnterior.disabled = idx === 0;
  if (btnSiguiente) btnSiguiente.disabled = idx >= tot - 1;

  if (dots) {
    dots.innerHTML = pags.map((_, i) =>
      `<button class="carrusel-dot${i === idx ? " active" : ""}" onclick="irA(${i})"></button>`
    ).join("");
  }

  if (counter) {
    counter.textContent =
      lang === "en"
        ? `Page ${idx + 1} of ${tot}`
        : `Página ${idx + 1} de ${tot}`;
  }
}

function cambiarCat(c) {
  catActiva = c;
  idx = 0;
  renderTabs();
  renderPortfolio();
}

function irA(i) {
  idx = i;
  renderPortfolio();
}

// =============================================
// CARRUSEL controles (seguros)
// =============================================
const btnAnterior = document.getElementById("btn-anterior");
if (btnAnterior) {
  btnAnterior.addEventListener("click", () => {
    if (idx > 0) {
      idx--;
      renderPortfolio();
    }
  });
}

const btnSiguiente = document.getElementById("btn-siguiente");
if (btnSiguiente) {
  btnSiguiente.addEventListener("click", () => {
    const t = pages(filtered()).length;
    if (idx < t - 1) {
      idx++;
      renderPortfolio();
    }
  });
}

const carruselWrapper = document.getElementById("carrusel-wrapper");
if (carruselWrapper) {
  carruselWrapper.addEventListener("keydown", e => {
    const t = pages(filtered()).length;

    if (e.key === "ArrowLeft" && idx > 0) {
      idx--;
      renderPortfolio();
    }

    if (e.key === "ArrowRight" && idx < t - 1) {
      idx++;
      renderPortfolio();
    }
  });
}

// =============================================
// IDIOMA (seguro)
// =============================================
const btnEs = document.getElementById("btn-es");
const btnEn = document.getElementById("btn-en");

if (btnEs && btnEn) {
  btnEs.addEventListener("click", () => {
    lang = "es";

    btnEs.classList.add("active");
    btnEn.classList.remove("active");

    if (typeof traducirPagina === "function") traducirPagina();
    renderTabs();
    renderPortfolio();
  });

  btnEn.addEventListener("click", () => {
    lang = "en";

    btnEn.classList.add("active");
    btnEs.classList.remove("active");

    if (typeof traducirPagina === "function") traducirPagina();
    renderTabs();
    renderPortfolio();
  });
}

// =============================================
// FORMULARIO
// =============================================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    document.getElementById("contact-form").style.display = "none";
    document.getElementById("form-success").style.display = "flex";

    setTimeout(() => {
      document.getElementById("contact-form").reset();
      document.getElementById("contact-form").style.display = "flex";
      document.getElementById("form-success").style.display = "none";
    }, 5000);
  });
}

// =============================================
// CONTADORES DEL HERO
// =============================================
function animarContadores() {
  const counters = document.querySelectorAll(".stat-item strong");

  counters.forEach(counter => {
    const texto = counter.textContent.trim();
    const numeroFinal = parseInt(texto.replace("+", ""));

    let actual = 0;
    const incremento = numeroFinal / 50;

    const actualizar = () => {
      actual += incremento;

      if (actual < numeroFinal) {
        counter.textContent = "+" + Math.floor(actual);
        requestAnimationFrame(actualizar);
      } else {
        counter.textContent = "+" + numeroFinal;
      }
    };

    actualizar();
  });
}

const statsSection = document.querySelector(".hero-stats");

if (statsSection) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animarContadores();
      observer.disconnect();
    }
  });

  observer.observe(statsSection);
}

// =============================================
// BOTÓN: VOLVER ARRIBA
// =============================================

const scrollBtn = document.getElementById("scrollToTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// =============================================
// INICIALIZAR
// =============================================

renderTabs();
renderPortfolio();



const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

