// Inicio: quién es Rubi y qué hace, con la entrada a cada sección.
import { usePrefs } from '../preferencias.jsx';
import { ENLACES } from '../enlaces.js';
import { Marca } from '../componentes/Marca.jsx';
import { Caja, Seccion, Tarjeta, Boton } from '../componentes/Comunes.jsx';
import tarjetaForja from '../assets/la-forja-tarjeta.jpg';
import captura from '../assets/mindforge.jpg';
import teclado from '../assets/teclados-tarjeta.jpg';

export function Inicio() {
  const { t } = usePrefs();
  return (
    <>
      <header className="portada portada--inicio">
        <Caja>
          <h1 className="visualmente-oculto">Rubi</h1>
          <Marca alto="clamp(4.5rem, 14vw, 9.5rem)" color="var(--sobre-marca)" className="marca--portada" />
          <p className="portada-texto">{t('Teclados, juegos y aplicaciones, hechos a mano.', 'Keyboards, games and apps, handmade.')}</p>
        </Caja>
      </header>

      <Seccion etiqueta={t('Qué hago', 'What I make')} titulo={t('Tres talleres, una misma mano', 'Three workshops, one pair of hands')}>
        <div className="rejilla rejilla--3">
          <Tarjeta a="/hardware" imagen={teclado} etiqueta="Hardware" titulo={t('Teclados mecánicos', 'Mechanical keyboards')}
            accion={t('Ver los teclados', 'See the keyboards')}>
            {t('Teclados personalizados: distribución, carcasa y acabados pensados para escribir a gusto.', 'Custom keyboards: layout, case and finish designed for typing that feels right.')}
          </Tarjeta>
          <Tarjeta a="/juegos" imagen={tarjetaForja} etiqueta={t('Videojuegos', 'Video games')} titulo={t('Juegos', 'Games')}
            accion={t('Ver los juegos', 'See the games')}>
            {t('Juegos pequeños y cuidados, de las reglas a la música. El primero: La Forja, un juego de cartas para dos.', 'Small, carefully made games, from the rules to the music. The first one: The Forge, a card game for two.')}
          </Tarjeta>
          <Tarjeta a="/aplicaciones" imagen={captura} etiqueta="Software" titulo={t('Aplicaciones', 'Apps')}
            accion={t('Ver las aplicaciones', 'See the apps')}>
            {t('Aplicaciones de escritorio para el día a día. La primera: MindForge, mapas mentales y esquemas, gratis.', 'Desktop apps for everyday use. The first one: MindForge, free mind maps and diagrams.')}
          </Tarjeta>
        </div>
      </Seccion>

      <Seccion etiqueta={t('Sobre mí', 'About me')} titulo={t('Hola, soy Rubi', 'Hi, I’m Rubi')} className="seccion--suave">
        <div className="texto">
          <p>{t('Programo, sobre todo con React y Node, y me gusta hacer cosas que se puedan tocar, jugar y usar: teclados mecánicos a medida, videojuegos y aplicaciones.', 'I write code, mostly with React and Node, and I like making things you can touch, play and use: custom mechanical keyboards, video games and apps.')}</p>
          <p>{t('Esta web reúne todo lo que voy haciendo. Cada proyecto tiene su página.', 'This site gathers everything I make. Each project has its own page.')}</p>
        </div>
        {ENLACES.github || ENLACES.instagram ? (
          <div className="botones">
            {ENLACES.github ? <Boton href={ENLACES.github} icono="github">{t('Mi código en GitHub', 'My code on GitHub')}</Boton> : null}
            {ENLACES.instagram ? <Boton href={ENLACES.instagram} icono="instagram">{t('Instagram', 'Instagram')}</Boton> : null}
          </div>
        ) : null}
      </Seccion>

      {ENLACES.donar ? (
        <Seccion etiqueta={t('Apoyo', 'Support')} titulo={t('¿Te gusta lo que hago?', 'Like what I make?')}>
          <div className="texto"><p>{t('Si quieres echar una mano para que salgan más teclados y más juegos, puedes apoyarme con una donación.', 'If you’d like to help more keyboards and games come out, you can support me with a donation.')}</p></div>
          <div className="botones"><Boton href={ENLACES.donar} icono="corazon" principal>{t('Apoyar', 'Support')}</Boton></div>
        </Seccion>
      ) : null}
    </>
  );
}
