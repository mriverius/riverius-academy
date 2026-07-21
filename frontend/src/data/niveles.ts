/* ============================================================
   Riverius Academy — Source of truth de la ruta n8n
   EDITÁ AQUÍ: todo el contenido de /cursos y del home sale
   de este archivo (nombres, semanas, mensajes de WA).
   Copy en español neutro (tuteo).
   ============================================================ */

export interface Nivel {
  id: string;
  numero: number;
  emoji: string;
  nombre: string;
  color: 'blue' | 'green' | 'yellow' | 'purple';
  /** 1 línea: qué construyes ahí (se ve en el diagrama) */
  promesa: string;
  /** Lo más vendedor de la tarjeta, máx. 2 líneas */
  salisCon: string;
  duracion: string;
  /** SOLO títulos de semana — el detalle no va en la página */
  semanas: string[];
  /** Línea bajo el temario: qué incluye el curso por sí solo */
  incluye: string;
  /** Mensaje pre-escrito de WhatsApp (prefijo [N#] para etiquetar) */
  waMessage: string;
  /**
   * URL embed del video demo (ej. 'https://www.youtube.com/embed/XXXX').
   * Mientras no exista, la tarjeta muestra un placeholder.
   */
  demoVideo?: string;
  /** N2 y N3 muestran el badge del Reto de Nivel */
  reto: boolean;
  /** N4 es opcional, va después de la meta con línea punteada */
  postCertificacion: boolean;
}

export const niveles: Nivel[] = [
  {
    id: 'nivel-1',
    numero: 1,
    emoji: '🟦',
    nombre: 'Fundamentos de Agentes IA',
    color: 'blue',
    promesa: 'Automatiza correos, reportes y tareas repetitivas, sin código',
    salisCon:
      'Tus tareas repetitivas automatizadas: correos, hojas de cálculo y tu primer flujo con IA funcionando solo.',
    duracion: '6 semanas',
    semanas: [
      'Semana 1 — Tu primer flujo en n8n',
      'Semana 2 — Conecta Gmail, Sheets y tus apps',
      'Semana 3 — Lógica: filtros, rutas y decisiones',
      'Semana 4 — IA en tus flujos: ChatGPT y Claude',
      'Semana 5 — Webhooks y formularios',
      'Semana 6 — Proyecto: tu asistente de bandeja de entrada',
    ],
    incluye: 'Incluye certificado propio del curso',
    waMessage:
      '[N1] Hola Mariano, quiero empezar en el Curso 1 · Fundamentos de Agentes IA',
    reto: false,
    postCertificacion: false,
  },
  {
    id: 'nivel-2',
    numero: 2,
    emoji: '🟩',
    nombre: 'Agentes IA Avanzados',
    color: 'green',
    promesa: 'Un agente con memoria y herramientas que trabaja por ti',
    salisCon:
      'Un agente de IA con memoria y herramientas que maneja tu correo, calendario y documentos por ti.',
    duracion: '6 semanas',
    semanas: [
      'Semana 1 — Anatomía de un agente de IA',
      'Semana 2 — Memoria: el agente que te recuerda',
      'Semana 3 — Herramientas: correo, calendario y APIs',
      'Semana 4 — Tu primer agente de verdad',
      'Semana 5 — RAG: el agente responde con tus documentos',
      'Semana 6 — Proyecto: tu asistente personal completo',
    ],
    incluye: 'Incluye certificado propio del curso',
    waMessage:
      '[N2] Hola Mariano, quiero entrar al Curso 2 · Agentes IA Avanzados',
    reto: true,
    postCertificacion: false,
  },
  {
    id: 'nivel-3',
    numero: 3,
    emoji: '🟨',
    nombre: 'Agentes IA Profesionales',
    color: 'yellow',
    promesa: 'Tu agente funcionando solo, confiable y seguro, todos los días',
    salisCon:
      'Tu agente desplegado y funcionando solo: manejo de errores, monitoreo y seguridad. Y tu proyecto final listo para defender.',
    duracion: '6 semanas',
    semanas: [
      'Semana 1 — Self-hosting y ambientes',
      'Semana 2 — Manejo de errores y reintentos',
      'Semana 3 — Seguridad, credenciales y permisos',
      'Semana 4 — Monitoreo y optimización de costos',
      'Semana 5 — Multi-agentes y flujos que escalan',
      'Semana 6 — Tu proyecto final de certificación',
    ],
    incluye: 'Incluye certificado propio del curso',
    waMessage:
      '[N3] Hola Mariano, quiero entrar al Curso 3 · Agentes IA Profesionales',
    reto: true,
    postCertificacion: false,
  },
  {
    id: 'nivel-4',
    numero: 4,
    emoji: '🟪',
    nombre: 'Especialista en Agentes IA',
    color: 'purple',
    promesa: 'Especialízate y convierte tus agentes en ingresos',
    salisCon:
      'Un servicio productizado: agentes para clientes, integraciones a medida y tu portafolio como profesional.',
    duracion: '6 semanas',
    semanas: [
      'Semana 1 — Arquitecturas multi-agente avanzadas',
      'Semana 2 — Integraciones a medida: APIs y código',
      'Semana 3 — Agentes de voz y WhatsApp',
      'Semana 4 — Automatización para clientes: alcance y precios',
      'Semana 5 — Casos reales: ventas, soporte y operaciones',
      'Semana 6 — Proyecto: tu primer cliente',
    ],
    incluye: 'Incluye certificado propio del curso',
    waMessage:
      '[N4] Hola Mariano, ya me certifiqué y quiero el Curso 4 · Especialista en Agentes IA',
    reto: false,
    postCertificacion: true,
  },
];

