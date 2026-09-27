import { Link } from "react-router-dom";
import type { Contractor } from "../data/contractors";
import { asset } from "../lib/asset";
import "./ContractorCard.css";

export function ContractorCard({ contractor }: { contractor: Contractor }) {
  return (
    <article className="contractor-card">
      <div className="contractor-card__top">
        <div className="contractor-card__info">
          <h3 className="contractor-card__name">{contractor.name}</h3>

          <div className="contractor-card__group">
            <p className="contractor-card__row">
              <img src={asset("icons/star.png")} alt="" width={24} height={24} />
              <span>
                <strong className="contractor-card__rating">{contractor.rating} </strong>
                <span className="contractor-card__muted">{contractor.reviews}</span>
              </span>
            </p>
            <p className="contractor-card__row">
              <img src={asset("icons/location.png")} alt="" width={20} height={20} />
              <span className="contractor-card__muted">{contractor.area}</span>
            </p>
          </div>

          <div className="contractor-card__group">
            <a className="contractor-card__row contractor-card__phone" href={`tel:${contractor.phone.replace(/[^\d+]/g, "")}`}>
              <img src={asset("icons/phone.png")} alt="" width={20} height={20} />
              <span>{contractor.phone}</span>
            </a>
            <a className="contractor-card__row contractor-card__muted" href={`mailto:${contractor.email}`}>
              <img src={asset("icons/mail.png")} alt="" width={20} height={20} />
              <span>{contractor.email}</span>
            </a>
            <p className="contractor-card__row">
              <img src={asset("icons/time.png")} alt="" width={20} height={20} />
              <span className="contractor-card__muted">{contractor.experience}</span>
            </p>
          </div>

          <div className="contractor-card__specialties">
            <p className="contractor-card__label">Specialties:</p>
            <ul className="contractor-card__chips">
              {contractor.specialties.map((specialty) => (
                <li key={specialty} className="contractor-card__chip">
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <span className="contractor-card__badge" title="Contratista certificado">
          <img src={asset("icons/award-green.png")} alt="Certificado" width={24} height={24} />
        </span>
      </div>

      <Link to="#contacto" className="contractor-card__button">
        Request Quote from Premier
      </Link>
    </article>
  );
}
