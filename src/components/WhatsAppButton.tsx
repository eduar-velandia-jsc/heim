import { CONTACT } from "../data/contact";
import { useScrolled } from "../hooks/useScrolled";
import { asset } from "../lib/asset";
import "./WhatsAppButton.css";

/**
 * Botón flotante de WhatsApp: arriba de la página se muestra completo ("Chatea con nosotros");
 * al pasar el cursor o al hacer scroll se reduce al círculo con el logo.
 */
export function WhatsAppButton() {
  const scrolled = useScrolled();

  return (
    <a
      className={scrolled ? "whatsapp whatsapp--compact" : "whatsapp"}
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <span className="whatsapp__pill">
        <span className="whatsapp__label">Chatea con nosotros</span>
        <img className="whatsapp__icon" src={asset("icons/whatsapp.png")} alt="" width={37} height={32} />
      </span>
    </a>
  );
}
