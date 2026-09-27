import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { asset } from "../lib/asset";
import "./Footer.css";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/#quienes-somos" },
      { label: "Services", to: "/servicios" },
      { label: "Our Team", to: "/#quienes-somos" },
    ],
  },
  {
    title: "Know More",
    links: [
      { label: "Support", to: "#contacto" },
      { label: "Privacy Policy", to: "#" },
      { label: "Terms & conditions", to: "#" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__about">
          <img src={asset("logos/heim-footer.png")} alt="Heim creando ambientes" width={215} height={85} />
          <p className="footer__blurb">
            Stay updated with our latest Roof Service tips, service updates, and helpful articles on maintaining a spotless home.
          </p>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <img src={asset("icons/facebook.png")} alt="" width={30} height={30} />
          </a>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title} className="footer__column">
            <p className="footer__title">{column.title}</p>
            <ul className="footer__links">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <form className="footer__newsletter" onSubmit={handleSubmit}>
          <label className="footer__title" htmlFor="newsletter-email">
            Newsletter
          </label>
          <input
            id="newsletter-email"
            className="footer__input"
            type="email"
            required
            placeholder="Email Goes here"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setSubscribed(false);
            }}
          />
          <button type="submit" className="footer__send">
            Send
          </button>
          {subscribed && (
            <p className="footer__success" role="status">
              ¡Gracias por suscribirte!
            </p>
          )}
        </form>
      </div>

      <div className="footer__bottom">
        <hr className="footer__line" />
        <p className="footer__copy">2025 “RoofFixer” All Rights Received</p>
      </div>
    </footer>
  );
}
