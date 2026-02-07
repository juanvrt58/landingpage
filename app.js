/* =========================
File: app.js
Roble Pizzas - Landing Page Logic
Incluye:
1) Config de contacto (WhatsApp + email)
2) Menú móvil (toggle)
3) Formulario: valida y abre WhatsApp con mensaje armado
4) Toast de confirmación
5) Año en footer

Cómo editar:
- CAMBIA whatsappNumberIntl y email en BRAND.
- whatsappNumberIntl debe ir sin +, sin espacios: 569XXXXXXXX
========================= */

/** =========================
 * CONFIG
 * ========================= */
const BRAND = {
  name: "Roble Pizzas",
  city: "Santiago, Chile",
  // Número en formato internacional: Chile = 56, luego 9 y tu número.
  // Ejemplo real: "56987654321"
  whatsappNumberIntl: "56912345678",
  email: "cotizaciones@tudominio.cl",
  website: "https://tudominio.cl"
};

/** =========================
 * Helpers DOM
 * ========================= */
const $ = (sel) => document.querySelector(sel);

const toast = $("#toast");
const burger = $("#burger");
const mobilePanel = $("#mobilePanel");

const whatsTop = $("#whatsBtnTop");
const whatsMid = $("#whatsBtnMid");
const whatsBottom = $("#whatsBtnBottom");
const mailBtn = $("#mailBtn");

const form = $("#quoteForm");

/** =========================
 * Toast helper (mensajes breves)
 * ========================= */
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

/** =========================
 * Construcción de links
 * ========================= */
function buildWhatsAppLink(text) {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${BRAND.whatsappNumberIntl}?text=${encoded}`;
}

function buildMailto(subject, body) {
  return `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** =========================
 * Enlaces por defecto (botones WhatsApp + Email)
 * - Útil si el usuario quiere escribir sin completar el formulario.
 * ========================= */
const defaultWhatsText =
  `Hola, soy [NOMBRE]. Quiero cotizar ${BRAND.name} para un evento.\n` +
  `Fecha: [FECHA]\nAsistentes: [ASISTENTES]\nLugar: [LUGAR]\n` +
  `Extras: garzones / barra / personal extra (si aplica)\n\n` +
  `¿Me envías una propuesta?`;

function setContactLinks() {
  const waLink = buildWhatsAppLink(defaultWhatsText);
  [whatsTop, whatsMid, whatsBottom].forEach(a => a && (a.href = waLink));

  // Mailto: reemplaza brackets para que se vea más natural
  mailBtn.href = buildMailto(
    `Cotización ${BRAND.name}`,
    defaultWhatsText.replaceAll("[", "").replaceAll("]", "")
  );
}
setContactLinks();

/** =========================
 * Menú móvil
 * ========================= */
burger.addEventListener("click", () => {
  const isOpen = mobilePanel.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
});

// Al hacer click en un link del panel móvil, cerramos el panel.
document.querySelectorAll(".mLink").forEach(link => {
  link.addEventListener("click", () => {
    mobilePanel.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });
});

/** =========================
 * Form submit:
 * - Validación simple
 * - Arma mensaje
 * - Abre WhatsApp
 * - Prepara mailto como respaldo
 * ========================= */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const phone = $("#phone").value.trim();
  const guests = $("#guests").value;
  const date = $("#date").value;
  const msg = $("#msg").value.trim();

  if (!name || !email || !phone || !guests || !date || !msg) {
    showToast("Completa todos los campos para cotizar.");
    return;
  }

  const text =
    `Hola, soy ${name}.\n` +
    `Quiero cotizar ${BRAND.name} para un evento.\n\n` +
    `Fecha: ${date}\n` +
    `Asistentes: ${guests}\n` +
    `Email: ${email}\n` +
    `WhatsApp: ${phone}\n\n` +
    `Detalle:\n${msg}\n\n` +
    `Gracias.`;

  // 1) WhatsApp (principal)
  const wa = buildWhatsAppLink(text);
  window.open(wa, "_blank", "noopener,noreferrer");

  // 2) Email (respaldo): dejamos el botón ya listo por si lo quieren usar
  mailBtn.href = buildMailto(`Cotización ${BRAND.name} - ${name}`, text);

  showToast("Listo. Te abrí WhatsApp con el mensaje preparado.");
  form.reset();
});

/** =========================
 * Año en footer
 * ========================= */
$("#year").textContent = new Date().getFullYear();

/* =========================
Carrusel - pega esto al final de app.js (abajo de todo)
Requisitos:
- Debe correr después del DOM (si tu app.js ya usa DOMContentLoaded, pega dentro).
========================= */

(function initCarousel(){
  const viewport = document.querySelector("[data-carousel-viewport]");
  const track = document.querySelector("[data-carousel-track]");
  const prevBtn = document.querySelector("[data-carousel-prev]");
  const nextBtn = document.querySelector("[data-carousel-next]");
  const dotsWrap = document.querySelector("[data-carousel-dots]");

  if(!viewport || !track || !prevBtn || !nextBtn || !dotsWrap) return;

  const slides = Array.from(track.children);
  let index = 0;

  // Crear dots
  const dots = slides.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `Ir a la imagen ${i + 1}`);
    b.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(b);
    return b;
  });

  function update(){
    const x = -index * viewport.clientWidth;
    track.style.transform = `translateX(${x}px)`;

    dots.forEach((d, i) => d.setAttribute("aria-current", String(i === index)));
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
    prevBtn.style.opacity = prevBtn.disabled ? ".45" : "1";
    nextBtn.style.opacity = nextBtn.disabled ? ".45" : "1";
  }

  function goTo(i){
    index = Math.max(0, Math.min(i, slides.length - 1));
    update();
  }

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));

  // Teclado (cuando el carrusel tiene foco)
  viewport.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft") goTo(index - 1);
    if(e.key === "ArrowRight") goTo(index + 1);
  });

  // Swipe móvil (simple)
  let startX = 0;
  let dragging = false;

  viewport.addEventListener("pointerdown", (e) => {
    dragging = true;
    startX = e.clientX;
    viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener("pointerup", (e) => {
    if(!dragging) return;
    dragging = false;
    const dx = e.clientX - startX;
    const threshold = 40;
    if(dx > threshold) goTo(index - 1);
    if(dx < -threshold) goTo(index + 1);
  });

  // Recalcular al redimensionar
  window.addEventListener("resize", () => update());

  // Inicial
  update();
 
  /* =========================
  AUTOPLAY
  ========================= */

  let autoplayInterval = null;
  const AUTOPLAY_TIME = 4000;

  function startAutoplay(){
    stopAutoplay();
    autoplayInterval = setInterval(() => {
      if(index < slides.length - 1){
        goTo(index + 1);
      } else {
        goTo(0);
      }
    }, AUTOPLAY_TIME);
  }

  function stopAutoplay(){
    if(autoplayInterval){
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  viewport.addEventListener("mouseenter", stopAutoplay);
  viewport.addEventListener("mouseleave", startAutoplay);

  viewport.addEventListener("touchstart", stopAutoplay);
  viewport.addEventListener("touchend", startAutoplay);

  startAutoplay();

})();

