// Arcana Noir: la página del juego (25/11/2026). Lleva el diseño de la web, con la demo jugable dentro.
import { usePrefs } from '../preferencias.jsx';
import { useRef, useState } from 'react';
import { ENLACES } from '../enlaces.js';
import { Portada, Seccion, Boton } from '../componentes/Comunes.jsx';
import { Icono } from '../componentes/Iconos.jsx';
import titulo from '../assets/arcana-noir-titulo.jpg';
import portada from '../assets/arcana-noir-portada.jpg';
import { TX } from '../textos.js';

export function ArcanaNoir() {
  const { t } = usePrefs();
  const rasgos = [
    ['luna', t(TX.arcanaNoir.lunasTitulo), t(TX.arcanaNoir.lunasTexto)],
    ['ramas', t(TX.arcanaNoir.rodillosTitulo), t(TX.arcanaNoir.rodillosTexto)],
    ['carta', t(TX.arcanaNoir.reliquiasTitulo), t(TX.arcanaNoir.reliquiasTexto)],
  ];
  return (
    <>
      <Portada etiqueta={t(TX.arcanaNoir.etiqueta)} titulo="Arcana Noir">
        {t(TX.arcanaNoir.lema)}
      </Portada>

      <Seccion etiqueta={t(TX.arcanaNoir.elJuego)} titulo={t(TX.arcanaNoir.giraArriesgaPaga)}>
        <div className="destacado">
          <figure className="destacado-imagen destacado-imagen--arcana"><img src={titulo} alt={t(TX.arcanaNoir.altTitulo)} /></figure>
          <div className="texto">
            <p>{t(TX.arcanaNoir.parrafo1)}</p>
            <p>{t(TX.arcanaNoir.parrafo2)}</p>
            <p>{t(TX.arcanaNoir.parrafo3)}</p>
          </div>
        </div>
      </Seccion>

      <JugarAqui />

      <Seccion etiqueta={t(TX.arcanaNoir.comoSeJuega)} titulo={t(TX.arcanaNoir.elPacto)}>
        <div className="rejilla rejilla--3">
          {rasgos.map(([icono, titulo, texto]) => (
            <div key={titulo} className="rasgo"><Icono n={icono} className="rasgo-icono" /><h3>{titulo}</h3><p>{texto}</p></div>
          ))}
        </div>
      </Seccion>

      <Seccion etiqueta={t(TX.arcanaNoir.dondeJugar)} titulo={t(ENLACES.itchArcana ? TX.arcanaNoir.yaEnItch : TX.arcanaNoir.prontoEnItch)}>
        <div className="texto">
          <p>{t(ENLACES.itchArcana ? TX.arcanaNoir.textoALaVenta : TX.arcanaNoir.textoPronto)}</p>
        </div>
        <div className="botones">
          {ENLACES.itchArcana ? <Boton href={ENLACES.itchArcana} icono="mando" principal>{t(TX.arcanaNoir.comprarEnItch)}</Boton> : null}
          {ENLACES.donar ? <Boton href={ENLACES.donar} icono="corazon">{t(TX.arcanaNoir.apoyar)}</Boton> : null}
        </div>
      </Seccion>
    </>
  );
}

// La demo (25/11/2026): hasta el segundo demonio, sin guardar nada. En el proyecto del juego, GENERAR_DEMO.bat
// (o `npm run build:demo`) saca un único archivo que se copia aquí como public/arcana-noir/jugar/index.html.
// No se carga hasta que alguien pulsa «Jugar la demo». Se abre en el idioma de la web (?idioma=).
function JugarAqui() {
  const { t, idioma } = usePrefs(), [abierto, setAbierto] = useState(false), marco = useRef(null);
  const src = `./arcana-noir/jugar/index.html?idioma=${idioma}&v=${__CONSTRUIDA__}`;   // v: ver vite.config.js
  const otraPestana = () => { window.open(src, '_blank', 'noopener'); setAbierto(false); };
  const completa = () => { const el = marco.current, f = el && (el.requestFullscreen || el.webkitRequestFullscreen); if (f) f.call(el); };
  return (
    <Seccion etiqueta={t(TX.arcanaNoirWeb.etiqueta)} titulo={t(TX.arcanaNoirWeb.titulo)} className="seccion--suave">
      <div className="texto"><p>{t(TX.arcanaNoirWeb.texto)}</p></div>
      <div className="juego-web juego-web--vertical">
        {abierto
          ? <iframe ref={marco} src={src} title="Arcana Noir" allow="fullscreen; autoplay" allowFullScreen />
          : <button type="button" className="juego-web-portada" style={{ backgroundImage: `url(${portada})` }} onClick={() => setAbierto(true)}>
              <span className="boton boton--principal"><Icono n="mando" /><span>{t(TX.arcanaNoirWeb.jugar)}</span></span>
            </button>}
      </div>
      {abierto ? (
        <div className="botones botones--junto botones--centro">
          <Boton onClick={completa} icono="pantalla">{t(TX.laForjaWeb.pantallaCompleta)}</Boton>
          <Boton onClick={otraPestana} icono="ventana">{t(TX.laForjaWeb.otraPestana)}</Boton>
        </div>
      ) : null}
      <p className="nota">{t(TX.arcanaNoirWeb.nota)}</p>
    </Seccion>
  );
}
