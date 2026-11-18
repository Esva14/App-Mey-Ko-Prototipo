"use strict";

const { envio } = window.MeykoCatalogo;
const productos = window.MeykoCatalogo.productos.map((p) =>
  p.id === "tensiometro"
    ? { ...p, regular: p.precio, precio: Math.round(p.precio * 0.9) }
    : p,
);
const $ = (id) => document.getElementById(id);
const money = (n) =>
  new Intl.NumberFormat("es-HN", {
    style: "currency",
    currency: "HNL",
    currencyDisplay: "narrowSymbol",
  }).format(n / 100);
const h = (s = "") =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const normal = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
const paths = {
  menu: "M4 7h16M4 12h16M4 17h11",
  arrow: "M4 12h15m-6-6 6 6-6 6",
  back: "M20 12H5m6-6-6 6 6 6",
  chevron: "m9 6 6 6-6 6",
  close: "m6 6 12 12M18 6 6 18",
  search: "M20 20l-4-4m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
  bag: "M5 8h14l1 12H4L5 8Zm4 1V6a3 3 0 1 1 6 0v3",
  home: "m3 10 9-7 9 7M5 9v11h14V9m-9 11v-6h4v6",
  grid: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  tag: "M3 4h8l10 10-7 7L3 10zM7.5 8h.01",
  heart: "M12 20 4.5 12.6C0 8 6 2 12 7c6-5 12 1 7.5 5.6Z",
  user: "M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21v-1a8 6 0 0 1 16 0v1",
  pin: "M19 10c0 5-7 10.5-7 10.5S5 15 5 10a7 7 0 1 1 14 0ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  chat: "M4 20l1-4a8 8 0 1 1 3 3.3L4 20Zm4-9h.01m4 0h.01m4 0h.01",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  check: "m5 12 4 4L19 6",
  box: "m4 8 8-4 8 4v9l-8 4-8-4zm0 0 8 4 8-4m-8 4v9",
  pulse: "M2 12h5l3-7 4 14 3-7h5",
  drop: "M12 3S5 11 5 15a7 7 0 0 0 14 0c0-4-7-12-7-12Z",
  cross: "M9 4h6v5h5v6h-5v5H9v-5H4V9h5z",
  shield: "m12 3 8 3v5c0 5-4 8-8 10-4-2-8-5-8-10V6l8-3Zm-3 9 2 2 4-4",
  sliders: "M4 7h7m4 0h5M4 17h3m4 0h9M11 4v6m-4 4v6",
  enter: "M13 4h6v16h-6M4 12h11m-4-4 4 4-4 4",
  truck:
    "M3 6h11v11H9m5-8h3l4 4v4h-3M3 17h2m4 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  trash: "M4 7h16m-11 0V4h6v3m3 0-1 13H7L6 7",
  card: "M3 6h18v13H3zM3 10h18m-14 5h4",
  clock: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-5v5l3 2",
  leaf: "M5 19c0-8 4-13 14-14 0 8-3 13-11 13m-3 1 8-8",
};
const icon = (name) =>
  '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' +
  paths[name] +
  '"/></svg>';
const logo = () =>
  '<img class="brand" src="assets/images/marca/mey-ko.png" alt="Mey-Ko" width="480" height="138">';
const categories = window.MeykoCatalogo.categorias.filter(({ id }) => id !== "todo");
const specialtySite = "https://www.meyko.com";
// Listado y fotos de https://www.meyko.com/especialidades.
const specialties = [
  [
    "terapia-fisica-y-rehabilitacion",
    "Terapia física",
    "Equipos para rehabilitación y recuperación de la movilidad.",
  ],
  [
    "cardiologia",
    "Cardiología",
    "Dispositivos para evaluar y monitorear la salud del corazón.",
  ],
  [
    "gastroenterologia",
    "Gastroenterología",
    "Equipos para diagnóstico y procedimientos del sistema digestivo.",
  ],
  [
    "nefrologia",
    "Nefrología",
    "Equipos para hemodiálisis y atención renal.",
  ],
  [
    "urologia",
    "Urología",
    "Dispositivos para diagnóstico y procedimientos urológicos.",
  ],
  [
    "cirugia-vascular",
    "Cirugía vascular",
    "Instrumentos para procedimientos en arterias y venas.",
  ],
  [
    "cuidado-de-heridas",
    "Cuidado de heridas",
    "Materiales para proteger heridas y apoyar su cicatrización.",
  ],
  [
    "cirugia-general",
    "Cirugía general",
    "Instrumental y equipos para procedimientos en quirófano.",
  ],
];
const routes = {
  bienvenida: "Bienvenida",
  acceso: "Tu acceso",
  login: "Iniciar sesión",
  registro: "Crear cuenta",
  inicio: "Inicio",
  tienda: "Tienda",
  productos: "Productos",
  producto: "Ficha de producto",
  promos: "Promociones",
  especialidades: "Especialidades",
  carrito: "Carrito",
  perfil: "Cuenta",
  deseos: "Lista de deseos",
  sucursales: "Sucursales",
  ajustes: "Ajustes",
  privacidad: "Políticas de privacidad",
  entrega: "Entrega",
  pago: "Pago",
  confirmacion: "Confirmación",
  whatsapp: "WhatsApp",
};
const storageKey = "meyko-organic-v1";
let state = {
  cart: {},
  wishes: [],
  orders: [],
  account: null,
  reduce: false,
  stockChange: null,
};
try {
  Object.assign(state, JSON.parse(localStorage.getItem(storageKey)));
} catch {}
function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {}
}
let route,
  detailQty = 1,
  delivery = null,
  order = null,
  toastTimer;
let paymentFailed = false;
const product = (id) => productos.find((p) => p.id === id);
const available = (p) => p?.disponible && state.stockChange !== p.id;
const cartProducts = () => productos.filter((p) => state.cart[p.id]);
const cartHasUnavailable = () => cartProducts().some((p) => !available(p));
const count = () => Object.values(state.cart).reduce((sum, n) => sum + n, 0);
const subtotal = () =>
  cartProducts()
    .filter(available)
    .reduce((sum, p) => sum + p.precio * state.cart[p.id], 0);
