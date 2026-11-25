// Las direcciones de fuera, todas juntas para cambiarlas en un solo sitio. Si una está vacía, su botón no sale.
export const ENLACES = {
  github: 'https://github.com/firoh86',                // p. ej. https://github.com/tu-usuario
  youtube: 'https://www.youtube.com/@ForgeCardGame',   // el canal del disco de La Forja
  itchJuego: 'https://rubi-la-forja.itch.io/la-forja',   // La Forja a la venta (itch.io, 19/11)
  itchArcana: 'https://rubi-la-forja.itch.io/arcana-noir',   // Arcana Noir a la venta en itch.io (26/11). Si se vacía, su página vuelve a decir «Pronto en itch.io» sin botón
  disco: 'https://www.youtube.com/playlist?list=PLNsI95YaTyVQ',   // la lista del disco: el botón «Escuchar en YouTube» de La Forja
  instagram: 'https://www.instagram.com/rubikeyss/',   // Cuenta profesional de Instagram
  donar: 'https://www.paypal.me/firohdraw86',          // PayPal (paypal.me/…) o Ko-fi
  mindforge: 'https://github.com/firoh86/mindforge',   // MindForge: el código
  // MindForge: el instalador de su Release en GitHub. Con cada versión nueva cambia el nombre del archivo: actualízalo aquí.
  // Si está vacío, solo sale «Ver en GitHub».
  mindforgeDescarga: 'https://github.com/firoh86/mindforge/releases/download/v0.1.0/MindForge_0.1.0_x64-setup.exe',
  wallpaperSolar: 'https://github.com/firoh86/wallpaper-solar',   // Wallpaper Solar: el código
  // Wallpaper Solar: el instalador de su Release en GitHub. Con cada versión nueva cambia el nombre del archivo: actualízalo aquí.
  wallpaperSolarDescarga: 'https://github.com/firoh86/wallpaper-solar/releases/download/v1.0.0/WallpaperSolar-Setup-1.0.0.exe',
  // El correo, partido y sin la arroba: así no aparece escrito en ningún sitio (ni en la página ni en el código) y los
  // programas que recorren las webs buscando correos para mandar spam no lo encuentran. Se monta solo al pulsar «Correo».
  correo: { usuario: 'firoh86', dominio: 'gmail.com' },
};

/** La dirección, montada solo cuando hace falta (al pulsar un botón). '' si no hay correo. */
export function direccion() {
  const c = ENLACES.correo;
  return c && c.usuario && c.dominio ? c.usuario + String.fromCharCode(64) + c.dominio : '';
}

/** Abre el correo de quien lo pulsa con la dirección montada en ese momento; con asunto y texto, si se dan. */
export function escribir(asunto, texto) {
  const d = direccion();
  if (!d) return;
  const q = [asunto ? 'subject=' + encodeURIComponent(asunto) : '', texto ? 'body=' + encodeURIComponent(texto) : ''].filter(Boolean).join('&');
  location.href = 'mailto:' + d + (q ? '?' + q : '');
}
