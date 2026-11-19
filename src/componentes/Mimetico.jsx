// El Mimético escondido (19/11/2026, idea de Rubi): de vez en cuando, al entrar en una página, una carta de tinta de La
// Forja se esconde en algún rincón. Si alguien la toca, estalla en tinta con «+1», como al recogerla en el juego
// (proyecto: src/ui/pantallas/Inicio.jsx, estallido). Los encontrados se cuentan en este navegador, solo por diversión.
import { useEffect, useRef, useState } from 'react';
import { usePrefs } from '../preferencias.jsx';
import { useRuta } from '../ruta.jsx';

const PROBABILIDAD = 0.12;   // en una de cada ~8 páginas
const leer = () => { try { return +localStorage.getItem('rubi.mimeticos') || 0; } catch (e) { return 0; } };
const guardar = n => { try { localStorage.setItem('rubi.mimeticos', String(n)); } catch (e) { /* sin almacenamiento */ } };

/** La carta encoge y estalla en gotas de tinta, y sube un «+1» (copiado del juego). */
function estallido(carta, giro, alAcabar) {
  const caja = carta.parentElement, cx = carta.offsetLeft + carta.offsetWidth / 2, cy = carta.offsetTop + carta.offsetHeight / 2, u = carta.offsetWidth / 6.2;
  const base = `rotate(${giro}deg)`;
  const an = carta.animate([{ transform: base + ' scale(1)', filter: 'brightness(1)' }, { transform: base + ' scale(1.12) rotate(-4deg)', filter: 'brightness(1.8)', offset: .3 },
    { transform: base + ' scale(0) rotate(40deg)', filter: 'brightness(2.4)' }], { duration: 380, easing: 'cubic-bezier(.5,0,.8,.4)', fill: 'forwards' });
  an.onfinish = () => {
    for (const [color, n] of [['#b9a4ff', 12], ['#3a3448', 8], ['#ffffff', 5]]) for (let i = 0; i < n; i++) {
      const d = document.createElement('i'), a = Math.random() * Math.PI * 2, r = u * (3 + Math.random() * 6), t = u * (.5 + Math.random() * .9);
      d.className = 'mimetico-chispa'; d.style.cssText = `left:${cx}px;top:${cy}px;width:${t}px;height:${t}px;background:${color}`;
      caja.appendChild(d);
      d.animate([{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 }, { transform: `translate(calc(-50% + ${Math.cos(a) * r}px), calc(-50% + ${Math.sin(a) * r}px)) scale(.2)`, opacity: 0 }],
        { duration: 500 + Math.random() * 350, easing: 'cubic-bezier(.1,.7,.3,1)', fill: 'forwards' }).onfinish = () => d.remove();
    }
    const mas = document.createElement('span'); mas.className = 'mimetico-mas'; mas.textContent = '+1'; mas.style.cssText = `left:${cx}px;top:${cy}px`;
    caja.appendChild(mas);
    mas.animate([{ transform: 'translate(-50%,-50%)', opacity: 0 }, { opacity: 1, offset: .15 }, { transform: `translate(-50%, calc(-50% - ${u * 5}px))`, opacity: 0 }],
      { duration: 1100, easing: 'ease-out', fill: 'forwards' }).onfinish = () => { mas.remove(); alAcabar(); };
  };
}

export function MimeticoEscondido() {
  const { t } = usePrefs(), ruta = useRuta();
  const carta = useRef(null);
  const [sitio, setSitio] = useState(null), [aviso, setAviso] = useState(null);

  // en cada página nueva, a veces aparece: en un lateral, a una altura al azar de la página, algo girado
  useEffect(() => {
    setSitio(null); setAviso(null);
    if (Math.random() >= PROBABILIDAD) return;
    const id = setTimeout(() => {
      const alto = document.documentElement.scrollHeight;
      setSitio({ y: Math.round(alto * (0.25 + Math.random() * 0.55)), izquierda: Math.random() < 0.5, giro: Math.round(Math.random() * 50 - 25) });
    }, 600);   // cuando la página ya tiene su alto
    return () => clearTimeout(id);
  }, [ruta]);

  if (!sitio && !aviso) return null;
  const recoger = () => {
    const n = leer() + 1; guardar(n);
    const el = carta.current, fin = () => { setSitio(null); setAviso(n); setTimeout(() => setAviso(null), 3200); };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) fin(); else estallido(el, sitio.giro, fin);
  };
  return (
    <div className="mimetico-capa" aria-live="polite">
      {sitio ? (
        <button ref={carta} type="button" className={'mimetico' + (sitio.izquierda ? ' mimetico--izq' : ' mimetico--der')}
          style={{ top: sitio.y + 'px', transform: `rotate(${sitio.giro}deg)` }} onClick={recoger}
          aria-label={t('Un Mimético de tinta se ha escondido aquí. Recógelo', 'An Ink Mimic is hiding here. Collect it')} />
      ) : null}
      {aviso ? <p className="mimetico-aviso">{aviso === 1 ? t('¡Has encontrado un Mimético!', 'You found a Mimic!') : t(`¡Mimético encontrado! Llevas ${aviso}.`, `Mimic found! That’s ${aviso}.`)}</p> : null}
    </div>
  );
}
