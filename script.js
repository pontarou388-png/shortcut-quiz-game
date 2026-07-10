"use strict";

/* =========================================================
 * ショートカットキー データ
 * keys: ショートカットキー / action: はたらき / cat: カテゴリ / lv: レベル
 * lv: "★5" "★4" "★3" "★2" "★1" "入力"
 * 初級コース = ★5 + ★4 + 入力
 * 上級コース = すべて
 * ========================================================= */
const SHORTCUTS = [
  // ---- 重要度 ★★★★★ ----
  { keys: "Ctrl + C", action: "コピー", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Ctrl + V", action: "貼り付け", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Ctrl + X", action: "切り取り", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Ctrl + Z", action: "1つ前に戻る", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Ctrl + S", action: "上書き保存", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Ctrl + マウスホイール", action: "拡大・縮小", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Ctrl + クリック", action: "複数選択・選択解除", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Shift + クリック", action: "該当箇所まで複数選択", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Esc", action: "閉じる・キャンセル", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Ctrl + 1", action: "書式設定", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Ctrl + F1", action: "リボンの表示・非表示", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Ctrl + 矢印", action: "端まで移動", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Ctrl + Shift + 矢印", action: "端まで選択", cat: "重要度★★★★★", lv: "★5" },
  { keys: "Ctrl + Shift + L", action: "フィルター表示・非表示", cat: "重要度★★★★★", lv: "★5" },
  { keys: "F2", action: "編集", cat: "重要度★★★★★", lv: "★5" },
  { keys: "F4", action: "絶対参照・前回の操作を繰り返し", cat: "重要度★★★★★", lv: "★5" },

  // ---- 重要度 ★★★★ ----
  { keys: "Ctrl + A", action: "全選択", cat: "重要度★★★★", lv: "★4" },
  { keys: "Ctrl + F", action: "検索", cat: "重要度★★★★", lv: "★4" },
  { keys: "Ctrl + H", action: "置換", cat: "重要度★★★★", lv: "★4" },
  { keys: "Ctrl + Y", action: "繰り返し", cat: "重要度★★★★", lv: "★4" },
  { keys: "Win + V", action: "クリップボード", cat: "重要度★★★★", lv: "★4" },
  { keys: "F12", action: "名前を付けて保存", cat: "重要度★★★★", lv: "★4" },
  { keys: "Alt + Tab", action: "ウィンドウの切り替え", cat: "重要度★★★★", lv: "★4" },
  { keys: "Ctrl + PageUp", action: "右のシートに移動", cat: "重要度★★★★", lv: "★4" },
  { keys: "Ctrl + PageDown", action: "左のシートに移動", cat: "重要度★★★★", lv: "★4" },
  { keys: "Alt + Enter", action: "セル内で改行", cat: "重要度★★★★", lv: "★4" },
  { keys: "Ctrl + T", action: "テーブル", cat: "重要度★★★★", lv: "★4" },

  // ---- 重要度 ★★★ ----
  { keys: "Ctrl + D", action: "上のセルをコピー、貼り付け", cat: "重要度★★★", lv: "★3" },
  { keys: "Ctrl + ;", action: "今日の日付", cat: "重要度★★★", lv: "★3" },
  { keys: "Ctrl + :", action: "現在の時刻", cat: "重要度★★★", lv: "★3" },
  { keys: "Ctrl + Shift + 1", action: "桁区切り", cat: "重要度★★★", lv: "★3" },
  { keys: "Ctrl + Alt + V", action: "形式を指定して貼り付け", cat: "重要度★★★", lv: "★3" },
  { keys: "Ctrl + Enter", action: "一括入力", cat: "重要度★★★", lv: "★3" },

  // ---- 重要度 ★★ ----
  { keys: "Ctrl + スペース", action: "列選択", cat: "重要度★★", lv: "★2" },
  { keys: "Shift + スペース", action: "行選択", cat: "重要度★★", lv: "★2" },
  { keys: "Ctrl + +", action: "行・列・セル挿入", cat: "重要度★★", lv: "★2" },
  { keys: "Ctrl + -", action: "行・列・セル削除", cat: "重要度★★", lv: "★2" },
  { keys: "Alt + ↓", action: "オートフィルタ選択", cat: "重要度★★", lv: "★2" },
  { keys: "Win + ← / →", action: "画面を半分にする", cat: "重要度★★", lv: "★2" },
  { keys: "Shift + F11", action: "シート追加", cat: "重要度★★", lv: "★2" },
  { keys: "Ctrl + Home", action: "A1に飛ぶ", cat: "重要度★★", lv: "★2" },
  { keys: "Win + Shift + S", action: "一部分スクリーンショット", cat: "重要度★★", lv: "★2" },
  { keys: "Ctrl + Tab", action: "右のタブへ移動", cat: "重要度★★", lv: "★2" },
  { keys: "Ctrl + Shift + Tab", action: "左のタブへ移動", cat: "重要度★★", lv: "★2" },

  // ---- 重要度 ★ ----
  { keys: "Ctrl + N", action: "新規文書作成", cat: "重要度★", lv: "★1" },
  { keys: "Ctrl + R", action: "左のセルをコピー、貼り付け", cat: "重要度★", lv: "★1" },
  { keys: "Ctrl + Shift + _", action: "罫線を消す", cat: "重要度★", lv: "★1" },

  // ---- 文字入力 ----
  { keys: "F7", action: "全角カタカナ", cat: "文字入力", lv: "入力" },
  { keys: "F8", action: "半角カタカナ", cat: "文字入力", lv: "入力" },
  { keys: "F9", action: "全角ローマ字", cat: "文字入力", lv: "入力" },
  { keys: "F10", action: "半角ローマ字", cat: "文字入力", lv: "入力" },
  { keys: "Home", action: "行頭に移動", cat: "文字入力", lv: "入力" },
  { keys: "Ctrl + Home（文字入力）", action: "文頭に移動", cat: "文字入力", lv: "入力" },
  { keys: "End", action: "行末に移動", cat: "文字入力", lv: "入力" },
  { keys: "Ctrl + End", action: "文末に移動", cat: "文字入力", lv: "入力" },
  { keys: "Shift + Home", action: "行頭まで選択", cat: "文字入力", lv: "入力" },
  { keys: "Shift + End", action: "行末まで選択", cat: "文字入力", lv: "入力" },
  { keys: "Shift + 上下矢印", action: "1行上、下を選択", cat: "文字入力", lv: "入力" },
  { keys: "Ctrl + Shift + ←", action: "単語の先頭まで", cat: "文字入力", lv: "入力" },
  { keys: "Ctrl + Shift + →", action: "単語の後ろまで", cat: "文字入力", lv: "入力" },
];

