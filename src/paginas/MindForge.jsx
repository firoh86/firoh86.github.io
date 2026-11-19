// MindForge: la página de la aplicación de escritorio (gratuita, código en GitHub). Los datos salen de su README
// (github.com/firoh86/mindforge); la captura se hizo con la propia app en el navegador, con un esquema de ejemplo.
import { usePrefs } from '../preferencias.jsx';
import { ENLACES } from '../enlaces.js';
import { Portada, Seccion, Boton } from '../componentes/Comunes.jsx';
import { Icono } from '../componentes/Iconos.jsx';
import captura from '../assets/mindforge.jpg';

export function MindForge() {
  const { t } = usePrefs();
  const rasgos = [
    ['ventana', t('Nodos para todo', 'Nodes for everything'), t('Globos, cuadros de texto, comentarios plegables, tareas con subtareas, paletas de color, imágenes con recorte y pixel art.', 'Bubbles, text boxes, foldable comments, tasks with subtasks, color palettes, images with cropping and pixel art.')],
    ['ramas', t('Conexiones y jerarquía', 'Connections and hierarchy'), t('Flechas ortogonales en uno o dos sentidos, con texto y grosor; ramas plegables y grupos de cuadros de texto.', 'Orthogonal arrows one or both ways, with labels and thickness; foldable branches and text box groups.')],
    ['guardar', t('Todo se guarda solo', 'Everything saves itself'), t('Espacios de trabajo con recientes, archivos .json vinculados, autoguardado y respaldos automáticos. Todo en local.', 'Workspaces with recents, linked .json files, autosave and automatic backups. All local.')],
    ['paleta', t('Texto y color', 'Text and color'), t('Cuatro fuentes, formato rápido, tema claro y oscuro, color de acento, rueda de color, pipeta y paletas de hasta 50 colores.', 'Four fonts, quick formatting, light and dark theme, accent color, color wheel, eyedropper and palettes of up to 50 colors.')],
    ['pixel', 'Pixel art', t('Lienzo a medida con lápiz, goma, cubo, selección, dos capas, modo mosaico y exportación PNG ampliada.', 'Custom canvas with pencil, eraser, bucket, selection, two layers, tile mode and upscaled PNG export.')],
    ['teclado', t('Cómodo de usar', 'Comfortable to use'), t('Minimapa, exportar la vista a PNG, barra que se acopla a cualquier borde, atajos de teclado y español e inglés.', 'Minimap, export the view to PNG, a toolbar that docks to any edge, keyboard shortcuts, and English and Spanish.')],
  ];
  return (
    <>
      <Portada etiqueta={t('Aplicación de escritorio · gratis', 'Desktop app · free')} titulo="MindForge">
        {t('Mapas mentales, flujos y esquemas en una pizarra infinita. Pensada para quien hace juegos indie, con nodos de pixel art y paletas de color, y útil para ordenar cualquier idea.', 'Mind maps, flows and diagrams on an endless board. Made for indie game developers, with pixel art nodes and color palettes, and handy for organizing any idea.')}
      </Portada>

      <Seccion etiqueta={t('Así se ve', 'What it looks like')} titulo={t('Una pizarra para pensar', 'A board to think on')}>
        <div className="texto" style={{ marginBottom: '2rem' }}>
          <p>{t('En el fondo es un mapa mental: globos unidos por flechas para sacar las ideas de la cabeza y ver cómo se relacionan. Encima lleva lo que necesita quien hace juegos: tareas con subtareas para el desarrollo, paletas de color y nodos de pixel art para bocetar sprites junto al resto del plan.', 'At heart it’s a mind map: bubbles joined by arrows to get ideas out of your head and see how they connect. On top, it has what game developers need: tasks with subtasks for development, color palettes and pixel art nodes to sketch sprites right next to the rest of the plan.')}</p>
        </div>
        <figure className="captura"><img src={captura} alt={t('MindForge con un esquema de ejemplo: un proyecto con sus ramas, una nota y una tarea con subtareas', 'MindForge with an example diagram: a project with its branches, a note and a task with subtasks')} /></figure>
      </Seccion>

      <Seccion etiqueta={t('Qué incluye', 'What’s inside')} titulo={t('Funciones', 'Features')} className="seccion--suave">
        <div className="rejilla rejilla--3">
          {rasgos.map(([icono, titulo, texto]) => (
            <div key={titulo} className="rasgo"><Icono n={icono} className="rasgo-icono" /><h3>{titulo}</h3><p>{texto}</p></div>
          ))}
        </div>
      </Seccion>

      <Seccion etiqueta={t('Descargar', 'Download')} titulo={t('Gratis, con el código a la vista', 'Free, with the code in the open')}>
        <div className="texto">
          <p>{t('MindForge es gratuita y su código está publicado en GitHub. Está hecha con Tauri, así que es ligera y funciona sin conexión.', 'MindForge is free and its code is published on GitHub. It’s built with Tauri, so it’s light and works offline.')}</p>
          {ENLACES.mindforgeDescarga ? <p>{t('Para Windows 10 y 11. Como aún no está firmada, Windows puede avisar al abrir el instalador: pulsa «Más información» y luego «Ejecutar de todas formas».', 'For Windows 10 and 11. Since it isn’t signed yet, Windows may warn you when you open the installer: click “More info” and then “Run anyway”.')}</p> : <p>{t('Por ahora se instala desde el código; el instalador listo para usar llegará pronto.', 'For now it installs from the source code; a ready-to-use installer is coming soon.')}</p>}
        </div>
        <div className="botones">
          {ENLACES.mindforgeDescarga ? <Boton href={ENLACES.mindforgeDescarga} icono="guardar" principal>{t('Descargar para Windows', 'Download for Windows')}</Boton> : null}
          {ENLACES.mindforge ? <Boton href={ENLACES.mindforge} icono="github" principal={!ENLACES.mindforgeDescarga}>{t('Ver en GitHub', 'View on GitHub')}</Boton> : null}
        </div>
      </Seccion>
    </>
  );
}
