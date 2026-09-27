import { Link } from "react-router-dom";
import { ArrowButton } from "../components/ArrowButton";
import { ContactSection } from "../components/ContactSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SERVICES } from "../data/services";
import { asset } from "../lib/asset";
import "./Home.css";

const HERO_FEATURES = [
  { icon: asset("icons/clock.png"), label: "Respuesta ágil" },
  { icon: asset("icons/award.png"), label: "Ejecución integral" },
  { icon: asset("icons/customer-service.png"), label: "Atención personalizada" },
];

const STATS = [
  { value: "   +80", label: "Proyectos ejecutados" },
  { value: "+1000 M²", label: "En remodelaciones de espacios" },
  { value: "10", label: "Años de experiencia" },
];

const REASONS = [
  {
    icon: asset("icons/check-1.png"),
    title: "Un solo interlocutor",
    text: "Centralizamos diseño, ejecución, tecnología y mantenimiento bajo una misma administración y garantía.",
  },
  {
    icon: asset("icons/check-2.png"),
    title: "Eficiencia y tiempos",
    text: "Planificación integrada que elimina reprocesos, optimiza presupuestos y cumple las entregas a tiempo.",
  },
  {
    icon: asset("icons/check-3.png"),
    title: "Respaldo técnico",
    text: "Supervisión rigurosa, mano de obra cualificada y acabados de alta gama para asegurar máxima durabilidad..",
  },
];

/** Posiciones de los pines sobre el mapa (px del diseño a 1440 × 559). */
const MAP_PINS = [
  { x: 1108, y: 220 },
  { x: 1133, y: 6 },
  { x: 830, y: 180 },
  { x: 898, y: 220 },
  { x: 1250, y: 203 },
];

const PROCESS_STEPS = [
  { number: "01", title: "Levantamiento", text: "Evaluación técnica del espacio y condiciones iniciales del proyecto." },
  { number: "02", title: "Propuesta", text: "Propuesta técnica y económica adaptada a tus requerimientos y alcance" },
  { number: "03", title: "Ejecución", text: "Intervención con equipo especializado, supervisión permanente y reportes de avance." },
  { number: "04", title: "Entrega", text: "Entrega formal con verificación de estándares de calidad y cierre técnico." },
];

const CLIENTS = [
  { name: "Grupo Empresarial Kinku", logo: asset("logos/kinku.png"), width: 211, height: 74 },
  { name: "The Houzzz", logo: asset("logos/thehouzzz.png"), width: 97, height: 73 },
  { name: "Sylvania", logo: asset("logos/sylvania.png"), width: 269, height: 74 },
  { name: "Gilat", logo: asset("logos/gilat.png"), width: 169, height: 78 },
  { name: "Fonreginal", logo: asset("logos/fonreginal.png"), width: 249, height: 92 },
  { name: "Click Centro Gráfico", logo: asset("logos/click.png"), width: 99, height: 81 },
];