const go = (to) => {
  if (location.hash === "#" + to) render();
  else location.hash = to;
};
const img = (file, alt = "", extra = "") =>
  '<img src="assets/images/' + file + '" alt="' + h(alt) + '" ' + extra + ">";
const link = (to, label, cls = "primary", glyph = "") =>
  '<a class="btn ' +
  cls +
  '" href="#' +
  to +
  '">' +
  label +
  (glyph ? icon(glyph) : "") +
  "</a>";
const external = (url, label, cls = "secondary", glyph = "arrow") =>
  '<a class="btn ' +
  cls +
  '" href="' +
  url +
  '" target="_blank" rel="noopener noreferrer">' +
  label +
  icon(glyph) +
  "</a>";
const button = (label, action, cls = "primary", glyph = "", attrs = "") =>
  '<button type="button" class="btn ' +
  cls +
  '" data-action="' +
  action +
  '" ' +
  attrs +
  ">" +
  label +
  (glyph ? icon(glyph) : "") +
  "</button>";
const icoBtn = (glyph, label, action, extra = "") =>
  '<button type="button" class="icon-btn" aria-label="' +
  h(label) +
  '" data-action="' +
  action +
  '" ' +
  extra +
  ">" +
  icon(glyph) +
  "</button>";
function intro(label, title, sub = "") {
  // Las vistas operativas se identifican en el encabezado de la app.
  const hasContextHeading = ["acceso", "pago", "confirmacion"].includes(route.name);
  if (!hasContextHeading) {
    return sub ? '<div class="view-note"><p class="sub">' + sub + "</p></div>" : "";
  }
  return '<div class="intro"><p class="eyebrow">' + label +
    '</p><h1 tabindex="-1">' + title + "</h1>" +
    (sub ? '<p class="sub">' + sub + "</p>" : "") + "</div>";
}
const sectionHead = (title, to, label) =>
  '<div class="section-head"><h2>' +
  title +
  "</h2>" +
  (to ? '<a href="#' + to + '">' + label + icon("chevron") + "</a>" : "") +
  "</div>";
const row = (glyph, title, text, to) =>
  '<a href="#' +
  to +
  '" class="row"><span class="round">' +
  icon(glyph) +
  "</span><span><strong>" +
  title +
  "</strong>" +
  (text ? "<small>" + text + "</small>" : "") +
  "</span>" +
  icon("chevron") +
  "</a>";
const search = (value = "") =>
  '<form class="search" id="search" role="search">' +
  icon("search") +
  '<input name="q" type="search" aria-label="Buscar productos" placeholder="Buscar productos" value="' +
  h(value) +
  '"><button type="submit" aria-label="Buscar">' +
  icon("arrow") +
  "</button></form>";
const empty = (glyph, title, body, to, label) =>
  '<div class="empty"><span class="round">' +
  icon(glyph) +
  "</span><h2>" +
  title +
  "</h2><p>" +
  body +
  "</p>" +
  link(to, label, "secondary", "arrow") +
  "</div>";
const badge = (p) =>
  available(p)
    ? '<span class="availability">Disponible</span>'
    : '<span class="availability sold">Agotado</span>';
const selected = (id) => state.wishes.includes(id);
const wish = (p) =>
  icoBtn(
    "heart",
    selected(p.id) ? "Quitar de deseos" : "Guardar en deseos",
    "wish",
    'data-id="' + p.id + '" aria-pressed="' + selected(p.id) + '"',
  );
function tile(p) {
  const offered = available(p);
  return (
    '<article class="product"><div class="product-media"><a href="#producto/' +
    p.id +
    '" aria-label="' +
    h(p.nombre) +
    '">' +
    img(p.imagen, "", 'loading="lazy"') +
    "</a>" +
    wish(p) +
    '</div><div class="product-info"><span class="meta">' +
    h(p.marca) +
    '</span><a class="product-name" href="#producto/' +
    p.id +
    '">' +
    h(p.nombre) +
    '</a><div class="product-foot"><span><strong>' +
    money(p.precio) +
    "</strong>" +
    (p.regular ? "<del>" + money(p.regular) + "</del>" : "") +
    (!offered ? badge(p) : "") +
    "</span>" +
    icoBtn(
      "plus",
      "Agregar " + p.nombre + " al carrito",
      "add",
      'data-id="' + p.id + '" ' + (offered ? "" : "disabled"),
    ) +
    "</div></div></article>"
  );
}
const tiles = (list) =>
  '<div class="products">' + list.map(tile).join("") + "</div>";
const categoriesGrid = (items = categories) =>
  '<div class="categories">' +
  items
    .map(
      ({ id, nombre, imagen }) =>
        '<a href="#productos/' +
        id +
        '"><span class="category-photo">' +
        img(imagen) +
        "</span><strong>" +
        h(nombre) +
        "</strong></a>",
    )
    .join("") +
  "</div>";

function welcome() {
  return (
    '<section class="welcome"><div class="welcome-visual"><div class="welcome-logo">' +
    logo() +
    '</div><div class="welcome-caption"><p class="eyebrow">Tu tienda de salud</p><h1 tabindex="-1">Cuidarte<br>empieza aquí.</h1></div></div><div class="welcome-bottom"><p>Encuentra lo que necesitas para cuidar de ti y de los tuyos.</p>' +
    link("acceso", "Comenzar", "primary", "arrow") +
    "</div></section>"
  );
}
function access() {
  return (
    '<section class="access pad"><div class="access-art"><span class="orbit one"></span><span class="orbit two"></span>' +
    icon("heart") +
    '<span class="art-plus">' +
    icon("plus") +
    "</span></div>" +
    intro(
      "Bienvenido a Mey-Ko",
      "¿Cómo quieres entrar?",
      "Puedes explorar la tienda como invitado o entrar con tu cuenta.",
    ) +
    '<div class="actions">' +
    button("Continuar como invitado", "guest", "primary", "arrow") +
    link("login", "Iniciar sesión", "secondary", "enter") +
    link("registro", "Crear una cuenta", "text") +
    "</div></section>"
  );
}
const field = (label, name, opts = "") =>
  '<label class="field">' +
  label +
  '<input name="' +
  name +
  '" ' +
  opts +
  "></label>";
