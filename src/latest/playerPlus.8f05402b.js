import { h as e, l as t, g as a } from "./index.6eeae9f8.js";
import "./preact.294f37c2.js";
function p() {
  return !1;
}
async function r(p, r) {
  let {
    user: n,
    meta: { songId: i, partId: s, current: l },
    player: { speed: c, videoOpened: d },
  } = p.get();
  if (!e(n) || c === r || !l) return;
  let y = !d && a(c) !== a(r);
  try {
    y && p.dispatch("player/suspend", "speed"),
      p.dispatch("player/changeSpeed", { speed: r }),
      y && -1 !== i && -1 !== s && (await t(p, i, s, l.revisionId));
  } finally {
    let e = p.get();
    y &&
      e.meta.current &&
      a(r) === a(e.player.speed) &&
      i === e.meta.songId &&
      s === e.meta.partId &&
      l.revisionId === e.meta.current.revisionId &&
      p.dispatch("player/resume", "speed");
  }
}
async function n(t, a) {
  let { user: p, player: r } = t.get();
  if (e(p)) {
    if (r.pitchShift === a) return;
    t.dispatch("player/changePitch", a);
  }
}
async function i(e, a) {
  let {
    meta: { current: p, songId: r, partId: n },
    player: { type: i, audio: s, videoOpened: l },
  } = e.get();
  if (i === a || !p) return;
  let c = !l && !("mute" === a && s?.hasSingleTrack);
  try {
    e.dispatch("player/suspend", "type"),
      e.dispatch("player/changeType", { type: a }),
      c && -1 !== r && -1 !== n && (await t(e, r, n, p.revisionId));
  } finally {
    let t = e.get();
    t.meta.current &&
      a === t.player.type &&
      r === t.meta.songId &&
      n === t.meta.partId &&
      p.revisionId === t.meta.current.revisionId &&
      e.dispatch("player/resume", "type");
  }
}
async function s(t) {
  let { user: a } = t.get();
  e(a) && t.dispatch("player/toggleLoop");
}
export {
  p as demo,
  n as plusChangePitch,
  r as plusChangeSpeed,
  i as plusChangeType,
  s as plusToggleLoop,
};