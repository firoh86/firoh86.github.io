// La Forja: la página del juego. Lleva el diseño de la web (no el del juego), con un toque de brasa en la carta.
import { usePrefs } from '../preferencias.jsx';
import { useState } from 'react';
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

      <Seccion etiqueta={t(TX.laForja.comoJugar)} titulo={t(TX.laForja.modos)} className="seccion--suave">
        <div className="rejilla rejilla--3">
          {modos.map(([icono, titulo, texto]) => (
            <div key={titulo} className="rasgo"><Icono n={icono} className="rasgo-icono" /><h3>{titulo}</h3><p>{texto}</p></div>
          ))}
        </div>
      </Seccion>

      <Seccion etiqueta={t(TX.laForja.bandaSonora)} titulo={t(TX.laForja.unDiscoParaEl)}>
        <Disco pie={ENLACES.disco || ENLACES.youtube ? <div className="botones botones--junto"><Boton href={ENLACES.disco || ENLACES.youtube} icono="youtube">{t(TX.laForja.tambienEnYoutube)}</Boton></div> : null}>
          <div className="texto">
            <p>{t(TX.laForja.laForjaTieneSu)}</p>
          </div>
        </Disco>
      </Seccion>

      <Seccion etiqueta={t(TX.laForja.dondeJugar)} titulo={t(TX.laForja.yaEnPc)} className="seccion--suave">
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

// «¿Has encontrado un fallo?» (18/11/2026): abre el correo con un asunto y una plantilla para que el aviso llegue con lo
// necesario. Si quien lo pulsa no tiene programa de correo, debajo aparece la dirección (montada al pulsar, nunca antes).
function Fallos() {
  const { t } = usePrefs(), [visto, setVisto] = useState(false);
  const avisar = () => {
    escribir(t(TX.laForja.laForjaFallo), t(TX.laForja.queHaPasadoN));
    setVisto(true);
  };
  return (
    <Seccion etiqueta={t(TX.laForja.ayudameAMejorarlo)} titulo={t(TX.laForja.hasEncontradoUnFallo)}>
      <div className="texto">
        <p>{t(TX.laForja.siAlgoNoFunciona)}</p>
      </div>
      <div className="botones"><Boton onClick={avisar} icono="bicho" principal>{t(TX.laForja.avisarDeUnFallo)}</Boton></div>
      {visto ? <p className="nota">{t(TX.laForja.noSeHaAbierto)}<b>{direccion()}</b>{t(TX.laForja.conElAsuntoLa)}</p> : null}
    </Seccion>
  );
}
