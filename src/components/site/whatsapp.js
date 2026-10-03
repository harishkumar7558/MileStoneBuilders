import { whatsappLink } from "@/data/site"

/**
 * Opens a WhatsApp chat in a new tab.
 * Call it synchronously inside the click / submit handler — browsers block popups opened
 * after a delay. Returns false when the tab was blocked, so the UI can offer a direct link.
 */
export const openWhatsApp = (text) => {
  const win = window.open(whatsappLink(text), "_blank")
  if (!win) return false
  try { win.opener = null } catch { /* already navigated cross-origin */ }
  return true
}