export function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero__background" src={asset("images/hero.webp")} alt="" width={1440} height={1016} />
        <img className="hero__overlay" src={asset("images/hero-overlay.png")} alt="" width={1440} height={1103} />
        <div className="hero__content container">
          <h1 className="hero__title">
            Creamos ambientes <br />
            transformamos espacios.
          </h1>
          <p className="hero__lead">
            Integramos diseño, ingeniería, construcción y tecnología para transformar espacios en soluciones funcionales,
            innovadoras y con propósito.
          </p>
          <div className="hero__actions">
            <Link to="#contacto" className="hero__button hero__button--primary">
              Cotización→
            </Link>
            <Link to="/servicios" className="hero__button hero__button--outline">
              Nuestros servicios
            </Link>
          </div>
          <ul className="hero__features">
            {HERO_FEATURES.map((feature) => (
              <li key={feature.label} className="hero__feature">
                <span className="hero__feature-icon">
                  <img src={feature.icon} alt="" width={24} height={24} />
                </span>
                {feature.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="stats">
        <dl className="stats__card">
          {STATS.map((stat) => (
            <div key={stat.label} className="stats__item">
              <dt className="stats__label">{stat.label}</dt>
              <dd className="stats__value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section id="quienes-somos" className="about">
        <img
          className="about__image"
          src={asset("images/quienes-somos.webp")}
          alt="Espacio en obra con estructura de cielo raso"
          width={503}
          height={542}
          loading="lazy"
        />
        <div className="about__content">
          <span className="pill-badge">Quienes somos</span>
          <div className="about__text">
            <p>
              En HEIM creamos ambientes y transformamos espacios integrando diseño, ingeniería, construcción y tecnología en un
              mismo proyecto.
            </p>
            <p>
              Trabajamos con hogares, comercios y empresas, acompañando cada proceso desde la idea y la planificación hasta la
              ejecución y entrega. Nuestro propósito es hacer que cada espacio combine estética, funcionalidad y soluciones que
              realmente aporten valor.
            </p>
            <p>
              Más que ejecutar una obra, buscamos entender lo que necesitas, convertirlo en una propuesta y llevarla a la
              realidad con un equipo que integra creatividad, conocimiento técnico y tecnología.
            </p>
          </div>
          <ArrowButton to="#contacto">Empecemos</ArrowButton>
        </div>
      </section>

      <section id="servicios" className="services container">
        <div className="services__header">
          <h2 className="services__title">
            Diseño, mantenimiento y tecnología.
            <br />
            Un solo proveedor
          </h2>
          <div className="services__intro">
            <p className="services__eyebrow">servicios</p>
            <p className="services__description">
              Centralizamos cada etapa de tu proyecto para garantizar eficiencia, calidad y respaldo de principio a fin.
            </p>
          </div>
        </div>
        <div className="services__grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="service-card">
              <h3 className="service-card__title">{service.title}</h3>
              <div className="service-card__body">
                <p>{service.description}</p>
                <ul className="service-card__list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="#contacto" className="service-card__tag">
                  Emergency Repairs
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why">
        <img
          className="why__image"
          src={asset("images/por-que-heim.webp")}
          alt="Técnico trabajando sobre una cubierta"
          width={501}
          height={516}
          loading="lazy"
        />
        <div className="why__content">
          <h2 className="why__title">¿Por qué Heim?</h2>
          <p className="why__lead">Gestión unificada para la máxima eficiencia de tus espacios.</p>
          <ul className="why__list">
            {REASONS.map((reason) => (
              <li key={reason.title} className="why__item">
                <img src={reason.icon} alt="" width={24} height={24} />
                <div>
                  <p className="why__item-title">{reason.title}</p>
                  <p className="why__item-text">{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <ArrowButton to="#contacto">Book Now</ArrowButton>
        </div>
      </section>

      <section className="coverage" aria-labelledby="coverage-title">
        <div className="coverage__map">
          <img className="coverage__map-image" src={asset("images/mapa-cobertura.webp")} alt="" width={1440} height={559} loading="lazy" />
          {MAP_PINS.map((pin) => (
            <img
              key={`${pin.x}-${pin.y}`}
              className="coverage__pin"
              src={asset("icons/ubicacion.png")}
              alt=""
              width={34}
              height={34}
              style={{ left: `${(pin.x / 1440) * 100}%`, top: `${(pin.y / 559) * 100}%` }}
            />
          ))}
        </div>
        <div className="coverage__panel">
          <img className="coverage__panel-bg" src={asset("images/mapa-panel.png")} alt="" width={440} height={398} />
          <div className="coverage__text">
            <h2 id="coverage-title" className="coverage__title">
              presencia y cobertura
            </h2>
            <p className="coverage__subtitle">
              Presencia y capacidad operativa.
              <br />
              Atención integral en Bogotá, la Sabana y municipios aledaños para proyectos corporativos y residenciales.
            </p>
          </div>
        </div>
      </section>

      <section className="process container">
        <div className="section-heading">
          <div className="section-heading__text">
            <h2 className="section-heading__title">Nuestro proceso de trabajo</h2>
            <p className="section-heading__subtitle">
              Una metodología estructurada para garantizar resultados impecables en tiempo y forma.
            </p>
          </div>
          <ArrowButton to="/proyectos" variant="urbanist">
            View All Testimonials
          </ArrowButton>
        </div>
        <ol className="process__steps">
          {PROCESS_STEPS.map((step) => (
            <li key={step.number} className="process-card">
              <span className="process-card__number">{step.number}</span>
              <p className="process-card__title">{step.title}</p>
              <p className="process-card__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <ProjectsSection />

      <section className="clients container" aria-labelledby="clients-title">
        <h2 id="clients-title" className="clients__title">
          Nuestros clientes
        </h2>
        <ul className="clients__logos">
          {CLIENTS.map((client) => (
            <li key={client.name}>
              <img src={client.logo} alt={client.name} width={client.width} height={client.height} loading="lazy" />
            </li>
          ))}
        </ul>
      </section>

      <ContactSection />
    </>
  );
}
