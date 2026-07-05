"use strict";

/* =========================================================
 * ショートカットキー データ
 * keys: ショートカットキー / action: はたらき / cat: カテゴリ
 * ========================================================= */
const SHORTCUTS = [
  // ---- 重要度 ★★★★★ ----
  { keys: "Ctrl + C", action: "コピー", cat: "基本" },
  { keys: "Ctrl + V", action: "貼り付け", cat: "基本" },
  { keys: "Ctrl + X", action: "切り取り", cat: "基本" },
  { keys: "Ctrl + Z", action: "1つ前に戻る（元に戻す）", cat: "基本" },
  { keys: "Ctrl + マウスホイール", action: "拡大・縮小", cat: "基本" },
  { keys: "Ctrl + クリック", action: "複数選択・選択解除", cat: "基本" },
  { keys: "Shift + クリック", action: "範囲をまとめて選択", cat: "基本" },
  { keys: "F2", action: "名前の変更", cat: "基本" },
  { keys: "Esc", action: "閉じる・キャンセル", cat: "基本" },

  // ---- 重要度 ★★★★ ----
  { keys: "Delete", action: "削除", cat: "基本" },
  { keys: "Ctrl + S", action: "上書き保存", cat: "基本" },
  { keys: "Ctrl + A", action: "全選択", cat: "基本" },
  { keys: "Ctrl + F", action: "検索", cat: "基本" },
  { keys: "Ctrl + N", action: "新しいウィンドウを開く", cat: "基本" },
  { keys: "Ctrl + Y", action: "やり直し・繰り返し", cat: "基本" },
  { keys: "Win + V", action: "クリップボードの履歴を開く", cat: "基本" },
  { keys: "Alt + Tab", action: "ウィンドウの切り替え", cat: "基本" },
  { keys: "Ctrl + W", action: "ウィンドウやタブを閉じる", cat: "基本" },

  // ---- 重要度 ★★★ ----
  { keys: "F12", action: "名前を付けて保存", cat: "オフィスソフト" },
  { keys: "Win + ← / →", action: "画面を左右半分に配置", cat: "ウィンドウ操作" },
  { keys: "Win + D", action: "デスクトップを表示（全ウィンドウの非表示・再表示）", cat: "ウィンドウ操作" },
  { keys: "Ctrl + Shift + Esc", action: "タスクマネージャーを開く", cat: "システム" },
  { keys: "Win + Shift + S", action: "画面の一部をスクリーンショット", cat: "スクリーンショット" },
  { keys: "PrintScreen", action: "全画面のスクリーンショット", cat: "スクリーンショット" },
  { keys: "Win + PrintScreen", action: "スクリーンショットをファイルに保存", cat: "スクリーンショット" },
  { keys: "Home", action: "先頭に移動", cat: "カーソル移動" },
  { keys: "End", action: "最後に移動", cat: "カーソル移動" },
  { keys: "Shift + Home", action: "先頭まで選択", cat: "カーソル移動" },
  { keys: "Shift + End", action: "最後まで選択", cat: "カーソル移動" },
  { keys: "Shift + Delete", action: "ごみ箱に入れず完全に削除", cat: "基本" },

  // ---- 重要度 ★★ ----
  { keys: "Win + E", action: "エクスプローラーを開く", cat: "システム" },
  { keys: "Ctrl + P", action: "印刷", cat: "基本" },
  { keys: "Win + ↑", action: "ウィンドウを最大化", cat: "ウィンドウ操作" },
  { keys: "Win + ↓", action: "ウィンドウを縮小・最小化", cat: "ウィンドウ操作" },
  { keys: "Ctrl + Win + D", action: "仮想デスクトップを作成", cat: "仮想デスクトップ" },
  { keys: "Ctrl + Win + F4", action: "仮想デスクトップを閉じる", cat: "仮想デスクトップ" },
  { keys: "Ctrl + Win + ← / →", action: "仮想デスクトップを移動", cat: "仮想デスクトップ" },
  { keys: "F5", action: "更新（最新の状態にする）", cat: "基本" },
  { keys: "Win + Tab", action: "タスクビューを開く", cat: "ウィンドウ操作" },
  { keys: "Alt + P", action: "プレビューパネルを表示する", cat: "エクスプローラー" },
  { keys: "Win + S", action: "検索ボックスを開く", cat: "システム" },

  // ---- 重要度 ★ ----
  { keys: "Win + 数字", action: "タスクバーからアプリを起動", cat: "システム" },
  { keys: "Win + L", action: "PCをロックする", cat: "システム" },
  { keys: "Alt + ←", action: "前のフォルダーに戻る", cat: "エクスプローラー" },
  { keys: "Alt + →", action: "次のフォルダーに進む", cat: "エクスプローラー" },
  { keys: "Win + I", action: "設定画面を開く", cat: "システム" },
  { keys: "Alt + Enter", action: "プロパティを表示", cat: "エクスプローラー" },

  // ---- ブラウザ (Chrome) ----
  { keys: "Ctrl + Tab", action: "右のタブへ移動", cat: "ブラウザ" },
  { keys: "Ctrl + Shift + Tab", action: "左のタブへ移動", cat: "ブラウザ" },
  { keys: "Ctrl + Shift + T", action: "直前に閉じたタブを開く", cat: "ブラウザ" },
  { keys: "Ctrl + T", action: "新しいタブを開く", cat: "ブラウザ" },
  { keys: "Alt + F4", action: "アプリ・ブラウザを終了する", cat: "ブラウザ" },
  { keys: "Alt + Home", action: "ホームページを表示", cat: "ブラウザ" },
  { keys: "Ctrl + F5", action: "スーパーリロード（キャッシュを無視して更新）", cat: "ブラウザ" },
  { keys: "Ctrl + Shift + N", action: "シークレットモードを開く", cat: "ブラウザ" },
  { keys: "F12（ブラウザ）", action: "検証ツール（デベロッパーツール）を開く", cat: "ブラウザ" },
];

