/* ══════════════════════════════════════════════════
   ENCODING HELPERS  (answers never stored as plaintext)
══════════════════════════════════════════════════ */
const enc = s => btoa(unescape(encodeURIComponent(s))).split('').reverse().join('');
const dec = s => decodeURIComponent(escape(atob(s.split('').reverse().join(''))));

/* normalise user input for comparison */
const norm = s => s.trim().toLowerCase()
  .replace(/[àá]/g,'a').replace(/[èé]/g,'e').replace(/[ìí]/g,'i')
  .replace(/[òó]/g,'o').replace(/[ùú]/g,'u').replace(/ë/g,'e');

function checkAns(encoded, userInput) {
  const correct = dec(encoded);
  const alts = correct.split('|');
  const u = norm(userInput);
  return alts.some(a => norm(a) === u);
}
