const diagnoses = {
  himPulse: createDiagnosis({
    key: "himPulse",
    menuTitle: "彼は脈あり？診断",
    menuText: "10の質問で彼の本音をチェック",
    appTitle: "彼は脈あり？診断",
    appSubtitle: "10の質問で彼の本音をチェック",
    quizLabel: "彼は脈あり？診断",
    shareTitle: "彼は脈あり？診断",
    resultLabels: [
      [36, "脈あり度95%｜運命レベル", "かなり高い確率で相手はあなたを意識しています。やり取りや距離感にも好意のサインがしっかり出ています。", "焦らず自然に距離を縮めてOK。軽く誘ったり、少しだけ好意を見せると進展しやすいです。"],
      [32, "脈あり度85%｜本命候補", "かなり良い雰囲気です。相手もあなたを特別に見ている可能性があります。", "慎重になりすぎず、2人で話す時間や会うきっかけを少し増やしてみましょう。"],
      [28, "脈あり度70%｜気になる存在", "相手はあなたに興味を持っている可能性があります。ただ、まだ様子見の段階かもしれません。", "共通点を増やしたり、会話を広げたりして、恋愛対象として意識される流れを作りましょう。"],
      [24, "脈あり度60%｜あと一歩", "関係は悪くないですが、恋愛感情としてはまだ決め手が弱い段階です。", "押しすぎず、相手の反応を見ながら少しずつ距離感を近づけてみてください。"],
      [20, "脈あり度50%｜様子見ゾーン", "今はまだ判断が分かれるラインです。相手の優しさが好意なのか性格なのか、見極めが必要です。", "一気に距離を詰めず、接触回数を少しずつ増やして反応を見ましょう。"],
      [16, "脈あり度40%｜友達ポジション", "今のところ、相手からは友達として見られている可能性が高めです。", "急に追いすぎず、見た目や雰囲気、会話の印象を少し変えてみるのが効果的です。"],
      [12, "脈あり度25%｜恋愛対象外気味", "現時点では恋愛として意識されていない可能性が高そうです。", "無理に追わず、一度距離を置いて自分磨きや魅力アップに意識を向けるのがおすすめです。"],
      [0, "脈あり度10%｜片思い濃厚", "今の状態では相手の好意サインはかなり少なめです。", "苦しい恋になりすぎる前に、相手との距離感を見直すことも大切です。新しい出会いに目を向けるのもありです。"]
    ],
    questions: [
      q("相手からLINEが来る頻度は？", ["よく向こうから来る", "たまに来る", "こちらから送れば返ってくる", "基本こちらからだけ"]),
      q("返信の速さは？", ["かなり早い", "普通", "遅いけど返ってくる", "かなり遅い、または既読無視が多い"]),
      q("会話の内容は？", ["質問が多く、話を広げてくれる", "普通に会話は続く", "必要最低限", "すぐ終わる"]),
      q("相手の態度は？", ["明らかに優しい、特別感がある", "優しいとは感じる", "誰にでも同じ気がする", "少しそっけない"]),
      q("会う約束について", ["相手から誘ってくる", "誘えば前向き", "予定次第では会える", "はぐらかされることが多い"]),
      q("目が合う・距離感は？", ["よく目が合うし距離も近い", "時々ある", "あまり感じない", "目も合わず距離も遠い"]),
      q("あなたの変化に気づく？", ["かなり気づいてくれる", "たまに気づく", "ほぼ気づかない", "全く反応なし"]),
      q("相手はあなたの恋愛話にどう反応する？", ["明らかに気にしている", "少し気にしている感じ", "普通の反応", "興味なさそう"]),
      q("相手のプライベートの話は？", ["自分からたくさん話してくれる", "多少話してくれる", "あまり話さない", "全然話さない"]),
      q("今の関係を一言でいうと？", ["かなりいい感じ", "まだ様子見だけど希望あり", "微妙で読めない", "片思い感が強い"])
    ]
  }),

  loveState: createDiagnosis({
    key: "loveState",
    menuTitle: "この恋 脈あり？脈なし？",
    menuText: "今の恋が進展しそうかをチェック",
    appTitle: "この恋 脈あり？脈なし？",
    appSubtitle: "10の質問で今の恋の状態をチェック",
    quizLabel: "この恋 脈あり？脈なし？",
    shareTitle: "この恋 脈あり？脈なし？",
    resultLabels: [
      [36, "進展度95%｜かなり脈あり", "この恋はかなり良い流れです。相手もあなたとの関係を前向きに見ている可能性が高いです。", "自然体のまま距離を縮めてOK。軽いお誘いや少しだけ好意を見せると、一気に進展するかもしれません。"],
      [32, "進展度80%｜期待していい恋", "恋愛として進む可能性はかなりあります。相手もあなたを特別に感じ始めている段階かもしれません。", "焦らず、会話や会う回数を少し増やしてみましょう。自然に距離を縮めるのがポイントです。"],
      [28, "進展度65%｜まだ育つ恋", "悪くない関係ですが、まだ様子見の空気もあります。ここからの動き方で変わりやすい恋です。", "相手の反応を見ながら、共通点や会話のきっかけを増やしていくと進展しやすいです。"],
      [24, "進展度50%｜判断が分かれる恋", "脈なしとは言えませんが、まだ恋愛としては弱いラインです。少し慎重に見極めたい段階です。", "一気に追いすぎず、相手の温度感を確認しながら距離を縮めていきましょう。"],
      [20, "進展度40%｜様子見が必要", "今の関係はまだ不安定です。相手の気持ちよりも、タイミングや距離感の問題もありそうです。", "無理に答えを急がず、相手との自然な接点を増やして反応を見てみるのがおすすめです。"],
      [16, "進展度25%｜片思い寄り", "現時点では、あなたの気持ちの方が強いかもしれません。相手はまだ恋愛モードではない可能性があります。", "今は追いすぎず、自分の魅力や雰囲気を整えながら、余裕を見せる方が良い流れを作れます。"],
      [12, "進展度15%｜脈なし寄り", "この恋は今のままだと進みにくい状態です。好意のサインはかなり少なめかもしれません。", "苦しい恋になる前に、少し距離を置いて相手の反応を見るのも大切です。"],
      [0, "進展度5%｜今は見直し時", "今の関係では恋愛として進むサインはかなり少ない状態です。", "無理に追うよりも、自分の時間や新しい出会いに目を向ける方が心が軽くなるかもしれません。"]
    ],
    questions: [
      q("相手から話題を振ってくれる？", ["よく振ってくれる", "たまに振ってくれる", "ほぼこちらからだけ", "会話が広がらない"]),
      q("会話が終わるときの雰囲気は？", ["また話したそうにしている", "自然に終わる", "少しそっけない", "早く終わらせたい感じ"]),
      q("会う話をしたときの反応は？", ["前向きで具体的", "予定が合えば会えそう", "はっきりしない", "流されることが多い"]),
      q("返信の内容は？", ["丁寧で質問もある", "普通に返ってくる", "短文が多い", "スタンプや一言だけ"]),
      q("相手からあなたを知ろうとする感じは？", ["かなりある", "少しある", "あまりない", "ほぼない"]),
      q("連絡が来るタイミングは？", ["相手から自然に来る", "たまに相手発信がある", "こちらが送ると返る", "こちらからばかり"]),
      q("距離感はどう感じる？", ["前より近づいている", "悪くない", "変わらない", "少し遠い"]),
      q("相手の態度に温度差はある？", ["基本安定して優しい", "少し波はある", "温度差が大きい", "急に冷たくなることが多い"]),
      q("恋愛っぽい空気を感じる？", ["かなり感じる", "少し感じる", "まだ微妙", "ほぼ感じない"]),
      q("今の恋を一言でいうと？", ["かなり期待できる", "まだ伸びしろがある", "読めなくて不安", "片思い感が強い"])
    ]
  }),

  loveType: createDiagnosis({
    key: "loveType",
    menuTitle: "あなたの恋愛タイプ診断",
    menuText: "自分の恋愛傾向をチェック",
    appTitle: "あなたの恋愛タイプ診断",
    appSubtitle: "10の質問で恋愛傾向をチェック",
    quizLabel: "あなたの恋愛タイプ診断",
    shareTitle: "あなたの恋愛タイプ診断",
    scoreText: false,
    getResult(totalScore) {
      if (totalScore >= 34) {
        return {
          title: "愛され安心タイプ",
          text: "恋愛では安定感や安心感を大事にするタイプです。相手に尽くしすぎず、ちょうど良い距離感を作れる魅力があります。",
          advice: "自分の良さは“落ち着き”です。無理に刺激的な恋を求めすぎず、自然体でいられる相手を選ぶと恋が続きやすいです。"
        };
      } else if (totalScore >= 28) {
        return {
          title: "じっくり見極めタイプ",
          text: "勢いよりも信頼を重視して恋を進めるタイプです。好きになるまで少し時間はかかりますが、本気になると一途です。",
          advice: "慎重さは強みです。ただ、考えすぎてチャンスを逃しやすいので、少しだけ素直に動く意識を持つと恋が進みやすくなります。"
        };
      } else if (totalScore >= 22) {
        return {
          title: "追いかけがちタイプ",
          text: "好きになると相手中心になりやすく、つい追いすぎてしまう傾向があります。恋の熱量が高い分、苦しくなりやすい面もあります。",
          advice: "恋をしても“自分の生活”を崩しすぎないことが大事です。少し引くことで、相手とのバランスが取りやすくなります。"
        };
      } else if (totalScore >= 16) {
        return {
          title: "沼りやすいタイプ",
          text: "不安や温度差に振り回されやすく、相手の一言や返信の速さで気持ちが大きく揺れやすいタイプです。",
          advice: "相手の行動だけで自分の価値を決めないことが大切です。恋以外の時間を充実させると、心がかなり安定します。"
        };
      }

      return {
        title: "本気になりすぎる一途タイプ",
        text: "好きになるとまっすぐで一生懸命なタイプです。ただし、その分だけ傷つきやすく、相手に合わせすぎてしまうこともあります。",
        advice: "一途さは大きな魅力です。だからこそ、あなたを大事にしてくれる相手を選ぶことを最優先にしてください。"
      };
    },
    questions: [
      q("恋をするとどうなりやすい？", ["自然体でいられる", "少し慎重になる", "相手中心になる", "かなり振り回される"]),
      q("返信が遅いときの気持ちは？", ["そこまで気にしない", "少し気になる", "かなり気になる", "ずっと考えてしまう"]),
      q("相手に合わせることは多い？", ["必要なときだけ", "わりと合わせる", "かなり合わせる", "自分を後回しにしがち"]),
      q("好きな人の予定が優先になりやすい？", ["あまりならない", "少しなる", "よくある", "かなりある"]),
      q("恋愛で一番大事なのは？", ["安心感", "信頼", "ドキドキ", "つながっている実感"]),
      q("相手の一言で気持ちは揺れる？", ["ほぼ揺れない", "少し揺れる", "結構揺れる", "かなり揺れる"]),
      q("恋をすると連絡頻度は？", ["ちょうどいい", "少し増える", "かなり増える", "相手中心になる"]),
      q("相手に本音を言える？", ["言える", "ある程度言える", "少し苦手", "我慢しがち"]),
      q("恋が始まると自分の時間は？", ["保てる", "少し減る", "かなり減る", "ほぼ恋中心"]),
      q("自分の恋を一言でいうと？", ["安定", "慎重", "熱量高め", "沼りやすい"])
    ]
  }),

  loveEnding: createDiagnosis({
    key: "loveEnding",
    menuTitle: "この恋 続く？終わる？",
    menuText: "今の恋の危険度をチェック",
    appTitle: "この恋 続く？終わる？",
    appSubtitle: "10の質問で恋の危険度をチェック",
    quizLabel: "この恋 続く？終わる？",
    shareTitle: "この恋 続く？終わる？",
    resultLabels: [
      [36, "継続度90%｜かなり続きやすい恋", "今の恋は比較的安定しています。多少の不安があっても、土台はしっかりしている関係です。", "不安が出たときほど、決めつけずに会話を大事にしてみてください。"],
      [30, "継続度75%｜まだ大丈夫な恋", "少し不安定な部分はありますが、今すぐ終わるような流れではありません。", "焦って答えを急がず、小さなすれ違いを放置しないことが大事です。"],
      [24, "継続度55%｜注意が必要な恋", "続く可能性もありますが、温度差や連絡の変化が気になる段階です。", "今の違和感を見ないふりせず、相手の行動全体を落ち着いて見てみましょう。"],
      [18, "継続度35%｜終わりが近づくサイン", "この恋には少し危うさがあります。気持ちのズレがそのままになっているかもしれません。", "追いかけすぎず、一度立ち止まって相手の本音と距離感を見極める時間を持つのがおすすめです。"],
      [0, "継続度15%｜見直したい恋", "今のままだと、この恋は苦しさが大きくなりやすい状態です。", "無理に繋ぎ止めようとするより、自分が大事にされている恋かどうかを基準に考えてみてください。"]
    ],
    questions: [
      q("最近の連絡頻度は？", ["安定している", "少し減った", "かなり減った", "ほぼ来ない"]),
      q("返信の温度感は？", ["前と変わらない", "少し落ちた", "だいぶ冷たい", "明らかに雑になった"]),
      q("会う話の流れは？", ["自然にある", "減ってきた", "こちらからだけ", "ほぼなくなった"]),
      q("相手の態度に違和感は？", ["特にない", "少しある", "よく感じる", "かなり感じる"]),
      q("将来や次の予定の話はある？", ["ある", "少しある", "ほぼない", "全くない"]),
      q("ケンカやすれ違いの後は？", ["ちゃんと戻れる", "少し引きずる", "距離が空く", "放置される"]),
      q("あなたの不安は？", ["ほぼない", "少しある", "結構ある", "かなり強い"]),
      q("相手からの思いやりは感じる？", ["よく感じる", "多少感じる", "減ってきた", "あまり感じない"]),
      q("関係を続けたい意志は伝わる？", ["伝わる", "少し伝わる", "微妙", "感じない"]),
      q("今の恋を一言でいうと？", ["安心できる", "少し不安", "かなり不安定", "終わりが近そう"])
    ]
  }),

  compatibility: createDiagnosis({
    key: "compatibility",
    menuTitle: "2人の恋愛相性診断",
    menuText: "2人の相性バランスをチェック",
    appTitle: "2人の恋愛相性診断",
    appSubtitle: "10の質問で2人の相性をチェック",
    quizLabel: "2人の恋愛相性診断",
    shareTitle: "2人の恋愛相性診断",
    resultLabels: [
      [36, "相性95%｜かなり相性がいい2人", "考え方や距離感のバランスが取りやすく、一緒にいるほど安心できる相性です。", "今の自然な流れを大事にすれば、長く続く関係になりやすいです。"],
      [30, "相性80%｜かなり良い相性", "お互いに合う部分が多く、少しの違いも楽しめる関係です。", "遠慮しすぎず、本音も少しずつ見せていくとさらに相性が深まります。"],
      [24, "相性65%｜伸びしろのある2人", "相性は悪くありません。まだ分かり合えていない部分が少し残っている段階です。", "会話の量より“安心して話せる空気”を増やしていくと良い流れになります。"],
      [18, "相性45%｜すれ違いやすい2人", "惹かれ合う部分はあっても、距離感や恋愛観ですれ違いやすい相性です。", "無理に合わせすぎず、違いを確認しながら付き合い方を整えるのがポイントです。"],
      [0, "相性25%｜頑張りすぎると苦しい相性", "片方ばかりが頑張る関係になりやすく、自然体ではいにくい相性かもしれません。", "“好き”だけで無理を続けないことが大切です。自分が楽でいられるかも大事にしてください。"]
    ],
    questions: [
      q("連絡頻度の感覚は合っている？", ["かなり合う", "だいたい合う", "少しズレる", "かなりズレる"]),
      q("会話のテンポは？", ["すごく合う", "普通に合う", "少しズレる", "合わないことが多い"]),
      q("一緒にいるときの居心地は？", ["かなり楽", "悪くない", "少し気を使う", "かなり疲れる"]),
      q("価値観の違いは？", ["あまり感じない", "少しある", "結構ある", "かなりある"]),
      q("沈黙は気まずい？", ["全然平気", "少し気になる", "結構気になる", "かなり気まずい"]),
      q("ケンカしそうなときの空気は？", ["落ち着いて話せる", "少し感情的になる", "すれ違いやすい", "避けたくなる"]),
      q("会いたい頻度は合っている？", ["かなり合う", "だいたい合う", "少しズレる", "かなりズレる"]),
      q("相手の言葉で安心できる？", ["かなりできる", "少しできる", "あまりできない", "不安になりやすい"]),
      q("自分らしくいられる？", ["かなりいられる", "だいたいいられる", "少し無理している", "かなり無理している"]),
      q("2人を一言でいうと？", ["相性抜群", "悪くない", "微妙なズレがある", "頑張りすぎる関係"])
    ]
  }),

  chaseType: createDiagnosis({
    key: "chaseType",
    menuTitle: "追う恋？追われる恋？診断",
    menuText: "あなたの恋のスタイルをチェック",
    appTitle: "追う恋？追われる恋？診断",
    appSubtitle: "10の質問で恋のスタイルをチェック",
    quizLabel: "追う恋？追われる恋？診断",
    shareTitle: "追う恋？追われる恋？診断",
    scoreText: false,
    getResult(totalScore) {
      if (totalScore >= 34) {
        return {
          title: "追われる恋が向いているタイプ",
          text: "自分から頑張りすぎるより、相手から大事にされる恋の方が魅力が自然に出やすいタイプです。",
          advice: "追いすぎず、余白を作ることが恋の流れを良くします。あなたをちゃんと見てくれる相手を選ぶと恋が安定しやすいです。"
        };
      } else if (totalScore >= 28) {
        return {
          title: "バランス恋愛タイプ",
          text: "追う・追われるのどちらかに偏るより、自然なやり取りの中で関係を育てるのが向いているタイプです。",
          advice: "無理に駆け引きせず、相手とのテンポが合うかどうかを大切にすると恋が進みやすいです。"
        };
      } else if (totalScore >= 22) {
        return {
          title: "少し追いがちなタイプ",
          text: "気になる相手には自分から動けるタイプです。ただ、熱量が高くなりすぎるとバランスを崩しやすい面もあります。",
          advice: "好意を見せるのは良いことですが、相手の反応が薄いときは少し引く勇気も持つと恋が整いやすいです。"
        };
      } else if (totalScore >= 16) {
        return {
          title: "追う恋で沼りやすいタイプ",
          text: "好きになると相手中心になりやすく、追えば追うほど苦しくなりやすいタイプです。",
          advice: "頑張る恋より、大事にされる恋を意識してみてください。恋の主導権を相手に渡しすぎないことが大切です。"
        };
      }

      return {
        title: "本気になると一直線タイプ",
        text: "好きになるとブレーキが効きにくく、相手を最優先にしやすいタイプです。恋の熱量は高いですが、その分だけ疲れやすさもあります。",
        advice: "恋愛でも“自分のペース”を守ることが大切です。追うほど逃げる恋には無理にしがみつかないことを意識してください。"
      };
    },
    questions: [
      q("気になる人ができたら？", ["相手の反応を見ながら進める", "少し自分から動く", "かなり自分から動く", "一直線に追いがち"]),
      q("返信が遅いとどうする？", ["待てる", "少し気になる", "追ってしまう", "すぐ送りたくなる"]),
      q("会う約束はどちらが多い？", ["相手からもある", "半々くらい", "自分からが多い", "ほぼ自分から"]),
      q("恋愛で苦しいときは？", ["少し距離を置ける", "悩むけど我慢できる", "かなり引きずる", "相手中心になる"]),
      q("好きバレするのは？", ["自然なら平気", "少し恥ずかしい", "かなり気にする", "気づいたら全部出てる"]),
      q("駆け引きはできる？", ["わりとできる", "少しならできる", "苦手", "ほぼできない"]),
      q("相手が冷たいときは？", ["少し様子を見る", "不安になる", "追いたくなる", "余計に気になる"]),
      q("会えない時間は？", ["自分の時間を楽しめる", "少し考える", "かなり考える", "ほぼ相手のことばかり"]),
      q("恋で大事なのは？", ["安心感", "バランス", "気持ちの強さ", "つながり続けること"]),
      q("自分の恋を一言でいうと？", ["余裕がある", "自然体", "追いがち", "一直線"])
    ]
  }),

  seriousness: createDiagnosis({
    key: "seriousness",
    menuTitle: "今の彼の本気度診断",
    menuText: "相手の本気度をチェック",
    appTitle: "今の彼の本気度診断",
    appSubtitle: "10の質問で相手の本気度をチェック",
    quizLabel: "今の彼の本気度診断",
    shareTitle: "今の彼の本気度診断",
    resultLabels: [
      [36, "本気度95%｜かなり本命", "相手はかなり真剣にあなたを見ている可能性が高いです。言葉だけでなく行動にも本気度が出ています。", "今の自然な関係を大切にしながら、少しだけ未来の話もしてみると進展しやすいです。"],
      [30, "本気度80%｜本命候補", "相手はあなたを特別な存在として見ている可能性があります。", "相手の好意に安心しすぎず、2人の時間を少しずつ増やしていきましょう。"],
      [24, "本気度60%｜気になる存在", "好意はありそうですが、まだ本気と断定するには少し早い段階です。", "焦らず、相手の“継続した行動”を見ることが大切です。"],
      [18, "本気度40%｜様子見ライン", "今はあなたに興味はあっても、本気度はまだ弱めかもしれません。", "相手の言葉よりも、会う姿勢や時間の使い方をよく見てみましょう。"],
      [0, "本気度20%｜まだ見極めたい", "今の状態では本気とまでは言いにくい流れです。温度差が大きい可能性があります。", "追いすぎる前に、自分が大事にされている実感があるかを確認してください。"]
    ],
    questions: [
      q("相手から会う提案はある？", ["よくある", "たまにある", "ほぼない", "全然ない"]),
      q("会う予定は具体的？", ["かなり具体的", "普通", "ふわっとしている", "流れやすい"]),
      q("あなたの話を覚えている？", ["かなり覚えている", "そこそこ覚えている", "あまり覚えていない", "ほぼ覚えていない"]),
      q("連絡の温度感は？", ["安定して高い", "普通", "波がある", "かなり低い"]),
      q("あなたを知ろうとする？", ["かなりする", "少しする", "あまりしない", "ほぼしない"]),
      q("将来や次の話は？", ["自然に出る", "たまに出る", "ほぼ出ない", "全く出ない"]),
      q("忙しくても連絡はある？", ["ある", "たまにある", "少ない", "ほぼない"]),
      q("周りへの見せ方は？", ["隠さない", "少し見せる", "あまり見せない", "かなり隠す"]),
      q("あなたの不安に対しては？", ["向き合ってくれる", "少し向き合う", "流される", "避けられる"]),
      q("今の彼を一言でいうと？", ["かなり本気", "気になる存在扱い", "まだ様子見", "読めない"])
    ]
  })
};

