/* ============================================================
   Galería de proyectos finales.
   EDITÁ AQUÍ: agrega una entrada por cada proyecto defendido.
   `nivel` = número del curso (1-4); el color y nombre del
   nivel salen de niveles.ts automáticamente.
   ============================================================ */

export interface Proyecto {
  nombre: string;
  nivel: number;
  titulo: string;
  descripcion: string;
  /** media-id del video en Wistia */
  wistiaId: string;
}

export const proyectos: Proyecto[] = [
  {
    nombre: 'Mario Madrigal',
    nivel: 2,
    titulo: 'Agente inmobiliario que filtra interesados por WhatsApp',
    descripcion:
      'Responde consultas sobre propiedades en alquiler con datos reales de Airtable y solo notifica al propietario cuando hay una persona lista para agendar una visita — o una pregunta que el agente no puede responder.',
    wistiaId: '2zjsooxz9w',
  },
  {
    nombre: 'Alonso Hidalgo',
    nivel: 2,
    titulo: 'Recepcionista IA para una clínica, 24/7',
    descripcion:
      'Atiende el WhatsApp de la clínica a cualquier hora: brinda información de servicios y requisitos, y agenda citas de pacientes directamente en Google Calendar, sin intervención humana.',
    wistiaId: 'ydxphe2awn',
  },
];
