// Piezas que se repiten en todas las páginas.
import { Enlace } from '../ruta.jsx';
import { Icono } from './Iconos.jsx';

/** Ancho de lectura con márgenes laterales. */
export const Caja = ({ children, className = '' }) => <div className={'caja ' + className}>{children}</div>;

/** Una sección con su título pequeño (etiqueta) y uno grande. */
export const Seccion = ({ etiqueta, titulo, children, id, className = '' }) => (
  <section className={'seccion ' + className} id={id}>
    <Caja>
      {etiqueta ? <p className="etiqueta">{etiqueta}</p> : null}
      {titulo ? <h2 className="titulo-seccion">{titulo}</h2> : null}
      {children}
    </Caja>
  </section>
);

/** Botón con aspecto de enlace: interno (a="/ruta") o externo (href). principal: relleno en rojo. */
export function Boton({ a, href, onClick, children, icono, principal, className = '' }) {
  const cls = 'boton' + (principal ? ' boton--principal' : '') + (className ? ' ' + className : '');
  const dentro = <>{icono ? <Icono n={icono} /> : null}<span>{children}</span>{href ? <Icono n="externo" className="icono--pequeno" /> : null}</>;
  if (onClick) return <button type="button" className={cls} onClick={onClick}>{dentro}</button>;
  if (href) return <a className={cls} href={href} target="_blank" rel="noopener noreferrer">{dentro}</a>;
  return <Enlace a={a} className={cls}>{dentro}</Enlace>;
}

/** Tarjeta de un proyecto: imagen (o un dibujo), título, texto y a dónde lleva. */
export function Tarjeta({ a, imagen, dibujo, etiqueta, titulo, children, accion }) {
  const Tag = a ? Enlace : 'div';   // sin a: tarjeta informativa, sin enlace (y la acción se lee como nota)
  return (
    <Tag a={a} className={'tarjeta' + (a ? '' : ' tarjeta--quieta')}>
      <div className="tarjeta-imagen">{imagen ? <img src={imagen} alt="" loading="lazy" /> : dibujo}</div>
      <div className="tarjeta-cuerpo">
        {etiqueta ? <p className="etiqueta">{etiqueta}</p> : null}
        <h3>{titulo}</h3>
        <p>{children}</p>
        {accion ? <span className="tarjeta-accion">{accion}{a ? <Icono n="flecha" /> : null}</span> : null}
      </div>
    </Tag>
  );
}

/** Cabecera de una página interior: banda roja con el título. */
export const Portada = ({ etiqueta, titulo, children }) => (
  <header className="portada">
    <Caja>
      {etiqueta ? <p className="etiqueta etiqueta--clara">{etiqueta}</p> : null}
      <h1>{titulo}</h1>
      {children ? <p className="portada-texto">{children}</p> : null}
    </Caja>
  </header>
);
