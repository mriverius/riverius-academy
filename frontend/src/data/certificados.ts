/* ============================================================
   Registro público de certificados emitidos.
   EDITÁ AQUÍ: agregá una entrada por cada graduado.
   Es público por diseño (los graduados quieren ser encontrados),
   así que solo incluí datos que el graduado autorizó mostrar.
   ============================================================ */

export interface Certificado {
  /** Formato: RA-<año>-<consecutivo de 4 dígitos> */
  id: string;
  nombre: string;
  titulo: string;
  fecha: string; // ej. 'Marzo 2026'
  proyecto?: string;
}

export const certificados: Certificado[] = [
  // Ejemplo (borralo cuando agregues el primero real):
  // {
  //   id: 'RA-2026-0001',
  //   nombre: 'Nombre Apellido',
  //   titulo: 'Arquitecto de Agentes IA',
  //   fecha: 'Agosto 2026',
  //   proyecto: 'Agente de cotizaciones para inmobiliaria',
  // },
];