function q(question, choiceTexts) {
  const scores = [4, 3, 2, 1];
  return {
    question,
    choices: choiceTexts.map((text, index) => ({ text, score: scores[index] }))
  };
}

function createDiagnosis(config) {
  return {
    ...config,
    getResult(totalScore) {
      if (typeof config.getResult === "function") {
        return config.getResult(totalScore);
      }
      for (const [minScore, title, text, advice] of config.resultLabels) {
        if (totalScore >= minScore) {
          return { title, text, advice };
        }
      }
      return { title: "診断結果", text: "結果を表示できませんでした。", advice: "もう一度試してください。" };
    }
  };
}

let currentDiagnosis = null;
let currentQuestionIndex = 0;
let totalScore = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const restartBtn = document.getElementById("restart-btn");
const shareBtn = document.getElementById("share-btn");
const appTitle = document.getElementById("app-title");
const appSubtitle = document.getElementById("app-subtitle");
const quizLabel = document.getElementById("quiz-label");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices");
const resultDiagnosisName = document.getElementById("result-diagnosis-name");
const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultText = document.getElementById("result-text");
const resultAdvice = document.getElementById("result-advice");
const progressFill = document.getElementById("progress-fill");
const menuList = document.getElementById("menu-list");

renderMenu();
restartBtn.addEventListener("click", restartQuiz);
shareBtn.addEventListener("click", shareResult);

