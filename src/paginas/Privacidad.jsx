// Privacidad (19/11/2026): qué guarda la web y qué se hace con los datos. Corta y clara: la web no tiene cookies, ni
// analítica, ni anuncios; solo guarda en el navegador lo que eliges (tema, idioma, volumen). Si un día llegan AdSense o
// la analítica, esto se actualiza y entonces sí hace falta el aviso de cookies con consentimiento.
import { usePrefs } from '../preferencias.jsx';
import { Portada, Seccion, Boton } from '../componentes/Comunes.jsx';
import { ENLACES, escribir, direccion } from '../enlaces.js';

const ACTUALIZADA = ['19 de noviembre de 2026', 'November 19, 2026'];

export function Privacidad() {
  const { t } = usePrefs();
  return (
    <>
      <Portada etiqueta={t('Legal', 'Legal')} titulo={t('Privacidad', 'Privacy')}>
        {t('Esta web no te rastrea: sin cookies, sin analítica y sin anuncios.', 'This website doesn’t track you: no cookies, no analytics and no ads.')}
      </Portada>

      <Seccion etiqueta={t('Actualizada el ', 'Updated on ') + t(...ACTUALIZADA)} titulo={t('Lo que hay que saber', 'What you need to know')}>
        <div className="texto texto--legal">
          <h3>{t('Quién está detrás', 'Who is behind it')}</h3>
          <p>{t('Esta web es personal y la hace Rubi. Para cualquier cosa sobre tus datos, puedes escribirme por correo con el botón de abajo.', 'This is Rubi’s personal website. For anything about your data, you can email me with the button below.')}</p>

          <h3>{t('Lo que se guarda en tu navegador', 'What is stored in your browser')}</h3>
          <p>{t('Solo tres preferencias que eliges tú, para que la web las recuerde la próxima vez: el tema (claro u oscuro), el idioma y el volumen del reproductor del disco de La Forja. Se guardan en tu propio navegador (almacenamiento local), no son cookies, no salen de tu dispositivo y no sirven para identificarte. Puedes borrarlas cuando quieras borrando los datos del sitio en tu navegador.', 'Only three preferences that you choose, so the website remembers them next time: the theme (light or dark), the language and the volume of The Forge’s album player. They are kept in your own browser (local storage), they are not cookies, they never leave your device and they can’t identify you. You can delete them at any time by clearing this site’s data in your browser.')}</p>

          <h3>{t('Lo que no hay', 'What there isn’t')}</h3>
          <p>{t('No hay cookies, ni herramientas de analítica o estadísticas, ni publicidad, ni botones de redes sociales que te sigan. Las fuentes están dentro de la propia web, así que no se cargan de servicios externos.', 'There are no cookies, no analytics or statistics tools, no ads, and no social buttons that follow you around. The fonts are part of the website itself, so nothing is loaded from external services.')}</p>

          <h3>{t('Si me escribes', 'If you email me')}</h3>
          <p>{t('Los botones de correo (como «Avisar de un fallo») abren tu propio programa de correo. Si me escribes, uso tu dirección y lo que me cuentes solo para contestarte y, si es un fallo, para arreglarlo. No lo comparto con nadie y, si me lo pides, lo borro.', 'The email buttons (such as “Report a bug”) open your own email app. If you write to me, I use your address and what you tell me only to reply and, if it’s a bug, to fix it. I don’t share it with anyone, and I’ll delete it if you ask.')}</p>

          <h3>{t('El alojamiento', 'Hosting')}</h3>
          <p>{t('La web está alojada en GitHub Pages. Como cualquier servidor, GitHub puede registrar datos técnicos de las visitas (por ejemplo, la dirección IP) para que el servicio funcione y sea seguro, según su propia ', 'The website is hosted on GitHub Pages. Like any server, GitHub may log technical data about visits (for example, the IP address) to keep the service running and secure, under its own ')}
            <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">{t('declaración de privacidad', 'privacy statement')}</a>.</p>

          <h3>{t('Los enlaces a otras webs', 'Links to other websites')}</h3>
          <p>{t('Los enlaces a itch.io, YouTube, GitHub, Instagram o PayPal te llevan a esas webs, que tienen sus propias políticas de privacidad y cookies. Esta web no les manda nada tuyo.', 'Links to itch.io, YouTube, GitHub, Instagram or PayPal take you to those websites, which have their own privacy and cookie policies. This website doesn’t send them anything about you.')}</p>

          <h3>{t('Tus derechos', 'Your rights')}</h3>
          <p>{t('Puedes pedirme en cualquier momento que te diga qué datos tuyos tengo, que los corrija o que los borre. Si crees que algo no se ha hecho bien, también puedes reclamar ante la ', 'You can ask me at any time what data of yours I have, to correct it or to delete it. If you think something hasn’t been done right, you can also file a complaint with the ')}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">{t('Agencia Española de Protección de Datos', 'Spanish Data Protection Agency (AEPD)')}</a>.</p>

          <h3>{t('Si esto cambia', 'If this changes')}</h3>
          <p>{t('Si algún día la web incluye anuncios o estadísticas, esta página se actualizará y te pedirá permiso antes de usar cookies que no sean necesarias.', 'If the website ever includes ads or statistics, this page will be updated and you’ll be asked for permission before any non-essential cookies are used.')}</p>
        </div>
        {direccion() ? <div className="botones"><Boton onClick={() => escribir(t('Privacidad · web de Rubi', 'Privacy · Rubi’s website'))} icono="correo">{t('Escribir sobre mis datos', 'Write about my data')}</Boton></div> : null}
      </Seccion>
    </>
  );
}
