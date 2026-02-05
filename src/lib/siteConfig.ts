// ============================================
// EVOLUT FITKID - CONFIGURACIÓN EDITABLE
// Modifica estos valores para actualizar la landing
// ============================================

export const CONTACT = {
  // WhatsApp base
  whatsappNumber: "+34 644 39 26 28",
  phoneLink: "tel:+34644392628",
  
  // Mensajes personalizados por paquete
  whatsappMessages: {
    prueba: "Hola Belén, he visto la web de Evolut y me gustaría información sobre una clase de prueba.",
    escuela: "Hola Belén, he visto la web de Evolut y me gustaría información sobre Escuela.",
    competicion: "Hola Belén, he visto la web de Evolut y me gustaría información sobre Competición.",
    adultos: "Hola Belén, he visto la web de Evolut y me gustaría información sobre Adultos.",
    premium: "Hola Belén, he visto la web de Evolut y me gustaría información sobre Premium (+30).",
    general: "Hola Belén, he visto la web de Evolut y me gustaría más información.",
  },
  
  // Email
  email: "Info@evolutfitkid.com",
  emailLink: "mailto:Info@evolutfitkid.com",
  
  // Redes sociales
  instagram: "https://www.instagram.com/evolutfitkid/",
  
  // Ubicación
  address: "Calle Batres 10B, Ventorro del Cano (Madrid)",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Calle+Batres+10B+Ventorro+del+Cano+Pozuelo+Madrid",
  googleMapsEmbed: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Calle+Batres+10B,+Ventorro+del+Cano,+Pozuelo+de+Alarcon,+Madrid,+Spain&zoom=16",
};

// Helper para generar enlaces de WhatsApp
export const getWhatsAppLink = (packageId: keyof typeof CONTACT.whatsappMessages = "general") => {
  const message = CONTACT.whatsappMessages[packageId] || CONTACT.whatsappMessages.general;
  return `https://wa.me/34644392628?text=${encodeURIComponent(message)}`;
};

export const SCHEDULE = {
  escuela: [
    { day: "LUNES", time: "17:00 - 18:00", level: "Iniciación (4-7 años)" },
    { day: "MIÉRCOLES", time: "17:00 - 18:00", level: "Iniciación (4-7 años)" },
    { day: "MARTES", time: "18:00 - 19:00", level: "Intermedio (8-12 años)" },
    { day: "JUEVES", time: "18:00 - 19:00", level: "Intermedio (8-12 años)" },
  ],
  competicion: [
    { day: "LUNES", time: "18:00 - 19:30", level: "Compromiso y desarrollo" },
    { day: "MIÉRCOLES", time: "18:00 - 19:30", level: "Compromiso y desarrollo" },
    { day: "VIERNES", time: "17:00 - 18:30", level: "Compromiso y desarrollo" },
  ],
  adultos: [
    { day: "MARTES", time: "20:00 - 21:00", level: "Todos los niveles" },
    { day: "JUEVES", time: "20:00 - 21:00", level: "Todos los niveles" },
  ],
  premium: [
    { day: "MARTES", time: "20:00 - 21:00", level: "+30 años" },
    { day: "JUEVES", time: "20:00 - 21:00", level: "+30 años" },
  ],
};

export const PACKAGES = [
  {
    id: "prueba" as const,
    name: "CLASE DE PRUEBA",
    target: "Primera toma de contacto",
    features: [
      "Elige entre Escuela, Competición, Adultos o Premium",
      "1 sesión completa con el grupo",
      "Conoce el método y al equipo",
      "Sin compromiso",
    ],
    price: "Gratuita",
    highlight: false,
  },
  {
    id: "escuela" as const,
    name: "ESCUELA",
    target: "Niñas y niños de 4 a 12 años",
    features: [
      "2 horas semanales",
      "Progresión por niveles",
      "Exhibiciones (Navidad y fin de curso)",
      "Formación integral en FitKid",
    ],
    price: "Consultar",
    highlight: true,
  },
  {
    id: "competicion" as const,
    name: "COMPETICIÓN",
    target: "Alumnas con experiencia",
    features: [
      "4,5 - 5 horas semanales",
      "Preparación de coreografías",
      "Licencia oficial con la Organización de FitKid",
      "Competiciones autonómicas, nacionales e internacionales",
      "Compromiso y desarrollo a medio-largo plazo",
    ],
    price: "Consultar",
    highlight: false,
  },
  {
    id: "adultos" as const,
    name: "ADULTOS",
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
  {
    id: "premium" as const,
    name: "PREMIUM (+30)",
    target: "Mayores de 30 años",
    features: [
      "Técnica y acondicionamiento físico",
      "Danza y expresión corporal",
      "Sin experiencia previa necesaria",
      "Espacio de desconexión personal",
      "Sentimiento de pertenencia",
      "Posibilidad de equipo de competición",
    ],
    price: "Consultar",
    highlight: false,
  },
];

export const SEO = {
  title: "Evolut FitKid | Escuela de FitKid en Madrid",
  description: "EVOLUT es una escuela de FitKid que forma alumnos versátiles y completos: acrobacia, fuerza, flexibilidad, danza y técnica. Escuela y competición en Ventorro del Cano (Boadilla/Pozuelo).",
  ogImage: "/og-image.jpg",
};

export const CONTENT = {
  hero: {
    badge: "VENTORRO DEL CANO · BOADILLA/POZUELO",
    title: "ESCUELA DE FITKID",
    subtitle: "Formamos alumnos versátiles y completos",
    microcopy: "Clase de prueba gratuita · Cupos limitados",
  },
  whatIsFitkid: {
    title: "¿QUÉ ES EL FITKID?",
    subtitle: "El FitKid es la disciplina deportiva que está revolucionando el mundo infantil. Combina lo mejor de la gimnasia artística, aeróbica, acrobática y rítmica con la expresión de la danza, todo al ritmo de la música.",
    objectives: [
      { title: "Versatilidad", description: "Formación completa en múltiples disciplinas" },
      { title: "Acrobacia", description: "Saltos, giros y elementos acrobáticos" },
      { title: "Fuerza y flexibilidad", description: "Desarrollo físico integral" },
      { title: "Danza y técnica", description: "Expresión corporal y musicalidad" },
      { title: "Compañerismo", description: "Trabajo en equipo y valores" },
    ],
    competitive: "Existe un camino competitivo oficial con la Organización de FitKid España: licencias, competiciones autonómicas, nacionales e internacionales.",
  },
  belen: {
    title: "BELÉN",
    subtitle: "ENTRENADORA Y TRAYECTORIA",
    description: "Con más de 15 años de experiencia en gimnasia y danza, Belén fundó Evolut con una visión clara: formar deportistas completos en un ambiente cercano donde cada alumna pueda crecer, disfrutar y brillar. Su enfoque combina la exigencia técnica con el cariño y la motivación personal.",
    highlights: [
      "Formación en gimnasia artística y rítmica",
      "Certificación oficial en FitKid",
      "Experiencia en competición nacional e internacional",
    ],
  },
  differentiators: [
    "Formación física y artística integral",
    "Camino competitivo oficial con la Organización de FitKid España",
    "Ambiente cercano donde cada evolución cuenta",
    "Versatilidad para competir en diferentes modalidades",
  ],
  finalCta: {
    title: "CLASE DE PRUEBA SIN COMPROMISO",
    subtitle: "Escoge entre Escuela, Competición, Adultos o Premium. Te ayudamos a encontrar el grupo más adecuado para ti.",
    trust: "Sin compromiso · Te orientamos en 2 minutos",
  },
};
