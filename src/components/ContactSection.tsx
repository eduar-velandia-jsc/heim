import { useState, type ChangeEvent, type FormEvent } from "react";
import { SERVICES } from "../data/services";
import "./ContactSection.css";

const HIGHLIGHTS = [
  {
    icon: "/assets/icons/contact-done.png",
    title: "Gestión y Respuesta Ágil",
    text: "Evaluación inicial y estructuración de la propuesta ejecutiva en menos de 24 horas.",
    textClass: "contact__highlight-text--worksans",
  },
  {
    icon: "/assets/icons/contact-verified.png",
    title: "Rigor Técnico",
    text: "Equipo especializado con pólizas de cumplimiento y control de calidad en acabados.",
    textClass: "contact__highlight-text--inter",
  },
  {
    icon: "/assets/icons/contact-home.png",
    title: "Análisis sin Compromiso",
    text: "Revise el alcance, las especificaciones técnicas y el esquema de ejecución antes de tomar una decisión.",
    textClass: "",
  },
];

const GUARANTEES = [
  "Evaluación y viabilidad técnica de su proyecto.",
  "Cumplimiento estricto en tiempos, acabados y especificaciones.",
  "Cero sobrecostos o desviaciones durante la obra.",
  "Optimización técnica de recursos e inversión.",
  "Respuesta personalizada en menos de 24 horas.",
];

const COUNTRY_CODES = [
  { code: "US", dial: "+1" },
  { code: "CO", dial: "+57" },
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phone: string;
  projectType: string;
  location: string;
  details: string;
  privacy: boolean;
};

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  country: "US",
  phone: "",
  projectType: "",
  location: "",
  details: "",
  privacy: false,
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [sent, setSent] = useState(false);

  function update(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = event.target;
    const nextValue = type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    setForm((current) => ({ ...current, [name]: nextValue }));
    setSent(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    setForm(INITIAL_STATE);
  }

  return (
    <section id="contacto" className="contact container">
      <div className="contact__info">
        <div className="contact__intro">
          <h2 className="contact__title">Solicite una Propuesta Técnica</h2>
          <p className="contact__lead">
            Complete el formulario para recibir una evaluación detallada y estructurada para la adecuación o remodelación de su
            inmueble. Proceso directo y sin compromiso.
          </p>
        </div>

        <ul className="contact__highlights">
          {HIGHLIGHTS.map((item) => (
            <li key={item.title} className="contact__highlight">
              <img className="contact__highlight-icon" src={item.icon} alt="" width={74} height={74} />
              <div className="contact__highlight-body">
                <p className="contact__highlight-title">{item.title}</p>
                <p className={`contact__highlight-text ${item.textClass}`}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="contact__guarantees">
          <p className="contact__guarantees-title">Garantías de valor</p>
          <ul className="contact__guarantees-list">
            {GUARANTEES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="quote-form__header">
          <h3 className="quote-form__title">Request Your Free Quotes</h3>
          <p className="quote-form__subtitle">Cuéntanos sobre tu espacio y te ayudaremos a materializar el ambiente ideal.</p>
        </div>

        <div className="quote-form__fields">
          <div className="quote-form__row">
            <label className="quote-form__field">
              <span className="quote-form__label">Nombre</span>
              <input className="quote-form__control" name="firstName" placeholder="First name" required value={form.firstName} onChange={update} />
            </label>
            <label className="quote-form__field">
              <span className="quote-form__label">Apellido</span>
              <input className="quote-form__control" name="lastName" placeholder="Last name" required value={form.lastName} onChange={update} />
            </label>
          </div>

          <label className="quote-form__field">
            <span className="quote-form__label">Email</span>
            <input className="quote-form__control" type="email" name="email" placeholder="you@company.com" required value={form.email} onChange={update} />
          </label>

          <div className="quote-form__field">
            <label className="quote-form__label" htmlFor="quote-phone">
              Numero de celular
            </label>
            <div className="quote-form__control quote-form__control--group">
              <span className="quote-form__select-wrap quote-form__select-wrap--country">
                <select className="quote-form__select" name="country" aria-label="Código de país" value={form.country} onChange={update}>
                  {COUNTRY_CODES.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                <img src="/assets/icons/chevron-down.png" alt="" width={20} height={20} />
              </span>
              <input
                id="quote-phone"
                className="quote-form__bare-input"
                type="tel"
                name="phone"
                placeholder={`${COUNTRY_CODES.find((c) => c.code === form.country)?.dial ?? "+1"} (555) 000-0000`}
                value={form.phone}
                onChange={update}
              />
            </div>
          </div>

          <label className="quote-form__field">
            <span className="quote-form__label">Tipo proyecto</span>
            <span className="quote-form__control quote-form__control--select">
              <select
                className="quote-form__select quote-form__select--full"
                name="projectType"
                required
                value={form.projectType}
                onChange={update}
                data-empty={form.projectType === ""}
              >
                <option value="" disabled>
                  Select project type
                </option>
                {SERVICES.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              <img src="/assets/icons/chevron-down.png" alt="" width={20} height={20} />
            </span>
          </label>

          <label className="quote-form__field">
            <span className="quote-form__label">Ubicación del proyecto</span>
            <input className="quote-form__control quote-form__control--pl12" name="location" placeholder="123 Main St. City, State ZIP" value={form.location} onChange={update} />
          </label>

          <label className="quote-form__field">
            <span className="quote-form__label">Detalles del proyecto</span>
            <textarea
              className="quote-form__control quote-form__textarea"
              name="details"
              placeholder="Tell us more about your roofing needs..."
              value={form.details}
              onChange={update}
            />
          </label>

          <label className="quote-form__checkbox">
            <input type="checkbox" name="privacy" required checked={form.privacy} onChange={update} />
            <span>Acepto nuestra política de privacidad.</span>
          </label>

          <button type="submit" className="quote-form__submit">
            {"Agendar asesoría -->"}
          </button>

          {sent && (
            <p className="quote-form__success" role="status">
              ¡Gracias! Te contactaremos en menos de 24 horas.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
