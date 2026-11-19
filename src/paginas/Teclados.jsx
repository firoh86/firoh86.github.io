// Hardware (teclados): una introducción y la línea de placas, de la más antigua a la más nueva, unidas por una línea
// vertical para que se vea cómo ha ido evolucionando (sin años). Al pulsar una placa se despliega su ficha: el modelo 3D
// para girarla, su descripción y sus características (18/11/2026, idea de Rubi). Los datos están en
// src/teclados/placas.js.
import { useState } from 'react';
import { usePrefs } from '../preferencias.jsx';
import { Portada, Seccion } from '../componentes/Comunes.jsx';
import { Visor3D } from '../componentes/Visor3D.jsx';
import { PLACAS } from '../teclados/placas.js';

function Placa({ p, n, abierta, alternar }) {
  const { t } = usePrefs(), tr = par => (par ? t(par[0], par[1]) : '');
  const id = 'placa-' + p.id;
  return (
    <li className={'placa' + (abierta ? ' placa--abierta' : '')}>
      <span className="placa-nodo" aria-hidden="true">{String(n).padStart(2, '0')}</span>
      <div className="placa-tarjeta">
        <button type="button" className="placa-cabeza" onClick={alternar} aria-expanded={abierta} aria-controls={id}>
          <span className="placa-miniatura">
            {p.imagen ? <img src={p.imagen} alt="" loading="lazy" /> : <span className="placa-pcb" />}
          </span>
          <span className="placa-texto">
            {p.etiqueta ? <span className="etiqueta">{tr(p.etiqueta)}</span> : null}
            <span className="placa-nombre">{p.nombre}</span>
            {p.resumen ? <span className="placa-resumen">{tr(p.resumen)}</span> : null}
          </span>
          <span className="placa-flecha" aria-hidden="true" />
        </button>
        <div className="placa-ficha" id={id} hidden={!abierta}>
          {abierta ? (
            <div className={'placa-ficha-dentro' + (p.modelo || p.imagen ? '' : ' placa-ficha-dentro--sola')}>
              {p.modelo || p.imagen ? <div className="placa-medios">
                {p.modelo ? <Visor3D src={p.modelo} desde={p.desde} alt={t('Modelo 3D de la placa ', '3D model of the board ') + p.nombre} />
                  : <img className="placa-imagen-grande" src={p.imagen} alt={p.nombre} />}
              </div> : null}
              <div className="placa-datos">
                {p.texto && p.texto.length ? <div className="texto">{p.texto.map(par => <p key={par[0]}>{tr(par)}</p>)}</div> : null}
                {p.ficha && p.ficha.length ? <ul className="lista-ficha">{p.ficha.map(par => <li key={par[0]}>{tr(par)}</li>)}</ul> : null}
                {p.nota ? <p className="placa-nota">{tr(p.nota)}</p> : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export function Teclados() {
  const { t } = usePrefs();
  const [abierta, setAbierta] = useState(null);   // al entrar, todas cerradas
  return (
    <>
      <Portada etiqueta={t('Hardware', 'Hardware')} titulo={t('Teclados mecánicos', 'Mechanical keyboards')}>
        {t('Teclados hechos a medida: la distribución, la carcasa, el ángulo y el tacto, pensados para escribir a gusto muchas horas.', 'Keyboards made to measure: layout, case, angle and feel, designed for long hours of comfortable typing.')}
      </Portada>

      <Seccion etiqueta={t('El taller', 'The workshop')} titulo={t('De placa en placa', 'Board by board')}>
        <div className="texto" style={{ marginBottom: '3rem' }}>
          <p>{t('Cada teclado empieza en una placa: el circuito que diseño en KiCad, con su distribución de teclas, sus conexiones y el microcontrolador. Aquí están en orden, de la primera a la última, para que se vea cómo han ido cambiando. Pulsa una para abrir su ficha y girar su modelo 3D.', 'Every keyboard starts as a board: the circuit I design in KiCad, with its key layout, its connections and the microcontroller. Here they are in order, from the first to the latest, so you can see how they have changed. Tap one to open its sheet and spin its 3D model.')}</p>
        </div>
        <ol className="linea-placas">
          {PLACAS.map((p, i) => <Placa key={p.id} p={p} n={i + 1} abierta={abierta === p.id} alternar={() => setAbierta(abierta === p.id ? null : p.id)} />)}
          <li className="placa placa--siguiente"><span className="placa-nodo" aria-hidden="true" /><p>{t('La siguiente, en el taller.', 'The next one, in the workshop.')}</p></li>
        </ol>
      </Seccion>
    </>
  );
}
