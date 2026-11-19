// Aplicaciones: las aplicaciones de escritorio de Rubi. La primera, MindForge.
import { usePrefs } from '../preferencias.jsx';
import { Portada, Seccion, Tarjeta } from '../componentes/Comunes.jsx';
import captura from '../assets/mindforge.jpg';

export function Aplicaciones() {
  const { t } = usePrefs();
  return (
    <>
      <Portada etiqueta="Software" titulo={t('Aplicaciones', 'Apps')}>
        {t('Aplicaciones de escritorio hechas a medida: herramientas pequeñas y claras para el día a día.', 'Custom desktop apps: small, clear tools for everyday use.')}
      </Portada>
      <Seccion etiqueta={t('Escritorio', 'Desktop')} titulo={t('Las aplicaciones', 'The apps')}>
        <div className="rejilla rejilla--2">
          <Tarjeta a="/aplicaciones/mindforge" imagen={captura} etiqueta={t('Mapas mentales · gratis', 'Mind maps · free')} titulo="MindForge" accion={t('Conocer la aplicación', 'Discover the app')}>
            {t('Mapas mentales, flujos y esquemas, con nodos de pixel art y paletas de color para quien hace juegos indie. Todo se guarda en tu ordenador.', 'Mind maps, flows and diagrams, with pixel art nodes and color palettes for indie game developers. Everything stays on your computer.')}
          </Tarjeta>
          <div className="tarjeta tarjeta--vacia" aria-hidden="true">
            <p className="etiqueta">{t('Próximamente', 'Coming soon')}</p>
            <p>{t('Más aplicaciones en camino.', 'More apps on the way.')}</p>
          </div>
        </div>
      </Seccion>
    </>
  );
}
