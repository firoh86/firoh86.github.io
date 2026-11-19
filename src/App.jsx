// La web de Rubi: cabecera, la página que toque según la ruta, y el pie.
import { useEffect } from 'react';
import { useRuta } from './ruta.jsx';
import { usePrefs } from './preferencias.jsx';
import { Cabecera } from './componentes/Cabecera.jsx';
import { Pie } from './componentes/Pie.jsx';
import { Inicio } from './paginas/Inicio.jsx';
import { Teclados } from './paginas/Teclados.jsx';
import { Juegos } from './paginas/Juegos.jsx';
import { LaForja } from './paginas/LaForja.jsx';
import { Aplicaciones } from './paginas/Aplicaciones.jsx';
import { MindForge } from './paginas/MindForge.jsx';

const PAGINAS = {
  '/': { C: Inicio, titulo: ['Rubi · teclados, juegos y aplicaciones', 'Rubi · keyboards, games and apps'] },
  '/hardware': { C: Teclados, titulo: ['Hardware · Rubi', 'Hardware · Rubi'] },
  '/juegos': { C: Juegos, titulo: ['Juegos · Rubi', 'Games · Rubi'] },
  '/juegos/la-forja': { C: LaForja, titulo: ['La Forja · Rubi', 'The Forge · Rubi'] },
  '/aplicaciones': { C: Aplicaciones, titulo: ['Aplicaciones · Rubi', 'Apps · Rubi'] },
  '/aplicaciones/mindforge': { C: MindForge, titulo: ['MindForge · Rubi', 'MindForge · Rubi'] },
};

export function App() {
  const ruta = useRuta(), { t } = usePrefs(), p = PAGINAS[ruta] || PAGINAS['/'];
  useEffect(() => { document.title = t(...p.titulo); }, [p, t]);
  return (
    <>
      <Cabecera ruta={ruta} />
      <main id="contenido"><p.C /></main>
      <Pie />
    </>
  );
}
