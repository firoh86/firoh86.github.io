// Aplicaciones: las aplicaciones de escritorio de Rubi: MindForge y Wallpaper Solar.
import { usePrefs } from '../preferencias.jsx';
import { Portada, Seccion, Tarjeta } from '../componentes/Comunes.jsx';
import captura from '../assets/mindforge.jpg';
import tarjetaSolar from '../assets/wallpaper-solar-tarjeta.jpg';
import { TX } from '../textos.js';

export function Aplicaciones() {
  const { t } = usePrefs();
  return (
    <>
      <Portada etiqueta="Software" titulo={t(TX.aplicaciones.aplicaciones)}>
        {t(TX.aplicaciones.aplicacionesDeEscritorioHechas)}
      </Portada>
      <Seccion etiqueta={t(TX.aplicaciones.escritorio)} titulo={t(TX.aplicaciones.lasAplicaciones)}>
        <div className="rejilla rejilla--2">
          <Tarjeta a="/aplicaciones/mindforge" imagen={captura} etiqueta={t(TX.aplicaciones.mapasMentalesGratis)} titulo="MindForge" accion={t(TX.aplicaciones.conocerLaAplicacion)}>
            {t(TX.aplicaciones.mapasMentalesFlujosY)}
          </Tarjeta>
          <Tarjeta a="/aplicaciones/wallpaper-solar" imagen={tarjetaSolar} etiqueta={t(TX.aplicaciones.fondoDeEscritorioGratis)} titulo="Wallpaper Solar" accion={t(TX.aplicaciones.conocerLaAplicacion)}>
            {t(TX.aplicaciones.wallpaperSolarTarjeta)}
          </Tarjeta>
          <div className="tarjeta tarjeta--vacia" aria-hidden="true">
            <p className="etiqueta">{t(TX.aplicaciones.proximamente)}</p>
            <p>{t(TX.aplicaciones.masAplicacionesEnCamino)}</p>
          </div>
        </div>
      </Seccion>
    </>
  );
}
