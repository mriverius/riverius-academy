/** Número de WhatsApp de la academia (un solo lugar para cambiarlo) */
export const WHATSAPP = '50685973818';

/** Link de WhatsApp con mensaje pre-escrito */
export const waLink = (mensaje: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
