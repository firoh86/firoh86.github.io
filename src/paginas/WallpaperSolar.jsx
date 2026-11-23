// Wallpaper Solar: la página del fondo de escritorio (gratis, código en github.com/firoh86/wallpaper-solar), con la
// simulación para probar en el navegador. Las capturas se hicieron con la propia simulación (Tierra seleccionada; la Luna
// en cuarto creciente con el Apolo 11).
import { useRef, useState } from 'react';
import { usePrefs } from '../preferencias.jsx';
import { ENLACES } from '../enlaces.js';
import { Portada, Seccion, Boton } from '../componentes/Comunes.jsx';
import { Icono } from '../componentes/Iconos.jsx';
import captura from '../assets/wallpaper-solar.jpg';
import capturaLuna from '../assets/wallpaper-solar-luna.jpg';
import { TX } from '../textos.js';

export function WallpaperSolar() {
  const { t } = usePrefs(), W = TX.wallpaperSolar;
  const rasgos = [
    ['sol', t(W.tiempoReal), t(W.tiempoRealTexto)],
    ['ramas', t(W.lunas), t(W.lunasTexto)],
    ['luna', t(W.luna), t(W.lunaRasgo)],
    ['pantalla', t(W.escritorio), t(W.escritorioTexto)],
    ['teclado', t(W.ligero), t(W.ligeroTexto)],
    ['guardar', t(W.limpio), t(W.limpioTexto)],
  ];
  return (
    <>
      <Portada etiqueta={t(W.etiqueta)} titulo="Wallpaper Solar">
        {t(W.portada)}
      </Portada>

      <Probar />

      <Seccion etiqueta={t(W.lunaEtiqueta)} titulo={t(W.lunaTitulo)}>
        <div className="destacado">
          <figure className="destacado-imagen"><img src={capturaLuna} alt={t(W.lunaAlt)} loading="lazy" /></figure>
          <div className="texto">
            <p>{t(W.lunaTexto1)}</p>
            <p>{t(W.lunaTexto2)}</p>
          </div>
        </div>
      </Seccion>

      <Seccion etiqueta={t(W.incluyeEtiqueta)} titulo={t(W.incluyeTitulo)} className="seccion--suave">
        <div className="rejilla rejilla--3">
          {rasgos.map(([icono, titulo, texto]) => (
            <div key={titulo} className="rasgo"><Icono n={icono} className="rasgo-icono" /><h3>{titulo}</h3><p>{texto}</p></div>
          ))}
        </div>
      </Seccion>

      <Seccion etiqueta={t(W.descargarEtiqueta)} titulo={t(W.descargarTitulo)}>
        <div className="texto">
          <p>{t(W.descargarTexto)}</p>
          {ENLACES.wallpaperSolarDescarga ? <p>{t(W.requisitos)}</p> : null}
        </div>
        <div className="botones">
          {ENLACES.wallpaperSolarDescarga ? <Boton href={ENLACES.wallpaperSolarDescarga} icono="guardar" principal>{t(W.descargarParaWindows)}</Boton> : null}
          {ENLACES.wallpaperSolar ? <Boton href={ENLACES.wallpaperSolar} icono="github" principal={!ENLACES.wallpaperSolarDescarga}>{t(W.verEnGithub)}</Boton> : null}
        </div>
        <p className="nota">{t(W.creditos)}</p>
      </Seccion>
    </>
  );
}

// La simulación en el navegador (versión web del proyecto: `npm run build:web` en wallpaper-solar/web; lo compilado se
// copia a public/wallpaper-solar/jugar/). No se carga hasta que alguien pulsa «Abrir la simulación» (~1,4 MB; las texturas
// de la Luna sólo al entrar en la vista lunar), y mientras está cerrada no gasta nada.
function Probar() {
  const { t } = usePrefs(), W = TX.wallpaperSolar, [abierto, setAbierto] = useState(false), marco = useRef(null);
  const src = `./wallpaper-solar/jugar/index.html?v=${__CONSTRUIDA__}`;   // v: ver vite.config.js
  // al pasarla a otra pestaña, la de la página se cierra: no tiene sentido tener dos simulaciones a la vez
  const otraPestana = () => { window.open(src, '_blank', 'noopener'); setAbierto(false); };
  const completa = () => { const el = marco.current, f = el && (el.requestFullscreen || el.webkitRequestFullscreen); if (f) f.call(el); };
  // al abrirla, el foco pasa a la simulación para que respondan las teclas (Espacio, F, L, Esc) sin tener que pulsar antes
  const cargada = () => { try { marco.current?.focus(); } catch (e) { /* nada */ } };
  return (
    <Seccion etiqueta={t(W.probarEtiqueta)} titulo={t(W.probarTitulo)} className="seccion--suave">
      <div className="texto"><p>{t(W.probarTexto)}</p></div>
      <div className="juego-web juego-web--solar">
        {abierto
          ? <iframe ref={marco} src={src} title={t(W.marcoTitulo)} allow="fullscreen" allowFullScreen onLoad={cargada} />
          : <button type="button" className="juego-web-portada" style={{ backgroundImage: `url(${captura})` }} onClick={() => setAbierto(true)} aria-label={t(W.abrir)}>
              <span className="boton boton--principal"><Icono n="sol" /><span>{t(W.abrir)}</span></span>
            </button>}
      </div>
      {abierto ? (
        <div className="botones botones--junto">
          <Boton onClick={completa} icono="pantalla">{t(W.pantallaCompleta)}</Boton>
          <Boton onClick={otraPestana} icono="ventana">{t(W.otraPestana)}</Boton>
        </div>
      ) : null}
      <p className="nota">{t(W.nota)}</p>
    </Seccion>
  );
}
