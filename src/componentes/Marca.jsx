// El nombre «RubíKeys» del logo de Rubi. Es una máscara: toma el color del texto donde esté (o el que le pases),
// así vale en gris claro sobre el rojo, y en el color del texto en el modo claro y en el oscuro.
import logo from '../assets/rubikeys.png';

export const Marca = ({ alto = '2rem', color, className = '' }) => (
  <span role="img" aria-label="RubíKeys" className={'marca ' + className}
    style={{ '--logo': `url(${logo})`, height: alto, ...(color ? { background: color } : null) }} />
);
