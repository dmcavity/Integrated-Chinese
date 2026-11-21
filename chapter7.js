/* Integrated Chinese L1P1 — Chapter 7: Studying Chinese (学中文)
   Vocabulary and grammar follow the textbook (3rd edition lesson outline).
   Dialogues are original scenes using Chapter 1–7 vocabulary; the book's own
   text is not reproduced. Check the vocab list against your edition. */
window.IC_CHAPTERS = window.IC_CHAPTERS || [];
window.IC_CHAPTERS.push({
  id:'ch7', number:7, title:'Studying Chinese', zh:'学中文', zt:'學中文', py:'Xué Zhōngwén',
  blurb:'How did the test go? Writing characters too slowly, getting help from a friend, and a Chinese class where not everyone did the preview.',
  vocab:[
    { s:'上个', t:'上個', py:'shàng ge', en:'previous, last (week, month)' },
    { s:'考', t:'考', py:'kǎo', en:'to give or take a test' },
    { s:'得', t:'得', py:'de', en:'structural particle (complement of degree)' },
    { s:'写', t:'寫', py:'xiě', en:'to write' },
    { s:'字', t:'字', py:'zì', en:'character, word' },
    { s:'慢', t:'慢', py:'màn', en:'slow' },
    { s:'教', t:'教', py:'jiāo', en:'to teach' },
    { s:'怎么', t:'怎麼', py:'zěnme', en:'how, how come' },
    { s:'第', t:'第', py:'dì', en:'ordinal prefix' },
    { s:'课', t:'課', py:'kè', en:'lesson, class' },
    { s:'语法', t:'語法', py:'yǔfǎ', en:'grammar' },
    { s:'容易', t:'容易', py:'róngyì', en:'easy' },
    { s:'难', t:'難', py:'nán', en:'difficult' },
    { s:'生词', t:'生詞', py:'shēngcí', en:'new word, vocabulary' },
    { s:'汉字', t:'漢字', py:'Hànzì', en:'Chinese character' },
    { s:'预习', t:'預習', py:'yùxí', en:'to preview' },
    { s:'复习', t:'複習', py:'fùxí', en:'to review' },
    { s:'开始', t:'開始', py:'kāishǐ', en:'to begin, to start' },
    { s:'就', t:'就', py:'jiù', en:'just, right away (earlier than expected)' },
    { s:'早', t:'早', py:'zǎo', en:'early; good morning' },
    { s:'晚', t:'晚', py:'wǎn', en:'late' },
    { s:'平常', t:'平常', py:'píngcháng', en:'usually' },
    { s:'这么', t:'這麼', py:'zhème', en:'so, such' },
    { s:'怪不得', t:'怪不得', py:'guàibude', en:'no wonder' },
    { s:'帅', t:'帥', py:'shuài', en:'handsome' },
    { s:'酷', t:'酷', py:'kù', en:'cool' },
    { s:'念', t:'唸', py:'niàn', en:'to read aloud' },
    { s:'课文', t:'課文', py:'kèwén', en:'text of a lesson' },
    { s:'录音', t:'錄音', py:'lùyīn', en:'recording; to record' },
    { s:'发音', t:'發音', py:'fāyīn', en:'pronunciation' },
    { s:'学习', t:'學習', py:'xuéxí', en:'to study' },
    { s:'真', t:'真', py:'zhēn', en:'really, truly' },
    { s:'懂', t:'懂', py:'dǒng', en:'to understand' },
    { s:'笔', t:'筆', py:'bǐ', en:'pen' },
    { s:'有用', t:'有用', py:'yǒuyòng', en:'useful' }
  ],
  measureWords:[
    { noun:'汉字', nt:'漢字', mw:'个', py:'yí ge Hànzì', en:'one Chinese character' },
    { noun:'生词', nt:'生詞', mw:'个', py:'yí ge shēngcí', en:'one new word' },
    { noun:'笔', nt:'筆', mw:'支', py:'yì zhī bǐ', en:'one pen' }
  ],
  measureDistractors:['个','支','本','张','杯'],
  grammar:[
    { id:'g1', title:'Complements of degree with 得', zh:'得', py:'de',
      summary:'To say HOW WELL or HOW something is done, put 得 after the verb and a description after 得: 写得很快 "writes fast". The negative 不 goes after 得, not before the verb.',
      rules:[['Verb + 得 + (很) + adjective','他写得很快。'],['Negative: 不 after 得','他写得不快。 (not 他不写得快)'],['Ask how well','你考得怎么样？'],['A-not-A after 得','你写得快不快？']],
      examples:[
        { zh:'你考得怎么样？', zt:'你考得怎麼樣？', py:'Nǐ kǎo de zěnmeyàng?', en:'How did you do on the test?' },
        { zh:'我考得不错。', zt:'我考得不錯。', py:'Wǒ kǎo de búcuò.', en:'I did pretty well.' },
        { zh:'常老师说得很慢。', zt:'常老師說得很慢。', py:'Cháng lǎoshī shuō de hěn màn.', en:'Teacher Chang speaks slowly.' },
        { zh:'李友写得不快。', zt:'李友寫得不快。', py:'Lǐ Yǒu xiě de bú kuài.', en:'Li You does not write fast.' }
      ],
      exercises:[
        { t:'fill', zh:'他说___很快。', zt:'他說___很快。', opts:['得','的','了','地'], ans:'得', py:'Tā shuō de hěn kuài.', en:'He speaks fast.', why:'得 links the verb to the description of how it is done.' },
        { t:'pos', words:['李友','写','很','快','。'], wt:['李友','寫','很','快','。'], insert:'得', ans:2, en:'Li You writes fast.', py:'Lǐ Yǒu xiě de hěn kuài.', why:'得 comes right after the verb.' },
        { t:'mc', label:'Spot the error', zh:'他写很快。', zt:'他寫很快。', q:'What is missing?', opts:['得 after the verb: 他写得很快','了 at the end','是 before 很','Nothing — it is correct'], ans:0 },
        { t:'mc', label:'Negation', q:'Which says "He does not write fast"?', opts:['他写得不快。','他不写得快。','他没写得快。','他写不得快。'], ans:0, why:'不 negates the description after 得.' },
        { t:'multi', zh:'你___得怎么样？我考得___错。', zt:'你___得怎麼樣？我考得___錯。', blanks:[['考','写','说'],['不','很','没']], ans:['考','不'], py:'Nǐ kǎo de zěnmeyàng? — Wǒ kǎo de búcuò.', en:'How did you do on the test? — Pretty well.', why:'考得 = how the test went; 不错 = pretty good.' },
        { t:'wo', words:['你','考','得','怎么样','？'], en:'How did you do on the test?', py:'Nǐ kǎo de zěnmeyàng?' },
        { t:'tr', zh:'常老师说得很慢。', zt:'常老師說得很慢。', py:'Cháng lǎoshī shuō de hěn màn.', opts:['Teacher Chang speaks slowly.','Teacher Chang says it is slow.','Teacher Chang is very late.','Teacher Chang speaks a lot.'], ans:0 },
        { t:'speak', zh:'你考得怎么样？', zt:'你考得怎麼樣？', py:'Nǐ kǎo de zěnmeyàng?', en:'How did you do on the test?' },
        { t:'speak', zh:'我考得不错。', zt:'我考得不錯。', py:'Wǒ kǎo de búcuò.', en:'I did pretty well.' }
      ] },
    { id:'g2', title:'Verb + object + 得', zh:'写字写得', zt:'寫字寫得', py:'xiě zì xiě de',
      summary:'When the verb has an object, 得 cannot follow the object. Either repeat the verb (写字写得很慢) or move the object to the front (字写得很慢).',
      rules:[['Repeat the verb','他说中文说得很好。'],['Or front the object','他中文说得很好。'],['Never object + 得','说中文得很好 ✗']],
      examples:[
        { zh:'我写汉字写得太慢了。', zt:'我寫漢字寫得太慢了。', py:'Wǒ xiě Hànzì xiě de tài màn le.', en:'I write characters too slowly.' },
        { zh:'王朋中文说得很好。', zt:'王朋中文說得很好。', py:'Wáng Péng Zhōngwén shuō de hěn hǎo.', en:'Wang Peng speaks Chinese very well.' },
        { zh:'她唱歌唱得真好。', py:'Tā chàng gē chàng de zhēn hǎo.', en:'She sings really well.' }
      ],
      exercises:[
        { t:'fill', zh:'我写汉字___得很慢。', zt:'我寫漢字___得很慢。', opts:['写','说','得','很'], ans:'写', py:'Wǒ xiě Hànzì xiě de hěn màn.', en:'I write characters slowly.', why:'Repeat the verb after its object, then add 得.' },
        { t:'mc', label:'Spot the error', zh:'她说中文得很好。', zt:'她說中文得很好。', q:'What is wrong?', opts:['Repeat the verb: 说中文说得很好','得 should be 的','很 should be 太','Nothing — it is correct'], ans:0 },
        { t:'wo', words:['她','说','中文','说','得','很','好','。'], en:'She speaks Chinese well.', py:'Tā shuō Zhōngwén shuō de hěn hǎo.' },
        { t:'wo', words:['王朋','汉字','写','得','很','漂亮','。'], en:'Wang Peng writes characters beautifully.', py:'Wáng Péng Hànzì xiě de hěn piàoliang.' },
        { t:'tr', zh:'她唱歌唱得真好。', py:'Tā chàng gē chàng de zhēn hǎo.', opts:['She sings really well.','She really likes to sing.','She sings every day.','She wants to sing a good song.'], ans:0 },
        { t:'speak', zh:'我写汉字写得太慢了。', zt:'我寫漢字寫得太慢了。', py:'Wǒ xiě Hànzì xiě de tài màn le.', en:'I write characters too slowly.' }
      ] },
    { id:'g3', title:'就 and 才', zh:'就 · 才', py:'jiù · cái',
      summary:'就 marks an action as early, quick or right away; 才 (from Chapter 5) marks it as late. Both go right before the verb. 就 sentences often end in 了; 才 sentences do not.',
      rules:[['就 = right away / earlier than expected','我们今天就开始吧。'],['Time + 就 + verb + 了','他七点就来了。'],['Time + 才 + verb','她十点才来。']],
      examples:[
        { zh:'我们现在就开始吧。', zt:'我們現在就開始吧。', py:'Wǒmen xiànzài jiù kāishǐ ba.', en:"Let's start right now." },
        { zh:'王朋七点就来了。', zt:'王朋七點就來了。', py:'Wáng Péng qī diǎn jiù lái le.', en:'Wang Peng came as early as seven.' },
        { zh:'李友九点才来。', zt:'李友九點才來。', py:'Lǐ Yǒu jiǔ diǎn cái lái.', en:"Li You didn't come until nine." }
      ],
      exercises:[
        { t:'multi', zh:'王朋七点___来了，李友九点___来。', zt:'王朋七點___來了，李友九點___來。', blanks:[['就','才','都'],['才','就','也']], ans:['就','才'], py:'Wáng Péng qī diǎn jiù lái le, Lǐ Yǒu jiǔ diǎn cái lái.', en:"Wang Peng came at seven already; Li You didn't come until nine.", why:'就 = early; 才 = late.' },
        { t:'fill', zh:'我们今天___开始吧。', zt:'我們今天___開始吧。', opts:['就','才','都','还'], ans:'就', py:'Wǒmen jīntiān jiù kāishǐ ba.', en:"Let's start today.", why:'就 = right away, without delay.' },
        { t:'mc', label:'Meaning', zh:'她八点就起来了。', zt:'她八點就起來了。', q:'What does 就 suggest?', opts:['Eight o\'clock is early for her','Eight o\'clock is late for her','She gets up at eight every day','She will get up at eight'], ans:0 },
        { t:'mc', label:'Spot the error', zh:'他十二点才回家了。', zt:'他十二點才回家了。', q:'What sounds wrong?', opts:['Drop 了 — 才 sentences do not end in 了','才 should be 就','十二点 should go after 回家','Nothing — it is correct'], ans:0 },
        { t:'wo', words:['我们','现在','就','开始','吧','。'], en:"Let's start right now.", py:'Wǒmen xiànzài jiù kāishǐ ba.' },
        { t:'speak', zh:'我们现在就开始吧。', zt:'我們現在就開始吧。', py:'Wǒmen xiànzài jiù kāishǐ ba.', en:"Let's start right now." }
      ] },
    { id:'g4', title:'怎么 and 这么', zh:'怎么 · 这么', zt:'怎麼 · 這麼', py:'zěnme · zhème',
      summary:'怎么 + verb asks HOW to do something (怎么写？). 怎么 alone can also mean "how come". 这么 + adjective means "so / this": 这么难, 这么早. Do not confuse 怎么 with 怎么样 ("how is it / how about").',
      rules:[['怎么 + verb = how to…','这个字怎么念？'],['怎么 = how come','你怎么这么早？'],['这么 + adjective = so…','中文这么难！'],['怎么样 = how is it / how about','你考得怎么样？']],
      examples:[
        { zh:'这个字怎么写？', zt:'這個字怎麼寫？', py:'Zhège zì zěnme xiě?', en:'How do you write this character?' },
        { zh:'你今天怎么这么帅？', zt:'你今天怎麼這麼帥？', py:'Nǐ jīntiān zěnme zhème shuài?', en:'How come you look so handsome today?' },
        { zh:'第七课的语法这么容易！', zt:'第七課的語法這麼容易！', py:'Dì qī kè de yǔfǎ zhème róngyì!', en:"Lesson 7's grammar is so easy!" }
      ],
      exercises:[
        { t:'fill', zh:'这个字___念？', zt:'這個字___唸？', opts:['怎么','什么','怎么样','几'], ans:'怎么', py:'Zhège zì zěnme niàn?', en:'How do you read this character?', why:'怎么 + verb asks the method.' },
        { t:'fill', zh:'你今天___酷！', opts:['这么','怎么','什么','那么样'], ans:'这么', py:'Nǐ jīntiān zhème kù!', en:'You look so cool today!', why:'这么 + adjective = so…' },
        { t:'mc', label:'怎么 or 怎么样?', zh:'你觉得这个电影___？', zt:'你覺得這個電影___？', q:'Which fits the blank?', opts:['怎么样','怎么'], ans:0, why:'Asking for an opinion ("how is it") uses 怎么样.' },
        { t:'multi', zh:'你___这么早？我今天___开始复习。', zt:'你___這麼早？我今天___開始複習。', blanks:[['怎么','什么','怎么样'],['就','才','都']], ans:['怎么','就'], py:'Nǐ zěnme zhème zǎo? — Wǒ jīntiān jiù kāishǐ fùxí.', en:'How come you are so early? — I am starting my review right away today.', why:'怎么 = how come; 就 = right away.' },
        { t:'wo', words:['这个','字','怎么','写','？'], en:'How do you write this character?', py:'Zhège zì zěnme xiě?' },
        { t:'speak', zh:'这个字怎么念？', zt:'這個字怎麼唸？', py:'Zhège zì zěnme niàn?', en:'How do you read this character?' }
      ] },
    { id:'g5', title:'Ordinals with 第; 教 and 帮', zh:'第 · 教 · 帮', zt:'第 · 教 · 幫', py:'dì · jiāo · bāng',
      summary:'第 + number makes an ordinal: 第七课 "Lesson 7", 第一 "first". 教 takes two objects: 教 + person + subject (常老师教我们中文). 帮 + person + verb = help someone do something.',
      rules:[['第 + number (+ MW) + noun','第七课 · 第一个字'],['教 + person + thing','老师教我们语法。'],['帮 + person + verb','你帮我复习，好吗？']],
      examples:[
        { zh:'今天我们学第七课。', zt:'今天我們學第七課。', py:'Jīntiān wǒmen xué dì qī kè.', en:"Today we're studying Lesson 7." },
        { zh:'常老师教我们中文。', zt:'常老師教我們中文。', py:'Cháng lǎoshī jiāo wǒmen Zhōngwén.', en:'Teacher Chang teaches us Chinese.' },
        { zh:'你帮我念一下课文，好吗？', zt:'你幫我唸一下課文，好嗎？', py:'Nǐ bāng wǒ niàn yí xià kèwén, hǎo ma?', en:'Could you help me read the text aloud?' }
      ],
      exercises:[
        { t:'fill', zh:'今天我们学___七课。', zt:'今天我們學___七課。', opts:['第','个','号','次'], ans:'第', py:'Jīntiān wǒmen xué dì qī kè.', en:"Today we're studying Lesson 7.", why:'第 turns a number into an ordinal.' },
        { t:'mc', label:'Meaning', zh:'第一个汉字', zt:'第一個漢字', q:'What does this mean?', opts:['the first character','one character','a single character only','character number one hundred'], ans:0 },
        { t:'multi', zh:'第七课的生词很___，可是语法很___。', zt:'第七課的生詞很___，可是語法很___。', blanks:[['容易','慢','早'],['难','快','帅']], ans:['容易','难'], py:'Dì qī kè de shēngcí hěn róngyì, kěshì yǔfǎ hěn nán.', en:"Lesson 7's vocabulary is easy, but the grammar is hard.", why:'可是 sets up a contrast: easy vs difficult.' },
        { t:'wo', words:['常老师','教','我们','中文','。'], en:'Teacher Chang teaches us Chinese.', py:'Cháng lǎoshī jiāo wǒmen Zhōngwén.' },
        { t:'wo', words:['你','帮','我','复习','语法','，','好吗','？'], en:'Will you help me review grammar?', py:'Nǐ bāng wǒ fùxí yǔfǎ, hǎo ma?' },
        { t:'speak', zh:'常老师教我们中文。', zt:'常老師教我們中文。', py:'Cháng lǎoshī jiāo wǒmen Zhōngwén.', en:'Teacher Chang teaches us Chinese.' }
      ] }
  ],
  dialogues:[
    { id:'d1', title:'Dialogue: After the test', note:'Wang Peng asks Li You about last week\'s test. (Original scene.)', roles:['王朋','李友'],
      lines:[
        { who:'王朋', zh:'李友，你上个星期考试考得怎么样？', zt:'李友，你上個星期考試考得怎麼樣？', py:'Lǐ Yǒu, nǐ shàng ge xīngqī kǎo shì kǎo de zěnmeyàng?', en:'Li You, how did you do on last week\'s test?' },
        { who:'李友', zh:'还可以。语法不难，可是我写汉字写得太慢了。', zt:'還可以。語法不難，可是我寫漢字寫得太慢了。', py:'Hái kěyǐ. Yǔfǎ bù nán, kěshì wǒ xiě Hànzì xiě de tài màn le.', en:'Okay. The grammar wasn\'t hard, but I write characters too slowly.' },
        { who:'王朋', zh:'我教你写汉字，怎么样？', zt:'我教你寫漢字，怎麼樣？', py:'Wǒ jiāo nǐ xiě Hànzì, zěnmeyàng?', en:'How about I teach you to write characters?' },
        { who:'李友', zh:'太好了！我们什么时候开始？', zt:'太好了！我們什麼時候開始？', py:'Tài hǎo le! Wǒmen shénme shíhou kāishǐ?', en:'Great! When do we start?' },
        { who:'王朋', zh:'今天就开始吧。你写这个字，我看看。', zt:'今天就開始吧。你寫這個字，我看看。', py:'Jīntiān jiù kāishǐ ba. Nǐ xiě zhège zì, wǒ kànkan.', en:"Let's start today. Write this character and I'll take a look." },
        { who:'李友', zh:'我写得怎么样？', zt:'我寫得怎麼樣？', py:'Wǒ xiě de zěnmeyàng?', en:'How did I do?' },
        { who:'王朋', zh:'写得很漂亮，也不慢。', zt:'寫得很漂亮，也不慢。', py:'Xiě de hěn piàoliang, yě bú màn.', en:'Beautifully written, and not slow either.' },
        { who:'李友', zh:'真的吗？谢谢你！', zt:'真的嗎？謝謝你！', py:'Zhēn de ma? Xièxie nǐ!', en:'Really? Thank you!' },
        { who:'王朋', zh:'别客气。明天我们复习第七课的生词。', zt:'別客氣。明天我們複習第七課的生詞。', py:'Bié kèqi. Míngtiān wǒmen fùxí dì qī kè de shēngcí.', en:"You're welcome. Tomorrow we'll review the Lesson 7 vocabulary." }
      ] },
    { id:'d2', title:'Dialogue: Chinese class', note:'Teacher Chang checks who did the preview. (Original scene.)', roles:['常老师','白英爱','李友'],
      lines:[
        { who:'常老师', zh:'早！今天我们复习第七课。', zt:'早！今天我們複習第七課。', py:'Zǎo! Jīntiān wǒmen fùxí dì qī kè.', en:"Morning! Today we're reviewing Lesson 7." },
        { who:'常老师', zh:'白英爱，你昨天晚上预习了吗？', zt:'白英愛，你昨天晚上預習了嗎？', py:'Bái Yīng\'ài, nǐ zuótiān wǎnshang yùxí le ma?', en:"Bai Ying'ai, did you do the preview last night?" },
        { who:'白英爱', zh:'预习了。我听了课文的录音，也念了课文。', zt:'預習了。我聽了課文的錄音，也唸了課文。', py:'Yùxí le. Wǒ tīng le kèwén de lùyīn, yě niàn le kèwén.', en:'Yes. I listened to the recording of the text and read it aloud.' },
        { who:'常老师', zh:'很好。你的发音真不错。李友，你呢？', zt:'很好。你的發音真不錯。李友，你呢？', py:'Hěn hǎo. Nǐ de fāyīn zhēn búcuò. Lǐ Yǒu, nǐ ne?', en:'Very good. Your pronunciation is really good. Li You, and you?' },
        { who:'李友', zh:'对不起，老师，我没有预习。我昨天晚上十二点才睡觉。', zt:'對不起，老師，我沒有預習。我昨天晚上十二點才睡覺。', py:'Duìbuqǐ, lǎoshī, wǒ méiyǒu yùxí. Wǒ zuótiān wǎnshang shí\'èr diǎn cái shuì jiào.', en:"Sorry, teacher, I didn't preview. I didn't go to bed until midnight." },
        { who:'常老师', zh:'怪不得你今天来得这么晚。', zt:'怪不得你今天來得這麼晚。', py:'Guàibude nǐ jīntiān lái de zhème wǎn.', en:'No wonder you came so late today.' },
        { who:'李友', zh:'老师，第七课的语法难不难？', zt:'老師，第七課的語法難不難？', py:'Lǎoshī, dì qī kè de yǔfǎ nán bu nán?', en:'Teacher, is the Lesson 7 grammar hard?' },
        { who:'常老师', zh:'不难，很容易。我们现在就开始吧。', zt:'不難，很容易。我們現在就開始吧。', py:'Bù nán, hěn róngyì. Wǒmen xiànzài jiù kāishǐ ba.', en:"Not hard, very easy. Let's start right now." }
      ] }
  ],
  comprehension:[
    { q:'What was Li You\'s problem on the test?', opts:['She writes characters too slowly','The grammar was too hard','She did not study','She was late'], ans:0, why:'我写汉字写得太慢了。' },
    { q:'What does Wang Peng offer to do?', opts:['Teach her to write characters','Take the test for her','Lend her a pen','Read the text aloud'], ans:0, why:'我教你写汉字。' },
    { q:'When do they start?', opts:['Today','Tomorrow','Next week','After class'], ans:0, why:'今天就开始吧。' },
    { q:'How did Bai Ying\'ai preview?', opts:['Listened to the recording and read the text aloud','Wrote the characters','Asked Wang Peng','She did not preview'], ans:0, why:'我听了录音，也念了课文。' },
    { q:'Why was Li You late to class?', opts:['She went to bed at midnight','She was at the library','Her test was early','She forgot'], ans:0, why:'十二点才睡觉 → 怪不得你来得这么晚。' },
    { q:'What does Teacher Chang say about the Lesson 7 grammar?', opts:['It is easy','It is very hard','It is new','It is boring'], ans:0, why:'不难，很容易。' }
  ],
  free:[
    { en:'How did you do on the test last week?', answers:['你上个星期考试考得怎么样？','上个星期你考得怎么样？','你上个星期考得怎么样？'], hint:'考得怎么样' },
    { en:'I write Chinese characters too slowly.', answers:['我写汉字写得太慢了。','我汉字写得太慢了。'], hint:'Repeat the verb, or front the object.' },
    { en:"Let's start reviewing right now.", answers:['我们现在就开始复习吧。','我们现在就复习吧。'], hint:'现在就…吧' },
    { en:'How do you write this character?', answers:['这个字怎么写？'], hint:'怎么 + verb' },
    { zh:'怪不得你今天来得这么晚。', zt:'怪不得你今天來得這麼晚。', py:'Guàibude nǐ jīntiān lái de zhème wǎn.', answers:['No wonder you came so late today.','No wonder you are so late today.'], hint:'怪不得 = no wonder' }
  ],
  writing:['考','得','写','字','慢','教','怎','第','课','语','法','容','易','难','词','汉','预','习','复','开','始','就','早','晚','平','常','帅','酷','念','录','音','发','真','懂','笔','用']
});
