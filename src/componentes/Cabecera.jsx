// Arriba del todo: el nombre (lleva al inicio), las secciones, y los botones de idioma y de tema.
import { Enlace } from '../ruta.jsx';
import { usePrefs } from '../preferencias.jsx';
import { Marca } from './Marca.jsx';
import { Icono } from './Iconos.jsx';
import { Caja } from './Comunes.jsx';
import { TX } from '../textos.js';

export function Cabecera({ ruta }) {
  const { t, idioma, tema, cambiarIdioma, cambiarTema } = usePrefs();
  const secciones = [['/', t(TX.cabecera.inicio)], ['/hardware', 'Hardware'], ['/juegos', t(TX.cabecera.juegos)], ['/aplicaciones', t(TX.cabecera.aplicaciones)]];
  const activa = a => (a === '/' ? ruta === '/' : ruta.startsWith(a));
  return (
    <header className="cabecera">
      <Caja className="cabecera-fila">
        <Enlace a="/" className="cabecera-marca" aria-label={t(TX.cabecera.inicio)}><Marca alto="1.9rem" /></Enlace>
        <nav aria-label={t(TX.cabecera.secciones)}>
          {secciones.map(([a, nombre]) => <Enlace key={a} a={a} className={'nav-enlace' + (activa(a) ? ' activa' : '')} aria-current={activa(a) ? 'page' : undefined}>{nombre}</Enlace>)}
        </nav>
        <div className="cabecera-botones">
          <button type="button" className="boton-icono" onClick={cambiarIdioma} aria-label={t(TX.cabecera.verEnIngles)} title={t(TX.cabecera.english)}>
            <span className="idioma">{idioma === 'es' ? 'EN' : 'ES'}</span>
          </button>
          <button type="button" className="boton-icono" onClick={cambiarTema} aria-label={tema === 'oscuro' ? t(TX.cabecera.modoClaro) : t(TX.cabecera.modoOscuro)}>
            <Icono n={tema === 'oscuro' ? 'sol' : 'luna'} />
          </button>
        </div>
      </Caja>
    </header>
  );
}
