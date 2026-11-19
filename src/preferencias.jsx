// Idioma (español / inglés) y tema (claro / oscuro), compartidos por toda la web.
// · El idioma empieza en el del navegador (español si empieza por "es"; si no, inglés) y se recuerda.
// · El tema empieza en el del sistema y, si lo cambias, se recuerda (index.html lo aplica antes de pintar).
// En los componentes: const { t } = usePrefs(); t('Hola', 'Hello').
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const leer = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const guardar = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento: no pasa nada */ } };

const idiomaInicial = () => leer('rubi.idioma') || ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en');
const temaDelSistema = () => (matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro');

const Ctx = createContext(null);

export function Preferencias({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial);
  const [tema, setTema] = useState(() => leer('rubi.tema') || temaDelSistema());
  useEffect(() => { document.documentElement.lang = idioma; }, [idioma]);
  useEffect(() => { document.documentElement.dataset.tema = tema; }, [tema]);
  const v = useMemo(() => ({
    idioma, tema,
    t: (es, en) => (idioma === 'es' ? es : en),
    cambiarIdioma: () => { const n = idioma === 'es' ? 'en' : 'es'; setIdioma(n); guardar('rubi.idioma', n); },
    cambiarTema: () => { const n = tema === 'oscuro' ? 'claro' : 'oscuro'; setTema(n); guardar('rubi.tema', n); },
  }), [idioma, tema]);
  return <Ctx.Provider value={v}>{children}</Ctx.Provider>;
}
export const usePrefs = () => useContext(Ctx);