function auth(mode) {
  const signup = mode === "registro";
  return (
    '<section class="pad auth"><div class="small-art">' +
    icon(signup ? "heart" : "user") +
    "</div>" +
    intro(
      "Tu cuenta",
      signup ? "Crea tu cuenta" : "Inicia sesión",
      signup
        ? "Guarda tus favoritos y consulta tus pedidos."
        : "Accede a tus favoritos y pedidos.",
    ) +
    '<form id="auth" class="stack">' +
    (signup
      ? field(
          "Nombre",
          "name",
          'autocomplete="off" required maxlength="50" placeholder="Ana"',
        )
      : "") +
    field(
      "Correo electrónico",
      "email",
      'type="email" autocomplete="off" required placeholder="ana@ejemplo.com"',
    ) +
    field(
      "Contraseña",
      "password",
      'type="password" autocomplete="off" minlength="6" required placeholder="Al menos 6 caracteres"',
    ) +
    '<p class="hint">Modo de prueba. Usa datos de ejemplo.</p><button class="btn primary">' +
    (signup ? "Crear cuenta" : "Iniciar sesión") +
    icon("arrow") +
    "</button>" +
    button("Entrar con cuenta de ejemplo", "demo", "secondary") +
    link(
      signup ? "login" : "registro",
      signup ? "Ya tengo una cuenta" : "Crear una cuenta",
      "text",
    ) +
    "</form></section>"
  );
}
function home() {
  const greeting = state.account
    ? "Hola, " + h(state.account.name.split(" ")[0])
    : "Hola, qué gusto verte";
  return (
    '<div class="pad home-search">' +
    search() +
    '</div><section class="home-hero"><div class="hero-copy"><p class="eyebrow">Tu tienda de salud</p><h1 tabindex="-1">' +
    greeting +
    "</h1>" +
    link("tienda", "Explorar tienda", "primary", "arrow") +
    '</div></section><section class="pad home-section">' +
    sectionHead("Compra por categoría", "tienda", "Ver todas") +
    categoriesGrid(categories.slice(0, 3)) +
    '</section><section class="pad home-section">' +
    sectionHead("Accesos rápidos") +
    '<div class="shortcuts"><a href="#whatsapp"><span class="round">' +
    icon("chat") +
    '</span>WhatsApp</a><a href="#promos"><span class="round">' +
    icon("tag") +
    '</span>Promociones</a><a href="#especialidades"><span class="round">' +
    icon("pulse") +
    '</span>Especialidades</a><a href="#sucursales"><span class="round">' +
    icon("pin") +
    '</span>Sucursales</a></div></section><section class="pad home-section">' +
    sectionHead("Productos destacados", "productos/todo", "Ver todos") +
    tiles(productos.slice(0, 2)) +
    "</section>"
  );
}
function shop() {
  return (
    '<section class="pad">' +
    intro("Catálogo", "Tienda", "Elige una categoría o busca un producto.") +
    search() +
    '<div class="spaced">' +
    sectionHead("Categorías") +
    categoriesGrid() +
    '</div><div class="spaced">' +
    row(
      "grid",
      "Ver todos los productos",
      "Explora el catálogo completo",
      "productos/todo",
    ) +
    "</div></section>"
  );
}
function results(key) {
  const searching = key.startsWith("buscar/");
  const query = searching ? key.slice(7) : "";
  const current = categories.find((category) => category.id === key);
  const list = productos.filter((p) =>
    searching
      ? normal(p.nombre + " " + p.busqueda + " " + p.marca).includes(
          normal(query),
        )
      : !current || p.categoria === key,
  );
  return (
    '<section class="pad">' +
    intro(
      "Tienda",
      searching ? "Resultados" : current?.nombre || "Todos los productos",
    ) +
    search(query) +
    '<div class="filters" aria-label="Filtrar por categoría">' +
    window.MeykoCatalogo.categorias
      .map(
        ({ id, nombre }) =>
          "<a " +
          (key === id ? 'aria-current="page"' : "") +
          ' href="#productos/' +
          id +
          '">' +
          h(nombre) +
          "</a>",
      )
      .join("") +
    '</div><p class="hint result-count">' +
    list.length +
    " " +
    (list.length === 1 ? "producto" : "productos") +
    "</p>" +
    (list.length
      ? tiles(list)
      : empty(
          "search",
          "No encontramos productos",
          "Prueba otro término o revisa el catálogo.",
          "tienda",
          "Ver categorías",
        )) +
    "</section>"
  );
}
const stepper = (qty, action, id, label) =>
  '<div class="stepper" aria-label="' +
  h(label) +
  '">' +
  icoBtn(
    "minus",
    "Disminuir cantidad",
    action,
    'data-id="' + id + '" data-delta="-1" ' + (qty <= 1 ? "disabled" : ""),
  ) +
  "<output>" +
  qty +
  "</output>" +
  icoBtn(
    "plus",
    "Aumentar cantidad",
    action,
    'data-id="' + id + '" data-delta="1" ' + (qty >= 99 ? "disabled" : ""),
  ) +
  "</div>";
