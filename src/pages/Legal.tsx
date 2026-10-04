import { LEGAL_CONTENT } from "../data/legal";
import "./Legal.css";

export function Legal() {
  let titleCount = 0;

  return (
    <article className="legal container">
      {LEGAL_CONTENT.map((block) => {
        if (block.type === "title") {
          // El primer título es el encabezado de la página; el resto, secciones.
          const Tag = titleCount++ === 0 ? "h1" : "h2";
          return (
            <Tag key={block.text} className="legal__title">
              {block.text}
            </Tag>
          );
        }
        if (block.type === "heading") {
          return (
            <h3 key={block.text} className="legal__heading">
              {block.text}
            </h3>
          );
        }
        return <p key={block.text}>{block.text}</p>;
      })}
    </article>
  );
}
