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
  /** ID del video demo en Wistia (tiene prioridad sobre demoVideo) */
  wistiaId?: string;
  /** Aspect ratio del video de Wistia (atributo `aspect` del player) */
  wistiaAspect?: string;
  /** Transcripción precargada del video (SEO, la usa el embed de Wistia) */
  demoTranscript?: string;
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
    nombre: 'Fundamentos Agentes IA',
    color: 'blue',
    promesa: 'Automatiza correos, reportes y tareas repetitivas, sin código',
    salisCon:
      'Tus tareas repetitivas automatizadas: correos, hojas de cálculo y tu primer flujo con IA funcionando solo.',
    duracion: '6 semanas',
    semanas: [
      'Conecta la IA a tus herramientas: tu primera automatización enviando correos sola',
      'Crea un formulario que captura solicitudes, las califica con IA y las guarda en una base de datos',
      'Automatiza decisiones: respuestas diferentes según la calificación, sin duplicar nunca',
      'Construye tu primer agente de IA: pregúntale a tus datos desde Telegram',
      'Diseña el sistema de automatización para tu propio trabajo',
      'Construye, lanza y presenta tu proyecto final',
    ],
    incluye: 'Incluye certificado propio del curso',
    wistiaId: '8v4ks8vssp',
    wistiaAspect: '1.875',
    demoTranscript:
      'Te doy la bienvenida a Riveros Academy. Es un placer para mí tenerte por acá. Mi nombre es Mariano Rivera, director y fundador de Riveros Academy. Y en este caso, si hiciste clic en este video es porque querías más información del curso de nivel uno de agentes de inteligencia artificial. En este caso, con mucho gusto te voy a dar un ejemplo. Eso que acá estás viendo es la herramienta de n ocho n, es la herramienta que vamos a trabajar primordialmente en el curso. Y en ese caso te preparé dos ejemplos de unas flujos de trabajo, ¿verdad? Que vamos a estar viendo a lo largo del curso. En ese caso, voy a empezar con el ejemplo número uno, que es un ejercicio que se ve en las semanas uno a la tres, ¿ok? Entonces, antes de entrar en detalles, ¿verdad? Y antes de explicarte lo que está haciendo aquí N ocho N, te voy a explicar un poco el caso de uso, ¿ok? Imaginemos que un negocio, ¿verdad? En este caso, tiene un formulario. Yo aquí me creé uno ejemplo, y ese negocio quiere calificar personas, este, dependiendo, ¿verdad? De las respuestas que ellos suben, ¿verdad? Dentro de una persona, un prospecto que está muy caliente, o sea, que es una venta asegurada, a un prospecto que está frío y necesita un poco más de nutrición, ¿ok? Entonces, yo estoy replicando un ejemplo aquí muy similar con la academia. Yo estoy haciendo preguntas, ¿verdad? De cuáles son sus objetivos, qué información del curso quieren, este, qué idea tienen, qué presupuesto tienen y demás. Y lo que voy a hacer es, mediante la inteligencia artificial, calificar a ese prospecto y asignarle una nota. Dependiendo de la nota, yo quiero enviarle un correo u otro. Si la nota es, este, de tres o superior, yo quiero que ese correo sea para agendar una llamada conmigo. Por el contrario, si la nota es menos de tres, yo quiero redirigirlo a mi sitio web de la academia para que aprenda un poco más, escuche más testimonios, para que esté más preparado para comprar, ¿ok? Y finalmente, ¿verdad? También quiero que me avise por teléfono siempre y cuando sea una persona con una calificación de mayor de tres, ¿verdad? Que sea una persona que es un mejor prospecto, ¿ok? Entonces, ese es un asistente que nos sirve para eso, para automatizar, este, todo lo que es la respuesta, luego llenar un formulario y, este, también, ¿verdad? Que nos avise por teléfono para estar monitoreando constantemente nuestro negocio, ¿ok? Esa lógica de Excel, que es la que vamos a estar viendo, entonces tiene diferentes preguntas y acá también tiene una casilla de contactado, que es algo que vamos a estar viendo en el ejercicio. Entonces, una vez envíe el correo, se va a marcar esa casilla de contactado como, pum, como verdadero, ¿ok? Entonces, ahora sí, ese es el flujo, ¿verdad? En n ocho n, y ese es tú mismo, ¿verdad? Que yo les explicaba. Una vez, ¿verdad? La persona llena el formulario, el formulario está vinculado a una hoja de Excel. Esa hoja de Excel se va a llenar como un nuevo registro. Entonces, n ocho n va a detectar que hay un nuevo registro, va a calificar con Cloud y asignarle una nota. Si la nota es tres o más, se va ir por el camino de arriba. Si es menos de tres, por el camino de abajo. Y si verdad tiene una nota superior, se le va a invitar a llamar, a agendar una llamada conmigo, ese correo lo va a generar Cloud y luego se va a enviar con Gmail, o por el contrario, este, se le va a invitar a que vea, este, ¿verdad? Más información de la academia y se le va a enviar igual por Gmail, que pronto lo vamos a contactar. Llamamos escenarios, se marca como que fue contactado, pero en el escenario de arriba también se envía una notificación directamente a mi teléfono para, este, que yo esté monitoreando mi negocio, ¿ok? Entonces, a verlo en acción. Ese flujo ya está publicado y está corriendo cada minuto automáticamente. Entonces, vamos a llenar la solicitud. En ese caso, verdad, vamos a rellenar la información por acá. Voy a poner mi correo personal. Quiero el curso de fundamentos. Quiero automatizar WhatsApp para mi negocio. Porque yo hago todo. Ok. Perfecto. Tengo más de diez mil cien mil colones de presupuesto y lo voy a llenar. ¿Ok? Entonces, ahora lo que va a pasar es que se me llenó la hojita de Excel, pero vean que todavía se marca como no contactado. ¿Ok? Entonces, el flujo de este n ocho n se va a ejecutar y por aquí voy a abrir mi teléfono con la pantalla de Telegram. Ese es el bot de Telegram que yo creé y vamos a ver que en cualquier momento, dentro del próximo minuto, el flujo se va a ejecutar y me va a llegar un correo y además de eso me va a llegar una notificación de Telegram. ¿Por qué hace esto? Porque es un prospecto calificado. Simuló un escenario, ¿verdad? En donde va a llegar una nota de cuatro, este, o inclusive de cinco, ¿ok? Entonces, a verlo un momentito. Como les comentaba, ¿verdad? N ocho N es una herramienta muy sencilla, muy visual, y vean que aquí ya me llegó la notificación y vean que yo tengo las manos acá, no tocaba nada. Y se marcó como contactado. Me dice, ¿verdad? Que Enzo, este, tiene una calificación cuatro de cinco. Ese es el correo y que la invitación fue enviada correctamente. Lo cual, si yo me fijo en mi correo y voy a actualizar, vean que aquí ya tengo el correo. Es, hola, Enzo, ¿cómo estás? Agendemos una llamada. Y todo eso yo lo configuré con Cloud. Y eso me lleva directamente al personal donde la persona puede agendar conmigo, ¿ok? Entonces, vean qué sencillo. Yo no tuve que hacer nada y ya tenemos un mini asistente que nos ayuda con la parte de ventas, ¿ok? Ese es el primer escenario que les quería mostrar. Ahora, vamos a ver el segundo escenario. En este caso, yo le voy a dar un publish a este sitio y voy a ir en N ocho N a esta otra pantalla, que es la principal, y acá tengo un agente de inteligencia artificial. Vean que es la misma interfaz, ¿verdad? Y lo que va hacer esta gente es que, imaginemos, ¿verdad? Que no en todo momento vas a estar en tu computadora, y lo más accesible para todos siempre es nuestro teléfono móvil, ¿ok? Entonces, en este caso, la idea es tener ese asistente en tu bolsillo que te pueda brindar información del negocio en todo momento, ¿ok? Vinculado al caso anterior, imaginemos, ¿verdad? Que yo quiero preguntar, este, cuántos prospectos hemos tenido el día de hoy, o hace dos días, o, ¿verdad? Este, hace una semana, para saber exactamente y controlar mi negocio para la parte de reportería. Eso es lo que configuré acá. Esto, este, es un, básicamente, un agente de inteligencia artificial que va a recibir un mensaje por Telegram y va a, básicamente, utilizar Google Sheets para ir a buscar la información que existe actualmente, razonarla y devolverme una respuesta. En ese caso, Mariano, sí, este, hoy tuvimos cinco prospectos o cinco leads, ¿verdad? Etcétera. Todos fueron contactados y demás. Entonces, este, vamos a verla a continuación, ¿verdad? Este, lo mismo, acá yo le voy a dar publicar. Perfecto, ya está publicado. Y en ese caso, ¿verdad? Este, yo le tengo conectado al mismo, este, bot de Telegram. Entonces, yo por aquí voy ir a mi teléfono y le voy a preguntar, hola, ¿cuántos leads hemos recibido el día de hoy? El día de hoy. Ok. Acá ya mandé el mensaje y voy a esperar un ratito y vean que ya me contestó. Hola, según los datos que tengo, hemos recibido tres leads hoy. Este, en ese caso, este, ¿puedes revisar nuevamente? Creo que hay más porque un nuevo formulario se envió. Enviar. ¿Ok? Vamos a ver qué fue el formulario que yo acabo de enviar antes. Eso que me acaba de contestar, este, es porque lo tenía guardado en memoria. Pero vean que aquí tienes razón, acabo de revisar nuevamente y ya tenemos cinco leads hoy. Este, no tres. Los nuevos que entraron son Marina Rivera, que ese fue un ejemplo que hice antes de grabar este video, y el que acabo de enviar ahora, que es Senso, que fue a las cuatro. Ahorita son las cuatro cero cuatro, o sea, hace cuatro minutos. Igual, con fundamento en inteligencia artificial, excelente día, los cinco leads ya están contactados. Entonces, COSC, este agente, ¿verdad? Conectado a nuestro Excel para preguntarle cualquier cosa. Y esto, como bien te digo, ¿verdad? Son ejemplos genéricos que yo voy a lo largo del curso, pero la idea es que tú seas el que ponga los escenarios y, con el conocimiento que obtengas, puedas automatizar, ¿verdad? Mediante agentes de inteligencia artificial, las tareas que más te consumen tiempo para poder enfocarte en lo que verdaderamente vale la pena. Entonces, un placer tenerte por acá. Ya sabes, si quieres más información nos puedes contactar, con todo gusto te atendemos y clarificamos todo. Mucho gusto.',
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
      'Configura un agente con varias herramientas que decide cuál usar en cada caso',
      'Agrega memoria a tu agente: recuerda la conversación y a cada usuario',
      'Conecta cualquier API como herramienta de tu agente (CRM, tickets, lo que uses)',
      'Entrena a tu agente con tus documentos: responde con tu información real (RAG)',
      'Ajusta y depura tu RAG: consigue respuestas precisas y confiables',
      'Agrega aprobaciones humanas y protecciones + tu proyecto de agente avanzado',
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
      'Migra de Google Sheets a una base de datos real (Supabase) con SQL básico',
      'Conecta tu agente a WhatsApp: un chatbot que atiende a tus clientes 24/7',
      'Implementa memoria persistente: el chatbot recuerda a cada cliente entre conversaciones',
      'Blinda tu sistema: manejo de errores, reintentos y alertas cuando algo falla',
      'Lleva tu proyecto a la nube (n8n Cloud): encendido 24/7, seguro y con respaldos',
      'Calcula el costo por conversación, optimiza y lanza a clientes reales',
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
      'Construye un RAG agéntico: el agente reformula, busca varias veces y combina fuentes',
      'Automatiza la ingesta de conocimiento: subes un documento y tu agente ya lo sabe',
      'Coordina equipos de agentes: un orquestador que delega a especialistas',
      'Crea tu asistente de voz: le hablas y te responde con la información de tu negocio',
      'Conecta un número telefónico: tu agente contesta llamadas, agenda y registra',
      'Expón tus workflows a Claude vía MCP + proyecto final de especialización',
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