function detail(p) {
  const offered = available(p);
  const alternatives = (p.alternativas || []).map(product).filter(available);
  const consult = link(
    "whatsapp/" + p.id,
    "Consultar por WhatsApp",
    "secondary",
    "chat",
  );
  const dock = offered
    ? '<div id="detail-qty">' +
      stepper(detailQty, "detail-qty", p.id, "Cantidad") +
      "</div>" +
      button(
        "Agregar al carrito",
        "detail-add",
        "primary",
        "bag",
        'data-id="' + p.id + '"',
      )
    : link(
        "productos/" + p.categoria,
        "Explorar categoría",
        "primary",
        "arrow",
      );
  return `<article class="detail">
    <div class="detail-media">${img(p.imagen, p.nombre)}${wish(p)}</div>
    <div class="pad detail-info">
      <p class="eyebrow">${h(p.marca)} · Ref. ${h(p.sku)}</p>
      <h1 tabindex="-1">${h(p.nombre)}</h1>
      <div class="detail-price"><strong>${money(p.precio)}</strong>${p.regular ? "<del>" + money(p.regular) + "</del>" : ""}${badge(p)}</div>
      ${
        !offered && alternatives.length
          ? `<section class="spaced">
        ${sectionHead("Alternativas disponibles")}
        ${alternatives
          .map(
            (
              alternative,
            ) => `<a class="row alternative" href="#producto/${alternative.id}">
          ${img(alternative.imagen)}
          <span><strong>${h(alternative.nombre)}</strong><small>${money(alternative.precio)}</small></span>
          ${icon("chevron")}
        </a>`,
          )
          .join("")}
      </section>`
          : ""
      }
      <div class="rule"></div>
      <h2>Descripción</h2><p>${h(p.descripcion)}</p>
      <div class="detail-delivery">${icon("truck")}<span><strong>Entrega a domicilio</strong><small>Revisa el costo antes de confirmar tu pedido.</small></span></div>
      ${consult}
    </div>
  </article><div class="dock">${dock}</div>`;
}
function whatsappPage(p) {
  const suggested = p
    ? "Hola, quiero más información sobre " +
      p.nombre +
      " (ref. " +
      p.sku +
      ")."
    : "Hola, ¿me pueden ayudar a encontrar un producto?";
  return `<section class="pad">
    ${intro("Atención al cliente", "WhatsApp", "Simulación de consulta a Mey-Ko.")}
    <form id="whatsapp-form" class="stack">
      <label class="field">Mensaje<textarea name="message" rows="4" maxlength="500" required>${h(suggested)}</textarea></label>
      <button class="btn primary">Simular envío ${icon("arrow")}</button>
      <p class="sub" id="whatsapp-result" role="status"></p>
    </form>
  </section>`;
}
function promos() {
  return (
    '<section class="pad">' +
    intro(
      "Tienda",
      "Promociones",
      "Encuentra ofertas para el cuidado de todos los días.",
    ) +
    '<div class="promo-hero"><div><p class="eyebrow">Promociones del mes</p><h2>10% en tensiómetros</h2>' +
    link("producto/tensiometro", "Ver oferta", "light", "arrow") +
    '</div></div><div class="promo-note">' +
    icon("tag") +
    'Promociones de muestra</div><div class="spaced">' +
    sectionHead("De temporada") +
    '<div class="promo-collage"><a href="#producto/glucometro">' +
    img("banners/combo.jpg") +
    "<span>Control de glucosa " +
    icon("arrow") +
    '</span></a><a href="#producto/oximetro">' +
    img("categorias/cuidado-casa.png") +
    "<span>Monitoreo en casa " +
    icon("arrow") +
    '</span></a></div></div><div class="spaced">' +
    sectionHead("Selección del mes") +
    tiles(productos.slice(0, 2)) +
    "</div></section>"
  );
}
function specialtiesPage() {
  return `<section aria-label="Especialidades médicas">
    <div class="pad specialty-intro">
      <p class="sub">Explora los equipos y soluciones de Mey-Ko por área clínica.</p>
    </div>
    <div class="pad specialty-grid">
      ${specialties.map(specialtyCard).join("")}
    </div>
  </section>`;
}
function specialtyCard([slug, name, description], index) {
  return `<details class="specialty-card" name="especialidades">
    <summary>
      <img src="assets/images/especialidades/${slug}.jpg" alt="" width="240" height="150"
        loading="${index < 2 ? "eager" : "lazy"}" decoding="async">
      <span class="specialty-toggle" aria-hidden="true">${icon("plus")}${icon("minus")}</span>
      <span class="specialty-name">${h(name)}</span>
    </summary>
    <div class="specialty-body">
      <p>${h(description)}</p>
      <a class="btn secondary" href="${specialtySite}/${slug}" target="_blank" rel="noopener noreferrer"
        aria-label="Ver ${h(name)} en el sitio de Mey-Ko">Ver en Mey-Ko ${icon("arrow")}</a>
    </div>
  </details>`;
}
function cartLine(p) {
  const remove = icoBtn(
    "trash",
    "Quitar " + p.nombre,
    "remove",
    'data-id="' + p.id + '"',
  );
  const controls = available(p)
    ? '<div class="cart-controls">' +
      stepper(state.cart[p.id], "cart-qty", p.id, p.nombre) +
      remove +
      "</div>"
    : '<div class="cart-controls">' +
      badge(p) +
      button(
        "Quitar del carrito",
        "remove",
        "secondary",
        "trash",
        'data-id="' +
          p.id +
          '" aria-label="Quitar ' +
          h(p.nombre) +
          ' del carrito"',
      ) +
      "</div>";
  return `<article class="cart-row">
    <a href="#producto/${p.id}">${img(p.imagen, p.nombre)}</a>
    <div><a href="#producto/${p.id}"><strong>${h(p.nombre)}</strong></a>
      <span>${money(p.precio)}</span>${controls}
    </div>
  </article>`;
}
function cart() {
  const list = cartProducts();
  const blocked = cartHasUnavailable();
  const candidate =
    list.find((p) => p.id === "oximetro" && available(p)) ||
    list.find(available);
  const scenario = state.stockChange
    ? button("Restablecer disponibilidad", "restore-stock", "secondary")
    : candidate
      ? button(
          "Simular que se agota un producto",
          "simulate-stock",
          "secondary",
          "",
          'data-id="' + candidate.id + '"',
        )
      : "";
  const checkout = blocked
    ? '<button type="button" class="btn primary" disabled>Continuar a entrega</button>'
    : link("entrega", "Continuar a entrega", "primary", "arrow");
  const contents = list.length
    ? `
    ${blocked ? '<p class="notice-error" id="stock-notice" tabindex="-1">Un producto se agotó después de agregarlo. Quítalo para continuar con el resto de tu compra.</p>' : ""}
    <div class="cart-lines">${list.map(cartLine).join("")}</div>
    <div class="bill"><div><span>${blocked ? "Subtotal de productos disponibles" : "Subtotal"}</span><strong>${money(subtotal())}</strong></div><p>El costo de envío se muestra antes del pago.</p></div>
    <div class="actions">${checkout}${link("tienda", "Seguir comprando", "text")}</div>`
    : empty(
        "bag",
        "Tu carrito está vacío",
        "Explora la tienda y agrega lo que necesites.",
        "tienda",
        "Explorar tienda",
      );
  return (
    '<section class="pad">' +
    intro(
      "Tu compra",
      "Carrito",
      count()
        ? count() +
            " " +
            (count() === 1 ? "producto" : "productos") +
            " en tu carrito"
        : "",
    ) +
    contents +
    (scenario ? '<div class="spaced">' + scenario + "</div>" : "") +
    "</section>"
  );
}
function account() {
  const a = state.account;
  return (
    '<section class="pad">' +
    intro("Tu espacio", "Cuenta") +
    '<div class="profile"><span class="round">' +
    (a ? h(a.name[0].toUpperCase()) : icon("user")) +
    "</span><div><strong>" +
    h(a?.name || "Modo invitado") +
    "</strong><small>" +
    h(a?.email || "Entra para ver tu perfil") +
    "</small></div></div>" +
    (a
      ? ""
      : '<div class="actions">' +
        link("login", "Iniciar sesión", "primary", "arrow") +
        link("registro", "Crear una cuenta", "text") +
        "</div>") +
    '<div class="spaced">' +
    row(
      "heart",
      "Lista de deseos",
      state.wishes.length + " guardados",
      "deseos",
    ) +
    row("sliders", "Ajustes", "", "ajustes") +
    '</div><div class="spaced">' +
    sectionHead("Historial de compras") +
    (state.orders.length
      ? '<div class="order-list">' +
        state.orders
          .map(
            (o) =>
              '<div><span class="round">' +
              icon("box") +
              "</span><span><strong>" +
              h(o.id) +
              "</strong><small>" +
              h(o.date) +
              " · " +
              o.count +
              " " +
              (o.count === 1 ? "producto" : "productos") +
              "</small></span><strong>" +
              money(o.total) +
              "</strong></div>",
          )
          .join("") +
        "</div>"
      : '<p class="sub">Todavía no hay compras de prueba en este dispositivo.</p>') +
    "</div>" +
    (a
      ? '<div class="spaced">' +
        button("Cerrar sesión", "logout", "secondary", "enter") +
        "</div>"
      : "") +
    "</section>"
  );
}
function wishesPage() {
  const list = productos.filter((p) => selected(p.id));
  return (
    '<section class="pad">' +
    intro(
      "Tu cuenta",
      "Lista de deseos",
      "Encuentra aquí los productos que guardaste.",
    ) +
    (list.length
      ? tiles(list)
      : empty(
          "heart",
          "Aún no has guardado productos",
          "Toca el corazón junto a un producto para guardarlo.",
          "tienda",
          "Explorar tienda",
        )) +
    "</section>"
  );
}
function branches() {
  const departments = [...new Set(branchDirectory.map(({ department }) => department))]
    .sort((a, b) => a.localeCompare(b, "es-HN"));
  return `<section class="branch-directory" aria-label="Sucursales">
    <div class="pad branch-intro">
      <p class="sub">Consulta la dirección y el horario antes de visitarnos.</p>
      <label class="search">
        ${icon("search")}
        <input type="search" id="branch-search" placeholder="Buscar sucursal, ciudad o zona"
          aria-label="Buscar sucursal, ciudad o departamento" autocomplete="off">
      </label>
    </div>
    <div class="pad">
      <div class="branch-toolbar">
        <p id="branch-count" role="status"></p>
        <select id="branch-zone" aria-label="Filtrar por departamento">
          <option value="">Todo Honduras</option>
          ${departments.map(department => `<option>${h(department)}</option>`).join("")}
        </select>
      </div>
      <div class="branch-list" id="branch-list">
        ${branchDirectory.map(branchCard).join("")}
      </div>
      <div class="empty" id="branch-empty" hidden>
        <span class="round">${icon("pin")}</span>
        <h2>Sin sucursales para esta búsqueda</h2>
        <p>Prueba otro nombre o amplía la zona.</p>
        <button type="button" class="btn secondary" id="branch-reset">Limpiar filtros</button>
      </div>
      <p class="branch-source"><a href="${branchSource}" target="_blank" rel="noopener noreferrer">Consultar directorio oficial ${icon("arrow")}</a></p>
    </div>
  </section>`;
}
function branchCard({ id, name, city, department, address, hours, map }, index) {
  return `<article class="branch-card" aria-labelledby="branch-${id}">
    <div class="branch-photo">
      <img src="assets/images/sucursales/${id}.jpg" alt="Sucursal Mey-Ko ${h(name)}"
        width="352" height="168" loading="${index === 0 ? "eager" : "lazy"}"
        decoding="async">
    </div>
    <div class="branch-body">
      <p class="branch-location">${h(city)}${city === department ? "" : " · " + h(department)}</p>
      <h2 id="branch-${id}">${h(name)}</h2>
      <p class="branch-address">${h(address)}</p>
      ${external(h(map), "Cómo llegar", "secondary branch-map", "pin")}
      <details class="branch-hours">
        <summary>
          ${icon("clock")}
          <span class="branch-hours-closed">Ver horario</span>
          <span class="branch-hours-open">Ocultar horario</span>
          ${icon("chevron")}
        </summary>
        <dl>
          ${hours.map(([days, time]) => `<div><dt>${h(days)}</dt><dd>${h(time)}</dd></div>`).join("")}
        </dl>
      </details>
    </div>
  </article>`;
}
function mountBranches() {
  const searchField = $("branch-search");
  const zone = $("branch-zone");
  const cards = Array.from($("branch-list").children);
  const searchTerms = branchDirectory.map(({ name, city, department, address }) =>
    normal([name, city, department, address].join(" ")),
  );
  function filterBranches() {
    const terms = normal(searchField.value.trim()).split(/\s+/);
    let matches = 0;
    cards.forEach((card, index) => {
      const inZone = !zone.value || branchDirectory[index].department === zone.value;
      const found = inZone && terms.every(term => searchTerms[index].includes(term));
      card.hidden = !found;
      if (found) matches++;
    });
    $("branch-count").textContent = matches + (matches === 1 ? " sucursal" : " sucursales");
    $("branch-empty").hidden = matches > 0;
  }
  searchField.addEventListener("input", filterBranches);
  zone.addEventListener("change", filterBranches);
  $("branch-reset").addEventListener("click", () => {
    searchField.value = "";
    zone.value = "";
    filterBranches();
    searchField.focus();
  });
  filterBranches();
}
function settings() {
  return (
    '<section class="pad">' +
    intro("Tu cuenta", "Ajustes") +
    '<label class="setting"><span><strong>Reducir animaciones</strong><small>Desactiva las transiciones del prototipo.</small></span><input type="checkbox" id="reduce" ' +
    (state.reduce ? "checked" : "") +
    "></label>" +
    row("shield", "Políticas de privacidad", "", "privacidad") +
    '<div class="spaced">' +
    link("bienvenida", "Volver a la bienvenida", "secondary", "arrow") +
    "</div></section>"
  );
}
function privacy() {
  return (
    '<section class="pad">' +
    intro(
      "Información",
      "Políticas de privacidad",
      "Consulta la política vigente en el sitio de Mey-Ko.",
    ) +
    external(
      "https://www.meyko.com/politicasdeprivacidad",
      "Abrir la política oficial",
    ) +
    '<p class="hint spaced">La demo guarda el carrito, favoritos, perfil de muestra e historial local. No guarda contraseñas ni datos de entrega o pago.</p></section>'
  );
}
function deliveryPage() {
  return (
    '<section class="pad">' +
    intro(
      "Compra de prueba · 1 de 2",
      "Entrega",
      "Completa una dirección de prueba para continuar.",
    ) +
    '<form id="delivery" class="stack">' +
    field(
      "Nombre de quien recibe",
      "name",
      'required maxlength="60" autocomplete="off" value="' +
        h(delivery?.name || "") +
        '"',
    ) +
    field(
      "Ciudad",
      "city",
      'required maxlength="60" autocomplete="off" value="' +
        h(delivery?.city || "") +
        '"',
    ) +
    field(
      "Dirección",
      "address",
      'required maxlength="120" autocomplete="off" value="' +
        h(delivery?.address || "") +
        '"',
    ) +
    button("Usar datos de ejemplo", "fill-delivery", "secondary") +
    '<button class="btn primary">Continuar al pago ' +
    icon("arrow") +
    "</button></form></section>"
  );
}
function payment() {
  return `<section class="pad">
    ${intro("Compra de prueba · 2 de 2", "Revisa tu pedido", "El pago se simula y no requiere datos de tarjeta.")}
    <div class="summary-address"><span class="round">${icon("pin")}</span>
      <span><strong>${h(delivery.name)}</strong><small>${h(delivery.address)}, ${h(delivery.city)}</small></span>
      <a href="#entrega">Editar</a>
    </div>
    <div class="bill">
      <div><span>Subtotal</span><strong>${money(subtotal())}</strong></div>
      <div><span>Envío de prueba</span><strong>${money(envio)}</strong></div>
      <div class="total"><span>Total</span><strong>${money(subtotal() + envio)}</strong></div>
    </div>
    ${paymentFailed ? '<p class="notice-error" id="payment-notice" tabindex="-1"><strong>El pago de prueba no se completó.</strong> Tu carrito y tu dirección siguen aquí. Vuelve a intentar para confirmar el pedido.</p>' : ""}
    ${button(paymentFailed ? "Reintentar pago de prueba" : "Confirmar pedido de prueba", "order", "primary", "check")}
  </section>`;
}
function confirmation() {
  return (
    '<section class="pad confirm"><div class="small-art">' +
    icon("check") +
    "</div>" +
    intro(
      "Compra de prueba",
      "Pedido confirmado",
      "Puedes consultar esta compra en tu historial.",
    ) +
    '<div class="order-number"><span>Número de pedido</span><strong>' +
    h(order.id) +
    '</strong></div><div class="actions">' +
    link("perfil", "Ver historial", "primary", "arrow") +
    link("inicio", "Volver al inicio", "text") +
    "</div></section>"
  );
}

