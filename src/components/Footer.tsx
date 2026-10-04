import { Link, useLocation } from "react-router-dom";
import { CONTACT } from "../data/contact";
import { asset } from "../lib/asset";
import { contactLink } from "../lib/contactLink";
import "./Footer.css";

type FooterLink = { label: string; to: string; external?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", to: "/#quienes-somos" },
      { label: "Proyectos", to: "/proyectos" },
      { label: "clientes", to: "/#clientes" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Arquitectura", to: "/#servicios" },
      { label: "Obra Civil & Redes", to: "/#servicios" },
      { label: "Adecuación B2B", to: "/#servicios" },
    ],
  },
  {
    title: "Soporte & Legal",
    links: [
      { label: "Contacto Directo", to: "#contacto" },
      { label: "Política de Privacidad", to: "/legal" },
      { label: "Términos y Condiciones", to: "/legal" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: CONTACT.phone, to: `tel:${CONTACT.phoneE164}`, external: true },
      { label: CONTACT.email, to: `mailto:${CONTACT.email}`, external: true },
    ],
  },
];

export function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__about">
          <img src={asset("logos/heim-footer.png")} alt="Heim creando ambientes" width={215} height={85} />
          <p className="footer__blurb">Soluciones integrales de diseño, obra civil y adecuación técnica de espacios.</p>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title} className="footer__column">
            <p className="footer__title">{column.title}</p>
            <ul className="footer__links">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.external ? <a href={link.to}>{link.label}</a> : <Link to={link.to === "#contacto" ? contactLink(pathname) : link.to}>{link.label}</Link>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <hr className="footer__line" />
        <p className="footer__copy">
          <span>© 2026 Heim. Todos los derechos reservados.</span>
          <span>Desarrollado por Tecnovip</span>
        </p>
      </div>
    </footer>
  );
}
