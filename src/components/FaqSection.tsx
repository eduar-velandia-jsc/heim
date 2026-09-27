import { useState } from "react";
import "./FaqSection.css";

const FAQS = [
  {
    question: "What's the difference between a contractor certified by GAF and a regular roofer?",
    answer:
      "A contractor certified by GAF has undergone comprehensive training, adheres to strict installation best practices, and meets ongoing performance standards established by North America's largest roofing manufacturer.",
  },
  {
    question: "How long does a typical residential roofing project take?",
    // Respuesta provisional: el diseño solo define el texto de la primera pregunta.
    answer: "Most residential projects are completed in a few days, depending on the size of the roof, the materials selected and weather conditions.",
  },
  {
    question: "How much does a custom home typically cost?",
    answer: "Cost depends on the scope, finishes and location of the project. Request a quote and we'll prepare a detailed technical and economic proposal.",
  },
  {
    question: "How do you find a roofing contractor you can trust?",
    answer: "Look for verified licenses and insurance, a proven track record and clear written proposals. Every contractor we work with meets these standards.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="faq__intro">
        <span className="faq__badge">
          <span className="faq__dot" aria-hidden="true" />
          FAQ
        </span>
        <h2 id="faq-title" className="faq__title">
          Answers to your roofing questions
        </h2>
        <p className="faq__lead">
          Find answers to common questions about Roofing services, property listings, and the real estate process. We're here to
          provide clarity and assist you every step of the way.
        </p>
      </div>

      <div className="faq__list">
        {FAQS.map((faq, index) => {
          const open = openIndex === index;
          const panelId = `faq-panel-${index}`;
          return (
            <div key={faq.question} className="faq__item">
              <h3 className="faq__question">
                <button
                  type="button"
                  className="faq__trigger"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span>{faq.question}</span>
                  <img src={open ? "/assets/icons/minus.png" : "/assets/icons/plus.png"} alt="" width={24} height={24} />
                </button>
              </h3>
              <p id={panelId} className="faq__answer" hidden={!open}>
                {faq.answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
