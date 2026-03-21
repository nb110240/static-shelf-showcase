export const WHATSAPP_PHONE = "919820712083";
// Sanitize: only digits allowed
export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
export const COMPANY_PHONE = "+91-22-2847 3744 / 1795";
export const COMPANY_EMAIL = "sales@bobbinsindia.com";
export const SITE_URL = "https://bobbinsindia.net";
