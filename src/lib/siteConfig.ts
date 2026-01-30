// ============================================
// EVOLUT FITKID - CONFIGURACIÓN EDITABLE
// Modifica estos valores para actualizar la landing
// ============================================

export const CONTACT = {
  // WhatsApp con mensaje precargado
  whatsappLink: "https://wa.me/34644392628?text=Hola%20Belén%2C%20quiero%20info%20para%20una%20clase%20de%20prueba%20en%20Evolut%20FitKid.",
  whatsappNumber: "+34 644 39 26 28",
  phoneLink: "tel:+34644392628",
  
  // Email
  email: "Info@evolutfitkid.com",
  emailLink: "mailto:Info@evolutfitkid.com",
  
  // Redes sociales
  instagram: "https://www.instagram.com/evolutfitkid/",
  
  // Ubicación
  address: "Calle Batres 10B, Ventorro del Cano (Madrid)",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Calle+Batres+10B+Ventorro+del+Cano+Madrid",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5!2d-3.9383!3d40.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41806b1c5c9c37%3A0x0!2sCalle%20Batres%2010B%2C%20Ventorro%20del%20Cano%2C%20Madrid!5e0!3m2!1ses!2ses!4v1706600000000!5m2!1ses!2ses",
};

export const SCHEDULE = {
  escuela: [
    { day: "Lunes", time: "17:00 - 18:00", level: "Iniciación (4-7 años)" },
    { day: "Miércoles", time: "17:00 - 18:00", level: "Iniciación (4-7 años)" },
    { day: "Martes", time: "18:00 - 19:00", level: "Intermedio (8-12 años)" },
    { day: "Jueves", time: "18:00 - 19:00", level: "Intermedio (8-12 años)" },
  ],
  competicion: [
    { day: "Lunes", time: "18:00 - 20:00", level: "Competición" },
    { day: "Miércoles", time: "18:00 - 20:00", level: "Competición" },
    { day: "Viernes", time: "17:00 - 19:00", level: "Competición" },
  ],
  adultos: [
    { day: "Martes", time: "20:00 - 21:00", level: "Todos los niveles" },
    { day: "Jueves", time: "20:00 - 21:00", level: "Todos los niveles" },
  ],
};

export const PACKAGES = [
  {
    id: "prueba",
    name: "Clase de Prueba",
    target: "Primera toma de contacto",
    features: [
      "1 sesión completa con el grupo",
      "Conoce el método y al equipo",
      "Sin compromiso",
    ],
    price: "Gratuita",
    highlight: false,
  },
  {
    id: "escuela",
    name: "Escuela",
    target: "Niñas de 4 a 12 años",
    features: [
      "2 horas semanales",
      "Fantasía o FitKid a elegir",
      "Progresión por niveles",
      "Exhibición fin de curso",
    ],
    price: "Consultar",
    highlight: true,
  },
  {
    id: "competicion",
    name: "Competición",
    target: "Alumnas con experiencia",
    features: [
      "3 días por semana (6h)",
      "Preparación de coreografías",
      "Participación en campeonatos oficiales",
      "Equipo de alto rendimiento",
    ],
    price: "Consultar",
    highlight: false,
  },
  {
    id: "adultos",
    name: "Adultos",
    target: "Mayores de 16 años",
    features: [
      "Grupo reducido",
      "Técnica + acondicionamiento",
      "Sin experiencia previa necesaria",
      "Ambiente cercano",
    ],
    price: "Consultar",
    highlight: false,
  },
];

export const SEO = {
  title: "Evolut FitKid | Escuela de Fantasía y FitKid en Madrid",
  description: "FitKid combina danza y acrobacia: elementos de gimnasia artística, aeróbica, acrobática y rítmica. Escuela y competición en Ventorro del Cano (Boadilla/Pozuelo). La disciplina más completa para niñas y adultos.",
  ogImage: "/og-image.jpg",
};

// Contenido adicional para secciones
export const CONTENT = {
  hero: {
    badge: "Ventorro del Cano · Boadilla/Pozuelo",
    title: "Danza, acrobacia y disciplina en un solo deporte",
    subtitle: "Escuela y competición para niñas de 4 a 16 años",
    microcopy: "Clase de prueba gratuita · Cupos limitados",
  },
  whatIs: {
    title: "¿Qué es Evolut?",
    subtitle: "Dos disciplinas, un mismo objetivo: que cada alumna disfrute, progrese y brille en el escenario.",
    fantasia: {
      title: "Fantasía",
      description: "Interpretación y storytelling. Las alumnas aprenden a contar historias con su cuerpo, expresando emociones a través de la danza y la actuación. Creatividad, musicalidad y puesta en escena.",
      features: [
        "Expresión corporal y drama",
        "Coreografías con narrativa",
        "Preparación para exhibiciones y competiciones",
      ],
    },
    fitkid: {
      title: "FitKid",
      description: "La disciplina más completa: combina danza con elementos de gimnasia artística, aeróbica, acrobática y rítmica. Las alumnas ganan fuerza, flexibilidad y confianza mientras disfrutan.",
      features: [
        "Acrobacias, saltos y giros",
        "Condición física y fuerza",
        "Técnica progresiva por niveles",
      ],
    },
  },
  differentiators: [
    "Formación física y artística integral en una sola actividad",
    "Camino competitivo oficial con la Federación de FitKid España",
    "Ambiente cercano donde cada evolución cuenta",
    "La novedad que combina lo mejor de danza y gimnasia",
  ],
  finalCta: {
    title: "¿Te encaja?",
    subtitle: "Te contamos el mejor grupo según edad y nivel.",
    trust: "Sin compromiso · Te orientamos en 2 minutos",
  },
};
