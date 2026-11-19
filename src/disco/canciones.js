// El disco de La Forja: las canciones del reproductor de su página (18/11/2026).
// Los audios están en public/disco/ (AAC a 160 kbps, sacados de «musica de la forja/The oficial ones»).
//
// LA LETRA: se pega entre las comillas invertidas de `letra`, una línea por verso; una línea vacía separa estrofas.
// Si una línea empieza con su momento entre corchetes, [1:23] o [1:23.45], esa línea se ilumina cuando la canción llega
// ahí (como en los karaokes, formato LRC). Sin tiempos, la letra se muestra entera, sin seguir la canción.
// Las marcas de estructura de Suno ([Verse], [Chorus]…) se quitan solas.
//
// Letras y tiempos revisados a mano por Rubi, escuchando cada canción (18/11/2026). Para afinar uno, cambia su [m:ss] a mano.

export const CANCIONES = [
  { titulo: 'Play It now or Let It Fall', archivo: '01-play-it-now-or-let-it-fall.m4a', duracion: 179, letra: `[0:18] Card is sitting in the heat...
[0:21] Do I take the tempered beat,
[0:23] or watch it fall and lose the seat?

[0:28] Two more steps until the drop...
[0:30] Every second makes it hot,
[0:32.5] one wrong move and all is lost!

[0:40] Play it now or let it fall...
[0:44.5] The forge don't wait at all!
[0:49] Every card that leaves the line,
[0:52] carries weight and carries time!

[1:00.2] Ice is cracking on the frame...
[1:03] Petrify is calling names,
[1:05] one more turn and nothing's the same.

[1:8.5] Reverse is waiting underneath...
[1:12] Flip the face and change the teeth,
[1:14] now the mirror starts to breathe!

[1:19] Twenty-five and counting down...
[1:21] Can you hear the final sound?
[1:28] When the clang arrives at last,
[1:30] every tempered card must pass...

[1:35] Play it now or let it fall...
[1:40] The forge don't wait at all!
[1:44.5] Every card that leaves the line,
[1:46.8] carries weight and carries time!

[2:13] Play it now or let it fall...
[2:17] The forge don't wait at all!
[2:22] Every card that leaves the line,
[2:24] carries weight and carries time!

[2:33] Belt keeps moving, lights go low...
[2:35] One last choice before we go.
[2:38] Session saved... the forge grows cold...` },
  { titulo: 'Reverse', archivo: '02-reverse.m4a', duracion: 180, letra: `[0:00.8] You thought you knew the face I wore...
[0:05.5] Tempered bright behind the door.
[0:10] But when I fall without the heat...

[0:20] Something else begins to sh-sh-show...
[0:23] Different name, different glow.
[0:24.8] The one you played is not the one that hits the floor.

[0:38.2] What you played is not what falls...
[0:42.2] Re-re-reverse is calling from the dark.
[0:47.1] Every time I leave the forge without the mark...
[0:50.8] I come back changed.

[0:56] Mimic, fury, bleed or st-st-stone...
[0:59] I was never yours alone.
[1:01] You forced the drop, now watch me turn.

[1:05.0] One more fall and I rewrite the page...
[1:07.7] Same old card, brand new rage.
[1:10.0] You should have kept me in the flame.

[1:16] I remember every face I've been...
[1:20] And every time you let me sp-sp-spin...
[1:23] I become the thing you didn't see coming.

[1:32.0] What you played is not what falls...
[1:36.4] Re-re-reverse is calling from the dark.
[1:41.0] Every time I leave the forge without the mark...
[1:45.0] I come back changed.

[1:50.1] What you played is not what falls...
[1:54.7] Re-re-reverse is calling from the dark.
[1:59.8] Every time I leave the forge without the mark...
[2:02.8] I come back changed.

[2:09.4] Next time you see me in the line...
[2:14.0] Don't assume you know my m-m-mind...` },
  { titulo: 'Still Ink', archivo: '03-still-ink.m4a', duracion: 180, letra: `[0:00.8] Aún no ha visto jugar al rival...

[0:19.0] I'm the card that you can't play,
[0:21.1] black and slow and turned away.
[0:23.1] No face, no number, no name to hold,
[0:25.5] just ink that moves the way it's told.

[0:27.8] Show me something, make your move,
[0:30.0] anything I can learn to use.
[0:32.0] A strike, a stone, a frozen flame,
[0:34.3] I'll wear it back and say your name.

[0:37.1] Wait... w-w-wait...
[0:38.8] I've been watching from the line...

[0:42.0] I become what you just played...
[0:46.4] Keep your temper, lose your chains...
[0:50.7] But the corner stays in black...
[0:55.1] That's the part I don't give back.

[1:07.0] Your Final Strike was bound to the forge,
[1:09.8] I can throw it from the line.
[1:12.2] Every rule you had to follow,
[1:14.0] I just b-b-borrow, and it's mine.

[1:16.0] Close your turn with something sharp,
[1:18.4] and I'll hand it back to you.
[1:21.0] So you close with something soft...
[1:23.1] see? I'm teaching you too.

[1:25.8] When I fall without the heat,
[1:28.0] I go back to the shield I was...
[1:32.8] plain and steady, three and blue...
[1:37.1] but I still remember you.

[1:50.0] Show me something new...

[2:00.8] I become what you just played...
[2:04.8] Keep your temper, lose your chains...
[2:09.2] But the corner stays in black,
[2:13.2] that's the part I don't give back.

[2:18.0] I become what you just played...

[2:27.0] I become what you just played...

[2:35.3] I become what you just played...
[2:39.8] Keep your temper, lose your chains...
[2:44.2] But the corner stays in black,
[2:48.7] that's the part I don't give back.

[2:53.1] Aún no ha visto jugar al rival...` },
  { titulo: 'Tic Tac Clang', archivo: '04-tic-tac-clang.m4a', duracion: 180, letra: `[0:11.8] Another match, another line...
[0:16.0] I keep adjusting every time.
[0:19.9] Win one, lose two, adjust again,
[0:24.0] Trying to find the shape of the game.

[0:29.2] Sometimes I rush the tempered card,
[0:34.0] Sometimes I hold and fall too hard.
[0:37.6] The rival reads me, I read back,
[0:43.2] Push and pull across the track.

[0:46.1] Tick... tick... the number falls...
[0:50.1] Every turn and turn another call.
[0:54.8] I'm still searching for the style that stays,
[1:00.0] Through the wins and the ugly days.

[1:05.8] I've been frozen, I've been burned,
[1:07.8] Left with stones I never earned.
[1:10.0] Some games feel like perfect flow,
[1:12.2] Some just teach me what I don't know.

[1:23.8] One more try, one more read...
[1:27.8] Change the timing, change the speed.
[1:32.1] The belt keeps moving either way,
[1:36.0] I just learn a little more each day.

[1:41.2] Twenty... nineteen...
[1:43.8] Fifteen... twelve...
[1:46.0] The ticks get heavier...
[1:48.0] Eight... five...
[1:49.2] Three... two...

[2:07.0] Twenty...

[2:08.1] The number falls...
[2:11.1] Every turn and turn another call.
[2:15.8] I'm still searching for the style that stays,
[2:21.0] Through the wins and the ugly days.

[2:26.1] The number falls...
[2:29.1] Every turn and turn another call.
[2:33.8] I'm still searching for the style that stays,
[2:38.8] Through the wins and the ugly days.` },
  { titulo: 'The Belt Does Not Stop', archivo: '05-the-belt-does-not-stop.m4a', duracion: 180, letra: `[0:10.0] No more cards I can select...
[0:12.9] Every option looks correct,
[0:15.2] but the belt just doesn't give a sh**.

[0:19.9] Ice still locks the forge in place...
[0:22.2] I just sit and watch it waste
[0:24.9] while the timer carves another line across my face.

[0:28.9] The belt does not stop...
[0:32.2] It never learned to care.
[0:36.8] Every tempered card I drop
[0:41.2] just disappears into the air.

[0:48.0] Stones keep piling in the line...
[0:50.9] Permanent. Undefined.
[0:53.3] Eating every single turn of mine.

[1:06.9] Bleed is counting in the dark...
[1:09.9] One more point with every mark
[1:12.2] while that fuc**ng clang gets sharper in the dark.

[1:16.6] Twenty-five... twenty-four...
[1:18.8] I can feel the final door...
[1:20.9] I've tested this a hundred times before...

[1:25.8] The belt does not stop...
[1:29.2] It never learned to care.
[1:33.8] Every tempered card I drop
[1:38.5] just disappears into the air.

[1:45.9] No more moves... the system waits...
[1:50.2] I've seen enough for one more night...
[1:58.0] Session over.` },
  { titulo: 'Legends Forged Never Fade', archivo: '06-legends-forged-never-fade.m4a', duracion: 180, letra: `[0:20.8] Loading up the conveyor space...
[0:23.2] Does the molten forge embrace,
[0:25.8] give the card a tempered grace?

[0:30.6] Perfect contrast on the screen!
[0:33.0] Adding embers to the scene,
[0:35.3] forging up the best machine!

[0:41.8] Drawing five cards down the line...
[0:46.9] Let the forge ignite and shine!
[0:51.7] Look at what our hands have made,
[0:53.9] legends tempered that never fade!

[1:01.8] Mid-build status running deep...
[1:04.1] The legendary forge needs its cost to keep.

[1:06.8] Tweaking numbers down by two...
[1:09.0] Now the grand combo breaks right through!

[1:11.8] The loop is set, the cards aligned.
[1:13.9] Is there a bug we left behind?
[1:16.2] Push the final update now!
[1:18.8] Show them all just how and wow!

[1:50.8] Ba-ba-ba!

[1:59.8] Drawing five cards down the line...
[2:04.4] Let the forge ignite and shine!
[2:09.2] Look at what our hands have made,
[2:11.6] legends tempered that never fade!

[2:19.0] Drawing five cards down the line...
[2:23.8] Let the forge ignite and shine!
[2:28.8] Look at what our hands have made,
[2:31.0] legends tempered that never fade!` },
  { titulo: 'Forge Cools Down', archivo: '07-forge-cools-down.m4a', duracion: 180, letra: `[0:21.1] Compiling assets... stack trace is clean.
[0:23.9] The final deck is ready on the screen.
[0:25.9] We spent three weeks balancing every card,
[0:28.9] The forge was hot, the iterations hard.

[0:30.9] Yeah, take a breather, we made it through,
[0:33.5] Flipping through the lines till the code turned blue.
[0:35.7] Grab a cup of coffee, let the render run,
[0:38.5] Look at what we built, phase one is done.

[0:41.0] Rarity tables tweaked, the stats align,
[0:43.2] Mana costs polished to a sharp design.
[0:45.7] You fixed the bugs at quarter past three,
[0:48.2] A synchronized dance of logic and key.

[0:50.3] Couldn't do it solo, needed your precision,
[0:53.1] Tuning every draw with an algorithmic vision.
[0:55.3] Now the cards are glowing in the virtual heat,
[0:58.0] Listen to the groove of a fresh heartbeat.

[1:00.0] Oh, the forge cools down as the morning breaks,
[1:04.9] Counting the heartbeats and all the mistakes.
[1:09.8] From raw text files to a living game,
[1:12.0] Every card forged bears a piece of our flame.
[1:14.8] Close down the IDE, save and depart,
[1:17.0] We built a world right from the start.

[1:19.9] Sys-tem status: deployment complete.
[1:22.0] The players will gather, the matches compete.
[1:24.3] No more patches tonight, the version is locked,
[1:26.8] The virtual doors of the tavern are stocked.

[1:29.3] Ship it to the server, let the playtest begin,
[1:32.0] I can hear the cards shuffling deep within.
[1:34.0] Put the tools away, turn the monitors low,
[1:36.4] Sit back and watch the forge lights glow.

[1:39.1] Iteration... evolution...
[1:44.1] Every rule set finds its resolution.

[1:48.1] From an empty sheet to a deck in hand,
[1:50.4] We crafted the rules of a fantasy land.

[1:53.0] Yeah, we forged it all from the ground right up!

[1:58.7] Oh, the forge cools down as the morning breaks,
[2:02.9] Counting the heartbeats and all the mistakes.
[2:07.9] From raw text files to a living game,
[2:10.6] Every card forged bears a piece of our flame.
[2:12.9] Close down the IDE, save and depart,
[2:15.1] We built a world right from the start.

[2:26.7] Time to call it a night. Thanks for the help, Claude.
[2:31.9] Session terminated. Goodnight, creator.` },
];

/** La letra lista para mostrar: [{ t: segundos|null, texto }]; texto '' = separación entre estrofas. */
export function versos(letra) {
  const out = [];
  for (const crudo of (letra || '').trim().split(/\r?\n/)) {
    let l = crudo.trim(), t = null;
    const m = l.match(/^\[(\d+):(\d+(?:\.\d+)?)\]\s*/);
    if (m) { t = +m[1] * 60 + +m[2]; l = l.slice(m[0].length); }
    if (/^\[[^\]]*\]$/.test(l)) continue;   // [Verse], [Chorus]…
    if (!l && (!out.length || out[out.length - 1].texto === '')) continue;
    out.push({ t, texto: l });
  }
  while (out.length && out[out.length - 1].texto === '') out.pop();
  return out;
}
