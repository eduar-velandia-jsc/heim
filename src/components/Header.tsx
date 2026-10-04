import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";
import { asset } from "../lib/asset";
import { contactLink } from "../lib/contactLink";
import "./Header.css";

const logo = asset("logos/heim-nav.png");

const NAV_ITEMS = [
  { label: "Inicio", to: "/", match: (path: string, hash: string) => path === "/" && hash !== "#quienes-somos" && hash !== "#contacto" },
  { label: "quienes somos", to: "/#quienes-somos", match: (_: string, hash: string) => hash === "#quienes-somos" },
  { label: "Proyectos", to: "/proyectos", match: (path: string) => path === "/proyectos" },
  { label: "contacto", to: "contact", match: (_: string, hash: string) => hash === "#contacto" },
];

export function Header() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);

  return (
    <header className={scrolled ? "header header--scrolled" : "header"}>
      <div className="header__inner container">
        {/* En el diseño el logo va dentro de la barra; este hueco mantiene la barra en su sitio */}
        <span className="header__spacer" aria-hidden="true" />

        <Link to="/" className="header__logo-mobile" aria-label="Heim, ir al inicio">
          <img src={logo} alt="Heim creando ambientes" width={114} height={44} />
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">Abrir menú</span>
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
        </button>

        <nav id="main-nav" className={open ? "header__nav header__nav--open" : "header__nav"} aria-label="Principal">
          <Link to="/" className="header__nav-logo" aria-label="Heim, ir al inicio">
            <img src={logo} alt="Heim creando ambientes" width={114} height={44} />
          </Link>
          {NAV_ITEMS.map((item) => {
            const active = item.match(pathname, hash);
            return (
              <Link
                key={item.label}
                to={item.to === "contact" ? contactLink(pathname) : item.to}
                className={active ? "header__link header__link--active" : "header__link"}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link to={contactLink(pathname)} className="header__cta">
          Cotización
        </Link>
      </div>
    </header>
  );
}
