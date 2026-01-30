// ============================================
// EVOLUT FITKID - CONFIGURACIÓN EDITABLE
// Modifica estos valores para actualizar la landing
// ============================================

export const CONTACT = {
  // WhatsApp con mensaje precargado
  whatsappLink: "https://wa.me/34XXXXXXXXX?text=Hola%20Belén%2C%20quiero%20info%20para%20una%20clase%20de%20prueba%20en%20Evolut%20FitKid.",
  whatsappNumber: "+34 XXX XXX XXX",
  
  // Teléfono
  phone: "+34 XXX XXX XXX",
  phoneLink: "tel:+34XXXXXXXXX",
  
  // Email
  email: "info@evolutfitkid.com",
  
  // Redes sociales
  instagram: "https://instagram.com/evolutfitkid",
  
  // Ubicación
  address: "Ventorro del Cano (zona Boadilla/Pozuelo)",
  googleMapsLink: "https://maps.google.com/?q=Ventorro+del+Cano+Boadilla",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345!2d-3.12345!3d40.12345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVentorro%20del%20Cano!5e0!3m2!1ses!2ses!4v1234567890",
};

export const SCHEDULE = {
  escuela: [
    { day: "Lunes", time: "17:00 - 18:00", level: "Iniciación" },
    { day: "Miércoles", time: "17:00 - 18:00", level: "Iniciación" },
    { day: "Martes", time: "18:00 - 19:00", level: "Intermedio" },
    { day: "Jueves", time: "18:00 - 19:00", level: "Intermedio" },
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
      "1 sesión completa",
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
    target: "Niñas con experiencia",
    features: [
      "3 días por semana",
      "Preparación de coreografías",
      "Participación en torneos",
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
  description: "Escuela-club donde niñas y adultos entrenan, progresan y se suben al escenario con confianza. Fantasía, FitKid y Competición en Ventorro del Cano (Boadilla/Pozuelo).",
  ogImage: "/og-image.jpg",
};