function renderMenu() {
  menuList.innerHTML = "";
  Object.values(diagnoses).forEach((diagnosis) => {
    const button = document.createElement("button");
    button.className = "menu-btn";
    button.innerHTML = `
      <span class="menu-title">${diagnosis.menuTitle}</span>
      <span class="menu-text">${diagnosis.menuText}</span>
    `;
    button.addEventListener("click", () => startQuiz(diagnosis.key));
    menuList.appendChild(button);
  });
}

function showScreen(screen) {
  startScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  screen.classList.add("active");
}

function setDiagnosisMeta(diagnosis) {
  appTitle.textContent = diagnosis.appTitle;
  appSubtitle.textContent = diagnosis.appSubtitle;
  quizLabel.textContent = diagnosis.quizLabel;
  resultDiagnosisName.textContent = diagnosis.quizLabel;
}

function startQuiz(diagnosisKey) {
  currentDiagnosis = diagnoses[diagnosisKey];
  currentQuestionIndex = 0;
  totalScore = 0;
  setDiagnosisMeta(currentDiagnosis);
  showScreen(quizScreen);
  showQuestion();
}

function showQuestion() {
  const currentQuestion = currentDiagnosis.questions[currentQuestionIndex];
  const totalQuestions = currentDiagnosis.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  questionNumber.textContent = `質問 ${currentQuestionIndex + 1} / ${totalQuestions}`;
  questionText.textContent = currentQuestion.question;
  progressFill.style.width = `${progress}%`;
  choicesContainer.innerHTML = "";

  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.textContent = choice.text;
    button.addEventListener("click", () => {
      totalScore += choice.score;
      currentQuestionIndex += 1;
      if (currentQuestionIndex < totalQuestions) {
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
  const maxScore = currentDiagnosis.questions.length * 4;
  const result = currentDiagnosis.getResult(totalScore);

  resultTitle.textContent = result.title;
  resultScore.textContent = currentDiagnosis.scoreText === false
    ? ""
    : `あなたの合計点：${totalScore}点 / ${maxScore}点`;
  resultText.textContent = result.text;
  resultAdvice.textContent = `アドバイス：${result.advice}`;
}

function restartQuiz() {
  currentDiagnosis = null;
  currentQuestionIndex = 0;
  totalScore = 0;
  appTitle.textContent = "恋愛診断";
  appSubtitle.textContent = "気になる恋をチェックしよう";
  progressFill.style.width = "0%";
  showScreen(startScreen);
}

function shareResult() {
  if (!currentDiagnosis) return;

  const text = `【${currentDiagnosis.shareTitle}】\n結果は「${resultTitle.textContent}」でした！\nあなたも診断してみて👇`;
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({ title: currentDiagnosis.shareTitle, text, url });
  } else {
    const twitterUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text + "\n" + url);
    window.open(twitterUrl, "_blank");
  }
}
