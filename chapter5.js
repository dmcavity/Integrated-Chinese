/* ============================================================
   Integrated Chinese L1P1 — Chapter 5: Visiting Friends (看朋友)
   Content file. Loaded by index.html. No logic lives here.

   Field conventions
     zh  simplified   zt  traditional (omit when identical)
     py  pinyin       en  English
   Exercise types (t):
     mc     multiple choice  {zh|q, opts, ans, why, label?}
     fill   sentence with ___ and options   (rendered as mc)
     wo     word order  {words, extra?, en, py}
     pos    insert a word into a sentence {words, insert, ans, en}
     speak  say the sentence  {zh, py, en}
     multi  two blanks, separate option rows {zh, blanks:[[..],[..]], ans:[a,b]}
   ============================================================ */
window.IC_CHAPTERS = window.IC_CHAPTERS || [];
window.IC_CHAPTERS.push({
  id: 'ch5',
  number: 5,
  title: 'Visiting Friends',
  zh: '看朋友',
  zt: '看朋友',
  py: 'Kàn péngyou',
  blurb: 'Wang Peng and Li You visit Gao Wenzhong at home, meet his sister, and are offered something to drink.',

  /* ---------- VOCABULARY (from the study guide) ---------- */
  vocab: [
    { s:'呀', t:'呀', py:'ya', en:'interjection particle (softens a question)' },
    { s:'进', t:'進', py:'jìn', en:'to enter' },
    { s:'快', t:'快', py:'kuài', en:'fast, quick; quickly' },
    { s:'进来', t:'進來', py:'jìnlai', en:'to come in' },
    { s:'来', t:'來', py:'lái', en:'to come' },
    { s:'介绍', t:'介紹', py:'jièshào', en:'to introduce' },
    { s:'一下', t:'一下', py:'yí xià', en:'once, a bit (after a verb)' },
    { s:'高兴', t:'高興', py:'gāoxìng', en:'happy, pleased' },
    { s:'漂亮', t:'漂亮', py:'piàoliang', en:'pretty, beautiful' },
    { s:'坐', t:'坐', py:'zuò', en:'to sit' },
    { s:'在', t:'在', py:'zài', en:'at, in, on; to be at' },
    { s:'哪儿', t:'哪兒', py:'nǎr', en:'where' },
    { s:'学校', t:'學校', py:'xuéxiào', en:'school' },
    { s:'喝', t:'喝', py:'hē', en:'to drink' },
    { s:'点儿', t:'點兒', py:'diǎnr', en:'a little, a bit' },
    { s:'茶', t:'茶', py:'chá', en:'tea' },
    { s:'咖啡', t:'咖啡', py:'kāfēi', en:'coffee' },
    { s:'吧', t:'吧', py:'ba', en:'sentence-final particle (suggestion)' },
    { s:'要', t:'要', py:'yào', en:'to want' },
    { s:'瓶', t:'瓶', py:'píng', en:'bottle (measure word)', mw:true },
    { s:'可乐', t:'可樂', py:'kělè', en:'cola' },
    { s:'可以', t:'可以', py:'kěyǐ', en:'can, may' },
    { s:'对不起', t:'對不起', py:'duìbuqǐ', en:'sorry, excuse me' },
    { s:'给', t:'給', py:'gěi', en:'to give' },
    { s:'杯', t:'杯', py:'bēi', en:'cup, glass (measure word)', mw:true },
    { s:'水', t:'水', py:'shuǐ', en:'water' },
    { s:'高小音', t:'高小音', py:'Gāo Xiǎoyīn', en:'(a personal name)', name:true },
    { s:'玩儿', t:'玩兒', py:'wánr', en:'to play, to have fun' },
    { s:'了', t:'了', py:'le', en:'dynamic particle (completed action)' },
    { s:'图书馆', t:'圖書館', py:'túshūguǎn', en:'library' },
    { s:'一起', t:'一起', py:'yìqǐ', en:'together' },
    { s:'聊天儿', t:'聊天兒', py:'liáo tiānr', en:'to chat' },
    { s:'才', t:'才', py:'cái', en:'not until, only then' },
    { s:'回家', t:'回家', py:'huí jiā', en:'to return home' }
  ],

  /* Measure-word pairings used by the measure-word drill */
  measureWords: [
    { noun:'可乐', nt:'可樂', mw:'瓶', py:'yì píng kělè', en:'a bottle of cola' },
    { noun:'水', mw:'杯', py:'yì bēi shuǐ', en:'a glass of water' },
    { noun:'茶', mw:'杯', py:'yì bēi chá', en:'a cup of tea' },
    { noun:'咖啡', mw:'杯', py:'yì bēi kāfēi', en:'a cup of coffee' },
    { noun:'可乐', nt:'可樂', mw:'杯', py:'yì bēi kělè', en:'a glass of cola' }
  ],
  measureDistractors: ['个','本','杯','瓶','张'],

  /* ---------- GRAMMAR POINTS ---------- */
  grammar: [
    {
      id:'g1',
      title:'Adjectives as predicates',
      zh:'形容词谓语句', zt:'形容詞謂語句', py:'xíngróngcí wèiyǔ jù',
      summary:'An adjective can be the predicate all by itself. Do not add 是. In a plain statement put 很 before the adjective; here 很 is a quiet linker, not a strong "very".',
      rules:[
        ['Never use 是 with an adjective predicate.', '我是高兴 ✗ → 我很高兴 ✓'],
        ['Negate by swapping 很 for 不.', '我今天不忙。'],
        ['Drop 很 in a statement and it sounds comparative.', '这瓶可乐大 = this bottle is bigger (than that one)'],
        ['Ask with the A-not-A pattern.', '你高兴不高兴？']
      ],
      examples:[
        { zh:'高小音的家很大。', py:'Gāo Xiǎoyīn de jiā hěn dà.', en:"Gao Xiaoyin's house is big." },
        { zh:'我今天很高兴。', zt:'我今天很高興。', py:'Wǒ jīntiān hěn gāoxìng.', en:'I am happy today.' },
        { zh:'这个学校很漂亮。', zt:'這個學校很漂亮。', py:'Zhège xuéxiào hěn piàoliang.', en:'This school is pretty.' },
        { zh:'我今天不忙。', py:'Wǒ jīntiān bù máng.', en:'I am not busy today.' },
        { zh:'你弟弟高兴不高兴？', zt:'你弟弟高興不高興？', py:'Nǐ dìdi gāoxìng bù gāoxìng?', en:'Is your younger brother happy?' }
      ],
      exercises:[
        { t:'fill', zh:'我今天___高兴。', zt:'我今天___高興。', opts:['很','是','在','有'], ans:'很', py:'Wǒ jīntiān hěn gāoxìng.', en:'I am happy today.', why:'Adjective predicates link with 很, never with 是.' },
        { t:'multi', zh:'我今天___忙，___高兴。', zt:'我今天___忙，___高興。', blanks:[['不','没','是'],['很','是','也']], ans:['不','很'], py:'Wǒ jīntiān bù máng, hěn gāoxìng.', en:'I am not busy today; I am happy.', why:'不 negates the first adjective; 很 links the second.' },
        { t:'fill', zh:'我今天___忙。', opts:['不','没','是不','不是'], ans:'不', py:'Wǒ jīntiān bù máng.', en:'I am not busy today.', why:'To negate an adjective predicate, replace 很 with 不.' },
        { t:'mc', label:'Spot the error', zh:'我是高兴。', zt:'我是高興。', q:'What is wrong with this sentence?', opts:['是 should not be used before an adjective', 'It needs 了 at the end', '高兴 should come first', 'Nothing — it is correct'], ans:0, why:'Adjectives are predicates on their own: 我很高兴。' },
        { t:'mc', label:'Spot the error', zh:'这个学校是很漂亮。', zt:'這個學校是很漂亮。', q:'What is wrong with this sentence?', opts:['Remove 是', 'Remove 很', 'Swap 是 and 很', 'Nothing — it is correct'], ans:0, why:'Remove 是. 这个学校很漂亮。 is the natural sentence.' },
        { t:'mc', label:'Nuance', zh:'这瓶可乐大。', zt:'這瓶可樂大。', q:'Without 很, how does this sentence read?', opts:['As a comparison: this bottle is the bigger one', 'As a simple statement: this bottle is big', 'As a question', 'As a negative'], ans:0, why:'Omitting 很 in a statement implies contrast with something else.' },
        { t:'wo', words:['你','弟弟','高兴','不','高兴','？'], en:'Is your younger brother happy?', py:'Nǐ dìdi gāoxìng bù gāoxìng?' },
        { t:'wo', words:['高小音','的','家','很','大','。'], extra:['是'], en:"Gao Xiaoyin's house is big.", py:'Gāo Xiǎoyīn de jiā hěn dà.' },
        { t:'tr', zh:'我今天不忙。', py:'Wǒ jīntiān bù máng.', opts:['I am not busy today.','I am very busy today.','Am I busy today?','I was busy today.'], ans:0, why:'不 negates the adjective 忙.' },
        { t:'speak', zh:'我今天很高兴。', zt:'我今天很高興。', py:'Wǒ jīntiān hěn gāoxìng.', en:'I am happy today.' },
        { t:'speak', zh:'这个学校很漂亮。', zt:'這個學校很漂亮。', py:'Zhège xuéxiào hěn piàoliang.', en:'This school is pretty.' }
      ]
    },
    {
      id:'g2',
      title:'在 as preposition and verb',
      zh:'在', py:'zài',
      summary:'在 marks location. Before an action verb it is a preposition ("at"); when it is the only verb it means "to be at".',
      rules:[
        ['Preposition: Subject + 在 + Place + Verb.', '我们在学校看书。'],
        ['The 在-phrase goes BEFORE the action verb, never after.', '我看书在学校 ✗'],
        ['Verb: Subject + 在 + Place.', '我爸爸不在家。'],
        ['Negate with 不 before 在.', '老师不在办公室。']
      ],
      examples:[
        { zh:'我们在学校看书。', zt:'我們在學校看書。', py:'Wǒmen zài xuéxiào kàn shū.', en:'We read books at school.' },
        { zh:'王朋在李友的家喝茶。', py:'Wáng Péng zài Lǐ Yǒu de jiā hē chá.', en:"Wang Peng drinks tea at Li You's house." },
        { zh:'你在哪儿工作？', zt:'你在哪兒工作？', py:'Nǐ zài nǎr gōngzuò?', en:'Where do you work?' },
        { zh:'我爸爸不在家。', py:'Wǒ bàba bú zài jiā.', en:'My father is not at home.' },
        { zh:'老师在哪里？', zt:'老師在哪裡？', py:'Lǎoshī zài nǎlǐ?', en:'Where is the teacher?' }
      ],
      exercises:[
        { t:'mc', label:'Preposition or verb?', zh:'我们在学校看书。', zt:'我們在學校看書。', q:'What is 在 doing here?', opts:['Preposition — "at" before the action verb 看','Main verb — "to be at"'], ans:0, why:'There is an action verb (看), so 在 is the preposition introducing where it happens.' },
        { t:'mc', label:'Preposition or verb?', zh:'我爸爸不在家。', q:'What is 在 doing here?', opts:['Preposition — "at" before an action verb','Main verb — "to be at"'], ans:1, why:'No other verb follows; 在 itself is the predicate.' },
        { t:'mc', label:'Preposition or verb?', zh:'老师在哪里？', zt:'老師在哪裡？', q:'What is 在 doing here?', opts:['Preposition','Main verb'], ans:1, why:'"Where IS the teacher" — 在 is the verb.' },
        { t:'mc', label:'Preposition or verb?', zh:'你在哪儿工作？', zt:'你在哪兒工作？', q:'What is 在 doing here?', opts:['Preposition','Main verb'], ans:0, why:'工作 is the action; 在哪儿 says where.' },
        { t:'pos', words:['我们','学校','看书','。'], wt:['我們','學校','看書','。'], insert:'在', ans:1, en:'We read at school.', py:'Wǒmen zài xuéxiào kàn shū.', why:'在 + place goes right after the subject and before the verb.' },
        { t:'pos', words:['王朋','李友的家','喝茶','。'], insert:'在', ans:1, en:"Wang Peng drinks tea at Li You's house.", py:'Wáng Péng zài Lǐ Yǒu de jiā hē chá.' },
        { t:'wo', words:['你','在','哪儿','工作','？'], en:'Where do you work?', py:'Nǐ zài nǎr gōngzuò?' },
        { t:'wo', words:['我','爸爸','不','在','家','。'], extra:['没'], en:'My father is not at home.', py:'Wǒ bàba bú zài jiā.' },
        { t:'wo', words:['我','在','图书馆','看','书','。'], en:'I read books at the library.', py:'Wǒ zài túshūguǎn kàn shū.' },
        { t:'mc', label:'Spot the error', zh:'我看书在学校。', zt:'我看書在學校。', q:'What is wrong?', opts:['The 在-phrase must come before 看书','在 should be 是','It needs 很','Nothing — it is correct'], ans:0, why:'Location comes before the action: 我在学校看书。' },
        { t:'tr', zh:'王朋在李友的家喝茶。', py:'Wáng Péng zài Lǐ Yǒu de jiā hē chá.', opts:["Wang Peng drinks tea at Li You's house.","Wang Peng is at Li You's house.","Li You drinks tea at Wang Peng's house.","Wang Peng wants to drink tea with Li You."], ans:0 },
        { t:'speak', zh:'你在哪儿工作？', zt:'你在哪兒工作？', py:'Nǐ zài nǎr gōngzuò?', en:'Where do you work?' },
        { t:'speak', zh:'我爸爸不在家。', py:'Wǒ bàba bú zài jiā.', en:'My father is not at home.' }
      ]
    },
    {
      id:'g3',
      title:'Sentence-final 吧',
      zh:'吧', py:'ba',
      summary:'Add 吧 to the end of a statement to turn it into a suggestion or soft request ("let\'s…", "why don\'t you…"). With a rising tone it can also seek confirmation ("…, right?").',
      rules:[
        ['Suggestion: statement + 吧。', '我们喝咖啡吧。'],
        ['Softens an instruction.', '请进吧。'],
        ['Confirmation: statement + 吧？', '你想看中国电影吧？']
      ],
      examples:[
        { zh:'我们喝咖啡吧。', zt:'我們喝咖啡吧。', py:'Wǒmen hē kāfēi ba.', en:"Let's drink coffee." },
        { zh:'请进吧。', zt:'請進吧。', py:'Qǐng jìn ba.', en:'Please come in.' },
        { zh:'你想看中国电影吧？', zt:'你想看中國電影吧？', py:'Nǐ xiǎng kàn Zhōngguó diànyǐng ba?', en:'You want to watch a Chinese movie, right?' },
        { zh:'我喝茶吧。', py:'Wǒ hē chá ba.', en:"I'll have tea, then." }
      ],
      exercises:[
        { t:'fill', zh:'我们喝咖啡___。', zt:'我們喝咖啡___。', opts:['吧','吗','呢','了'], ans:'吧', py:'Wǒmen hē kāfēi ba.', en:"Let's drink coffee.", why:'吧 makes it a suggestion.' },
        { t:'mc', label:'Rewrite', q:'Turn this command into a gentle suggestion: 你喝茶。', opts:['你喝茶吧。','你喝茶吗？','你喝茶呢？','你喝了茶。'], ans:0, why:'Adding 吧 softens the tone.' },
        { t:'mc', label:'Meaning', zh:'你想看中国电影吧？', zt:'你想看中國電影吧？', q:'What is the speaker doing?', opts:['Checking a guess — "…right?"','Giving an order','Asking a neutral yes/no question','Refusing'], ans:0, why:'吧 with a question mark seeks confirmation of something the speaker already suspects.' },
        { t:'mc', label:'吧 or 吗?', zh:'你是学生___？', zt:'你是學生___？', q:'Which particle asks a neutral yes/no question (no guess)?', opts:['吗','吧'], ans:0, why:'吗 is neutral; 吧 implies you already think the answer is yes.' },
        { t:'wo', words:['我们','一起','去','图书馆','吧','。'], en:"Let's go to the library together.", py:'Wǒmen yìqǐ qù túshūguǎn ba.' },
        { t:'wo', words:['那','给','我','一杯','水','吧','。'], en:'Then give me a glass of water.', py:'Nà gěi wǒ yì bēi shuǐ ba.' },
        { t:'speak', zh:'我们喝咖啡吧。', zt:'我們喝咖啡吧。', py:'Wǒmen hē kāfēi ba.', en:"Let's drink coffee." },
        { t:'speak', zh:'请进吧。', zt:'請進吧。', py:'Qǐng jìn ba.', en:'Please come in.' }
      ]
    },
    {
      id:'g4',
      title:'一下 and 一点儿',
      zh:'一下 · 一点儿', zt:'一下 · 一點兒', py:'yí xià · yì diǎnr',
      summary:'Both soften a request, but they attach to different words. 一下 follows a VERB (do it briefly, casually). 一点儿 precedes a NOUN (a little bit of something).',
      rules:[
        ['Verb + 一下', '我介绍一下。'],
        ['一点儿 + Noun', '喝一点儿水'],
        ['After 喝/吃, 一点儿 often shortens to 点儿.', '你想喝点儿什么？']
      ],
      examples:[
        { zh:'我介绍一下。', zt:'我介紹一下。', py:'Wǒ jièshào yí xià.', en:'Let me introduce (briefly).' },
        { zh:'你想喝一点儿水吗？', zt:'你想喝一點兒水嗎？', py:'Nǐ xiǎng hē yì diǎnr shuǐ ma?', en:'Would you like to drink a little water?' },
        { zh:'你们想喝点儿什么？', zt:'你們想喝點兒什麼？', py:'Nǐmen xiǎng hē diǎnr shénme?', en:'What would you like to drink?' }
      ],
      exercises:[
        { t:'fill', zh:'我介绍___。', zt:'我介紹___。', opts:['一下','一点儿','一起','一杯'], ans:'一下', py:'Wǒ jièshào yí xià.', en:'Let me introduce.', why:'介绍 is a verb, so 一下 follows it.' },
        { t:'fill', zh:'你想喝___水吗？', zt:'你想喝___水嗎？', opts:['一点儿','一下','一起','很'], ans:'一点儿', py:'Nǐ xiǎng hē yì diǎnr shuǐ ma?', en:'Would you like a little water?', why:'水 is a noun, so 一点儿 goes before it.' },
        { t:'fill', zh:'我们聊___天儿吧。', zt:'我們聊___天兒吧。', opts:['一下','一点儿'], ans:'一下', py:'Wǒmen liáo yí xià tiānr ba.', en:"Let's chat a bit.", why:'一下 goes inside the verb-object 聊天儿, after the verb.' },
        { t:'fill', zh:'你们想喝___什么？', zt:'你們想喝___什麼？', opts:['点儿','一下','一起','杯'], ans:'点儿', py:'Nǐmen xiǎng hē diǎnr shénme?', en:'What would you like to drink?', why:'点儿 (short for 一点儿) precedes the object 什么.' },
        { t:'multi', zh:'我介绍___，这___我姐姐。', zt:'我介紹___，這___我姐姐。', blanks:[['一下','一点儿','一起'],['是','很','在']], ans:['一下','是'], py:'Wǒ jièshào yí xià, zhè shì wǒ jiějie.', en:'Let me introduce — this is my older sister.', why:'一下 follows the verb 介绍; 是 links two nouns.' },
        { t:'multi', zh:'你想喝___水___？', zt:'你想喝___水___？', blanks:[['一点儿','一下','一起'],['吗','吧','呢']], ans:['一点儿','吗'], py:'Nǐ xiǎng hē yì diǎnr shuǐ ma?', en:'Would you like a little water?', why:'一点儿 precedes the noun 水; 吗 asks the yes/no question.' },
        { t:'mc', label:'Spot the error', zh:'我一下介绍。', zt:'我一下介紹。', q:'What is wrong?', opts:['一下 must follow the verb: 我介绍一下','It should be 一点儿','It needs 很','Nothing — it is correct'], ans:0 },
        { t:'wo', words:['你','想','喝','一点儿','水','吗','？'], en:'Would you like a little water?', py:'Nǐ xiǎng hē yì diǎnr shuǐ ma?' },
        { t:'wo', words:['来','，','我','介绍','一下','。'], en:'Come, let me introduce.', py:'Lái, wǒ jièshào yí xià.' },
        { t:'speak', zh:'我介绍一下。', zt:'我介紹一下。', py:'Wǒ jièshào yí xià.', en:'Let me introduce.' },
        { t:'speak', zh:'你们想喝点儿什么？', zt:'你們想喝點兒什麼？', py:'Nǐmen xiǎng hē diǎnr shénme?', en:'What would you like to drink?' }
      ]
    },
    {
      id:'g5',
      title:'Completed action 了 and "not until" 才',
      zh:'了 · 才', py:'le · cái',
      summary:'了 after a verb marks that the action happened or was completed, and is usually paired with a quantified object (三杯水). 才 before a verb says the action happened LATER than expected — "not until".',
      rules:[
        ['Verb + 了 + quantity + noun', '喝了三杯水'],
        ['Time + 才 + Verb', '十一点才回家'],
        ['With 才 the sentence usually has no 了 at the end — lateness is the point, not completion.', '十二点才回家 ✓'],
        ['Negate a completed action with 没(有), not 不, and drop 了.', '没喝茶']
      ],
      examples:[
        { zh:'我昨天喝了三杯水。', py:'Wǒ zuótiān hē le sān bēi shuǐ.', en:'I drank three glasses of water yesterday.' },
        { zh:'我昨天晚上十一点才回家。', zt:'我昨天晚上十一點才回家。', py:'Wǒ zuótiān wǎnshang shíyī diǎn cái huí jiā.', en:"I didn't return home until 11:00 last night." },
        { zh:'王朋喝了两杯茶。', zt:'王朋喝了兩杯茶。', py:'Wáng Péng hē le liǎng bēi chá.', en:'Wang Peng drank two cups of tea.' }
      ],
      exercises:[
        { t:'fill', zh:'我昨天喝___三杯水。', opts:['了','才','吧','在'], ans:'了', py:'Wǒ zuótiān hē le sān bēi shuǐ.', en:'I drank three glasses of water yesterday.', why:'了 right after the verb marks a completed action.' },
        { t:'fill', zh:'我昨天晚上十一点___回家。', zt:'我昨天晚上十一點___回家。', opts:['才','了','就','在'], ans:'才', py:'Wǒ zuótiān wǎnshang shíyī diǎn cái huí jiā.', en:"I didn't get home until 11.", why:'才 says the action happened late.' },
        { t:'fill', zh:'他们昨天没___茶。', zt:'他們昨天沒___茶。', opts:['喝','喝了','才喝','喝吧'], ans:'喝', py:'Tāmen zuótiān méi hē chá.', en:"They didn't drink tea yesterday.", why:'After 没 the 了 is dropped.' },
        { t:'mc', label:'Meaning', zh:'他十二点才回家。', zt:'他十二點才回家。', q:'What does 才 add?', opts:['He got home LATE — not until 12','He got home EARLY — already by 12','He gets home at 12 every day','He will get home at 12'], ans:0 },
        { t:'pos', words:['我','昨天','喝','三杯','水','。'], insert:'了', ans:3, en:'I drank three glasses of water yesterday.', py:'Wǒ zuótiān hē le sān bēi shuǐ.', why:'了 goes immediately after the verb 喝.' },
        { t:'pos', words:['他','昨天','晚上','十二点','回家','。'], wt:['他','昨天','晚上','十二點','回家','。'], insert:'才', ans:4, en:"He didn't get home until 12 last night.", py:'Tā zuótiān wǎnshang shí\'èr diǎn cái huí jiā.', why:'才 sits between the time and the verb.' },
        { t:'wo', words:['王朋','喝','了','两杯','茶','。'], en:'Wang Peng drank two cups of tea.', py:'Wáng Péng hē le liǎng bēi chá.' },
        { t:'wo', words:['我','昨天','晚上','十一点','才','回家','。'], extra:['了'], en:"I didn't get home until 11 last night.", py:'Wǒ zuótiān wǎnshang shíyī diǎn cái huí jiā.' },
        { t:'multi', zh:'我昨天喝___三杯水，十一点___回家。', zt:'我昨天喝___三杯水，十一點___回家。', blanks:[['了','才','吧'],['才','了','在']], ans:['了','才'], py:'Wǒ zuótiān hē le sān bēi shuǐ, shíyī diǎn cái huí jiā.', en:'I drank three glasses of water yesterday and did not get home until eleven.', why:'了 after the verb marks completion; 才 before the verb marks lateness.' },
        { t:'mc', label:'Spot the error', zh:'我了喝三杯水。', q:'What is wrong?', opts:['了 must follow the verb: 喝了','了 should be 才','三杯 should come first','Nothing — it is correct'], ans:0 },
        { t:'tr', zh:'我今天喝了两瓶可乐，很高兴。', zt:'我今天喝了兩瓶可樂，很高興。', py:'Wǒ jīntiān hē le liǎng píng kělè, hěn gāoxìng.', opts:['I drank two bottles of cola today and I am happy.','I want two bottles of cola today, please.','I will drink two bottles of cola; that makes me happy.','I drank two cups of tea today and I am happy.'], ans:0 },
        { t:'speak', zh:'我昨天喝了三杯水。', py:'Wǒ zuótiān hē le sān bēi shuǐ.', en:'I drank three glasses of water yesterday.' },
        { t:'speak', zh:'我昨天晚上十一点才回家。', zt:'我昨天晚上十一點才回家。', py:'Wǒ zuótiān wǎnshang shíyī diǎn cái huí jiā.', en:"I didn't get home until 11 last night." }
      ]
    }
  ],

  /* ---------- DIALOGUE & NARRATIVE ----------
     Reconstructed from the textbook's storyline. Replace lines with the
     book's exact text if they differ. */
  dialogues: [
    {
      id:'d1', title:'Dialogue: Visiting Gao Wenzhong', note:'Wang Peng and Li You knock on the door.',
      roles:['高文中','王朋','李友','高小音'],
      lines:[
        { who:'高文中', zh:'谁呀？', zt:'誰呀？', py:'Shéi ya?', en:'Who is it?' },
        { who:'王朋', zh:'是我，王朋，还有李友。', zt:'是我，王朋，還有李友。', py:'Shì wǒ, Wáng Péng, hái yǒu Lǐ Yǒu.', en:"It's me, Wang Peng, and Li You too." },
        { who:'高文中', zh:'请进，请进，快进来！来，我介绍一下，这是我姐姐，高小音。', zt:'請進，請進，快進來！來，我介紹一下，這是我姐姐，高小音。', py:'Qǐng jìn, qǐng jìn, kuài jìnlai! Lái, wǒ jièshào yí xià, zhè shì wǒ jiějie, Gāo Xiǎoyīn.', en:'Come in, come in, quickly! Let me introduce — this is my older sister, Gao Xiaoyin.' },
        { who:'李友', zh:'小音，你好。认识你很高兴。', zt:'小音，你好。認識你很高興。', py:'Xiǎoyīn, nǐ hǎo. Rènshi nǐ hěn gāoxìng.', en:'Xiaoyin, hello. Happy to meet you.' },
        { who:'高小音', zh:'认识你们我也很高兴。', zt:'認識你們我也很高興。', py:'Rènshi nǐmen wǒ yě hěn gāoxìng.', en:'I am happy to meet you too.' },
        { who:'李友', zh:'你们家很大，也很漂亮。', zt:'你們家很大，也很漂亮。', py:'Nǐmen jiā hěn dà, yě hěn piàoliang.', en:'Your home is big, and pretty too.' },
        { who:'高小音', zh:'是吗？请坐，请坐。', zt:'是嗎？請坐，請坐。', py:'Shì ma? Qǐng zuò, qǐng zuò.', en:'Is that so? Please sit.' },
        { who:'王朋', zh:'小音，你在哪儿工作？', zt:'小音，你在哪兒工作？', py:'Xiǎoyīn, nǐ zài nǎr gōngzuò?', en:'Xiaoyin, where do you work?' },
        { who:'高小音', zh:'我在学校工作。你们想喝点儿什么？喝茶还是喝咖啡？', zt:'我在學校工作。你們想喝點兒什麼？喝茶還是喝咖啡？', py:'Wǒ zài xuéxiào gōngzuò. Nǐmen xiǎng hē diǎnr shénme? Hē chá háishi hē kāfēi?', en:'I work at a school. What would you like to drink? Tea or coffee?' },
        { who:'王朋', zh:'我喝茶吧。', py:'Wǒ hē chá ba.', en:"I'll have tea." },
        { who:'李友', zh:'我要一瓶可乐，可以吗？', zt:'我要一瓶可樂，可以嗎？', py:'Wǒ yào yì píng kělè, kěyǐ ma?', en:"I'd like a bottle of cola, is that okay?" },
        { who:'高小音', zh:'对不起，我们家没有可乐。', zt:'對不起，我們家沒有可樂。', py:'Duìbuqǐ, wǒmen jiā méiyǒu kělè.', en:"Sorry, we don't have any cola." },
        { who:'李友', zh:'那给我一杯水吧。', zt:'那給我一杯水吧。', py:'Nà gěi wǒ yì bēi shuǐ ba.', en:'Then give me a glass of water.' }
      ]
    },
    {
      id:'n1', title:'Narrative: At the Gao home', note:'A retelling of the visit in the third person.',
      roles:['叙述'],
      lines:[
        { who:'叙述', zh:'昨天晚上，王朋和李友去高文中家玩儿。', zt:'昨天晚上，王朋和李友去高文中家玩兒。', py:'Zuótiān wǎnshang, Wáng Péng hé Lǐ Yǒu qù Gāo Wénzhōng jiā wánr.', en:"Last night Wang Peng and Li You went to Gao Wenzhong's home to hang out." },
        { who:'叙述', zh:'在高文中家，他们认识了高文中的姐姐。', zt:'在高文中家，他們認識了高文中的姐姐。', py:'Zài Gāo Wénzhōng jiā, tāmen rènshi le Gāo Wénzhōng de jiějie.', en:"At his home they met Gao Wenzhong's older sister." },
        { who:'叙述', zh:'她叫高小音，在学校的图书馆工作。', zt:'她叫高小音，在學校的圖書館工作。', py:'Tā jiào Gāo Xiǎoyīn, zài xuéxiào de túshūguǎn gōngzuò.', en:'Her name is Gao Xiaoyin; she works at the school library.' },
        { who:'叙述', zh:'她请王朋喝茶，王朋喝了两杯。', zt:'她請王朋喝茶，王朋喝了兩杯。', py:'Tā qǐng Wáng Péng hē chá, Wáng Péng hē le liǎng bēi.', en:'She offered Wang Peng tea; he drank two cups.' },
        { who:'叙述', zh:'李友不喝茶，只喝了一杯水。', zt:'李友不喝茶，只喝了一杯水。', py:'Lǐ Yǒu bù hē chá, zhǐ hē le yì bēi shuǐ.', en:"Li You doesn't drink tea and only had a glass of water." },
        { who:'叙述', zh:'他们一起聊天儿、看电视。', zt:'他們一起聊天兒、看電視。', py:'Tāmen yìqǐ liáo tiānr, kàn diànshì.', en:'They chatted and watched TV together.' },
        { who:'叙述', zh:'王朋和李友晚上十二点才回家。', zt:'王朋和李友晚上十二點才回家。', py:'Wáng Péng hé Lǐ Yǒu wǎnshang shí\'èr diǎn cái huí jiā.', en:"Wang Peng and Li You didn't go home until midnight." }
      ]
    }
  ],

  comprehension: [
    { q:'Who is Gao Xiaoyin?', opts:["Gao Wenzhong's older sister","Gao Wenzhong's mother","Li You's classmate","Wang Peng's teacher"], ans:0, why:'这是我姐姐，高小音。' },
    { q:'Where does Gao Xiaoyin work?', opts:['At a school (library)','At a hospital','At a restaurant','She is a student'], ans:0, why:'我在学校工作 / 在学校的图书馆工作' },
    { q:'What does Wang Peng drink?', opts:['Tea','Coffee','Cola','Water'], ans:0, why:'我喝茶吧。' },
    { q:'Why does Li You end up with water?', opts:['The family has no cola','She does not like coffee','Tea is too hot','She is not thirsty'], ans:0, why:'对不起，我们家没有可乐。' },
    { q:'How many cups of tea does Wang Peng drink?', opts:['Two','One','Three','None'], ans:0, why:'王朋喝了两杯。' },
    { q:'When do they get home?', opts:['Not until midnight','At 11','Right after tea','The next morning'], ans:0, why:'十二点才回家 — 才 stresses how late.' },
    { q:'What does Li You say about the house?', opts:['It is big and pretty','It is small but cozy','It is far away','It is new'], ans:0, why:'你们家很大，也很漂亮。' }
  ],

  /* ---------- FREE TRANSLATION (study guide Part 3) ---------- */
  free: [
    { en:'My school is very big and very pretty.', answers:['我的学校很大，也很漂亮。','我的学校很大也很漂亮。','我的学校很大，很漂亮。'], hint:'Adjective predicates need 很; join with 也.' },
    { en:"Where do you drink tea? I drink tea at my friend's house.", answers:['你在哪儿喝茶？我在我朋友的家喝茶。','你在哪儿喝茶？我在朋友家喝茶。','你在哪里喝茶？我在我朋友家喝茶。'], hint:'在 + place before the verb 喝.' },
    { en:"Let's go to the library to read books together.", answers:['我们一起去图书馆看书吧。','我们一起去图书馆看书。','咱们一起去图书馆看书吧。'], hint:'一起 before the verb; 吧 at the end.' },
    { en:"He didn't come home until midnight yesterday.", answers:['他昨天晚上十二点才回家。','他昨天十二点才回家。'], hint:'Time + 才 + verb; no 了.' },
    { zh:'请进，请坐！你想喝点儿什么？', zt:'請進，請坐！你想喝點兒什麼？', py:'Qǐng jìn, qǐng zuò! Nǐ xiǎng hē diǎnr shénme?', answers:['Please come in, please sit! What would you like to drink?','Come in, have a seat! What do you want to drink?'], hint:'点儿 = a little; 什么 = what.' },
    { zh:'我今天喝了两瓶可乐，很高兴。', zt:'我今天喝了兩瓶可樂，很高興。', py:'Wǒ jīntiān hē le liǎng píng kělè, hěn gāoxìng.', answers:['I drank two bottles of cola today, and I am very happy.','Today I drank two bottles of cola; I am happy.'], hint:'了 after 喝 = completed; 瓶 = bottle.' }
  ],

  /* Characters offered in the writing pad (ordered by usefulness) */
  writing: ['进','来','快','坐','在','喝','茶','水','要','给','杯','瓶','才','回','家','玩','聊','天','学','校','图','书','馆','介','绍','高','兴','漂','亮','起']
});
