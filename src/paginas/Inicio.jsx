// Inicio: quién es Rubi y qué hace, con la entrada a cada sección, lo que tiene entre manos (En el taller) y el apoyo.
import { usePrefs } from '../preferencias.jsx';
import { ENLACES } from '../enlaces.js';
import { Marca } from '../componentes/Marca.jsx';
import { Caja, Seccion, Tarjeta, Boton } from '../componentes/Comunes.jsx';
import tarjetaForja from '../assets/la-forja-tarjeta.jpg';
import captura from '../assets/mindforge.jpg';
import teclado from '../assets/teclados-tarjeta.jpg';
import { TX } from '../textos.js';

export function Inicio() {
  const { t } = usePrefs();
  return (
    <>
      <header className="portada portada--inicio">
        <Caja>
          <h1 className="visualmente-oculto">Rubi</h1>
          <Marca alto="clamp(4.5rem, 14vw, 9.5rem)" color="var(--sobre-marca)" className="marca--portada" />
          <p className="portada-texto">{t(TX.inicio.tecladosJuegosYAplicaciones)}</p>
        </Caja>
      </header>

      <Seccion etiqueta={t(TX.inicio.queHago)} titulo={t(TX.inicio.tresTalleresUnaMisma)}>
        <div className="rejilla rejilla--3">
          <Tarjeta a="/hardware" imagen={teclado} etiqueta="Hardware" titulo={t(TX.inicio.tecladosMecanicos)}
            accion={t(TX.inicio.verLosTeclados)}>
            {t(TX.inicio.tecladosPersonalizadosDistribucionCarcasa)}
          </Tarjeta>
          <Tarjeta a="/juegos" imagen={tarjetaForja} etiqueta={t(TX.inicio.videojuegos)} titulo={t(TX.inicio.juegos)}
            accion={t(TX.inicio.verLosJuegos)}>
            {t(TX.inicio.juegosPequenosYCuidados)}
          </Tarjeta>
          <Tarjeta a="/aplicaciones" imagen={captura} etiqueta="Software" titulo={t(TX.inicio.aplicaciones)}
            accion={t(TX.inicio.verLasAplicaciones)}>
            {t(TX.inicio.aplicacionesDeEscritorioPara)}
          </Tarjeta>
        </div>
      </Seccion>

      {TX.taller.cosas.length ? (
        <Seccion etiqueta={t(TX.taller.etiqueta)} titulo={t(TX.taller.titulo)} className="seccion--suave">
          <ul className="taller">
            {TX.taller.cosas.map(c => (
              <li key={c.titulo.es} className="taller-cosa">
                <span className="taller-brasa" aria-hidden="true" />
                <div><h3>{t(c.titulo)}</h3><p>{t(c.texto)}</p></div>
              </li>
            ))}
          </ul>
        </Seccion>
      ) : null}

      <Seccion etiqueta={t(TX.inicio.sobreMi)} titulo={t(TX.inicio.holaSoyRubi)}>
        <div className="texto">
          <p>{t(TX.inicio.programoSobreTodoCon)}</p>
          <p>{t(TX.inicio.estaWebReuneTodo)}</p>
        </div>
        {ENLACES.github || ENLACES.instagram ? (
          <div className="botones">
            {ENLACES.github ? <Boton href={ENLACES.github} icono="github">{t(TX.inicio.miCodigoEnGithub)}</Boton> : null}
            {ENLACES.instagram ? <Boton href={ENLACES.instagram} icono="instagram">{t(TX.inicio.instagram)}</Boton> : null}
          </div>
        ) : null}
      </Seccion>

      {ENLACES.donar ? (
        <Seccion etiqueta={t(TX.inicio.apoyo)} titulo={t(TX.inicio.teGustaLoQue)} className="seccion--suave">
          <div className="texto"><p>{t(TX.inicio.siQuieresEcharUna)}</p></div>
          <div className="botones"><Boton href={ENLACES.donar} icono="corazon" principal>{t(TX.inicio.apoyar)}</Boton></div>
        </Seccion>
      ) : null}
    </>
  );
}
