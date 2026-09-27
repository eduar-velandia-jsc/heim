import { ContactSection } from "../components/ContactSection";
import { ContractorCard } from "../components/ContractorCard";
import { FaqSection } from "../components/FaqSection";
import { CONTRACTORS } from "../data/contractors";
import "./Services.css";

export function Services() {
  return (
    <div className="services-page">
      <section className="solutions container" aria-labelledby="solutions-title">
        <div className="solutions__header">
          <h1 id="solutions-title" className="solutions__title">
            soluciones que se adaptan
          </h1>
          <p className="solutions__lead">
            Compare verified contractors with proven track records. All companies are licensed, insured, and ready to serve you.
          </p>
        </div>
        <div className="solutions__grid">
          {CONTRACTORS.map((contractor) => (
            <ContractorCard key={contractor.name} contractor={contractor} />
          ))}
        </div>
      </section>

      <FaqSection />
      <ContactSection />
    </div>
  );
}
