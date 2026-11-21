/* Integrated Chinese L1P1 — Chapter 8: School Life (学校生活)
   Vocabulary and grammar follow the textbook (3rd edition lesson outline).
   The diary and letter are original texts using Chapter 1–8 vocabulary; the
   book's own text is not reproduced. Check the vocab list against your edition. */
window.IC_CHAPTERS = window.IC_CHAPTERS || [];
window.IC_CHAPTERS.push({
  id:'ch8', number:8, title:'School Life', zh:'学校生活', zt:'學校生活', py:'Xuéxiào shēnghuó',
  blurb:'A day in Li You\'s diary from getting up to going to bed, and a letter about her busy semester and what she can now do in Chinese.',
  vocab:[
    { s:'篇', t:'篇', py:'piān', en:'measure word for essays, diary entries', mw:true },
    { s:'日记', t:'日記', py:'rìjì', en:'diary' },
    { s:'起床', t:'起床', py:'qǐ chuáng', en:'to get up' },
    { s:'洗澡', t:'洗澡', py:'xǐ zǎo', en:'to take a bath or shower' },
    { s:'早饭', t:'早飯', py:'zǎofàn', en:'breakfast' },
    { s:'一边', t:'一邊', py:'yìbiān', en:'simultaneously, at the same time' },
    { s:'教室', t:'教室', py:'jiàoshì', en:'classroom' },
    { s:'新', t:'新', py:'xīn', en:'new' },
    { s:'下课', t:'下課', py:'xià kè', en:'to get out of class' },
    { s:'中午', t:'中午', py:'zhōngwǔ', en:'noon' },
    { s:'午饭', t:'午飯', py:'wǔfàn', en:'lunch' },
    { s:'电脑', t:'電腦', py:'diànnǎo', en:'computer' },
    { s:'上网', t:'上網', py:'shàng wǎng', en:'to go online' },
    { s:'宿舍', t:'宿舍', py:'sùshè', en:'dormitory' },
    { s:'报', t:'報', py:'bào', en:'newspaper' },
    { s:'回', t:'回', py:'huí', en:'to return' },
    { s:'以前', t:'以前', py:'yǐqián', en:'before' },
    { s:'先', t:'先', py:'xiān', en:'first' },
    { s:'再', t:'再', py:'zài', en:'then, again' },
    { s:'然后', t:'然後', py:'ránhòu', en:'then, afterwards' },
    { s:'封', t:'封', py:'fēng', en:'measure word for letters', mw:true },
    { s:'信', t:'信', py:'xìn', en:'letter' },
    { s:'最近', t:'最近', py:'zuìjìn', en:'recently' },
    { s:'学期', t:'學期', py:'xuéqī', en:'school term, semester' },
    { s:'除了…以外', t:'除了…以外', py:'chúle … yǐwài', en:'in addition to, besides' },
    { s:'专业', t:'專業', py:'zhuānyè', en:'major (field of study)' },
    { s:'能', t:'能', py:'néng', en:'can, to be able to' },
    { s:'会', t:'會', py:'huì', en:'can, to know how to' },
    { s:'用', t:'用', py:'yòng', en:'to use' },
    { s:'打字', t:'打字', py:'dǎ zì', en:'to type' },
    { s:'进步', t:'進步', py:'jìnbù', en:'to make progress; progress' },
    { s:'每天', t:'每天', py:'měitiān', en:'every day' },
    { s:'希望', t:'希望', py:'xīwàng', en:'to hope; hope' },
    { s:'祝', t:'祝', py:'zhù', en:'to wish (formal)' },
    { s:'习惯', t:'習慣', py:'xíguàn', en:'habit; to be accustomed to' },
    { s:'舞会', t:'舞會', py:'wǔhuì', en:'dance party, ball' }
  ],
  measureWords:[
    { noun:'日记', nt:'日記', mw:'篇', py:'yì piān rìjì', en:'one diary entry' },
    { noun:'信', mw:'封', py:'yì fēng xìn', en:'one letter' },
    { noun:'电脑', nt:'電腦', mw:'台', py:'yì tái diànnǎo', en:'one computer' },
    { noun:'报', nt:'報', mw:'份', py:'yí fèn bào', en:'one newspaper' }
  ],
  measureDistractors:['篇','封','台','份','个','本'],
  grammar:[
    { id:'g1', title:'一边…一边…', zh:'一边…一边', zt:'一邊…一邊', py:'yìbiān … yìbiān',
      summary:'一边 A 一边 B describes two actions done at the same time by the same person. Each 一边 goes right before its verb. The main or longer action usually comes second.',
      rules:[['Subject + 一边 + V1 + 一边 + V2','他一边吃饭，一边看报。'],['Both 一边 are needed','一边吃饭，看报 ✗'],['Same subject for both actions','我一边听音乐，一边写日记。']],
      examples:[
        { zh:'我一边吃早饭，一边听音乐。', zt:'我一邊吃早飯，一邊聽音樂。', py:'Wǒ yìbiān chī zǎofàn, yìbiān tīng yīnyuè.', en:'I listen to music while I eat breakfast.' },
        { zh:'他常常一边洗澡，一边唱歌。', zt:'他常常一邊洗澡，一邊唱歌。', py:'Tā chángcháng yìbiān xǐ zǎo, yìbiān chàng gē.', en:'He often sings in the shower.' }
      ],
      exercises:[
        { t:'fill', zh:'她一边看电视，___吃饭。', zt:'她一邊看電視，___吃飯。', opts:['一边','一起','一下','然后'], ans:'一边', py:'Tā yìbiān kàn diànshì, yìbiān chī fàn.', en:'She eats while watching TV.', why:'The pattern needs a second 一边 before the second verb.' },
        { t:'mc', label:'Spot the error', zh:'他一边看报，吃早饭。', zt:'他一邊看報，吃早飯。', q:'What is missing?', opts:['A second 一边 before 吃早饭','然后 before 吃','了 after 看','Nothing — it is correct'], ans:0 },
        { t:'mc', label:'Meaning', zh:'李友一边上网，一边听音乐。', zt:'李友一邊上網，一邊聽音樂。', q:'What is Li You doing?', opts:['Going online and listening to music at the same time','Going online, then listening to music','Listening to music instead of going online','Going online with a friend'], ans:0 },
        { t:'wo', words:['他','一边','洗澡','，','一边','唱歌','。'], en:'He sings while taking a shower.', py:'Tā yìbiān xǐ zǎo, yìbiān chàng gē.' },
        { t:'wo', words:['我','一边','吃','早饭','，','一边','看','报','。'], extra:['一起'], en:'I read the paper while eating breakfast.', py:'Wǒ yìbiān chī zǎofàn, yìbiān kàn bào.' },
        { t:'speak', zh:'我一边吃早饭，一边听音乐。', zt:'我一邊吃早飯，一邊聽音樂。', py:'Wǒ yìbiān chī zǎofàn, yìbiān tīng yīnyuè.', en:'I listen to music while I eat breakfast.' }
      ] },
    { id:'g2', title:'Sequence: 先…再… / 先…然后…', zh:'先 · 再 · 然后', zt:'先 · 再 · 然後', py:'xiān · zài · ránhòu',
      summary:'先 "first" and 再 "then" are adverbs and sit right before their verbs. 然后 "afterwards" can start a clause. They order a sequence of actions, often future ones.',
      rules:[['先 + V1，再 + V2','我们先吃饭，再去图书馆。'],['先 + V1，然后 + (subject) + V2','我先洗澡，然后吃早饭。'],['再 also means "again"','请再说一下。']],
      examples:[
        { zh:'我先洗澡，然后吃早饭。', zt:'我先洗澡，然後吃早飯。', py:'Wǒ xiān xǐ zǎo, ránhòu chī zǎofàn.', en:'I take a shower first, then have breakfast.' },
        { zh:'我们先预习，再上课。', zt:'我們先預習，再上課。', py:'Wǒmen xiān yùxí, zài shàng kè.', en:'We preview first, then go to class.' }
      ],
      exercises:[
        { t:'multi', zh:'我___起床，___洗澡。', zt:'我___起床，___洗澡。', blanks:[['先','再','就'],['然后','以前','一边']], ans:['先','然后'], py:'Wǒ xiān qǐ chuáng, ránhòu xǐ zǎo.', en:'I get up first, then shower.', why:'先 … 然后 … orders the actions.' },
        { t:'fill', zh:'我们先吃午饭，___去图书馆。', zt:'我們先吃午飯，___去圖書館。', opts:['再','先','才','还'], ans:'再', py:'Wǒmen xiān chī wǔfàn, zài qù túshūguǎn.', en:"We'll have lunch first, then go to the library.", why:'再 = then (a planned next step).' },
        { t:'pos', words:['我','吃','早饭','，','再','去','教室','。'], wt:['我','吃','早飯','，','再','去','教室','。'], insert:'先', ans:1, en:'I eat breakfast first, then go to the classroom.', py:'Wǒ xiān chī zǎofàn, zài qù jiàoshì.', why:'先 goes right before the first verb.' },
        { t:'wo', words:['我','先','去','图书馆','，','然后','回','宿舍','。'], en:'I go to the library first, then back to the dorm.', py:'Wǒ xiān qù túshūguǎn, ránhòu huí sùshè.' },
        { t:'mc', label:'Meaning', zh:'请再念一下。', zt:'請再唸一下。', q:'What does 再 mean here?', opts:['again','then','first','before'], ans:0 },
        { t:'speak', zh:'我先洗澡，然后吃早饭。', zt:'我先洗澡，然後吃早飯。', py:'Wǒ xiān xǐ zǎo, ránhòu chī zǎofàn.', en:'I shower first, then eat breakfast.' }
      ] },
    { id:'g3', title:'除了…以外，还 / 都', zh:'除了…以外', py:'chúle … yǐwài',
      summary:'除了 X 以外 sets X aside. Followed by 还 or 也 it means "besides X, also…" (adding). Followed by 都 it means "except X, all…" (excluding). 以外 can be dropped in speech.',
      rules:[['Adding: 除了 X 以外，(subject) 还/也 …','除了中文以外，我还学电脑。'],['Excluding: 除了 X 以外，(others) 都 …','除了李友以外，我们都去了。']],
      examples:[
        { zh:'除了中文以外，我还学电脑。', zt:'除了中文以外，我還學電腦。', py:'Chúle Zhōngwén yǐwài, wǒ hái xué diànnǎo.', en:'Besides Chinese, I also study computing.' },
        { zh:'除了王朋以外，我们都去了舞会。', zt:'除了王朋以外，我們都去了舞會。', py:'Chúle Wáng Péng yǐwài, wǒmen dōu qù le wǔhuì.', en:'Except for Wang Peng, we all went to the dance.' }
      ],
      exercises:[
        { t:'fill', zh:'除了打球___，我还喜欢跳舞。', zt:'除了打球___，我還喜歡跳舞。', opts:['以外','以后','以前','一边'], ans:'以外', py:'Chúle dǎ qiú yǐwài, wǒ hái xǐhuan tiào wǔ.', en:'Besides playing ball, I also like dancing.', why:'除了…以外 is a fixed frame.' },
        { t:'multi', zh:'___中文以外，他___学英文。', zt:'___中文以外，他___學英文。', blanks:[['除了','因为','一边'],['还','都','才']], ans:['除了','还'], py:'Chúle Zhōngwén yǐwài, tā hái xué Yīngwén.', en:'Besides Chinese, he also studies English.', why:'除了…以外 + 还 adds something.' },
        { t:'mc', label:'Adding or excluding?', zh:'除了李友以外，我们都会打字。', zt:'除了李友以外，我們都會打字。', q:'Can Li You type?', opts:['No — 都 excludes her','Yes — she can type too','We cannot tell'], ans:0, why:'With 都, 除了 means "except".' },
        { t:'mc', label:'Adding or excluding?', zh:'除了李友以外，王朋也会打字。', zt:'除了李友以外，王朋也會打字。', q:'Can Li You type?', opts:['Yes — 也 adds Wang Peng to her','No — she is excluded','We cannot tell'], ans:0, why:'With 也/还, 除了 means "besides, in addition to".' },
        { t:'wo', words:['除了','中文','以外','，','我','还','学','电脑','。'], en:'Besides Chinese, I also study computing.', py:'Chúle Zhōngwén yǐwài, wǒ hái xué diànnǎo.' },
        { t:'speak', zh:'除了中文以外，我还学电脑。', zt:'除了中文以外，我還學電腦。', py:'Chúle Zhōngwén yǐwài, wǒ hái xué diànnǎo.', en:'Besides Chinese, I also study computing.' }
      ] },
    { id:'g4', title:'会, 能 and 可以', zh:'会 · 能 · 可以', zt:'會 · 能 · 可以', py:'huì · néng · kěyǐ',
      summary:'All three translate as "can". 会 is a learned skill (I know how to type). 能 is being able to under the circumstances (I can\'t come today). 可以 is permission (May I use your computer?).',
      rules:[['会 = learned skill','我会说一点儿中文。'],['能 = able, circumstances allow','我今天很忙，不能去舞会。'],['可以 = permission','我可以用一下你的电脑吗？'],['Negate all with 不','不会 · 不能 · 不可以']],
      examples:[
        { zh:'我会用中文打字。', zt:'我會用中文打字。', py:'Wǒ huì yòng Zhōngwén dǎ zì.', en:'I know how to type in Chinese.' },
        { zh:'我今天不能去舞会。', zt:'我今天不能去舞會。', py:'Wǒ jīntiān bù néng qù wǔhuì.', en:"I can't go to the dance today." },
        { zh:'我可以用一下你的电脑吗？', zt:'我可以用一下你的電腦嗎？', py:'Wǒ kěyǐ yòng yí xià nǐ de diànnǎo ma?', en:'May I use your computer for a moment?' }
      ],
      exercises:[
        { t:'fill', zh:'我___说一点儿中文。', zt:'我___說一點兒中文。', opts:['会','能','可以','要'], ans:'会', py:'Wǒ huì shuō yì diǎnr Zhōngwén.', en:'I can speak a little Chinese.', why:'A learned skill takes 会.' },
        { t:'fill', zh:'我今天很忙，不___去舞会。', zt:'我今天很忙，不___去舞會。', opts:['能','会','对','想要'], ans:'能', py:'Wǒ jīntiān hěn máng, bù néng qù wǔhuì.', en:"I'm busy today, so I can't go to the dance.", why:'Circumstances prevent it: 不能.' },
        { t:'fill', zh:'我___用一下你的电脑吗？', zt:'我___用一下你的電腦嗎？', opts:['可以','会','得','才'], ans:'可以', py:'Wǒ kěyǐ yòng yí xià nǐ de diànnǎo ma?', en:'May I use your computer?', why:'Asking permission: 可以.' },
        { t:'multi', zh:'我___打字，可是我今天太忙了，不___上网。', zt:'我___打字，可是我今天太忙了，不___上網。', blanks:[['会','可以','能'],['能','会','可以']], ans:['会','能'], py:'Wǒ huì dǎ zì, kěshì wǒ jīntiān tài máng le, bù néng shàng wǎng.', en:"I know how to type, but I'm too busy today, so I can't go online.", why:'会 = skill; 不能 = circumstances prevent.' },
        { t:'speak', zh:'我会用中文打字。', zt:'我會用中文打字。', py:'Wǒ huì yòng Zhōngwén dǎ zì.', en:'I know how to type in Chinese.' }
      ] },
    { id:'g5', title:'以前, 以后 and 每天…都', zh:'以前 · 以后 · 每天', zt:'以前 · 以後 · 每天', py:'yǐqián · yǐhòu · měitiān',
      summary:'以前 "before" and 以后 "after" FOLLOW the event they refer to: 下课以后 = after class. The whole time phrase comes before the main verb. 每 "every" is usually paired with 都 before the verb.',
      rules:[['Event + 以前/以后，main clause','睡觉以前，我常常看书。'],['Not 以前 + event','以前睡觉 ✗ (that means "previously")'],['每 + time + 都 + verb','我每天都上网。']],
      examples:[
        { zh:'下课以后，我去图书馆。', zt:'下課以後，我去圖書館。', py:'Xià kè yǐhòu, wǒ qù túshūguǎn.', en:'After class I go to the library.' },
        { zh:'睡觉以前，我写日记。', zt:'睡覺以前，我寫日記。', py:'Shuì jiào yǐqián, wǒ xiě rìjì.', en:'Before going to bed I write in my diary.' },
        { zh:'他每天都上网。', zt:'他每天都上網。', py:'Tā měitiān dōu shàng wǎng.', en:'He goes online every day.' }
      ],
      exercises:[
        { t:'pos', words:['下课','，','我','去','图书馆','。'], wt:['下課','，','我','去','圖書館','。'], insert:'以后', ans:1, en:'After class I go to the library.', py:'Xià kè yǐhòu, wǒ qù túshūguǎn.', why:'以后 follows the event.' },
        { t:'fill', zh:'睡觉___，我常常看书。', zt:'睡覺___，我常常看書。', opts:['以前','以外','一边','然后'], ans:'以前', py:'Shuì jiào yǐqián, wǒ chángcháng kàn shū.', en:'Before going to bed, I often read.', why:'以前 after the event = before it.' },
        { t:'mc', label:'Spot the error', zh:'以前睡觉，我写日记。', zt:'以前睡覺，我寫日記。', q:'What is wrong?', opts:['以前 must follow 睡觉: 睡觉以前','日记 needs 篇','我 must come first','Nothing — it is correct'], ans:0 },
        { t:'multi', zh:'我___天都上网，吃晚饭___先上网。', zt:'我___天都上網，吃晚飯___先上網。', blanks:[['每','都','最'],['以前','以外','一边']], ans:['每','以前'], py:'Wǒ měi tiān dōu shàng wǎng, chī wǎnfàn yǐqián xiān shàng wǎng.', en:'I go online every day, first thing before dinner.', why:'每…都; event + 以前.' },
        { t:'wo', words:['他','每天','都','上网','。'], en:'He goes online every day.', py:'Tā měitiān dōu shàng wǎng.' },
        { t:'speak', zh:'下课以后，我去图书馆。', zt:'下課以後，我去圖書館。', py:'Xià kè yǐhòu, wǒ qù túshūguǎn.', en:'After class I go to the library.' }
      ] }
  ],
  dialogues:[
    { id:'n1', title:'Diary: Li You\'s day', note:'One diary entry, read in Li You\'s voice. (Original text.)', roles:['日记'],
      lines:[
        { who:'日记', zh:'今天我七点半起床，先洗澡，然后一边听音乐，一边吃早饭。', zt:'今天我七點半起床，先洗澡，然後一邊聽音樂，一邊吃早飯。', py:'Jīntiān wǒ qī diǎn bàn qǐ chuáng, xiān xǐ zǎo, ránhòu yìbiān tīng yīnyuè, yìbiān chī zǎofàn.', en:'Today I got up at 7:30, showered first, then had breakfast while listening to music.' },
        { who:'日记', zh:'八点半我去教室上中文课。', zt:'八點半我去教室上中文課。', py:'Bā diǎn bàn wǒ qù jiàoshì shàng Zhōngwén kè.', en:'At 8:30 I went to the classroom for Chinese class.' },
        { who:'日记', zh:'常老师教我们第八课的生词和语法。', zt:'常老師教我們第八課的生詞和語法。', py:'Cháng lǎoshī jiāo wǒmen dì bā kè de shēngcí hé yǔfǎ.', en:'Teacher Chang taught us the Lesson 8 vocabulary and grammar.' },
        { who:'日记', zh:'中午我在学校吃午饭。下课以后，我去图书馆用电脑上网。', zt:'中午我在學校吃午飯。下課以後，我去圖書館用電腦上網。', py:'Zhōngwǔ wǒ zài xuéxiào chī wǔfàn. Xià kè yǐhòu, wǒ qù túshūguǎn yòng diànnǎo shàng wǎng.', en:'At noon I had lunch at school. After class I went to the library to go online on a computer.' },
        { who:'日记', zh:'晚上我回宿舍预习第九课，也复习了今天的生词。', zt:'晚上我回宿舍預習第九課，也複習了今天的生詞。', py:'Wǎnshang wǒ huí sùshè yùxí dì jiǔ kè, yě fùxí le jīntiān de shēngcí.', en:"In the evening I went back to the dorm to preview Lesson 9 and reviewed today's new words." },
        { who:'日记', zh:'睡觉以前，我写了这篇日记。十一点我才睡觉。', zt:'睡覺以前，我寫了這篇日記。十一點我才睡覺。', py:'Shuì jiào yǐqián, wǒ xiě le zhè piān rìjì. Shíyī diǎn wǒ cái shuì jiào.', en:"Before bed I wrote this diary entry. I didn't go to sleep until eleven." }
      ] },
    { id:'n2', title:'Letter: A busy semester', note:'Li You writes to Gao Xiaoyin. (Original text.)', roles:['信'],
      lines:[
        { who:'信', zh:'小音：你好！好久不见，你最近怎么样？', zt:'小音：你好！好久不見，你最近怎麼樣？', py:'Xiǎoyīn: Nǐ hǎo! Hǎo jiǔ bú jiàn, nǐ zuìjìn zěnmeyàng?', en:'Xiaoyin: Hello! Long time no see. How have you been lately?' },
        { who:'信', zh:'这个学期我很忙。除了中文以外，我还学电脑。', zt:'這個學期我很忙。除了中文以外，我還學電腦。', py:'Zhège xuéqī wǒ hěn máng. Chúle Zhōngwén yǐwài, wǒ hái xué diànnǎo.', en:'I am very busy this semester. Besides Chinese, I am also studying computing.' },
        { who:'信', zh:'我的专业是电脑，所以每天都得用电脑。', zt:'我的專業是電腦，所以每天都得用電腦。', py:'Wǒ de zhuānyè shì diànnǎo, suǒyǐ měitiān dōu děi yòng diànnǎo.', en:'My major is computing, so I have to use a computer every day.' },
        { who:'信', zh:'我的中文老师姓常，她教得很好，所以我的中文进步得很快。', zt:'我的中文老師姓常，她教得很好，所以我的中文進步得很快。', py:'Wǒ de Zhōngwén lǎoshī xìng Cháng, tā jiāo de hěn hǎo, suǒyǐ wǒ de Zhōngwén jìnbù de hěn kuài.', en:'My Chinese teacher is Ms. Chang. She teaches well, so my Chinese is improving fast.' },
        { who:'信', zh:'我现在会用中文打字，也能写很多汉字了。', zt:'我現在會用中文打字，也能寫很多漢字了。', py:'Wǒ xiànzài huì yòng Zhōngwén dǎ zì, yě néng xiě hěn duō Hànzì le.', en:'Now I can type in Chinese, and I can write a lot of characters too.' },
        { who:'信', zh:'下个星期五学校有一个舞会，我希望你能来。', zt:'下個星期五學校有一個舞會，我希望你能來。', py:'Xià ge xīngqīwǔ xuéxiào yǒu yí ge wǔhuì, wǒ xīwàng nǐ néng lái.', en:'There is a dance at school next Friday. I hope you can come.' },
        { who:'信', zh:'祝你学习进步！李友', zt:'祝你學習進步！李友', py:'Zhù nǐ xuéxí jìnbù! Lǐ Yǒu', en:'Wishing you progress in your studies! Li You' }
      ] }
  ],
  comprehension:[
    { q:'What did Li You do while eating breakfast?', opts:['Listened to music','Read the newspaper','Went online','Wrote her diary'], ans:0, why:'一边听音乐，一边吃早饭。' },
    { q:'What did she do first after getting up?', opts:['Took a shower','Ate breakfast','Went to class','Went online'], ans:0, why:'先洗澡，然后…' },
    { q:'Where did she go after class?', opts:['The library, to go online','Back to the dorm to sleep','A dance','A friend\'s house'], ans:0, why:'下课以后，我去图书馆用电脑上网。' },
    { q:'When did she write the diary entry?', opts:['Before going to bed','At lunch','In class','After breakfast'], ans:0, why:'睡觉以前，我写了这篇日记。' },
    { q:'Besides Chinese, what does Li You study?', opts:['Computing','English','Music','Dance'], ans:0, why:'除了中文以外，我还学电脑。' },
    { q:'What can Li You now do in Chinese?', opts:['Type and write many characters','Teach a class','Write letters without help','Nothing yet'], ans:0, why:'我现在会用中文打字，也能写很多汉字了。' },
    { q:'What does she hope Xiaoyin will do?', opts:['Come to the dance next Friday','Write back soon','Help her study','Visit her dorm'], ans:0, why:'我希望你能来。' }
  ],
  free:[
    { en:'I listen to music while I eat breakfast.', answers:['我一边吃早饭，一边听音乐。','我一边吃早饭一边听音乐。'], hint:'一边 … 一边 …' },
    { en:"Let's go to the library first, then go back to the dorm.", answers:['我们先去图书馆，再回宿舍吧。','我们先去图书馆，然后回宿舍吧。'], hint:'先 … 再/然后 …' },
    { en:'Besides Chinese, I also study computing.', answers:['除了中文以外，我还学电脑。','除了中文，我还学电脑。'], hint:'除了 … 以外，还 …' },
    { en:"I can type, but I can't come to the dance today.", answers:['我会打字，可是我今天不能去舞会。','我会打字，可是今天我不能来舞会。','我会打字，但是我今天不能去舞会。'], hint:'会 = skill; 不能 = circumstances' },
    { zh:'睡觉以前，我每天都写日记。', zt:'睡覺以前，我每天都寫日記。', py:'Shuì jiào yǐqián, wǒ měitiān dōu xiě rìjì.', answers:['I write in my diary every day before going to bed.','Every day before bed I write my diary.'], hint:'event + 以前; 每天都' }
  ],
  writing:['篇','日','记','起','床','洗','澡','早','饭','边','教','室','新','午','电','脑','网','宿','舍','报','回','前','先','再','然','后','封','信','最','近','期','除','专','业','能','会','用','进','步','每','希','望','祝','惯']
});
