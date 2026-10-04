import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppButton } from "./WhatsAppButton";

/** Desplaza al ancla (#contacto, #quienes-somos…) o al inicio al cambiar de ruta. */
function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [pathname, hash]);
}

export function Layout() {
  useScrollToHash();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