const backTo = {
  acceso: "bienvenida",
  login: "acceso",
  registro: "acceso",
  productos: "tienda",
  producto: "tienda",
  deseos: "perfil",
  entrega: "carrito",
  pago: "entrega",
  confirmacion: "inicio",
  ajustes: "perfil",
  privacidad: "ajustes",
};
const tabs = [
  ["inicio", "home", "Inicio"],
  ["tienda", "grid", "Tienda"],
  ["carrito", "bag", "Carrito"],
  ["perfil", "user", "Cuenta"],
];
function chrome() {
  const { name } = route;
  const onboarding = ["bienvenida", "acceso", "login", "registro"].includes(
    name,
  );
  $("app").dataset.view = name;
  $("app").classList.toggle("reduce", state.reduce);
  $("header").hidden = name === "bienvenida";
  $("tabs").hidden =
    onboarding ||
    ["producto", "entrega", "pago", "confirmacion", "whatsapp"].includes(name);
  const back =
    name === "whatsapp"
      ? product(route.key)
        ? "producto/" + route.key
        : "inicio"
      : backTo[name];
  const initial = name === "inicio";
  const currentCategory = categories.find(({ id }) => id === route.key);
  const headerTitle = name === "productos"
    ? currentCategory?.nombre || "Productos"
    : routes[name];
  $("header").innerHTML =
    (back
      ? '<a class="icon-btn" href="#' +
        back +
        '" data-back="' +
        name +
        '" aria-label="Volver">' +
        icon("back") +
        "</a>"
      : icoBtn("menu", "Abrir menú", "open-menu")) +
    (initial || name === "acceso"
      ? '<a href="#' +
        (initial ? "inicio" : "bienvenida") +
        '" class="top-brand" aria-label="Mey-Ko">' +
        logo() +
        "</a>"
      : '<span class="top-title">' + h(headerTitle) + "</span>") +
    (onboarding
      ? '<span class="top-spacer"></span>'
      : '<a class="icon-btn top-cart" href="#carrito" aria-label="Carrito, ' +
        count() +
        ' productos">' +
        icon("bag") +
        (count() ? "<span>" + count() + "</span>" : "") +
        "</a>");
  const tabGroup = {
    productos: "tienda",
    deseos: "perfil",
    ajustes: "perfil",
    privacidad: "perfil",
  };
  $("tabs").innerHTML = tabs
    .map(
      ([to, glyph, label]) =>
        '<a href="#' +
        to +
        '" ' +
        ((tabGroup[name] || name) === to ? 'aria-current="page"' : "") +
        ">" +
        icon(glyph) +
        "<span>" +
        label +
        "</span></a>",
    )
    .join("");
}
function menu() {
  const items = [
    ["tienda", "grid", "Tienda"],
    ["promos", "tag", "Promociones"],
    ["especialidades", "pulse", "Especialidades"],
    ["sucursales", "pin", "Sucursales"],
    ["perfil", "user", "Cuenta"],
    ["ajustes", "sliders", "Ajustes"],
    ["privacidad", "shield", "Políticas de privacidad"],
  ];
  $("menu").innerHTML =
    '<div class="menu-top">' +
    logo() +
    icoBtn("close", "Cerrar menú", "close-menu") +
    '</div><p id="menu-title" class="eyebrow">Menú</p><nav aria-label="Menú de Mey-Ko">' +
    items.map(([to, glyph, label]) => row(glyph, label, "", to)).join("") +
    '</nav><div class="menu-bottom">' +
    (state.account
      ? button("Cerrar sesión", "logout", "secondary", "enter")
      : link("login", "Iniciar sesión", "primary", "enter")) +
    "</div>";
  $("menu").showModal();
}
function render(focus = false) {
  let raw = location.hash.slice(1);
  let [name, ...parts] = raw.split("/");
  let key;
  try {
    key = decodeURIComponent(parts.join("/"));
  } catch {
    key = "";
  }
  if (!Object.hasOwn(routes, name)) name = "bienvenida";
  if (name === "producto" && !product(key)) name = "tienda";
  if (
    ["entrega", "pago"].includes(name) &&
    (!count() || cartHasUnavailable())
  ) {
    location.replace("#carrito");
    name = "carrito";
  }
  if (name === "pago" && !delivery) name = "entrega";
  if (name === "confirmacion" && !order) name = "perfil";
  route = { name, key };
  const view = {
    bienvenida: welcome,
    acceso: access,
    login: () => auth("login"),
    registro: () => auth("registro"),
    inicio: home,
    tienda: shop,
    productos: () => results(key),
    producto: () => detail(product(key)),
    promos,
    especialidades: specialtiesPage,
    carrito: cart,
    perfil: account,
    deseos: wishesPage,
    sucursales: branches,
    ajustes: settings,
    privacidad: privacy,
    entrega: deliveryPage,
    pago: payment,
    confirmacion: confirmation,
    whatsapp: () => whatsappPage(product(key)),
  };
  chrome();
  $("pantalla").setAttribute("aria-label", routes[name]);
  $("pantalla").innerHTML = '<div class="view">' + view[name]() + "</div>";
  if (name === "sucursales") mountBranches();
  if (focus) {
    window.scrollTo(0, 0);
    ($("pantalla").querySelector("h1") || $("pantalla")).focus({ preventScroll: true });
  }
}
function hideFeedback() {
  clearTimeout(toastTimer);
  $("toast").hidden = true;
}
function scheduleFeedbackDismissal() {
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideFeedback, $("toast-cart").hidden ? 2600 : 6000);
}
function feedback(message, showCart = false) {
  $("toast-cart").hidden = !showCart;
  $("toast").hidden = false;
  $("toast-message").textContent = message;
  scheduleFeedbackDismissal();
}
function add(id, n) {
  const p = product(id);
  if (!available(p)) return;
  const prev = state.cart[id] || 0;
  state.cart[id] = Math.min(99, prev + n);
  save();
  chrome();
  feedback(
    state.cart[id] === prev
      ? "Alcanzaste el límite de 99 unidades."
      : "Agregado",
    true,
  );
}
function enter(a) {
  state.account = a;
  save();
  go("inicio");
}
let productBack = "tienda",
  authBack = "acceso";
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href^='#']");
  if (
    a &&
    a.getAttribute("href").startsWith("#producto/") &&
    !["producto", "whatsapp"].includes(route.name)
  )
    productBack = location.hash.slice(1) || "tienda";
  if (
    a &&
    ["#login", "#registro"].includes(a.getAttribute("href")) &&
    !["login", "registro"].includes(route.name)
  )
    authBack = location.hash.slice(1) || "acceso";
  if (
    a?.dataset.back === "producto" ||
    ["login", "registro"].includes(a?.dataset.back)
  ) {
    e.preventDefault();
    go(a.dataset.back === "producto" ? productBack : authBack);
  }
  if (a && a.closest("dialog")) $("menu").close();
  const b = e.target.closest("button[data-action]");
  if (!b) return;
  const { action, id, delta } = b.dataset;
  if (action === "open-menu") menu();
  if (action === "close-menu" || (action === "logout" && $("menu").open))
    $("menu").close();
  if (action === "guest") enter(null);
  if (action === "demo")
    enter({ name: "Ana Rivera", email: "ana@ejemplo.com" });
  if (action === "logout") {
    enter(null);
    feedback("Sesión de prueba cerrada");
  }
  if (action === "add" || action === "detail-add")
    add(id, action === "detail-add" ? detailQty : 1);
  if (action === "wish") {
    state.wishes = selected(id)
      ? state.wishes.filter((p) => p !== id)
      : [...state.wishes, id];
    save();
    if (route.name === "deseos") {
      render();
      ($("pantalla").querySelector("h1") || $("pantalla")).focus({ preventScroll: true });
    } else {
      b.setAttribute("aria-pressed", selected(id));
      b.setAttribute(
        "aria-label",
        selected(id) ? "Quitar de deseos" : "Guardar en deseos",
      );
    }
    feedback(selected(id) ? "Guardado en tu lista" : "Quitado de tu lista");
  }
  if (action === "detail-qty") {
    detailQty = Math.min(99, Math.max(1, detailQty + Number(delta)));
    $("detail-qty").innerHTML = stepper(
      detailQty,
      "detail-qty",
      id,
      "Cantidad",
    );
    const buttons = $("detail-qty").querySelectorAll("button");
    (
      [...buttons].find((el) => el.dataset.delta === delta && !el.disabled) ||
      [...buttons].find((el) => !el.disabled)
    )?.focus({ preventScroll: true });
  }
  if (
    action === "simulate-stock" &&
    route.name === "carrito" &&
    state.cart[id] &&
    available(product(id))
  ) {
    state.stockChange = id;
    save();
    render();
    $("stock-notice")?.focus();
  }
  if (action === "restore-stock") {
    state.stockChange = null;
    save();
    render();
    ($("pantalla").querySelector("h1") || $("pantalla")).focus({ preventScroll: true });
    feedback("Disponibilidad de prueba restablecida");
  }
  if (action === "cart-qty" || action === "remove") {
    if (action === "remove") delete state.cart[id];
    else
      state.cart[id] = Math.min(
        99,
        Math.max(1, state.cart[id] + Number(delta)),
      );
    if (!count()) {
      delivery = null;
      paymentFailed = false;
    }
    save();
    render();
    const buttons = [...$("pantalla").querySelectorAll("button[data-id]")];
    (
      buttons.find(
        (el) =>
          el.dataset.id === id && el.dataset.delta === delta && !el.disabled,
      ) ||
      buttons.find((el) => el.dataset.id === id && !el.disabled) ||
      $("pantalla")
    )?.focus({ preventScroll: true });
  }
  if (action === "fill-delivery") {
    const form = $("delivery");
    form.elements.name.value = "Ana Rivera";
    form.elements.city.value = "Tegucigalpa";
    form.elements.address.value = "Colonia Rubén Darío, casa de ejemplo";
  }
  if (
    action === "order" &&
    route.name === "pago" &&
    count() &&
    !cartHasUnavailable()
  ) {
    if (!paymentFailed) {
      paymentFailed = true;
      render();
      $("payment-notice").focus();
      return;
    }
    order = {
      id: "MK-" + String(1001 + state.orders.length),
      date: new Intl.DateTimeFormat("es-HN", { dateStyle: "medium" }).format(
        new Date(),
      ),
      total: subtotal() + envio,
      count: count(),
    };
    state.orders.unshift(order);
    state.cart = {};
    state.stockChange = null;
    delivery = null;
    paymentFailed = false;
    save();
    go("confirmacion");
  }
});
$("toast").addEventListener("focusin", () => clearTimeout(toastTimer));
$("toast").addEventListener("focusout", scheduleFeedbackDismissal);
$("toast").addEventListener("pointerenter", () => clearTimeout(toastTimer));
$("toast").addEventListener("pointerleave", () => {
  if (!$("toast").contains(document.activeElement)) scheduleFeedbackDismissal();
});
$("menu").addEventListener("click", (e) => {
  if (e.target === $("menu")) {
    const r = $("menu").getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      $("menu").close();
  }
});
document.addEventListener("submit", (e) => {
  const form = e.target;
  if (!["search", "auth", "delivery", "whatsapp-form"].includes(form.id))
    return;
  e.preventDefault();
  const data = new FormData(form);
  if (form.id === "whatsapp-form") {
    const message = form.elements.message;
    if (!message.value.trim()) {
      message.focus();
      message.setCustomValidity("Escribe un mensaje para probar el envío.");
      message.reportValidity();
      return;
    }
    $("whatsapp-result").textContent =
      "Envío simulado. El mensaje quedó en esta demo.";
    return;
  }
  if (form.id === "search") {
    const q = data.get("q").trim();
    go("productos/" + (q ? "buscar/" + encodeURIComponent(q) : "todo"));
  }
  if (form.id === "auth") {
    const email = data.get("email").trim();
    const name =
      (
        data.get("name") || email.split("@")[0].replace(/[._-]+/g, " ")
      ).trim() || "Cliente";
    enter({ name, email });
  }
  if (form.id === "delivery") {
    delivery = {
      name: data.get("name").trim(),
      city: data.get("city").trim(),
      address: data.get("address").trim(),
    };
    go("pago");
  }
});
document.addEventListener("change", (e) => {
  if (e.target.id === "reduce") {
    state.reduce = e.target.checked;
    save();
    $("app").classList.toggle("reduce", state.reduce);
  }
});
document.addEventListener("input", (e) => {
  if (e.target.form?.id === "whatsapp-form") {
    e.target.setCustomValidity("");
    $("whatsapp-result").textContent = "";
  }
});
window.addEventListener("hashchange", () => {
  detailQty = 1;
  hideFeedback();
  if ($("menu").open) $("menu").close();
  render(true);
});
render();
