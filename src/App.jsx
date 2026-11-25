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
import { ArcanaNoir } from './paginas/ArcanaNoir.jsx';
import { Aplicaciones } from './paginas/Aplicaciones.jsx';
import { MindForge } from './paginas/MindForge.jsx';
import { WallpaperSolar } from './paginas/WallpaperSolar.jsx';
import { TX } from './textos.js';
import { MimeticoEscondido } from './componentes/Mimetico.jsx';
import { Privacidad } from './paginas/Privacidad.jsx';

const PAGINAS = {
  '/': { C: Inicio, titulo: TX.titulos.inicio },
  '/hardware': { C: Teclados, titulo: TX.titulos.hardware },
  '/juegos': { C: Juegos, titulo: TX.titulos.juegos },
  '/juegos/la-forja': { C: LaForja, titulo: TX.titulos.laForja },
  '/juegos/arcana-noir': { C: ArcanaNoir, titulo: TX.titulos.arcanaNoir },
  '/aplicaciones': { C: Aplicaciones, titulo: TX.titulos.aplicaciones },
  '/aplicaciones/mindforge': { C: MindForge, titulo: TX.titulos.mindforge },
  '/aplicaciones/wallpaper-solar': { C: WallpaperSolar, titulo: TX.titulos.wallpaperSolar },
  '/privacidad': { C: Privacidad, titulo: TX.titulos.privacidad },
};

export function App() {
  const ruta = useRuta(), { t } = usePrefs(), p = PAGINAS[ruta] || PAGINAS['/'];
  useEffect(() => { document.title = t(p.titulo); }, [p, t]);
  return (
    <>
      <Cabecera ruta={ruta} />
      <main id="contenido"><p.C /></main>
      <Pie />
      <MimeticoEscondido />
    </>
  );
}
