const questions = [
  {
    question: "相手からLINEが来る頻度は？",
    choices: [
      { text: "よく向こうから来る", score: 4 },
      { text: "たまに来る", score: 3 },
      { text: "こちらから送れば返ってくる", score: 2 },
      { text: "基本こちらからだけ", score: 1 }
    ]
  },
  {
    question: "返信の速さは？",
    choices: [
      { text: "かなり早い", score: 4 },
      { text: "普通", score: 3 },
      { text: "遅いけど返ってくる", score: 2 },
      { text: "かなり遅い、または既読無視が多い", score: 1 }
    ]
  },
  {
    question: "会話の内容は？",
    choices: [
      { text: "質問が多く、話を広げてくれる", score: 4 },
      { text: "普通に会話は続く", score: 3 },
      { text: "必要最低限", score: 2 },
      { text: "すぐ終わる", score: 1 }
    ]
  },
  {
    question: "相手の態度は？",
    choices: [
      { text: "明らかに優しい、特別感がある", score: 4 },
      { text: "優しいとは感じる", score: 3 },
      { text: "誰にでも同じ気がする", score: 2 },
      { text: "少しそっけない", score: 1 }
    ]
  },
  {
    question: "会う約束について",
    choices: [
      { text: "相手から誘ってくる", score: 4 },
      { text: "誘えば前向き", score: 3 },
      { text: "予定次第では会える", score: 2 },
      { text: "はぐらかされることが多い", score: 1 }
    ]
  },
  {
    question: "目が合う・距離感は？",
    choices: [
      { text: "よく目が合うし距離も近い", score: 4 },
      { text: "時々ある", score: 3 },
      { text: "あまり感じない", score: 2 },
      { text: "目も合わず距離も遠い", score: 1 }
    ]
  },
  {
    question: "あなたの変化に気づく？",
    choices: [
      { text: "かなり気づいてくれる", score: 4 },
      { text: "たまに気づく", score: 3 },
      { text: "ほぼ気づかない", score: 2 },
      { text: "全く反応なし", score: 1 }
    ]
  },
  {
    question: "相手はあなたの恋愛話にどう反応する？",
    choices: [
      { text: "明らかに気にしている", score: 4 },
      { text: "少し気にしている感じ", score: 3 },
      { text: "普通の反応", score: 2 },
      { text: "興味なさそう", score: 1 }
    ]
  },
  {
    question: "相手のプライベートの話は？",
    choices: [
      { text: "自分からたくさん話してくれる", score: 4 },
      { text: "多少話してくれる", score: 3 },
      { text: "あまり話さない", score: 2 },
      { text: "全然話さない", score: 1 }
    ]
  },
  {
    question: "今の関係を一言でいうと？",
    choices: [
      { text: "かなりいい感じ", score: 4 },
      { text: "まだ様子見だけど希望あり", score: 3 },
      { text: "微妙で読めない", score: 2 },
      { text: "片思い感が強い", score: 1 }
    ]
  }
];

let currentQuestionIndex = 0;
let totalScore = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const shareBtn = document.getElementById("share-btn");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices");

const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultText = document.getElementById("result-text");
const resultAdvice = document.getElementById("result-advice");

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function showScreen(screen) {
  startScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");

  screen.classList.add("active");
}

function startQuiz() {
  currentQuestionIndex = 0;
  totalScore = 0;
  showScreen(quizScreen);
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionNumber.textContent = `質問 ${currentQuestionIndex + 1} / ${questions.length}`;
  questionText.textContent = currentQuestion.question;
  choicesContainer.innerHTML = "";

  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.textContent = choice.text;

    button.addEventListener("click", () => {
      totalScore += choice.score;
      currentQuestionIndex++;

      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    });

    choicesContainer.appendChild(button);
  });
}

function showResult() {
  showScreen(resultScreen);

  let result = {};

  if (totalScore >= 36) {
    result = {
      title: "脈あり度95%｜運命レベル",
      text: "かなり高い確率で相手はあなたを意識しています。やり取りや距離感にも好意のサインがしっかり出ています。",
      advice: "焦らず自然に距離を縮めてOK。軽く誘ったり、少しだけ好意を見せると進展しやすいです。"
    };
  } else if (totalScore >= 32) {
    result = {
      title: "脈あり度85%｜本命候補",
      text: "かなり良い雰囲気です。相手もあなたを特別に見ている可能性があります。",
      advice: "慎重になりすぎず、2人で話す時間や会うきっかけを少し増やしてみましょう。"
    };
  } else if (totalScore >= 28) {
    result = {
      title: "脈あり度70%｜気になる存在",
      text: "相手はあなたに興味を持っている可能性があります。ただ、まだ様子見の段階かもしれません。",
      advice: "共通点を増やしたり、会話を広げたりして、恋愛対象として意識される流れを作りましょう。"
    };
  } else if (totalScore >= 24) {
    result = {
      title: "脈あり度60%｜あと一歩",
      text: "関係は悪くないですが、恋愛感情としてはまだ決め手が弱い段階です。",
      advice: "押しすぎず、相手の反応を見ながら少しずつ距離感を近づけてみてください。"
    };
  } else if (totalScore >= 20) {
    result = {
      title: "脈あり度50%｜様子見ゾーン",
      text: "今はまだ判断が分かれるラインです。相手の優しさが好意なのか性格なのか、見極めが必要です。",
      advice: "一気に距離を詰めず、接触回数を少しずつ増やして反応を見ましょう。"
    };
  } else if (totalScore >= 16) {
    result = {
      title: "脈あり度40%｜友達ポジション",
      text: "今のところ、相手からは友達として見られている可能性が高めです。",
      advice: "急に追いすぎず、見た目や雰囲気、会話の印象を少し変えてみるのが効果的です。"
    };
  } else if (totalScore >= 12) {
    result = {
      title: "脈あり度25%｜恋愛対象外気味",
      text: "現時点では恋愛として意識されていない可能性が高そうです。",
      advice: "無理に追わず、一度距離を置いて自分磨きや魅力アップに意識を向けるのがおすすめです。"
    };
  } else {
    result = {
      title: "脈あり度10%｜片思い濃厚",
      text: "今の状態では相手の好意サインはかなり少なめです。",
      advice: "苦しい恋になりすぎる前に、相手との距離感を見直すことも大切です。新しい出会いに目を向けるのもありです。"
    };
  }

  resultTitle.textContent = result.title;
  resultScore.textContent = `あなたの合計点：${totalScore}点 / 40点`;
  resultText.textContent = result.text;
  resultAdvice.textContent = `アドバイス：${result.advice}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  totalScore = 0;
  showScreen(startScreen);
}
shareBtn.addEventListener("click", shareResult);

function shareResult() {

  const text = `恋愛診断の結果は「${resultTitle.textContent}」でした！
あなたも診断してみて👇`;

  const url = window.location.href;

  if (navigator.share) {

    navigator.share({
      title: "彼は脈あり？診断",
      text: text,
      url: url
    });

  } else {

    const twitterUrl =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(text + "\n" + url);

    window.open(twitterUrl, "_blank");
  }

}