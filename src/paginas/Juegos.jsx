// Juegos: la lista de juegos de Rubi. Hoy, La Forja.
import { usePrefs } from '../preferencias.jsx';
import { Portada, Seccion, Tarjeta } from '../componentes/Comunes.jsx';
import tarjetaForja from '../assets/la-forja-tarjeta.jpg';

export function Juegos() {
  const { t } = usePrefs();
  return (
    <>
      <Portada etiqueta={t('Videojuegos', 'Video games')} titulo={t('Juegos', 'Games')}>
        {t('Juegos pequeños y cuidados, hechos de principio a fin: reglas, código, arte y banda sonora propia.', 'Small, carefully made games, built end to end: rules, code, art and their own soundtrack.')}
      </Portada>
      <Seccion etiqueta={t('En desarrollo', 'In development')} titulo={t('Los juegos', 'The games')}>
        <div className="rejilla rejilla--2">
          <Tarjeta a="/juegos/la-forja" imagen={tarjetaForja} etiqueta={t('Juego de cartas para dos', 'Card game for two')} titulo={t('La Forja', 'The Forge')}
            accion={t('Conocer el juego', 'Discover the game')}>
            {t('Tus cartas llegan por una cinta y solo puedes jugar las primeras. Templa, gira y vence: contra un rival que se ajusta a ti, o contra un amigo.', 'Your cards arrive on a belt and you can only play the first ones. Temper, turn and win: against a rival who adjusts to you, or against a friend.')}
          </Tarjeta>
          <div className="tarjeta tarjeta--vacia" aria-hidden="true">
            <p className="etiqueta">{t('Próximamente', 'Coming soon')}</p>
            <p>{t('Más juegos en camino.', 'More games on the way.')}</p>
          </div>
        </div>
      </Seccion>
    </>
  );
}
