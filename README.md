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
| Las rutas (`#/`, `#/hardware`, `#/juegos`, `#/juegos/la-forja`, `#/aplicaciones`, `#/aplicaciones/mindforge`) y el título de cada página | `src/App.jsx`, `src/ruta.jsx` |
| Colores (rojo de marca `#880029`, gris del nombre `#e7e7e7`), tipografía y todos los estilos | `src/estilos.css` (las variables, arriba del todo) |
| Las páginas | `src/paginas/` (`Inicio`, `Teclados` (la de Hardware), `Juegos`, `LaForja`, `Aplicaciones`, `MindForge`) |
| Piezas comunes: cabecera, pie, botones, tarjetas, secciones, portadas, iconos, el nombre del logo | `src/componentes/` |
| El nombre «RubíKeys» (recortado del logo, sin «CANON»). Es una máscara: toma el color de donde está | `src/assets/rubikeys.png`, `componentes/Marca.jsx` |
| Fuentes (Josefin Sans e Inter, licencia OFL, dentro de la web) | `src/fuentes/` |

## Añadir una página

1. Crear `src/paginas/MiPagina.jsx` (copiar una que se parezca; los textos siempre con `t('es', 'en')`).
2. Añadirla en `PAGINAS` de `src/App.jsx` con su ruta y su título.
3. Si va en el menú, añadirla en `secciones` de `componentes/Cabecera.jsx`.

## Pendiente

- **Hardware · la línea de placas** (`src/teclados/placas.js`, 19/11): hechas *Mondongo RBK* (prototipo) y *Mondongo RBK · Rev1*. Quedan las siguientes placas. Por cada una: en KiCad, **Exportar → STEP/GLTF** con el archivo terminado en `.glb`, «Exportar pistas, pads y vías» marcado y «Exportar zonas» sin marcar, guardado en `teclados/NN-nombre.glb`; Claude lo aligera, le pone el barniz morado y saca la miniatura. Si faltan modelos 3D en huellas iguales, Claude los copia en el `.kicad_pcb`.
- Repasar las descripciones de las placas (Rubi las afinará más adelante).
- Reorganizar las librerías de KiCad (huellas y modelos 3D) en unas generales, con una sola variable de ruta.
- Los archivos grandes de `teclados/` (los `.step` y los `.glb` sin aligerar) no se usan en la web: guardarlos fuera o borrarlos antes de subirla. Lo que usa la web está en `public/teclados/`.
- ~~Revisar las letras y sus tiempos del disco~~: hecho por Rubi el 18/11, las 7 canciones (`src/disco/canciones.js`).
- **Al acabar las letras, actualizar las descripciones de los vídeos de YouTube** con las letras corregidas (los subtítulos ya están bien; la letra de la descripción no). Las 7 letras sin tiempos, listas para pegar: `letras_youtube.txt` (sacadas de `canciones.js` el 18/11; si se vuelven a tocar, pedirle a Claude que lo regenere).
- MindForge: con cada versión nueva, actualizar `mindforgeDescarga` en `enlaces.js` (el nombre del instalador lleva la versión). Su captura (`src/assets/mindforge.jpg`) se hizo con la app en el navegador y un esquema de ejemplo.
- El logo usa la fuente Notera 2 (licencia solo personal): comprar la licencia comercial antes de usarlo en algo con anuncios o ventas.
- Dominio propio y GitHub Pages (ver `La_Forja_docs/diseno/hoja_de_ruta_versiones.md`). Con anuncios: página de privacidad y aviso de cookies.
- La Forja jugable dentro de su página, cuando esté la versión web.