/* ===== 設定 ===== */
const QUESTIONS_PER_GAME = 20;
const POINTS_PER_QUESTION = 5;
const CHOICE_COUNT = 4;
const STREAK_FOR_PENGUIN = 3;

/* ===== ゲームの状態 ===== */
let questions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let answered = false;

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

/* 誤答の選択肢を、正解とまぎらわしくならないように選ぶ */
function pickDistractors(correct, field) {
  const pool = shuffle(
    SHORTCUTS.filter(
      (s) => s !== correct && s[field] !== correct[field]
    )
  );
  const seen = new Set([correct[field]]);
  const result = [];
  for (const s of pool) {
    if (!seen.has(s[field])) {
      seen.add(s[field]);
      result.push(s[field]);
      if (result.length === CHOICE_COUNT - 1) break;
    }
  }
  return result;
}

/* 20問をランダム生成（出題形式もランダム） */
function buildQuestions() {
  return shuffle(SHORTCUTS)
    .slice(0, QUESTIONS_PER_GAME)
    .map((item) => {
      const askKeys = Math.random() < 0.5; // true: はたらき→キーを答える
      const field = askKeys ? "keys" : "action";
      const correct = item[field];
      const choices = shuffle([correct, ...pickDistractors(item, field)]);
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
  void el.offsetWidth; // reflowでアニメーションをリセット
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
function startGame() {
  questions = buildQuestions();
  currentIndex = 0;
  score = 0;
  streak = 0;
  $("score").textContent = "0";
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
  } else {
    streak = 0;
    buttons[index].classList.add("wrong");
    feedbackText.textContent = `❌ ざんねん… こたえは「${q.choices[q.answer]}」`;
    feedbackText.className = "bad";
    reactWrong();
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

/* ===== イベント ===== */
$("start-btn").addEventListener("click", startGame);
$("retry-btn").addEventListener("click", startGame);
$("next-btn").addEventListener("click", nextQuestion);

document.addEventListener("keydown", (e) => {
  if (!screens.quiz.classList.contains("active")) return;
  if (!answered && e.key >= "1" && e.key <= String(CHOICE_COUNT)) {
    answer(Number(e.key) - 1);
  } else if (answered && e.key === "Enter") {
    nextQuestion();
  }
});