/* ===== 設定 ===== */
const QUESTIONS_PER_GAME = 20;
const POINTS_PER_QUESTION = 5;
const CHOICE_COUNT = 4;
const STREAK_FOR_PENGUIN = 3;

/* 初級コース: ★5 + ★4 + 文字入力 */
const BEGINNER_LEVELS = new Set(["★5", "★4", "入力"]);

/* ===== ゲームの状態 ===== */
let questions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let answered = false;
let currentCourse = "beginner";

/* ===== 画面要素 ===== */
const $ = (id) => document.getElementById(id);
const screens = {
  start: $("start-screen"),
  quiz: $("quiz-screen"),
  result: $("result-screen"),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

/* ===== ユーティリティ ===== */
function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalizeChoice(value) {
  return value.replace(/（.*?）/g, "").trim();
}

/* コースに応じた問題プールを返す */
function getPool() {
  if (currentCourse === "beginner") {
    return SHORTCUTS.filter((s) => BEGINNER_LEVELS.has(s.lv));
  }
  return SHORTCUTS;
}

function pickDistractors(correct, field, pool) {
  const candidates = shuffle(
    pool.filter(
      (s) => s !== correct && s[field] !== correct[field]
    )
  );
  const seen = new Set([normalizeChoice(correct[field])]);
  const result = [];
  for (const s of candidates) {
    const key = normalizeChoice(s[field]);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(s[field]);
      if (result.length === CHOICE_COUNT - 1) break;
    }
  }
  return result;
}

