// MindForge: la página de la aplicación de escritorio (gratuita, código en GitHub). Los datos salen de su README
// (github.com/firoh86/mindforge); la captura se hizo con la propia app en el navegador, con un esquema de ejemplo.
import { usePrefs } from '../preferencias.jsx';
import { ENLACES } from '../enlaces.js';
import { Portada, Seccion, Boton } from '../componentes/Comunes.jsx';
import { Icono } from '../componentes/Iconos.jsx';
import captura from '../assets/mindforge.jpg';
import { TX } from '../textos.js';

export function MindForge() {
  const { t } = usePrefs();
  const rasgos = [
    ['ventana', t(TX.mindforge.nodosParaTodo), t(TX.mindforge.globosCuadrosDeTexto)],
    ['ramas', t(TX.mindforge.conexionesYJerarquia), t(TX.mindforge.flechasOrtogonalesEnUno)],
    ['guardar', t(TX.mindforge.todoSeGuardaSolo), t(TX.mindforge.espaciosDeTrabajoCon)],
    ['paleta', t(TX.mindforge.textoYColor), t(TX.mindforge.cuatroFuentesFormatoRapido)],
    ['pixel', 'Pixel art', t(TX.mindforge.lienzoAMedidaCon)],
    ['teclado', t(TX.mindforge.comodoDeUsar), t(TX.mindforge.minimapaExportarLaVista)],
  ];
  return (
    <>
      <Portada etiqueta={t(TX.mindforge.aplicacionDeEscritorioGratis)} titulo="MindForge">
        {t(TX.mindforge.mapasMentalesFlujosY)}
      </Portada>

      <Seccion etiqueta={t(TX.mindforge.asiSeVe)} titulo={t(TX.mindforge.unaPizarraParaPensar)}>
        <div className="texto" style={{ marginBottom: '2rem' }}>
          <p>{t(TX.mindforge.enElFondoEs)}</p>
        </div>
        <figure className="captura"><img src={captura} alt={t(TX.mindforge.mindforgeConUnEsquema)} /></figure>
      </Seccion>

      <Seccion etiqueta={t(TX.mindforge.queIncluye)} titulo={t(TX.mindforge.funciones)} className="seccion--suave">
        <div className="rejilla rejilla--3">
          {rasgos.map(([icono, titulo, texto]) => (
            <div key={titulo} className="rasgo"><Icono n={icono} className="rasgo-icono" /><h3>{titulo}</h3><p>{texto}</p></div>
          ))}
        </div>
      </Seccion>

      <Seccion etiqueta={t(TX.mindforge.descargar)} titulo={t(TX.mindforge.gratisConElCodigo)}>
        <div className="texto">
          <p>{t(TX.mindforge.mindforgeEsGratuitaY)}</p>
          {ENLACES.mindforgeDescarga ? <p>{t(TX.mindforge.paraWindows10Y)}</p> : <p>{t(TX.mindforge.porAhoraSeInstala)}</p>}
        </div>
        <div className="botones">
          {ENLACES.mindforgeDescarga ? <Boton href={ENLACES.mindforgeDescarga} icono="guardar" principal>{t(TX.mindforge.descargarParaWindows)}</Boton> : null}
          {ENLACES.mindforge ? <Boton href={ENLACES.mindforge} icono="github" principal={!ENLACES.mindforgeDescarga}>{t(TX.mindforge.verEnGithub)}</Boton> : null}
        </div>
      </Seccion>
    </>
  );
}
