// Juegos: la lista de juegos de Rubi. Hoy, La Forja.
import { usePrefs } from '../preferencias.jsx';
import { Portada, Seccion, Tarjeta } from '../componentes/Comunes.jsx';
import tarjetaForja from '../assets/la-forja-tarjeta.jpg';
import { TX } from '../textos.js';

export function Juegos() {
  const { t } = usePrefs();
  return (
    <>
      <Portada etiqueta={t(TX.juegos.videojuegos)} titulo={t(TX.juegos.juegos)}>
        {t(TX.juegos.juegosPequenosYCuidados)}
      </Portada>
      <Seccion etiqueta={t(TX.juegos.enDesarrollo)} titulo={t(TX.juegos.losJuegos)}>
        <div className="rejilla rejilla--2">
          <Tarjeta a="/juegos/la-forja" imagen={tarjetaForja} etiqueta={t(TX.juegos.juegoDeCartasPara)} titulo={t(TX.juegos.laForja)}
            accion={t(TX.juegos.conocerElJuego)}>
            {t(TX.juegos.tusCartasLleganPor)}
          </Tarjeta>
          <div className="tarjeta tarjeta--vacia" aria-hidden="true">
            <p className="etiqueta">{t(TX.juegos.proximamente)}</p>
            <p>{t(TX.juegos.masJuegosEnCamino)}</p>
          </div>
        </div>
      </Seccion>
    </>
  );
}
