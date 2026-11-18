"use strict";

// Referencias de catálogo. Todos los importes y existencias son de prueba.
window.MeykoCatalogo = {
  envio: 8500,
  categorias: [
    { id: "todo", nombre: "Todos" },
    { id: "diagnostico", nombre: "Diagnóstico", imagen: "categorias/diagnostico.png" },
    { id: "diabetes", nombre: "Diabetes", imagen: "categorias/diabetes.png" },
    { id: "primeros-auxilios", nombre: "Primeros auxilios", imagen: "categorias/primeros-auxilios.png" },
    { id: "cuidado-casa", nombre: "Cuidado en casa", imagen: "categorias/cuidado-casa.png" },
    { id: "movilidad-rehabilitacion", nombre: "Movilidad y Rehabilitación", imagen: "categorias/movilidad-rehabilitacion.png" },
    { id: "cuidado-heridas", nombre: "Cuidado de heridas", imagen: "categorias/cuidado-heridas.png" },
    { id: "clinica", nombre: "Clínica", imagen: "categorias/clinica.png" },
    { id: "terapia-respiratoria", nombre: "Terapia respiratoria", imagen: "categorias/terapia-respiratoria.png" },
    { id: "fisioterapia", nombre: "Fisioterapia", imagen: "categorias/fisioterapia.png" },
    { id: "Ortopedia", nombre: "Ortopedia", imagen: "categorias/ortopedia.png" },
    { id: "medias", nombre: "Medias y Calcetines", imagen: "categorias/medias.png" },
  ],
  productos: [
    {
      id: "tensiometro",
      nombre: "Tensiómetro digital de brazo",
      marca: "medKo",
      categoria: "diagnostico",
      precio: 149900,
      disponible: true,
      sku: "100058",
      imagen: "productos/tensiometro.png",
      descripcion: "Tensiómetro digital de brazo con pantalla LCD y brazalete. Su diseño compacto facilita guardarlo con el resto de tus equipos de cuidado en casa.",
      busqueda: "esfigmomanómetro presión arterial"
    },
    {
      id: "oximetro",
      nombre: "Oxímetro de pulso",
      marca: "medKo",
      categoria: "diagnostico",
      precio: 64900,
      disponible: true,
      sku: "100044",
      imagen: "productos/oximetro.png",
      descripcion: "Oxímetro compacto de dedo con pantalla digital y control de un botón.",
      busqueda: "oxímetro saturación"
    },
    {
      id: "glucometro",
      nombre: "Glucómetro AutoCode",
      marca: "Prodigy",
      categoria: "diabetes",
      precio: 77900,
      disponible: true,
      sku: "51820",
      imagen: "productos/glucometro.png",
      descripcion: "Medidor digital de glucosa de la línea Prodigy AutoCode, con pantalla y memoria de lecturas.",
      busqueda: "medidor glucosa azúcar"
    },
    {
      id: "botiquin",
      nombre: "Botiquín para medicamentos",
      marca: "medKo",
      categoria: "primeros-auxilios",
      precio: 229000,
      disponible: false,
      sku: "100012",
      imagen: "productos/botiquin.png",
      descripcion: "Gabinete de pared para organizar medicamentos y artículos de primeros auxilios.",
      busqueda: "botiquín gabinete",
      alternativas: ["botiquin-portatil"]
    },
    {
      id: "botiquin-portatil",
      nombre: "Botiquín portátil",
      marca: "Muestra",
      categoria: "primeros-auxilios",
      precio: 54900,
      disponible: true,
      sku: "DEMO-101",
      imagen: "productos/botiquin-portatil.png",
      descripcion: "Estuche con asa para organizar y transportar artículos de primeros auxilios. El estuche de muestra se presenta vacío.",
      busqueda: "botiquín organizador estuche primeros auxilios"
    }
  ]
};
