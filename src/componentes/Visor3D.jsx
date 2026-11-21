// Visor 3D de una placa (18/11/2026): el .glb exportado de KiCad, que se gira con el ratón o el dedo y da vueltas solo
// despacio hasta que alguien lo toca. three.js se carga aparte y solo cuando se abre un visor, para no pesar en la web.
import { useEffect, useRef, useState } from 'react';
import { usePrefs } from '../preferencias.jsx';
import { TX } from '../textos.js';

// ¿Puede este navegador dibujar en 3D? three.js necesita WebGL 2. Sin aceleración gráfica (apagada, o una tarjeta en la
// lista negra del navegador) no hay: Chrome ya no lo hace por software. Pasó en un Mac con Chrome y Brave (21/11).
function hayWebgl2() {
  try {
    if (!window.WebGL2RenderingContext) return false;
    const gl = document.createElement('canvas').getContext('webgl2');
    if (!gl) return false;
    const x = gl.getExtension('WEBGL_lose_context'); if (x) x.loseContext();   // solo era para mirar: se suelta
    return true;
  } catch (e) { return false; }
}

export function Visor3D({ src, alt, imagen, desde = 'arriba' }) {
  const { t } = usePrefs();
  const caja = useRef(null);
  const [estado, setEstado] = useState('cargando'), [pct, setPct] = useState(0);

  useEffect(() => {
    let vivo = true, limpiar = () => {};
    if (!hayWebgl2()) { setEstado('sin3d'); return; }
    (async () => {
      const [THREE, { GLTFLoader }, { OrbitControls }, { RoomEnvironment }, { MeshoptDecoder }] = await Promise.all([
        import('three'),
        import('three/examples/jsm/loaders/GLTFLoader.js'),
        import('three/examples/jsm/controls/OrbitControls.js'),
        import('three/examples/jsm/environments/RoomEnvironment.js'),
        import('three/examples/jsm/libs/meshopt_decoder.module.js'),   // los .glb van comprimidos (gltf-transform, meshopt)
      ]);
      if (!vivo) return;
      const el = caja.current;
      let renderer;
      try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { if (vivo) setEstado('sin3d'); return; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      el.appendChild(renderer.domElement);
      const escena = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      escena.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      const luz = new THREE.DirectionalLight(0xffffff, 1.2); luz.position.set(2, 4, 3); escena.add(luz);
      const luz2 = new THREE.DirectionalLight(0xffffff, 1.0); luz2.position.set(-2, -4, 2); escena.add(luz2);   // por debajo: la cara de los hotswaps
      const camara = new THREE.PerspectiveCamera(32, 1, 0.01, 100);
      const mandos = new OrbitControls(camara, renderer.domElement);
      Object.assign(mandos, { enableDamping: true, autoRotate: true, autoRotateSpeed: 0.8, enablePan: true, screenSpacePanning: true });   // clic derecho (o dos dedos): moverla
      mandos.addEventListener('start', () => { mandos.autoRotate = false; });

      const medir = () => {
        const w = el.clientWidth, h = el.clientHeight;
        renderer.setSize(w, h, false); camara.aspect = w / h; camara.updateProjectionMatrix();
      };
      const obs = new ResizeObserver(medir); obs.observe(el); medir();

      new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).load(src, gltf => {
        if (!vivo) return;
        const m = gltf.scene;
        // la placa, tumbada: si viene con Z hacia arriba (STEP), se gira para que Y sea arriba; el GLB de KiCad ya viene así
        let s = new THREE.Box3().setFromObject(m).getSize(new THREE.Vector3());
        if (s.z < s.y && s.z < s.x) m.rotation.x = -Math.PI / 2;
        const b = new THREE.Box3().setFromObject(m), c = b.getCenter(new THREE.Vector3());
        s = b.getSize(new THREE.Vector3());
        m.position.sub(c);
        escena.add(m);
        const r = Math.max(s.x, s.y, s.z);
        // que quepa entera: la distancia según el campo de visión, a lo ancho y a lo alto
        const tg = Math.tan(THREE.MathUtils.degToRad(camara.fov / 2));
        const d = 1.12 * Math.max(s.x / 2 / (tg * camara.aspect), s.z / 2 / tg) + s.y;
        camara.position.set(0, desde === 'abajo' ? -0.8 : 0.8, desde === 'abajo' ? -0.6 : 0.6).normalize().multiplyScalar(d); camara.near = r / 100; camara.far = r * 20; camara.updateProjectionMatrix();
        mandos.minDistance = r * 0.12; mandos.maxDistance = r * 4; mandos.target.set(0, 0, 0);
        // al moverla, que el centro no se salga de la placa
        const lim = s.clone().multiplyScalar(0.5);
        mandos.addEventListener('change', () => { mandos.target.clamp(lim.clone().negate(), lim); });
        // doble clic (o doble toque): vuelve a la vista del principio y a dar vueltas sola
        const inicio = camara.position.clone();
        const reiniciar = () => { camara.position.copy(inicio); mandos.target.set(0, 0, 0); mandos.autoRotate = true; mandos.update(); };
        const lienzo = renderer.domElement;
        lienzo.addEventListener('dblclick', reiniciar);
        let ultimoToque = 0;   // en pantallas táctiles el dblclick no siempre llega: se mira el tiempo entre dos toques
        lienzo.addEventListener('pointerup', e => {
          if (e.pointerType !== 'touch') return;
          if (e.timeStamp - ultimoToque < 320) { reiniciar(); ultimoToque = 0; } else ultimoToque = e.timeStamp;
        });
        setEstado('listo');
      }, e => { if (e.total) setPct(Math.round((100 * e.loaded) / e.total)); }, () => vivo && setEstado('error'));

      let id = 0;
      const pinta = () => { id = requestAnimationFrame(pinta); mandos.update(); renderer.render(escena, camara); };
      pinta();
      limpiar = () => {
        cancelAnimationFrame(id); obs.disconnect(); mandos.dispose(); pmrem.dispose();
        escena.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach(x => x.dispose()); });
        renderer.dispose(); renderer.domElement.remove();
      };
    })().catch(() => vivo && setEstado('error'));
    return () => { vivo = false; limpiar(); };
  }, [src, desde]);

  // sin 3D: la vista fija de la placa y cómo activarlo
  if (estado === 'sin3d') return (
    <div className="visor3d visor3d--sin" style={imagen ? { backgroundImage: `url(${imagen})` } : undefined}>
      <div className="visor3d-ayuda">
        <p className="visor3d-ayuda-titulo">{t(TX.visor3d.sin3dTitulo)}</p>
        <p>{t(TX.visor3d.sin3dTexto)}</p>
        <a href="https://get.webgl.org/webgl2/" target="_blank" rel="noopener noreferrer">{t(TX.visor3d.sin3dComprobar)}</a>
      </div>
    </div>
  );
  return (
    <div className="visor3d" ref={caja} role="img" aria-label={alt}>
      {estado === 'cargando' ? <span className="visor3d-aviso">{t(TX.visor3d.cargandoElModelo3d)}{pct ? ` · ${pct} %` : '…'}</span> : null}
      {estado === 'error' ? <span className="visor3d-aviso">{t(TX.visor3d.noSeHaPodido)}</span> : null}
      {estado === 'listo' ? <span className="visor3d-pista">{t(TX.visor3d.arrastraParaGirarlaClic)}</span> : null}
    </div>
  );
}
