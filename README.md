# La web de Rubi

Web personal de Rubi: teclados mecánicos personalizados (Hardware), videojuegos y aplicaciones de escritorio. React + Vite, sin más librerías. Modo claro y
oscuro, español e inglés.

## Empezar

    npm install
    npm run dev       # http://localhost:5173
    npm run build     # dist/, lista para subir a GitHub Pages

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Las direcciones de fuera (GitHub, Instagram, YouTube, donaciones, correo). Si una está vacía, su botón no sale. El correo va partido (usuario y dominio, sin @) para que no lo encuentren los programas de spam; se monta al pulsar | `src/enlaces.js` |
| Idioma y tema (se recuerdan en el navegador). En los componentes: `const { t } = usePrefs(); t('Hola', 'Hello')` | `src/preferencias.jsx` |
| Las rutas (`#/`, `#/hardware`, `#/juegos`, `#/juegos/la-forja`, `#/juegos/arcana-noir`, `#/aplicaciones`, `#/aplicaciones/mindforge`, `#/aplicaciones/wallpaper-solar`) y el título de cada página | `src/App.jsx`, `src/ruta.jsx` |
| Colores (rojo de marca `#880029`, gris del nombre `#e7e7e7`), tipografía y todos los estilos | `src/estilos.css` (las variables, arriba del todo) |
| Las páginas | `src/paginas/` (`Inicio`, `Teclados` (la de Hardware), `Juegos`, `LaForja`, `ArcanaNoir`, `Aplicaciones`, `MindForge`, `WallpaperSolar`) |
| Piezas comunes: cabecera, pie, botones, tarjetas, secciones, portadas, iconos, el nombre del logo | `src/componentes/` |
| El nombre «RubíKeys» (recortado del logo, sin «CANON»). Es una máscara: toma el color de donde está | `src/assets/rubikeys.png`, `componentes/Marca.jsx` |
| Fuentes (Josefin Sans e Inter, licencia OFL, dentro de la web) | `src/fuentes/` |

## Añadir una página

1. Crear `src/paginas/MiPagina.jsx` (copiar una que se parezca; los textos siempre con `t('es', 'en')`).
2. Añadirla en `PAGINAS` de `src/App.jsx` con su ruta y su título.
3. Si va en el menú, añadirla en `secciones` de `componentes/Cabecera.jsx`.

## Publicada

En **https://firoh86.github.io** desde el 19/11/2026 (repositorio `firoh86/firoh86.github.io`, GitHub Pages).
Se publica sola con cada `git push` a `main` (`.github/workflows/deploy.yml`: construye con `npm run build` y sube `dist/`).
Para actualizarla: `git add .` · `git commit -m "…"` · `git push`, y en uno o dos minutos está en línea (pestaña Actions del repositorio).

## Pendiente

- **Hardware · la línea de placas** (`src/teclados/placas.js`, 19/11): hechas *Mondongo RBK* (prototipo) y *Mondongo RBK · Rev1*. Quedan las siguientes placas. Por cada una: en KiCad, **Exportar → STEP/GLTF** con el archivo terminado en `.glb`, «Exportar pistas, pads y vías» marcado y «Exportar zonas» sin marcar, guardado en `teclados/NN-nombre.glb`; Claude lo aligera, le pone el barniz morado y saca la miniatura. Si faltan modelos 3D en huellas iguales, Claude los copia en el `.kicad_pcb`.
- Repasar las descripciones de las placas (Rubi las afinará más adelante).
- Reorganizar las librerías de KiCad (huellas y modelos 3D) en unas generales, con una sola variable de ruta.
- Los archivos grandes de `teclados/` (los `.step` y los `.glb` sin aligerar) no se usan en la web: guardarlos fuera o borrarlos antes de subirla. Lo que usa la web está en `public/teclados/`.
- ~~Revisar las letras y sus tiempos del disco~~: hecho por Rubi el 18/11, las 7 canciones (`src/disco/canciones.js`).
- **Al acabar las letras, actualizar las descripciones de los vídeos de YouTube** con las letras corregidas (los subtítulos ya están bien; la letra de la descripción no). Las 7 letras sin tiempos, listas para pegar: `letras_youtube.txt` (sacadas de `canciones.js` el 18/11; si se vuelven a tocar, pedirle a Claude que lo regenere).
- MindForge: con cada versión nueva, actualizar `mindforgeDescarga` en `enlaces.js` (el nombre del instalador lleva la versión). Su captura (`src/assets/mindforge.jpg`) se hizo con la app en el navegador y un esquema de ejemplo.
- ~~Wallpaper Solar en Aplicaciones~~: hecho el 23/11 (Aplicaciones → Wallpaper Solar, con la simulación para probar en el navegador). **Para actualizarla** con una versión nueva: en el proyecto `wallpaper-solar`, `npm --prefix web run build:web`, y copiar lo que hay dentro de `web/dist-web/` a `public/wallpaper-solar/jugar/` (borrando antes lo que había). Con cada instalador nuevo, actualizar `wallpaperSolarDescarga` en `enlaces.js`.
- El logo usa la fuente Notera 2 (licencia solo personal): comprar la licencia comercial antes de usarlo en algo con anuncios o ventas.
- Dominio propio y GitHub Pages (ver `La_Forja_docs/diseno/hoja_de_ruta_versiones.md`). Con anuncios: página de privacidad y aviso de cookies.
- ~~La Forja jugable dentro de su página~~: hecha el 19/11 (Juegos → La Forja, «Juega en el navegador»; 3 partidas al día, sin Extras). **Para actualizarla** con una versión nueva del juego: en el proyecto del juego, `npm run build:web`, y copiar lo que hay dentro de `dist-web/` a `public/laforja/jugar/` (borrando antes lo que había).
- ~~Arcana Noir en Juegos~~: hecho el 25/11 (Juegos → Arcana Noir, con la demo jugable: hasta el segundo demonio, sin guardar nada). **Para actualizar la demo**: en el proyecto del juego, `GENERAR_DEMO.bat` (o `npm run build:demo`), y copiar `Arcana Noir/Web/ArcanaNoir_demo.html` a `public/arcana-noir/jugar/index.html`. **Cuando salga en itch.io**: poner su dirección en `itchArcana` (`enlaces.js`): la página pasa sola a «Ya en itch.io» con el botón de compra. En `textos.js` (`taller.cosas`) cambiar la entrada de Arcana Noir.
- **Kit de prensa de La Forja** (propuesta 4, 19/11): una página con el logo, capturas, el tráiler, la ficha (precio, plataformas, fecha) y un texto corto para medios y creadores, todo descargable.
- **«Sobre mí / Historias del taller»** (propuesta 5, 19/11): una sección o devlog con entradas cortas de cómo nacen las placas y el juego (fotos del proceso, errores, el Mondongo, el Canon girado 15°…).
- **En el taller** (Inicio): actualizar la lista en `textos.js` (`taller.cosas`) cuando algo se acabe o empiece.
