// Privacidad (19/11/2026): qué guarda la web y qué se hace con los datos. Corta y clara: la web no tiene cookies, ni
// analítica, ni anuncios; solo guarda en el navegador lo que eliges (tema, idioma, volumen). Si un día llegan AdSense o
// la analítica, esto se actualiza y entonces sí hace falta el aviso de cookies con consentimiento.
import { usePrefs } from '../preferencias.jsx';
import { Portada, Seccion, Boton } from '../componentes/Comunes.jsx';
import { ENLACES, escribir, direccion } from '../enlaces.js';
import { TX } from '../textos.js';


export function Privacidad() {
  const { t } = usePrefs();
  return (
    <>
      <Portada etiqueta={t(TX.privacidad.legal)} titulo={t(TX.privacidad.privacidad)}>
        {t(TX.privacidad.estaWebNoTe)}
      </Portada>

      <Seccion etiqueta={t(TX.privacidad.actualizadaEl) + t(TX.privacidad.fecha)} titulo={t(TX.privacidad.loQueHayQue)}>
        <div className="texto texto--legal">
          <h3>{t(TX.privacidad.quienEstaDetras)}</h3>
          <p>{t(TX.privacidad.estaWebEsPersonal)}</p>

          <h3>{t(TX.privacidad.loQueSeGuarda)}</h3>
          <p>{t(TX.privacidad.soloTresPreferenciasQue)}</p>

          <h3>{t(TX.privacidad.loQueNoHay)}</h3>
          <p>{t(TX.privacidad.noHayCookiesNi)}</p>

          <h3>{t(TX.privacidad.siMeEscribes)}</h3>
          <p>{t(TX.privacidad.losBotonesDeCorreo)}</p>

          <h3>{t(TX.privacidad.elAlojamiento)}</h3>
          <p>{t(TX.privacidad.laWebEstaAlojada)}
            <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">{t(TX.privacidad.declaracionDePrivacidad)}</a>.</p>

          <h3>{t(TX.privacidad.losEnlacesAOtras)}</h3>
          <p>{t(TX.privacidad.losEnlacesAItch)}</p>

          <h3>{t(TX.privacidad.tusDerechos)}</h3>
          <p>{t(TX.privacidad.puedesPedirmeEnCualquier)}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">{t(TX.privacidad.agenciaEspanolaDeProteccion)}</a>.</p>

          <h3>{t(TX.privacidad.siEstoCambia)}</h3>
          <p>{t(TX.privacidad.siAlgunDiaLa)}</p>
        </div>
        {direccion() ? <div className="botones"><Boton onClick={() => escribir(t(TX.privacidad.privacidadWebDeRubi))} icono="correo">{t(TX.privacidad.escribirSobreMisDatos)}</Boton></div> : null}
      </Seccion>
    </>
  );
}
