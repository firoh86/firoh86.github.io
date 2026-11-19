// Abajo del todo: el nombre, las redes, el correo y el apoyo. Los botones sin dirección (enlaces.js) no salen.
import { usePrefs } from '../preferencias.jsx';
import { ENLACES, escribir } from '../enlaces.js';
import { Marca } from './Marca.jsx';
import { Icono } from './Iconos.jsx';
import { Caja } from './Comunes.jsx';
import { Enlace } from '../ruta.jsx';

export function Pie() {
  const { t } = usePrefs();
  const redes = [
    ['github', 'GitHub', ENLACES.github], ['instagram', 'Instagram', ENLACES.instagram], ['youtube', 'YouTube', ENLACES.youtube],
    ['correo', t('Correo', 'Email'), ENLACES.correo && ENLACES.correo.usuario ? () => escribir() : null], ['corazon', t('Apoyar', 'Support'), ENLACES.donar],
  ].filter(r => r[2]);
  return (
    <footer className="pie">
      <Caja className="pie-fila">
        <div>
          <Marca alto="1.6rem" />
          <p className="pie-texto">{t('Teclados, juegos y aplicaciones, hechos a mano.', 'Keyboards, games and apps, handmade.')}</p>
        </div>
        <ul className="pie-redes">
          {redes.map(([icono, nombre, href]) => (
            <li key={icono}>{typeof href === 'function'
              ? <button type="button" onClick={href}><Icono n={icono} /><span>{nombre}</span></button>
              : <a href={href} target="_blank" rel="noopener noreferrer"><Icono n={icono} /><span>{nombre}</span></a>}</li>
          ))}
        </ul>
      </Caja>
      <Caja><p className="pie-legal">© 2026 Rubi · <Enlace a="/privacidad">{t('Privacidad', 'Privacy')}</Enlace></p></Caja>
    </footer>
  );
}
