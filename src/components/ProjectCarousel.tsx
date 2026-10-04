import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import type { ProjectSlide } from "../data/projects";
import "./ProjectCarousel.css";

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 40;

type ProjectCarouselProps = {
  slides: ProjectSlide[];
  /** Nombre del proyecto, para los textos alternativos y etiquetas accesibles. */
  label: string;
  /** Proporción del marco (ancho / alto) tomada del diseño. */
  aspectRatio: string;
};

/**
 * Carrusel de fotos (y video) de un proyecto: avanza solo cada 5 s, se pausa al pasar el cursor
 * o al enfocarlo, y se puede manejar con las flechas, los puntos, el teclado o deslizando el dedo.
 */
export function ProjectCarousel({ slides, label, aspectRatio }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  // Videos que el navegador no pudo reproducir: en ellos el avance automático usa el temporizador normal.
  const [failedVideos, setFailedVideos] = useState<Set<number>>(() => new Set());
  // Solo se cargan la foto actual y sus vecinas; las ya cargadas se conservan.
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0, 1, slides.length - 1]));
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const pointerStart = useRef<number | null>(null);

  const count = slides.length;
  const current = slides[index];
  const reducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const goTo = useCallback(
    (next: number) => {
      const target = (next + count) % count;
      setIndex(target);
      setLoaded((prev) => {
        const updated = new Set(prev);
        [target - 1, target, target + 1].forEach((i) => updated.add((i + count) % count));
        return updated;
      });
    },
    [count],
  );

  // Solo avanza cuando el carrusel está en pantalla.
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Avance automático. En el video espera a que termine (evento "ended").
  useEffect(() => {
    const waitsForVideo = current.type === "video" && !failedVideos.has(index);
    if (paused || !inView || reducedMotion || count < 2 || waitsForVideo) return;
    const timer = window.setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, inView, reducedMotion, count, current.type, failedVideos, goTo]);

  const markVideoFailed = useCallback((i: number) => {
    setFailedVideos((prev) => (prev.has(i) ? prev : new Set(prev).add(i)));
  }, []);

  // El video se reproduce solo cuando su diapositiva está activa y visible.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (i === index && inView) {
        video.currentTime = 0;
        void video.play().catch(() => markVideoFailed(i));
      } else {
        video.pause();
      }
    });
  }, [index, inView, markVideoFailed]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    pointerStart.current = event.clientX;
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null) return;
    const delta = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(delta) > SWIPE_THRESHOLD) goTo(index + (delta < 0 ? 1 : -1));
  }

  return (
    <div
      ref={rootRef}
      className="carousel"
      style={{ aspectRatio }}
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Fotos del proyecto ${label}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => (pointerStart.current = null)}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`carousel__slide carousel__slide--${slide.type}`}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${count}`}
            aria-hidden={i !== index}
          >
            {slide.type === "video" ? (
              <video
                ref={(node) => {
                  if (node) videoRefs.current.set(i, node);
                  else videoRefs.current.delete(i);
                }}
                src={loaded.has(i) ? slide.src : undefined}
                muted
                playsInline
                preload="metadata"
                onEnded={() => goTo(i + 1)}
                onError={() => markVideoFailed(i)}
                aria-label={`Video del proyecto ${label}`}
              />
            ) : (
              loaded.has(i) && (
                <img src={slide.src} alt={`${label} – foto ${i + 1} de ${count}`} draggable={false} decoding="async" />
              )
            )}
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--prev"
            onClick={() => goTo(index - 1)}
            aria-label="Foto anterior"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--next"
            onClick={() => goTo(index + 1)}
            aria-label="Foto siguiente"
          >
            <FaChevronRight aria-hidden="true" />
          </button>

          <div className="carousel__footer">
            <div className="carousel__dots">
              {slides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  className={i === index ? "carousel__dot carousel__dot--active" : "carousel__dot"}
                  onClick={() => goTo(i)}
                  aria-label={`Ir a la foto ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <span className="carousel__counter" aria-live="polite">
              {index + 1} / {count}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
