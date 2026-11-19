// Arriba del todo: el nombre (lleva al inicio), las secciones, y los botones de idioma y de tema.
import { Enlace } from '../ruta.jsx';
import { usePrefs } from '../preferencias.jsx';
import { Marca } from './Marca.jsx';
import { Icono } from './Iconos.jsx';
import { Caja } from './Comunes.jsx';

export function Cabecera({ ruta }) {
  const { t, idioma, tema, cambiarIdioma, cambiarTema } = usePrefs();
  const secciones = [['/', t('Inicio', 'Home')], ['/hardware', 'Hardware'], ['/juegos', t('Juegos', 'Games')], ['/aplicaciones', t('Aplicaciones', 'Apps')]];
  const activa = a => (a === '/' ? ruta === '/' : ruta.startsWith(a));
  return (
    <header className="cabecera">
      <Caja className="cabecera-fila">
        <Enlace a="/" className="cabecera-marca" aria-label={t('Inicio', 'Home')}><Marca alto="1.9rem" /></Enlace>
        <nav aria-label={t('Secciones', 'Sections')}>
          {secciones.map(([a, nombre]) => <Enlace key={a} a={a} className={'nav-enlace' + (activa(a) ? ' activa' : '')} aria-current={activa(a) ? 'page' : undefined}>{nombre}</Enlace>)}
        </nav>
        <div className="cabecera-botones">
          <button type="button" className="boton-icono" onClick={cambiarIdioma} aria-label={t('Ver en inglés', 'View in Spanish')} title={t('English', 'Español')}>
            <span className="idioma">{idioma === 'es' ? 'EN' : 'ES'}</span>
          </button>
          <button type="button" className="boton-icono" onClick={cambiarTema} aria-label={tema === 'oscuro' ? t('Modo claro', 'Light mode') : t('Modo oscuro', 'Dark mode')}>
            <Icono n={tema === 'oscuro' ? 'sol' : 'luna'} />
          </button>
        </div>
      </Caja>
    </header>
  );
}