export const certificacion = {
  nombre: 'Arquitecto de Agentes de IA',
  /** Formato del ID verificable que aparece en el mockup */
  idEjemplo: 'RA-2026-0042',
  recibis: [
    {
      titulo: 'Certificado verificable',
      detalle: 'Con ID único que cualquiera puede verificar en esta web.',
    },
    {
      titulo: 'Insignia para LinkedIn y CV',
      detalle: 'Muestra que construyes agentes de IA, con respaldo real.',
    },
    {
      titulo: 'Tu proyecto en la galería',
      detalle: 'Tu proyecto final publicado en la galería de graduados.',
    },
  ],
  requisitos: [
    { titulo: 'Completa el Curso 1', detalle: 'Fundamentos de Agentes IA' },
    { titulo: 'Completa el Curso 2', detalle: 'Agentes IA Avanzados' },
    { titulo: 'Completa el Curso 3', detalle: 'Agentes IA Profesionales' },
    { titulo: 'Defiende tu proyecto final', detalle: 'En vivo, ante la comunidad' },
  ],
};

/** Precio de lanzamiento — se muestra en el home y en /cursos */
export const pricing = {
  nota: 'Primer curso por',
  precioLista: '₡60.390',
  precioLanzamiento: '₡54.900',
  descuento: '-10%',
};

export const retoNivel = {
  titulo: '¿Ya sabes n8n? No empieces de cero.',
  descripcion:
    'El Reto de Nivel es una prueba práctica: te damos un caso real y lo construyes en 48 horas. Si lo pasas, entras directo al Curso 2 o al Curso 3 — sin pagar los cursos que ya dominas.',
  waMessage: '[RETO] Hola Mariano, quiero tomar el Reto de Nivel de n8n',
};

/** Curso B2B — Copilot Studio queda fuera de la ruta, para empresas */
export const b2b = {
  nombre: 'Copilot Studio para empresas',
  descripcion:
    'Copilotos y chatbots integrados con Teams, Outlook y Microsoft 365. Formación in-company para equipos.',
  waMessage:
    '[B2B] Hola Mariano, quiero información del programa de Copilot Studio para mi empresa',
};
