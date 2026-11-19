// La Forja: la página del juego. Lleva el diseño de la web (no el del juego), con un toque de brasa en la carta.
import { usePrefs } from '../preferencias.jsx';
import { useState } from 'react';
import { ENLACES, escribir, direccion } from '../enlaces.js';
import { Portada, Seccion, Boton } from '../componentes/Comunes.jsx';
import { Icono } from '../componentes/Iconos.jsx';
import { Disco } from '../componentes/Disco.jsx';

/** El reverso de una carta de La Forja, dibujado con CSS (para las tarjetas). */
import titulo from '../assets/la-forja-titulo.jpg';

export function LaForja() {
  const { t } = usePrefs();
  const modos = [
    ['mando', t('Contra Temple', 'Against Temper'), t('Un rival que se ajusta a tu nivel partida a partida: siete peldaños de piedra, de Arenisca a Obsidiana, para que cada partida esté reñida.', 'A rival who adjusts to your level game by game: seven steps of stone, from Sandstone to Obsidian, so every match stays close.')],
    ['corazon', t('Con un amigo', 'With a friend'), t('Invita con un código de sala y jugad desde dos dispositivos, cada uno con su mesa.', 'Invite with a room code and play from two devices, each with your own table.')],
    ['teclado', t('Shuffle y mazos espejo', 'Shuffle and mirror decks'), t('Reversos desde el principio para partidas más locas, o los dos con el mismo mazo para que solo cuente cómo juegas.', 'Card backs from the start for wilder matches, or both with the same deck so only your play counts.')],
  ];
  return (
    <>
      <Portada etiqueta={t('Juego de cartas para dos', 'Card game for two')} titulo={t('La Forja', 'The Forge')}>
        {t('Dos movimientos. Cero excusas.', 'Every round weighs. Every temper counts.')}
      </Portada>

      <Seccion etiqueta={t('El juego', 'The game')} titulo={t('Templa, gira, vence', 'Temper, turn, win')}>
        <div className="destacado">
          <figure className="destacado-imagen destacado-imagen--forja"><img src={titulo} alt={t('La Forja: una carta con una F encendida junto al título del juego.', 'The Forge: a card with a glowing F next to the game’s title.')} /></figure>
          <div className="texto">
            <p>{t('Tus cartas llegan por una cinta y solo puedes jugar las tres primeras. Cada turno tienes dos movimientos, y cada carta que juegas hace avanzar la cinta.', 'Your cards arrive on a belt and you can only play the first three. Each turn you get two moves, and every card you play moves the belt forward.')}</p>
            <p>{t('La carta que se queda en la Forja se templa: +1 para siempre. Si cae sin templar, gira y vuelve por su otra cara.', 'The card that stays in the Forge gets tempered: +1 for good. If it falls untempered, it flips and comes back on its other face.')}</p>
            <p>{t('Ataca, defiende, congela, petrifica… y cuenta los turnos: cuando el contador llega a cero, empieza la muerte súbita.', 'Attack, defend, freeze, petrify… and count the turns: when the counter hits zero, sudden death begins.')}</p>
          </div>
        </div>
      </Seccion>

      <Seccion etiqueta={t('Cómo jugar', 'How to play')} titulo={t('Modos', 'Modes')} className="seccion--suave">
        <div className="rejilla rejilla--3">
          {modos.map(([icono, titulo, texto]) => (
            <div key={titulo} className="rasgo"><Icono n={icono} className="rasgo-icono" /><h3>{titulo}</h3><p>{texto}</p></div>
          ))}
        </div>
      </Seccion>

      <Seccion etiqueta={t('Banda sonora', 'Soundtrack')} titulo={t('Un disco para el juego', 'An album for the game')}>
        <Disco pie={ENLACES.disco || ENLACES.youtube ? <div className="botones botones--junto"><Boton href={ENLACES.disco || ENLACES.youtube} icono="youtube">{t('También en YouTube', 'Also on YouTube')}</Boton></div> : null}>
          <div className="texto">
            <p>{t('La Forja tiene su propio disco: siete canciones sobre el juego, sus cartas y cómo se hizo. Dale al play y escúchalo aquí mismo.', 'The Forge has its own album: seven songs about the game, its cards and how it was made. Hit play and listen right here.')}</p>
          </div>
        </Disco>
      </Seccion>

      <Seccion etiqueta={t('Dónde jugar', 'Where to play')} titulo={t('Ya en PC', 'Out now on PC')} className="seccion--suave">
        <div className="texto">
          <p>{t('La versión 1.0 ya está a la venta para Windows en itch.io. Después llegarán la Microsoft Store, Android y una versión gratis para jugar aquí, en el navegador.', 'Version 1.0 is out now for Windows on itch.io. The Microsoft Store, Android and a free version to play right here in your browser will follow.')}</p>
        </div>
        <div className="botones">
          {ENLACES.itchJuego ? <Boton href={ENLACES.itchJuego} icono="mando" principal>{t('Comprar en itch.io', 'Buy on itch.io')}</Boton> : null}
          {ENLACES.donar ? <Boton href={ENLACES.donar} icono="corazon">{t('Apoyar el desarrollo', 'Support development')}</Boton> : null}
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
    escribir(t('La Forja · fallo', 'The Forge · bug'), t(
      '¿Qué ha pasado?\n\n\n¿Qué estabas haciendo justo antes? (modo, rival, pantalla…)\n\n\n¿Pasa siempre o solo a veces?\n\n\nDispositivo y navegador:\n\n\n(Si puedes, adjunta una captura.)',
      'What happened?\n\n\nWhat were you doing right before? (mode, rival, screen…)\n\n\nDoes it always happen or only sometimes?\n\n\nDevice and browser:\n\n\n(If you can, attach a screenshot.)'));
    setVisto(true);
  };
  return (
    <Seccion etiqueta={t('Ayúdame a mejorarlo', 'Help me improve it')} titulo={t('¿Has encontrado un fallo?', 'Found a bug?')}>
      <div className="texto">
        <p>{t('Si algo no funciona como debería, cuéntamelo: qué pasó, qué estabas haciendo y, si puedes, una captura. Lo leo todo y lo arreglo en la siguiente versión.', 'If something doesn’t work as it should, tell me: what happened, what you were doing and, if you can, a screenshot. I read everything and fix it in the next version.')}</p>
      </div>
      <div className="botones"><Boton onClick={avisar} icono="bicho" principal>{t('Avisar de un fallo', 'Report a bug')}</Boton></div>
      {visto ? <p className="nota">{t('¿No se ha abierto tu correo? Escribe a ', 'Didn’t your email open? Write to ')}<b>{direccion()}</b>{t(' con el asunto «La Forja · fallo».', ' with the subject “The Forge · bug”.')}</p> : null}
    </Seccion>
  );
}