function buildQuestions() {
  const pool = getPool();
  return shuffle(pool)
    .slice(0, QUESTIONS_PER_GAME)
    .map((item) => {
      const askKeys = Math.random() < 0.5;
      const field = askKeys ? "keys" : "action";
      const correct = item[field];
      const choices = shuffle([correct, ...pickDistractors(item, field, pool)]);
      return {
        cat: item.cat,
        text: askKeys
          ? `「${item.action}」のショートカットキーはどれ？`
          : `「${item.keys}」を押すと どうなる？`,
        choices,
        answer: choices.indexOf(correct),
      };
    });
}

/* ===== キャラクター演出 ===== */
const girlImg = $("girl-img");
const girlBubble = $("girl-bubble");
const penguinBox = $("penguin-box");

function replayAnimation(el, className) {
  el.classList.remove(className);
  void el.offsetWidth;
  el.classList.add(className);
}

function reactCorrect() {
  girlImg.src = "assets/girl_happy.png";
  girlBubble.textContent = streak >= STREAK_FOR_PENGUIN ? `${streak}問れんぞく正解！` : "せいかい！";
  girlBubble.classList.remove("hidden");
  replayAnimation(girlImg, "bounce");
  if (streak >= STREAK_FOR_PENGUIN) {
    penguinBox.classList.remove("hidden");
    replayAnimation(penguinBox, "pop-in");
  }
}

function reactWrong() {
  girlImg.src = "assets/girl_sad.png";
  girlBubble.textContent = "ざんねん…";
  girlBubble.classList.remove("hidden");
  replayAnimation(girlImg, "shake");
  penguinBox.classList.add("hidden");
}

function resetCharacters() {
  girlImg.src = "assets/girl_happy.png";
  girlBubble.classList.add("hidden");
  penguinBox.classList.add("hidden");
  girlImg.classList.remove("bounce", "shake");
}

/* ===== クイズ進行 ===== */
function startGame(course) {
  currentCourse = course;
  questions = buildQuestions();
  currentIndex = 0;
  score = 0;
  streak = 0;
  $("score").textContent = "0";
  $("course-label").textContent = currentCourse === "beginner" ? "初級コース" : "上級コース";
  resetCharacters();
  showScreen("quiz");
  showQuestion();
}

function showQuestion() {
  answered = false;
  const q = questions[currentIndex];

  $("q-number").textContent = `第${currentIndex + 1}問 / ${QUESTIONS_PER_GAME}`;
  $("progress").style.width = `${(currentIndex / QUESTIONS_PER_GAME) * 100}%`;
  $("category").textContent = q.cat;
  $("question").textContent = q.text;
  $("feedback").classList.add("hidden");
  girlBubble.classList.add("hidden");

  const box = $("choices");
  box.innerHTML = "";
  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerHTML = `<span class="num">${i + 1}</span>`;
    btn.appendChild(document.createTextNode(choice));
    btn.addEventListener("click", () => answer(i));
    box.appendChild(btn);
  });
}

function answer(index) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach((b) => (b.disabled = true));
  buttons[q.answer].classList.add("correct");

  const feedbackText = $("feedback-text");
  if (index === q.answer) {
    score += POINTS_PER_QUESTION;
    streak++;
    $("score").textContent = String(score);
    feedbackText.textContent = "⭕ せいかい！ +5点";
    feedbackText.className = "good";
    reactCorrect();
    sfxCorrect();
  } else {
    streak = 0;
    buttons[index].classList.add("wrong");
    feedbackText.textContent = `❌ ざんねん… こたえは「${q.choices[q.answer]}」`;
    feedbackText.className = "bad";
    reactWrong();
    sfxWrong();
  }

  $("progress").style.width = `${((currentIndex + 1) / QUESTIONS_PER_GAME) * 100}%`;
  $("feedback").classList.remove("hidden");
  $("next-btn").focus();
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < QUESTIONS_PER_GAME) {
    showQuestion();
  } else {
    showResult();
  }
}

