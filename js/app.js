/* ══════════════════════════════════════════════════
   STATE & STORAGE
══════════════════════════════════════════════════ */
const STORE_KEY = 'nl_progress_v3';

function loadState() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch(e) { return {}; }
}
function saveState(s) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch(e) {}
}

let state = loadState();
// state[lessonId] = { answers: {exId: bool}, score: n, total: n }

let currentLesson = null;
let examState = null; // {qIndex, answers:[], timer, timerInterval}

/* ══════════════════════════════════════════════════
   SIDEBAR BUILDER
══════════════════════════════════════════════════ */
function buildSidebar() {
  const list = document.getElementById('sb-list');
  list.innerHTML = LESSONS.map(l => {
    const ls = state[l.id];
    const answeredCount = Object.keys(ls && ls.answers || {}).length;
    const done = ls && answeredCount === ls.total && ls.total > 0;
    const inprog = ls && !done && answeredCount > 0;
    const pct = ls && ls.total ? Math.round(answeredCount/ls.total*100) : null;
    const active = currentLesson && currentLesson.id === l.id ? 'active' : '';
    return `<div class="sli ${done?'done':''} ${active}" onclick="openLesson(${l.id})">
      <div class="sli-icon">${done ? '✓' : l.icon}</div>
      <div class="sli-title">${l.id}. ${l.title}</div>
      ${pct !== null ? `<div class="sli-badge ${pct===100?'hi':''}">${pct}%</div>` : ''}
    </div>`;
  }).join('');
  updateOverallProgress();
}

function updateOverallProgress() {
  const answered = LESSONS.reduce((sum, l) => {
    const ls = state[l.id];
    return sum + Object.keys(ls && ls.answers || {}).length;
  }, 0);
  const total = LESSONS.reduce((sum, l) => {
    const ls = state[l.id];
    return sum + (ls && ls.total || 0);
  }, 0);
  const pct = total > 0 ? Math.round(answered / total * 100) : 0;
  document.getElementById('prog-bar').style.width = pct + '%';
  document.getElementById('prog-pct').textContent = pct + '%';
}

/* ══════════════════════════════════════════════════
   VIEWS
══════════════════════════════════════════════════ */
function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('on'));
  document.getElementById(id).classList.add('on');
}

function showDash() {
  currentLesson = null;
  buildDashboard();
  buildSidebar();
  showView('v-dash');
}

