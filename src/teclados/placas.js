// Las placas de Rubi, de la más antigua a la más nueva (18/11/2026): la línea de la página de Hardware. Se habla de las
// placas (el circuito), no del teclado entero: la caja, como mucho, en la nota.
//
// Para añadir una placa, copia un bloque y rellena lo que tengas; lo que se deje vacío no sale.
//   · imagen: la vista fija de la tarjeta cerrada: la cara delantera desde arriba, solo la mitad izquierda, con algo de aire
//             alrededor (en public/teclados/; Claude la saca del modelo)
//   · modelo: el 3D que se gira en la ficha (.glb), en public/teclados/. Se carga solo al abrir la ficha.
//   · desde:  la cara que se ve al abrirla; por defecto 'arriba' (la delantera, sin hotswaps). 'abajo' para la trasera
//   · texto:  uno o varios párrafos; ficha: la lista de características; nota: un apunte aparte (p. ej. sobre la caja)
//   · Los textos van en pares [español, inglés].

export const PLACAS = [
  {
    id: 'mondongo',
    nombre: 'Mondongo RBK',
    etiqueta: ['Prototipo · 65 % ISO · RP2040', 'Prototype · 65% ISO · RP2040'],
    resumen: ['El primer prototipo: un 65 % ISO con espacio partido, pensado para escribir, programar y jugar.', 'The prototype: a 65% ISO board with split spacebar and backspace, made for typing, coding and gaming.'],
    imagen: 'teclados/01-mondongo.jpg',   // vista desde arriba, la mitad izquierda: el adelanto de la tarjeta cerrada
    modelo: 'teclados/01-mondongo.glb',
    texto: [
      ['Su distribución parte del Leopold EC65, con la barra espaciadora partida y enter ISO. El software usa dos capas base que intercambian como funcionan los espacios: una para escribir y programar, en la que la mitad izquierda del espacio borra, y otra para jugar, en la que las dos mitades son espacio. Por encima van las capas de siempre: funciones y navegación.',
       'Its layout starts from the Leopold EC65, with a split spacebar and backspace. It has two base layers you switch between: one for typing and coding, where the left half of the spacebar deletes, and one for gaming, where both halves are space. On top sit the usual layers: function, RGB and navigation.'],
      ['Además del USB-C, lleva un conector Molex Pico-EZmate para usarla con una placa hija (daughterboard), pensada para un montaje gasket. Es la primera placa en la que probé los flex-cuts: cortes en la propia PCB para que flexione un poco al escribir.',
       'Besides USB-C, it has a Molex Pico-EZmate connector to use it with a daughterboard, designed for a gasket-mount build. It is the first board where I tried flex-cuts: slots in the PCB itself so it flexes a little as you type.'],
      ['Lo que aprendí: en el espacio partido usé estabilizadores de 2u. Existen teclas de 3u con estabilizador de 2u, pero cuesta mucho encontrarlas, y el molex no es tan estable como esperaba. Siendo la primera con ella aprendí lo básico.',
       'What I learned: the split spacebar uses 2u stabilizers. There are 3u keycaps with a 2u stabilizer, but they are very hard to find: something to fix.'],
    ],
    ficha: [
      ['Distribución 65 % ISO, con espacio partido', '65% ISO layout, with split spacebar and backspace'],
      ['Microcontrolador RP2040 con memoria flash externa de 128 Mbit', 'RP2040 microcontroller with 128 Mbit external flash'],
      ['Switches intercambiables en caliente (hot-swap)', 'Hot-swappable switches'],
      ['Flex-cuts en la propia placa', 'Flex-cuts in the PCB itself'],
      ['USB-C o conector Molex Pico-EZmate para placa hija', 'USB-C or Molex Pico-EZmate connector for a daughterboard'],
      ['Compatible con QMK y VIA', 'QMK and VIA compatible'],
    ],
  },
  {
    id: 'mondongo-rev1',
    nombre: 'Mondongo RBK · Rev1',
    etiqueta: ['Rev1 · 65 % ISO · RP2040 · RGB', 'Rev1 · 65% ISO · RP2040 · RGB'],
    resumen: ['La versión que corrige y amplia el prototipo: estabilizadores de 3u, RGB y un conector más firme para la placa hija.', 'The version that goes into its case: 3u stabilizers, RGB and a sturdier connector for the daughterboard.'],
    imagen: 'teclados/02-mondongo-rev1.jpg',
    modelo: 'teclados/02-mondongo-rev1.glb',
    texto: [
      ['Mantiene todo lo del prototipo: la distribución del Leopold EC65 con espacio partido y enter ISO, las dos capas base para escribir y para jugar, el RP2040 y su memoria. Arreglando los errores del prototipo: el espacio partido usa por fin estabilizadores de 3u, así que vale con teclas de 3u normales.',
       'It keeps everything from the prototype: the Leopold EC65 layout with split spacebar and backspace, the two base layers for typing and gaming, the RP2040 and its memory. What changes is what the prototype taught: the split spacebar finally uses 3u stabilizers, so regular 3u keycaps fit.'],
      ['Suma retroceso partido e iluminación RGB, avandona los flex-cuts y cambia el Molex Pico-EZmate, que resultó poco estable, por un JST de 4 pines (SM04B-SRSS-TB) para la placa hija del montaje gasket.',
       'It adds RGB lighting, drops the flex-cuts and swaps the Molex Pico-EZmate, which proved unreliable, for a 4-pin JST (SM04B-SRSS-TB) for the gasket-mount daughterboard.'],
    ],
    ficha: [
      ['Distribución 65 % ISO, añade retroceso partido', '65% ISO layout, with split spacebar and backspace'],
      ['Estabilizadores de 3u en el espacio partido', '3u stabilizers on the split spacebar'],
      ['Microcontrolador RP2040 con memoria flash externa de 128 Mbit', 'RP2040 microcontroller with 128 Mbit external flash'],
      ['Switches intercambiables en caliente (hot-swap)', 'Hot-swappable switches'],
      ['Iluminación RGB', 'RGB lighting'],
      ['USB-C o conector JST de 4 pines para placa hija', 'USB-C or 4-pin JST connector for a daughterboard'],
      ['Compatible con QMK y VIA', 'QMK and VIA compatible'],
    ],
    // la caja no es la placa, pero se cuenta en una nota aparte
    nota: ['Para este modelo, el diseño del case fue planeado al milimetro con pruebas para reducir al máximo el ruido y las vibraciones: fondo de aluminio anodizado, parte superior de policarbonato (PC) y plate de POM, con un ángulo de escritura de 7 grados de inclinación.',
      'This is the board for its case, designed to cut noise and vibration as much as possible: anodized aluminium bottom, polycarbonate (PC) top and a POM plate.'],
  },
  {
    id: 'gimmick',
    nombre: 'Gimmick',
    etiqueta: ['60 % Tsangan · ISO · RGB', '60% Tsangan · ISO · RGB'],
    resumen: ['Mi homenaje al HHKB: un 60 % con fila Tsangan, Enter ISO y montaje gasket o top mount.', 'My take on the HHKB: a 60% with a Tsangan row, ISO Enter and gasket or top mount.'],
    imagen: 'teclados/03-gimmick.jpg',
    modelo: 'teclados/03-gimmick.glb',
    texto: [
      ['Mis dos teclados favoritos son electrocapacitivos: el Leopold EC65 y el HHKB. El Gimmick parte del clásico HHKB, con algunos cambios a mi gusto: fila inferior Tsangan, Enter ISO, retroceso y Mayús derecha partidos, y Bloq Mayús normal o escalonado.',
       'My two favourite keyboards are electro-capacitive: the Leopold EC65 and the HHKB. The Gimmick starts from the classic HHKB, with a few changes to my taste: a Tsangan bottom row, ISO Enter, split backspace and right shift, and a regular or stepped Caps Lock.'],
      ['Lleva switches MX intercambiables en caliente, algo a lo que no puedo renunciar porque me encanta probar switches distintos. Se puede montar en gasket o en top mount, y el USB-C va más recogido para que quepa en la caja junto a la placa hija sin tener que quitarlo: las dos opciones, integradas.',
       'It has hot-swappable MX switches, something I can’t give up because I love trying different switches. It can be gasket- or top-mounted, and the USB-C sits further in so it fits in the case alongside the daughterboard without removing it: both options built in.'],
    ],
    ficha: [
      ['Distribución 60 % con fila Tsangan y Enter ISO', '60% layout with Tsangan row and ISO Enter'],
      ['Retroceso y Mayús derecha partidos', 'Split backspace and right shift'],
      ['Bloq Mayús normal o escalonado', 'Regular or stepped Caps Lock'],
      ['Microcontrolador RP2040 con memoria flash externa de 128 Mbit', 'RP2040 microcontroller with external flash'],
      ['Switches MX intercambiables en caliente (hot-swap)', 'Hot-swappable MX switches'],
      ['Iluminación RGB', 'RGB lighting'],
      ['Montaje gasket o top mount; USB-C o JST de 4 pines para placa hija', 'Gasket or top mount; USB-C or 4-pin JST for a daughterboard'],
      ['QMK, con VIA para configurar las capas', 'QMK, with VIA to configure the layers'],
    ],
    nota: ['Esta placa aparece en la foto de la sección Hardware, en una caja impresa custom con top mount y WKL en la bottom row. Esa caja referencia al Totem y añade una zapata de cámara en la parte superior.', 'This is the board of the keyboard in the Hardware photo.'],
  },
  {
    id: 'lamorra60',
    nombre: 'LaMorra60',
    etiqueta: ['Por encargo · 60 % multidistribución · MX y ALPS', 'Commission · 60% multi-layout · MX and ALPS'],
    resumen: ['Un 60 % hecho por encargo que admite casi cualquier distribución, y switches MX o ALPS soldados.', 'A commissioned 60% that takes almost any layout, with soldered MX or ALPS switches.'],
    imagen: 'teclados/04-lamorra60.jpg',
    modelo: 'teclados/04-lamorra60.glb',
    texto: [
      ['Lo diseñé por encargo, y la idea era que valiera para todo: ISO o ANSI, fila inferior de 60 % normal o Tsangan, Bloq Mayús normal o escalonado, y retroceso y Mayús derecha enteros o partidos.',
       'I designed it on commission, and the idea was for it to fit everything: ISO or ANSI, a regular 60% or Tsangan bottom row, regular or stepped Caps Lock, and full or split backspace and right shift.'],
      ['Lo que la hace especial son sus huellas: además de switches MX soldados, los de siempre, admite switches ALPS, para los amantes de lo retro. Su forma es compatible con las cajas de montaje O-ring del mercado (GH60 y Tofu60), y también se puede montar en bandeja (tray mount), top mount o gasket.',
       'What makes it special is its footprints: besides the usual soldered MX switches, it takes ALPS switches, for retro lovers. Its shape fits the O-ring mount cases on the market (GH60 and Tofu60), and it can also be tray-, top- or gasket-mounted.'],
      ['Para la placa hija lleva dos conectores JST instalados, y el USB-C se soldaba aparte si el comprador lo pedía. Junto a ella rediseñé también la placa hija, basándome en la Unified C3. A diferencia de los RGB por tecla que venía montando por defecto ya en todas las placas, por falta de espacio, este modelo tiene backlight configurado como RGB matrix, para usar mejores animaciones y un led adicional indicador de Bloq Mayús.',
       'For the daughterboard it has two JST connectors, and the USB-C was soldered separately if the buyer asked for it. Alongside it I also redesigned the daughterboard, based on the Unified C3.'],
    ],
    ficha: [
      ['60 % multidistribución: ISO o ANSI, 60 % normal o Tsangan', '60% multi-layout: ISO or ANSI, regular 60% or Tsangan'],
      ['Bloq Mayús normal o escalonado; retroceso y Mayús derecha enteros o partidos', 'Regular or stepped Caps Lock; full or split backspace and right shift'],
      ['Microcontrolador RP2040', 'RP2040 microcontroller'],
      ['Switches MX o ALPS, soldados', 'MX or ALPS switches, soldered'],
      ['Compatible con cajas O-ring GH60 y Tofu60', 'Fits GH60 and Tofu60 O-ring cases'],
      ['Montaje en bandeja, top mount, gasket y O-ring', 'Tray, top or gasket mount'],
      ['Dos conectores JST para placa hija; USB-C opcional', 'Two JST connectors for a daughterboard; optional USB-C'],
      ['LED verde de Bloq Mayús', 'Green Caps Lock LED'],
    ],
    nota: ['El LED verde del Bloq Mayús no está en el modelo 3D: en la placa se ve su hueco.', 'The green Caps Lock LED isn’t in the 3D model: you can see its spot on the board.'],
  },
];
