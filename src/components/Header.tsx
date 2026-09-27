import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const NAV_ITEMS = [
  { label: "Inicio", to: "/", match: (path: string, hash: string) => path === "/" && hash !== "#quienes-somos" && hash !== "#contacto" },
  { label: "quienes somos", to: "/#quienes-somos", match: (_: string, hash: string) => hash === "#quienes-somos" },
  { label: "Proyectos", to: "/proyectos", match: (path: string) => path === "/proyectos" },
  { label: "contacto", to: "#contacto", match: (_: string, hash: string) => hash === "#contacto" },
];

export function Header() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label="Heim, ir al inicio">
          <img src="/assets/logos/heim-header.png" alt="Heim creando ambientes" width={215} height={76} />
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
          {NAV_ITEMS.map((item) => {
            const active = item.match(pathname, hash);
            return (
              <Link
                key={item.label}
                to={item.to}
                className={active ? "header__link header__link--active" : "header__link"}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link to="#contacto" className="header__cta">
          Cotización
        </Link>
      </div>
    </header>
  );
}