function buildDashboard() {
  const done = LESSONS.filter(l => { const ls=state[l.id]; return ls && Object.keys(ls.answers||{}).length===ls.total && ls.total>0; }).length;
  const scores = LESSONS.map(l => state[l.id]).filter(ls => ls && ls.total && Object.keys(ls.answers||{}).length>0);
  const avg = scores.length ? Math.round(scores.reduce((a,ls)=>a+ls.score/ls.total*100,0)/scores.length) : null;
  const totalAns = Object.values(state).reduce((a,ls)=>a+Object.keys(ls.answers||{}).length,0);
  document.getElementById('d-done').textContent = done;
  document.getElementById('d-score').textContent = avg !== null ? avg + '%' : '—';
  document.getElementById('d-streak').textContent = totalAns;

  document.getElementById('d-grid').innerHTML = LESSONS.map(l => {
    const ls = state[l.id];
    const answeredCount = Object.keys(ls && ls.answers || {}).length;
    const isDone = ls && answeredCount===ls.total && ls.total>0;
    const inProg = ls && !isDone && answeredCount>0;
    const pct = ls && ls.total ? Math.round(answeredCount/ls.total*100) : null;
    return `<div class="lcard ${isDone?'done':inProg?'prog':''}" onclick="openLesson(${l.id})">
      <h3>${l.icon} ${l.id}. ${l.title}</h3>
      <div class="cmeta">
        <span>${l.exercises.length} oefeningen</span>
        ${pct!==null?`<span class="cscore">${pct}%</span>`:`<span>Nog niet begonnen</span>`}
      </div>
      ${pct!==null?`<div class="score-bar"><div class="score-fill" style="width:${pct}%"></div></div>`:''}
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════
   LESSON VIEW
══════════════════════════════════════════════════ */
function openLesson(id) {
  currentLesson = LESSONS.find(l => l.id === id);
  if (!currentLesson) return;
  buildSidebar();
  renderLesson(currentLesson);
  showView('v-lesson');
  document.getElementById('main').scrollTop = 0;
}

function renderLesson(lesson) {
  document.getElementById('l-num').textContent = `Les ${lesson.id} van ${LESSONS.length}`;
  document.getElementById('l-title').textContent = `${lesson.icon} ${lesson.title}`;
  document.getElementById('l-expl').innerHTML = lesson.expl;
  document.getElementById('l-next').textContent = lesson.id < LESSONS.length ? 'Volgende les →' : 'Cursus voltooid ✓';

  const ls = state[lesson.id] || { answers: {}, score: 0, total: lesson.exercises.length };
  state[lesson.id] = ls;

  const container = document.getElementById('l-exercises');
  container.innerHTML = lesson.exercises.map((ex, i) => buildExercise(ex, i, ls)).join('');
}

function buildExercise(ex, i, ls) {
  const answered = ls.answers.hasOwnProperty(ex.id);
  const wasCorrect = ls.answers[ex.id];
  const statusClass = answered ? (wasCorrect ? 'ok' : 'bad') : '';

  if (ex.type === 'mc') {
    const correctVal = dec(ex.ans);
    const optsHtml = ex.opts.map(o => {
      let cls = '';
      if (answered) {
        if (o === correctVal) cls = 'correct';
        else if (o === ls.chosen && o !== correctVal) cls = 'wrong';
      }
      return `<button class="mco ${cls}" ${answered?'disabled':''} onclick="checkMC(this,'${ex.id}','${escQ(o)}')">${o}</button>`;
    }).join('');
    const fbClass = answered ? (wasCorrect ? 'ok' : 'bad') : '';
    const fbMsg = answered ? (wasCorrect ? `✓ Correct! ${ex.exp}` : `✗ The correct answer is: <strong>${correctVal}</strong>. ${ex.exp}`) : '';
    return `<div class="eq ${statusClass}" id="eq-${ex.id}">
      <div class="eqn">Oefening ${i+1} · Meerkeuze</div>
      <div class="eqq">${ex.question}</div>
      <div class="mc-opts">${optsHtml}</div>
      <div class="fb ${fbClass} ${answered?'on':''}" id="fb-${ex.id}">${fbMsg}</div>
    </div>`;
  }

  // fill type
  const correctVal = dec(ex.ans);
  const displayAns = correctVal.split('|')[0];
  const fbClass = answered ? (wasCorrect ? 'ok' : 'bad') : '';
  const fbMsg = answered ? (wasCorrect ? `✓ Correct! ${ex.exp}` : `✗ The correct answer is: <strong>${displayAns}</strong>. ${ex.exp}`) : '';
  const inputVal = answered ? (wasCorrect ? displayAns : (ls.userInput && ls.userInput[ex.id] || '')) : '';
  const inputCls = answered ? (wasCorrect ? 'correct' : 'wrong') : '';
  return `<div class="eq ${statusClass}" id="eq-${ex.id}">
    <div class="eqn">Oefening ${i+1} · Invuloefening</div>
    <div class="eqq">${ex.question}</div>
    <input class="fi ${inputCls}" id="fi-${ex.id}" type="text" value="${escQ(inputVal)}"
      ${answered?'disabled':''} placeholder="Typ je antwoord…"
      onkeydown="if(event.key==='Enter')checkFill('${ex.id}')">
    <br><button class="chkbtn" id="btn-${ex.id}" onclick="checkFill('${ex.id}')" ${answered?'disabled':''}>Controleer</button>
    <div class="fb ${fbClass} ${answered?'on':''}" id="fb-${ex.id}">${fbMsg}</div>
  </div>`;
}

function escQ(s) { return (s||'').replace(/'/g,"&#39;").replace(/"/g,'&quot;'); }

/* ══════════════════════════════════════════════════
   EXERCISE CHECKING
══════════════════════════════════════════════════ */
function checkMC(btn, exId, chosen) {
  const lesson = currentLesson;
  const ex = lesson.exercises.find(e => e.id === exId);
  if (!ex) return;
  const correct = checkAns(ex.ans, chosen);
  const ls = state[lesson.id];
  if (!ls.answers.hasOwnProperty(exId)) {
    ls.answers[exId] = correct;
    ls.chosen = chosen;
    if (correct) ls.score = (ls.score||0) + 1;
    ls.total = lesson.exercises.length;
    saveState(state);
  }
  // update UI
  const correctVal = dec(ex.ans);
  const card = document.getElementById('eq-' + exId);
  card.querySelectorAll('.mco').forEach(b => {
    b.disabled = true;
    if (b.textContent === correctVal) b.classList.add('correct');
    else if (b.textContent === chosen && chosen !== correctVal) b.classList.add('wrong');
  });
  card.className = 'eq ' + (correct ? 'ok' : 'bad');
  const fb = document.getElementById('fb-' + exId);
  fb.className = 'fb on ' + (correct ? 'ok' : 'bad');
  fb.innerHTML = correct ? `✓ Correct! ${ex.exp}` : `✗ The correct answer is: <strong>${correctVal}</strong>. ${ex.exp}`;
  buildSidebar();
}

function checkFill(exId) {
  const lesson = currentLesson;
  const ex = lesson.exercises.find(e => e.id === exId);
  if (!ex) return;
  const input = document.getElementById('fi-' + exId);
  const userVal = input.value;
  const correct = checkAns(ex.ans, userVal);
  const ls = state[lesson.id];
  if (!ls.answers.hasOwnProperty(exId)) {
    ls.answers[exId] = correct;
    if (!ls.userInput) ls.userInput = {};
    ls.userInput[exId] = userVal;
    if (correct) ls.score = (ls.score||0) + 1;
    ls.total = lesson.exercises.length;
    saveState(state);
  }
  input.disabled = true;
  input.className = 'fi ' + (correct ? 'correct' : 'wrong');
  document.getElementById('btn-' + exId).disabled = true;
  const correctVal = dec(ex.ans).split('|')[0];
  const fb = document.getElementById('fb-' + exId);
  fb.className = 'fb on ' + (correct ? 'ok' : 'bad');
  fb.innerHTML = correct ? `✓ Correct! ${ex.exp}` : `✗ The correct answer is: <strong>${correctVal}</strong>. ${ex.exp}`;
  const card = document.getElementById('eq-' + exId);
  card.className = 'eq ' + (correct ? 'ok' : 'bad');
  buildSidebar();
}

function nextLesson() {
  if (!currentLesson) return;
  const next = LESSONS.find(l => l.id === currentLesson.id + 1);
  if (next) openLesson(next.id);
  else showDash();
}

function restartLesson() {
  if (!currentLesson) return;
  state[currentLesson.id] = { answers: {}, score: 0, total: currentLesson.exercises.length };
  saveState(state);
  renderLesson(currentLesson);
  buildSidebar();
  document.getElementById('main').scrollTop = 0;
}

/* ══════════════════════════════════════════════════
   EXAM
══════════════════════════════════════════════════ */
function showExam() {
  if (examState && examState.active) { showView('v-exam'); return; }
  if (confirm('Wil je het mock inburgeringsexamen starten?\n\n30 vragen · 45 minuten · antwoorden kunnen niet worden gewijzigd.')) {
    startExam();
  }
}

function startExam() {
  if (examState && examState.timerInterval) clearInterval(examState.timerInterval);
  examState = {
    qIndex: 0,
    answers: new Array(EXAM.length).fill(null),
    chosen: new Array(EXAM.length).fill(null),
    secondsLeft: 45 * 60,
    active: true,
    timerInterval: null
  };
  examState.timerInterval = setInterval(examTick, 1000);
  renderExamQuestion();
  showView('v-exam');
}

function examTick() {
  if (!examState) return;
  examState.secondsLeft--;
  updateTimer();
  if (examState.secondsLeft <= 0) finishExam();
}

function updateTimer() {
  const s = examState.secondsLeft;
  const m = Math.floor(s/60), sec = s%60;
  const el = document.getElementById('timer');
  el.textContent = `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  el.className = s < 300 ? 'danger' : s < 600 ? 'warn' : '';
}

function renderExamQuestion() {
  const qi = examState.qIndex;
  const q = EXAM[qi];
  document.getElementById('e-ctr').textContent = `Vraag ${qi+1} van ${EXAM.length}`;
  document.getElementById('ep-fill').style.width = (qi / EXAM.length * 100) + '%';
  document.getElementById('e-next').disabled = examState.answers[qi] === null;
  document.getElementById('e-next').textContent = qi < EXAM.length-1 ? 'Volgende →' : 'Examen afronden';

  const correctVal = dec(q.ans);
  const chosen = examState.chosen[qi];
  const answered = examState.answers[qi] !== null;

  document.getElementById('e-question').innerHTML = `
    <div class="eq" style="border-color:transparent">
      <div class="eqn">Vraag ${qi+1} · ${q.topic}</div>
      <div class="eqq" style="font-size:1rem">${q.q}</div>
      <div class="mc-opts">
        ${q.opts.map(o => {
          let cls = '';
          if (answered) {
            if (o === correctVal) cls = 'correct';
            else if (o === chosen && o !== correctVal) cls = 'wrong';
          } else if (o === chosen) cls = 'sel';
          return `<button class="mco ${cls}" ${answered?'disabled':''} onclick="examSelect('${escQ(o)}')">${o}</button>`;
        }).join('')}
      </div>
    </div>`;
}

function examSelect(opt) {
  const qi = examState.qIndex;
  if (examState.answers[qi] !== null) return;
  examState.chosen[qi] = opt;
  examState.answers[qi] = checkAns(EXAM[qi].ans, opt);
  document.getElementById('e-next').disabled = false;
  renderExamQuestion();
}

function examNext() {
  const qi = examState.qIndex;
  if (examState.answers[qi] === null) return;
  if (qi < EXAM.length - 1) {
    examState.qIndex++;
    renderExamQuestion();
    document.getElementById('main').scrollTop = 0;
  } else {
    finishExam();
  }
}

function finishExam() {
  if (examState.timerInterval) clearInterval(examState.timerInterval);
  examState.active = false;
  const score = examState.answers.filter(Boolean).length;
  const total = EXAM.length;
  const pct = Math.round(score/total*100);
  const pass = pct >= 70;

  const circle = document.getElementById('r-circle');
  circle.className = 'rscore ' + (pass ? 'pass' : 'fail');
  document.getElementById('r-pct').textContent = pct + '%';
  document.getElementById('r-frac').textContent = score + '/' + total;
  document.getElementById('r-msg').textContent = pass
    ? '🎉 Gefeliciteerd! Je bent geslaagd! (≥70%)'
    : `Blijf oefenen en probeer het opnieuw. Je hebt minimaal 70% nodig (jij had ${pct}%).`;

  document.getElementById('r-items').innerHTML = EXAM.map((q, i) => {
    const ok = examState.answers[i];
    const correctVal = dec(q.ans);
    const chosen = examState.chosen[i] || '(geen antwoord)';
    return `<div class="ri">
      <div class="ri-icon">${ok ? '✅' : '❌'}</div>
      <div class="ri-q">
        <strong>${q.q}</strong><br>
        ${ok ? `<span class="ca">Jouw antwoord: ${chosen}</span>`
             : `<span class="ya">Jouw antwoord: ${chosen}</span> → <span class="ca">Goed antwoord: ${correctVal}</span>`}
        <br><small style="color:#6b7280">${q.topic}</small>
      </div>
    </div>`;
  }).join('');

  showView('v-results');
  document.getElementById('main').scrollTop = 0;
}

function confirmExitExam() {
  if (confirm('Wil je het examen verlaten? Je voortgang gaat verloren.')) {
    if (examState && examState.timerInterval) clearInterval(examState.timerInterval);
    examState = null;
    showDash();
  }
}

/* ══════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════ */
// Ensure state has correct totals
LESSONS.forEach(l => {
  if (!state[l.id]) state[l.id] = { answers: {}, score: 0, total: l.exercises.length };
  else state[l.id].total = l.exercises.length;
});
saveState(state);
showDash();
