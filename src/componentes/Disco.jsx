// El reproductor del disco de La Forja (18/11/2026, idea de Rubi): se escucha sin salir de la web. Un vinilo con el logo
// del juego que gira mientras suena (y se queda quieto donde estaba al pausar), los controles, la lista de canciones y
// la letra. Las canciones y sus letras están en src/disco/canciones.js; los audios, en public/disco/.
import { useEffect, useMemo, useRef, useState } from 'react';
import { usePrefs } from '../preferencias.jsx';
import { CANCIONES, versos } from '../disco/canciones.js';
import etiqueta from '../assets/etiqueta-forja.jpg';

const RUTA = './disco/';
const reloj = s => { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };

const Simbolo = ({ n }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="disco-simbolo">
    {n === 'play' ? <path d="M8 5.5v13l10.5-6.5z" /> : null}
    {n === 'pausa' ? <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /> : null}
    {n === 'atras' ? <path d="M6 5h2.2v14H6zM19 5.5v13L9.5 12z" /> : null}
    {n === 'adelante' ? <path d="M15.8 5H18v14h-2.2zM5 5.5v13L14.5 12z" /> : null}
    {n === 'volumen' || n === 'mudo' ? <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" /> : null}
    {n === 'volumen' ? <path d="M15 9a4 4 0 0 1 0 6M17.5 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /> : null}
    {n === 'mudo' ? <path d="M15.5 9.5l5 5M20.5 9.5l-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /> : null}
  </svg>
);

// el volumen se recuerda en este navegador (solo es una comodidad: si no se puede guardar, empieza al 80 %)
const leerVolumen = () => { try { const v = parseFloat(localStorage.getItem('rubi.volumen')); return v >= 0 && v <= 1 ? v : 0.8; } catch (e) { return 0.8; } };
const guardarVolumen = v => { try { localStorage.setItem('rubi.volumen', String(v)); } catch (e) { /* sin almacenamiento */ } };

/** El vinilo: surcos y la etiqueta con la carta de La Forja (gira); encima, quietos, el brillo y el eje metálico del
 *  tocadiscos. La sombra es del conjunto, no del disco, para que no dé vueltas con él. */
export function Vinilo({ sonando }) {
  return (
    <div className={'vinilo' + (sonando ? ' vinilo--sonando' : '')} aria-hidden="true">
      <div className="vinilo-disco">
        <div className="vinilo-etiqueta" style={{ backgroundImage: `url(${etiqueta})` }} />
      </div>
      <div className="vinilo-brillo" />
      <div className="vinilo-eje" />
    </div>
  );
}

export function Disco({ children, pie }) {
  const { t } = usePrefs();
  const audio = useRef(null), letraCaja = useRef(null);
  const [pista, setPista] = useState(0), [sonando, setSonando] = useState(false);
  const [tiempo, setTiempo] = useState(0), [vista, setVista] = useState('lista');
  const [volumen, setVolumen] = useState(leerVolumen), [mudo, setMudo] = useState(false);
  useEffect(() => { const a = audio.current; if (a) { a.volume = volumen; a.muted = mudo; } }, [volumen, mudo]);
  const c = CANCIONES[pista], duracion = c.duracion;
  const lineas = useMemo(() => versos(c.letra), [c]);
  const sincronizada = lineas.some(l => l.t != null);
  const actual = sincronizada ? lineas.reduce((a, l, i) => (l.t != null && l.t <= tiempo + 0.25 ? i : a), -1) : -1;

  const tocar = i => {
    const a = audio.current;
    if (i !== pista) { setPista(i); setTiempo(0); a.src = RUTA + CANCIONES[i].archivo; }
    a.play().catch(() => setSonando(false));
  };
  const alternar = () => { const a = audio.current; if (a.paused) tocar(pista); else a.pause(); };
  const anterior = () => { const a = audio.current; if (a.currentTime > 3 || pista === 0) { a.currentTime = 0; if (a.paused) tocar(pista); } else tocar(pista - 1); };
  const siguiente = () => { if (pista < CANCIONES.length - 1) tocar(pista + 1); };

  // al acabar una, la siguiente; al acabar el disco, vuelve a la primera y se para
  const alAcabar = () => { if (pista < CANCIONES.length - 1) tocar(pista + 1); else { setSonando(false); setPista(0); setTiempo(0); audio.current.src = RUTA + CANCIONES[0].archivo; } };

  // los controles del sistema (pantalla de bloqueo del móvil, teclas multimedia)
  useEffect(() => {
    const ms = navigator.mediaSession;
    if (!ms || typeof MediaMetadata === 'undefined') return;
    ms.metadata = new MediaMetadata({ title: c.titulo, artist: 'Rubi', album: t('La Forja · Banda sonora', 'The Forge · Soundtrack') });
    const acciones = { play: () => tocar(pista), pause: () => audio.current.pause(), previoustrack: anterior, nexttrack: siguiente };
    for (const [k, f] of Object.entries(acciones)) { try { ms.setActionHandler(k, f); } catch (e) { /* no soportada */ } }
  });

  // la línea que suena, a la vista dentro de su caja (sin mover la página)
  useEffect(() => {
    const caja = letraCaja.current, el = caja && caja.querySelector('.letra-linea--ahora');
    if (!el) return;
    // la posición de la línea dentro de la caja (no en la página: offsetTop la medía desde más arriba y se iba al final)
    const dentro = el.getBoundingClientRect().top - caja.getBoundingClientRect().top + caja.scrollTop;
    caja.scrollTo({ top: dentro - caja.clientHeight / 2 + el.clientHeight / 2, behavior: 'smooth' });
  }, [actual, vista]);

  const p = duracion ? Math.min(100, (100 * tiempo) / duracion) : 0;
  return (
    <div className="reproductor">
      <div className="reproductor-vinilo"><Vinilo sonando={sonando} /></div>
      <div className="reproductor-panel">
        {children}
        <div className="ahora">
          <span className="ahora-num">{String(pista + 1).padStart(2, '0')} / {String(CANCIONES.length).padStart(2, '0')}</span>
          <h3 className="ahora-titulo">{c.titulo}</h3>
        </div>
        <div className="mandos">
          <button type="button" className="mando" onClick={anterior} aria-label={t('Anterior', 'Previous')}><Simbolo n="atras" /></button>
          <button type="button" className="mando mando--principal" onClick={alternar} aria-label={sonando ? t('Pausa', 'Pause') : t('Reproducir', 'Play')}><Simbolo n={sonando ? 'pausa' : 'play'} /></button>
          <button type="button" className="mando" onClick={siguiente} disabled={pista === CANCIONES.length - 1} aria-label={t('Siguiente', 'Next')}><Simbolo n="adelante" /></button>
          {/* el volumen, a la derecha de los mandos: el altavoz silencia y la barra ajusta */}
          <div className="volumen">
            <button type="button" className="volumen-boton" onClick={() => setMudo(!mudo)} aria-label={mudo ? t('Activar sonido', 'Unmute') : t('Silenciar', 'Mute')} aria-pressed={mudo}>
              <Simbolo n={mudo || volumen === 0 ? 'mudo' : 'volumen'} />
            </button>
            <input type="range" min="0" max="1" step="0.01" value={mudo ? 0 : volumen} style={{ '--p': (mudo ? 0 : volumen * 100) + '%' }} aria-label={t('Volumen', 'Volume')}
              onChange={e => { const v = +e.target.value; setVolumen(v); setMudo(false); guardarVolumen(v); }} />
          </div>
        </div>
        <div className="barra">
          <span>{reloj(tiempo)}</span>
          <input type="range" min="0" max={duracion} step="0.1" value={tiempo} style={{ '--p': p + '%' }} aria-label={t('Posición en la canción', 'Position in the song')}
            onChange={e => { const v = +e.target.value; setTiempo(v); audio.current.currentTime = v; }} />
          <span>{reloj(duracion)}</span>
        </div>
        <div className="pestanas" role="tablist">
          <button type="button" role="tab" aria-selected={vista === 'lista'} className={vista === 'lista' ? 'activa' : ''} onClick={() => setVista('lista')}>{t('Canciones', 'Songs')}</button>
          <button type="button" role="tab" aria-selected={vista === 'letra'} className={vista === 'letra' ? 'activa' : ''} onClick={() => setVista('letra')}>{t('Letra', 'Lyrics')}</button>
        </div>
        {vista === 'lista' ? (
          <ol className="lista-canciones lista-canciones--reproductor">
            {CANCIONES.map((x, i) => (
              <li key={x.archivo} className={i === pista ? 'sonando' : ''}>
                <button type="button" onClick={() => (i === pista ? alternar() : tocar(i))} aria-current={i === pista ? 'true' : undefined}>
                  <span className="num">{i === pista && sonando ? <span className="ecualizador" aria-hidden="true"><i /><i /><i /></span> : String(i + 1).padStart(2, '0')}</span>
                  <span className="lista-titulo">{x.titulo}</span>
                  <span className="lista-dur">{reloj(x.duracion)}</span>
                </button>
              </li>
            ))}
          </ol>
        ) : (
          <div className={'letra' + (sincronizada ? ' letra--sincronizada' : '')} ref={letraCaja}>
            {lineas.length ? lineas.map((l, i) => (l.texto
              ? <p key={i} className={'letra-linea' + (i === actual ? ' letra-linea--ahora' : '') + (sincronizada && l.t != null ? ' letra-linea--salto' : '')}
                  onClick={sincronizada && l.t != null ? () => { audio.current.currentTime = l.t; setTiempo(l.t); if (audio.current.paused) tocar(pista); } : undefined}>{l.texto}</p>
              : <div key={i} className="letra-hueco" />))
              : <p className="letra-vacia">{t('La letra de esta canción llegará pronto.', 'The lyrics for this song are coming soon.')}</p>}
          </div>
        )}
        {pie}
      </div>
      <audio ref={audio} src={RUTA + CANCIONES[0].archivo} preload="metadata"
        onPlay={() => setSonando(true)} onPause={() => setSonando(false)} onEnded={alAcabar}
        onTimeUpdate={e => setTiempo(e.currentTarget.currentTime)} />
    </div>
  );
}