/* ===== 結果画面 ===== */
function showResult() {
  showScreen("result");
  $("final-score").textContent = String(score);
  $("result-course").textContent = currentCourse === "beginner" ? "初級コース" : "上級コース";

  const chars = $("result-chars");
  chars.innerHTML = "";
  const msg = $("rank-message");

  const addChar = (src, cls) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = `char ${cls}`;
    chars.appendChild(img);
    return img;
  };

  if (score === 100) {
    msg.textContent = "🏆 パーフェクト！ ショートカットマスターだね！";
    addChar("assets/girl_happy.png", "char-girl celebrate");
    const p = addChar("assets/penguin.png", "char-penguin celebrate");
    p.style.animationDelay = "0.3s";
  } else if (score >= 80) {
    msg.textContent = "🌟 すごい！ あとすこしでパーフェクト！";
    addChar("assets/girl_happy.png", "char-girl celebrate");
    addChar("assets/penguin.png", "char-penguin float");
  } else if (score >= 50) {
    msg.textContent = "😊 いいちょうし！ くりかえせば もっと覚えられるよ！";
    addChar("assets/girl_happy.png", "char-girl float");
  } else {
    msg.textContent = "😢 もういちど チャレンジしてみよう！";
    addChar("assets/girl_sad.png", "char-girl shake");
  }
}

/* =========================================================
 * 音楽（BGM: assets/bgm.mp3 / 効果音: Web Audio APIで生成）
 * ========================================================= */
let audioCtx = null;
let musicOn = true;
const bgmAudio = $("bgm");
bgmAudio.volume = 0.5;

const NOTE = { C4:261.63, E4:329.63, C5:523.25, E5:659.25, G5:783.99, C6:1046.5 };

function ensureAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
}

function playNote(freq, time, dur, type, gainNode, volume) {
  if (!freq) return;
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(volume, time);
  g.gain.exponentialRampToValueAtTime(0.001, time + dur);
  osc.connect(g);
  g.connect(gainNode);
  osc.start(time);
  osc.stop(time + dur);
}

function startMusic() {
  ensureAudio();
  if (musicOn) {
    bgmAudio.play().catch(() => {});
  }
}

function stopMusic() {
  bgmAudio.pause();
}

function toggleMusic() {
  musicOn = !musicOn;
  $("music-btn").textContent = musicOn ? "🎵" : "🔇";
  if (musicOn) startMusic();
  else stopMusic();
}

/* 効果音 */
function sfxCorrect() {
  if (!audioCtx || !musicOn) return;
  const t = audioCtx.currentTime;
  const g = audioCtx.createGain();
  g.gain.value = 0.25;
  g.connect(audioCtx.destination);
  [NOTE.C5, NOTE.E5, NOTE.G5, NOTE.C6].forEach((f, i) =>
    playNote(f, t + i * 0.09, 0.25, "triangle", g, 1));
}

function sfxWrong() {
  if (!audioCtx || !musicOn) return;
  const t = audioCtx.currentTime;
  const g = audioCtx.createGain();
  g.gain.value = 0.2;
  g.connect(audioCtx.destination);
  playNote(NOTE.E4, t, 0.3, "sawtooth", g, 1);
  playNote(NOTE.C4, t + 0.18, 0.45, "sawtooth", g, 1);
}

/* ===== イベント ===== */
$("music-btn").addEventListener("click", () => { ensureAudio(); toggleMusic(); });
$("btn-beginner").addEventListener("click", () => { startMusic(); startGame("beginner"); });
$("btn-advanced").addEventListener("click", () => { startMusic(); startGame("advanced"); });
$("retry-btn").addEventListener("click", () => startGame(currentCourse));
$("back-btn").addEventListener("click", () => showScreen("start"));
$("next-btn").addEventListener("click", nextQuestion);

document.addEventListener("keydown", (e) => {
  if (!screens.quiz.classList.contains("active")) return;
  if (!answered && e.key >= "1" && e.key <= String(CHOICE_COUNT)) {
    answer(Number(e.key) - 1);
  } else if (answered && e.key === "Enter") {
    nextQuestion();
  }
});
