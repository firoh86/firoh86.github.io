// La Forja: la página del juego. Lleva el diseño de la web (no el del juego), con un toque de brasa en la carta.
import { usePrefs } from '../preferencias.jsx';
import { useRef, useState } from 'react';
import { ENLACES, escribir, direccion } from '../enlaces.js';
import { Portada, Seccion, Boton } from '../componentes/Comunes.jsx';
import { Icono } from '../componentes/Iconos.jsx';
import { Disco } from '../componentes/Disco.jsx';

/** El reverso de una carta de La Forja, dibujado con CSS (para las tarjetas). */
import titulo from '../assets/la-forja-titulo.jpg';
import { TX } from '../textos.js';

export function LaForja() {
  const { t } = usePrefs();
  const modos = [
    ['mando', t(TX.laForja.contraTemple), t(TX.laForja.unRivalQueSe)],
    ['corazon', t(TX.laForja.conUnAmigo), t(TX.laForja.invitaConUnCodigo)],
    ['teclado', t(TX.laForja.shuffleYMazosEspejo), t(TX.laForja.reversosDesdeElPrincipio)],
  ];
  return (
    <>
      <Portada etiqueta={t(TX.laForja.juegoDeCartasPara)} titulo={t(TX.laForja.laForja)}>
        {t(TX.laForja.dosMovimientosCeroExcusas)}
      </Portada>

      <Seccion etiqueta={t(TX.laForja.elJuego)} titulo={t(TX.laForja.templaGiraVence)}>
        <div className="destacado">
          <figure className="destacado-imagen destacado-imagen--forja"><img src={titulo} alt={t(TX.laForja.laForjaUnaCarta)} /></figure>
          <div className="texto">
            <p>{t(TX.laForja.tusCartasLleganPor)}</p>
            <p>{t(TX.laForja.laCartaQueSe)}</p>
            <p>{t(TX.laForja.atacaDefiendeCongelaPetrifica)}</p>
          </div>
        </div>
      </Seccion>

      <JugarAqui />

      <Seccion etiqueta={t(TX.laForja.comoJugar)} titulo={t(TX.laForja.modos)}>
        <div className="rejilla rejilla--3">
          {modos.map(([icono, titulo, texto]) => (
            <div key={titulo} className="rasgo"><Icono n={icono} className="rasgo-icono" /><h3>{titulo}</h3><p>{texto}</p></div>
          ))}
        </div>
      </Seccion>

      <Seccion etiqueta={t(TX.laForja.bandaSonora)} titulo={t(TX.laForja.unDiscoParaEl)} className="seccion--suave">
        <Disco pie={ENLACES.disco || ENLACES.youtube ? <div className="botones botones--junto"><Boton href={ENLACES.disco || ENLACES.youtube} icono="youtube">{t(TX.laForja.tambienEnYoutube)}</Boton></div> : null}>
          <div className="texto">
            <p>{t(TX.laForja.laForjaTieneSu)}</p>
          </div>
        </Disco>
      </Seccion>

      <Seccion etiqueta={t(TX.laForja.dondeJugar)} titulo={t(TX.laForja.yaEnPc)}>
        <div className="texto">
          <p>{t(TX.laForja.laVersion10)}</p>
        </div>
        <div className="botones">
          {ENLACES.itchJuego ? <Boton href={ENLACES.itchJuego} icono="mando" principal>{t(TX.laForja.comprarEnItchIo)}</Boton> : null}
          {ENLACES.donar ? <Boton href={ENLACES.donar} icono="corazon">{t(TX.laForja.apoyarElDesarrollo)}</Boton> : null}
        </div>
      </Seccion>

      {direccion() ? <Fallos /> : null}
    </>
  );
}

// La versión web del juego (19/11/2026), dentro de la página: 3 partidas al día, sin Extras (en el proyecto del juego,
// src/plataforma/demo.js y `npm run build:web`; lo compilado se copia a public/laforja/jugar/). No se carga hasta que
// alguien pulsa «Jugar aquí» (pesa ~20 MB con la música). Se abre en el idioma de la web la primera vez.
function JugarAqui() {
  const { t, idioma } = usePrefs(), [abierto, setAbierto] = useState(false), marco = useRef(null);
  const src = `./laforja/jugar/index.html?idioma=${idioma}`;
  // al pasarlo a otra pestaña, el de la página se cierra: si no, quedan dos juegos abiertos a la vez (y dos músicas)
  const otraPestana = () => { window.open(src, '_blank', 'noopener'); setAbierto(false); };
  const completa = () => { const el = marco.current, f = el && (el.requestFullscreen || el.webkitRequestFullscreen); if (f) f.call(el); };
  return (
    <Seccion etiqueta={t(TX.laForjaWeb.etiqueta)} titulo={t(TX.laForjaWeb.titulo)} className="seccion--suave">
      <div className="texto"><p>{t(TX.laForjaWeb.texto)}</p></div>
      <div className="juego-web">
        {abierto
          ? <iframe ref={marco} src={src} title={t(TX.laForja.laForja)} allow="fullscreen; autoplay; clipboard-write" allowFullScreen />
          : <button type="button" className="juego-web-portada" style={{ backgroundImage: `url(${titulo})` }} onClick={() => setAbierto(true)}>
              <span className="boton boton--principal"><Icono n="mando" /><span>{t(TX.laForjaWeb.jugar)}</span></span>
            </button>}
      </div>
      {abierto ? (
        <div className="botones botones--junto">
          <Boton onClick={completa} icono="pantalla">{t(TX.laForjaWeb.pantallaCompleta)}</Boton>
          <Boton onClick={otraPestana} icono="ventana">{t(TX.laForjaWeb.otraPestana)}</Boton>
        </div>
      ) : null}
      <p className="nota">{t(TX.laForjaWeb.nota)}</p>
    </Seccion>
  );
}

// «¿Has encontrado un fallo?» (18/11/2026): abre el correo con un asunto y una plantilla para que el aviso llegue con lo
// necesario. Si quien lo pulsa no tiene programa de correo, debajo aparece la dirección (montada al pulsar, nunca antes).
function Fallos() {
  const { t } = usePrefs(), [visto, setVisto] = useState(false);
  const avisar = () => {
    escribir(t(TX.laForja.laForjaFallo), t(TX.laForja.queHaPasadoN));
    setVisto(true);
  };
  return (
    <Seccion etiqueta={t(TX.laForja.ayudameAMejorarlo)} titulo={t(TX.laForja.hasEncontradoUnFallo)} className="seccion--suave">
      <div className="texto">
        <p>{t(TX.laForja.siAlgoNoFunciona)}</p>
      </div>
      <div className="botones"><Boton onClick={avisar} icono="bicho" principal>{t(TX.laForja.avisarDeUnFallo)}</Boton></div>
      {visto ? <p className="nota">{t(TX.laForja.noSeHaAbierto)}<b>{direccion()}</b>{t(TX.laForja.conElAsuntoLa)}</p> : null}
    </Seccion>
  );
}
