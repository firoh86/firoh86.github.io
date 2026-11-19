// Rutas con almohadilla (#/teclados, #/juegos/la-forja…): funcionan en GitHub Pages sin configurar nada en el servidor.
import { useEffect, useState } from 'react';

const actual = () => (location.hash.replace(/^#/, '') || '/').replace(/\/+$/, '') || '/';

export function useRuta() {
  const [ruta, setRuta] = useState(actual);
  useEffect(() => {
    const cambio = () => { setRuta(actual()); window.scrollTo({ top: 0 }); };
    addEventListener('hashchange', cambio);
    return () => removeEventListener('hashchange', cambio);
  }, []);
  return ruta;
}

/** Enlace interno: <Enlace a="/teclados">…</Enlace> */
export const Enlace = ({ a, children, ...resto }) => <a href={'#' + a} {...resto}>{children}</a>;
