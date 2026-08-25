/* ============================================================
   Integrated Chinese L1P1 — Chapter 6: Making Appointments (约时间)
   DRAFT — built from the textbook's lesson outline, not from a study
   guide. Check vocab, dialogue lines, and grammar wording against your
   book, then edit this file. Same schema as chapter5.js.
   ============================================================ */
window.IC_CHAPTERS = window.IC_CHAPTERS || [];
window.IC_CHAPTERS.push({
  id: 'ch6',
  number: 6,
  title: 'Making Appointments',
  zh: '约时间',
  zt: '約時間',
  py: 'Yuē shíjiān',
  draft: true,
  blurb: 'Li You phones Teacher Chang to ask for office hours, then calls Wang Peng to set up a Chinese practice session.',

  vocab: [
    { s:'给', t:'給', py:'gěi', en:'to; for (preposition)' },
    { s:'打电话', t:'打電話', py:'dǎ diànhuà', en:'to make a phone call' },
    { s:'电话', t:'電話', py:'diànhuà', en:'telephone' },
    { s:'喂', t:'喂', py:'wéi/wèi', en:'hello (on the phone)' },
    { s:'在', t:'在', py:'zài', en:'to be present; to be at' },
    { s:'就', t:'就', py:'jiù', en:'precisely, exactly' },
    { s:'您', t:'您', py:'nín', en:'you (polite)' },
    { s:'哪', t:'哪', py:'nǎ', en:'which' },
    { s:'位', t:'位', py:'wèi', en:'measure word for people (polite)', mw:true },
    { s:'下午', t:'下午', py:'xiàwǔ', en:'afternoon' },
    { s:'时间', t:'時間', py:'shíjiān', en:'time' },
    { s:'问题', t:'問題', py:'wèntí', en:'question, problem' },
    { s:'要', t:'要', py:'yào', en:'will, be going to; to want' },
    { s:'开会', t:'開會', py:'kāi huì', en:'to have a meeting' },
    { s:'开', t:'開', py:'kāi', en:'to open; to hold (a meeting)' },
    { s:'会', t:'會', py:'huì', en:'meeting' },
    { s:'上午', t:'上午', py:'shàngwǔ', en:'morning' },
    { s:'节', t:'節', py:'jié', en:'measure word for class periods', mw:true },
    { s:'课', t:'課', py:'kè', en:'class, course, lesson' },
    { s:'年级', t:'年級', py:'niánjí', en:'grade in school' },
    { s:'考试', t:'考試', py:'kǎo shì', en:'to give or take a test; test' },
    { s:'以后', t:'以後', py:'yǐhòu', en:'after, from now on' },
    { s:'空儿', t:'空兒', py:'kòngr', en:'free time' },
    { s:'要是', t:'要是', py:'yàoshi', en:'if' },
    { s:'方便', t:'方便', py:'fāngbiàn', en:'convenient' },
    { s:'到', t:'到', py:'dào', en:'to go to; to arrive' },
    { s:'办公室', t:'辦公室', py:'bàngōngshì', en:'office' },
    { s:'行', t:'行', py:'xíng', en:'all right, okay' },
    { s:'等', t:'等', py:'děng', en:'to wait, to wait for' },
    { s:'别', t:'別', py:'bié', en:"don't" },
    { s:'客气', t:'客氣', py:'kèqi', en:'polite' },
    { s:'下个', t:'下個', py:'xià ge', en:'next' },
    { s:'中文', t:'中文', py:'Zhōngwén', en:'Chinese language' },
    { s:'帮', t:'幫', py:'bāng', en:'to help' },
    { s:'准备', t:'準備', py:'zhǔnbèi', en:'to prepare' },
    { s:'练习', t:'練習', py:'liànxí', en:'to practice' },
    { s:'说', t:'說', py:'shuō', en:'to say, to speak' },
    { s:'啊', t:'啊', py:'a', en:'particle (softens a question or exclamation)' },
    { s:'但是', t:'但是', py:'dànshì', en:'but' },
    { s:'得', t:'得', py:'děi', en:'must, to have to' },
    { s:'跟', t:'跟', py:'gēn', en:'with' },
    { s:'见面', t:'見面', py:'jiàn miàn', en:'to meet up' },
    { s:'回来', t:'回來', py:'huílai', en:'to come back' },
    { s:'常老师', t:'常老師', py:'Cháng lǎoshī', en:'Teacher Chang', name:true }
  ],

  measureWords: [
    { noun:'老师', nt:'老師', mw:'位', py:'yí wèi lǎoshī', en:'a (respected) teacher' },
    { noun:'课', nt:'課', mw:'节', py:'yì jié kè', en:'one class period' },
    { noun:'问题', nt:'問題', mw:'个', py:'yí ge wèntí', en:'one question' }
  ],
  measureDistractors: ['个','位','节','本','杯','瓶'],

  grammar: [
    {
      id:'g1', title:'The preposition 给', zh:'给', zt:'給', py:'gěi',
      summary:'Besides meaning "to give", 给 works as a preposition: 给 + person + verb = do something TO or FOR that person.',
      rules:[
        ['给 + person + verb', '我给你打电话。'],
        ['The 给-phrase goes before the verb, like 在-phrases.', '老师给二年级考试。']
      ],
      examples:[
        { zh:'我明天给你打电话。', zt:'我明天給你打電話。', py:'Wǒ míngtiān gěi nǐ dǎ diànhuà.', en:'I will call you tomorrow.' },
        { zh:'下午三点老师要给二年级考试。', zt:'下午三點老師要給二年級考試。', py:'Xiàwǔ sān diǎn lǎoshī yào gěi èr niánjí kǎo shì.', en:'At 3 pm the teacher will give the second-year students a test.' }
      ],
      exercises:[
        { t:'fill', zh:'我明天___你打电话。', zt:'我明天___你打電話。', opts:['给','跟','在','对'], ans:'给', py:'Wǒ míngtiān gěi nǐ dǎ diànhuà.', en:'I will call you tomorrow.', why:'打电话 takes 给 + person.' },
        { t:'pos', words:['老师','二年级','考试','。'], wt:['老師','二年級','考試','。'], insert:'给', ans:1, en:'The teacher gives the second year a test.', py:'Lǎoshī gěi èr niánjí kǎo shì.' },
        { t:'multi', zh:'我明天___你打电话，___你见面。', zt:'我明天___你打電話，___你見面。', blanks:[['给','跟','在'],['跟','给','在']], ans:['给','跟'], py:'Wǒ míngtiān gěi nǐ dǎ diànhuà, gēn nǐ jiàn miàn.', en:'Tomorrow I will call you and meet with you.', why:'打电话 takes 给; 见面 takes 跟.' },
        { t:'wo', words:['你','明天','给','我','打','电话','吧','。'], en:'Call me tomorrow.', py:'Nǐ míngtiān gěi wǒ dǎ diànhuà ba.' },
        { t:'speak', zh:'我明天给你打电话。', zt:'我明天給你打電話。', py:'Wǒ míngtiān gěi nǐ dǎ diànhuà.', en:'I will call you tomorrow.' }
      ]
    },
    {
      id:'g2', title:'要 for the future', zh:'要', py:'yào',
      summary:'要 + verb means "will / be going to". Context (a time word) usually makes clear it is future rather than "want".',
      rules:[
        ['Time + 要 + verb', '今天下午我要开会。'],
        ['Negate the plan with 不 (not 不要, which means "don\'t want").', '我明天不开会。']
      ],
      examples:[
        { zh:'今天下午我要开会。', zt:'今天下午我要開會。', py:'Jīntiān xiàwǔ wǒ yào kāi huì.', en:'I have a meeting this afternoon.' },
        { zh:'我下个星期要考中文。', zt:'我下個星期要考中文。', py:'Wǒ xià ge xīngqī yào kǎo Zhōngwén.', en:'I have a Chinese test next week.' }
      ],
      exercises:[
        { t:'fill', zh:'今天下午我___开会。', zt:'今天下午我___開會。', opts:['要','想','在','才'], ans:'要', py:'Jīntiān xiàwǔ wǒ yào kāi huì.', en:'I have a meeting this afternoon.', why:'要 + verb = going to.' },
        { t:'mc', label:'Meaning', zh:'我下个星期要考中文。', zt:'我下個星期要考中文。', q:'What does 要 mean here?', opts:['Will / going to','Want to','Must','Can'], ans:0, why:'A future time word plus 要 signals a scheduled event.' },
        { t:'wo', words:['明天','上午','我','有','两','节','课','。'], en:'I have two classes tomorrow morning.', py:'Míngtiān shàngwǔ wǒ yǒu liǎng jié kè.' },
        { t:'speak', zh:'今天下午我要开会。', zt:'今天下午我要開會。', py:'Jīntiān xiàwǔ wǒ yào kāi huì.', en:'I have a meeting this afternoon.' }
      ]
    },
    {
      id:'g3', title:'别 — negative commands', zh:'别', zt:'別', py:'bié',
      summary:'别 + verb tells someone not to do something. 别客气 ("don\'t be polite") is the standard reply to thanks.',
      rules:[
        ['别 + verb', '别喝咖啡。'],
        ['Polite set phrase', '别客气。']
      ],
      examples:[
        { zh:'别客气。', zt:'別客氣。', py:'Bié kèqi.', en:"You're welcome / don't mention it." },
        { zh:'别给我打电话。', zt:'別給我打電話。', py:'Bié gěi wǒ dǎ diànhuà.', en:"Don't call me." }
      ],
      exercises:[
        { t:'fill', zh:'___客气。', zt:'___客氣。', opts:['别','不','没','才'], ans:'别', py:'Bié kèqi.', en:"You're welcome.", why:'别 makes a negative command.' },
        { t:'mc', label:'Rewrite', q:'Tell someone not to drink coffee.', opts:['别喝咖啡。','不喝咖啡。','没喝咖啡。','喝咖啡吧。'], ans:0 },
        { t:'speak', zh:'别客气。', zt:'別客氣。', py:'Bié kèqi.', en:"You're welcome." }
      ]
    },
    {
      id:'g4', title:'时间 and 时候; 以后', zh:'时间 · 以后', zt:'時間 · 以後', py:'shíjiān · yǐhòu',
      summary:'时间 is time as a resource ("do you have time?"); 什么时候 asks "when". 以后 follows a time or event: "after…".',
      rules:[
        ['有时间 / 有空儿 = have free time', '你有时间吗？'],
        ['什么时候 = when', '你什么时候有空儿？'],
        ['Time/Event + 以后', '四点以后才有空儿']
      ],
      examples:[
        { zh:'今天下午您有时间吗？', zt:'今天下午您有時間嗎？', py:'Jīntiān xiàwǔ nín yǒu shíjiān ma?', en:'Do you have time this afternoon?' },
        { zh:'明天四点以后我才有空儿。', zt:'明天四點以後我才有空兒。', py:'Míngtiān sì diǎn yǐhòu wǒ cái yǒu kòngr.', en:"I won't be free until after four tomorrow." }
      ],
      exercises:[
        { t:'fill', zh:'你什么___有空儿？', zt:'你什麼___有空兒？', opts:['时候','时间','以后','下午'], ans:'时候', py:'Nǐ shénme shíhou yǒu kòngr?', en:'When are you free?', why:'什么时候 = when.' },
        { t:'pos', words:['明天','四点','我','才','有空儿','。'], wt:['明天','四點','我','才','有空兒','。'], insert:'以后', ans:2, en:"I won't be free until after four tomorrow.", py:'Míngtiān sì diǎn yǐhòu wǒ cái yǒu kòngr.' },
        { t:'wo', words:['今天','下午','您','有','时间','吗','？'], en:'Do you have time this afternoon?', py:'Jīntiān xiàwǔ nín yǒu shíjiān ma?' },
        { t:'speak', zh:'你什么时候有空儿？', zt:'你什麼時候有空兒？', py:'Nǐ shénme shíhou yǒu kòngr?', en:'When are you free?' }
      ]
    },
    {
      id:'g5', title:'得 (děi) — must', zh:'得', py:'děi',
      summary:'得 (děi) + verb = must / have to. It is only used in the affirmative; "don\'t have to" is 不用.',
      rules:[
        ['得 + verb', '你得请我喝咖啡。'],
        ['Not 不得 — use 不用 for "need not".', '你不用来。']
      ],
      examples:[
        { zh:'但是你得请我喝咖啡。', zt:'但是你得請我喝咖啡。', py:'Dànshì nǐ děi qǐng wǒ hē kāfēi.', en:'But you have to treat me to coffee.' }
      ],
      exercises:[
        { t:'fill', zh:'你___请我喝咖啡。', zt:'你___請我喝咖啡。', opts:['得','的','要是','别'], ans:'得', py:'Nǐ děi qǐng wǒ hē kāfēi.', en:'You have to treat me to coffee.', why:'得 (děi) = must.' },
        { t:'mc', label:'Pronunciation', zh:'你得帮我准备。', zt:'你得幫我準備。', q:'How is 得 pronounced in this sentence?', opts:['děi','de','dé'], ans:0, why:'As a modal verb "must", 得 is děi.' },
        { t:'speak', zh:'你得请我喝咖啡。', zt:'你得請我喝咖啡。', py:'Nǐ děi qǐng wǒ hē kāfēi.', en:'You have to treat me to coffee.' }
      ]
    },
    {
      id:'g6', title:'跟 + person + verb', zh:'跟', py:'gēn',
      summary:'跟 introduces the person you do something WITH. Like 给 and 在, the 跟-phrase goes before the verb.',
      rules:[
        ['跟 + person + verb', '跟我说中文'],
        ['跟…见面 = meet with', '我什么时候跟你见面？']
      ],
      examples:[
        { zh:'你跟我说中文，好吗？', zt:'你跟我說中文，好嗎？', py:'Nǐ gēn wǒ shuō Zhōngwén, hǎo ma?', en:'Speak Chinese with me, okay?' }
      ],
      exercises:[
        { t:'fill', zh:'你___我说中文吧。', zt:'你___我說中文吧。', opts:['跟','给','在','对'], ans:'跟', py:'Nǐ gēn wǒ shuō Zhōngwén ba.', en:'Speak Chinese with me.', why:'跟 = with.' },
        { t:'wo', words:['我','什么时候','跟','你','见面','？'], en:'When shall I meet you?', py:'Wǒ shénme shíhou gēn nǐ jiàn miàn?' },
        { t:'speak', zh:'你跟我说中文，好吗？', zt:'你跟我說中文，好嗎？', py:'Nǐ gēn wǒ shuō Zhōngwén, hǎo ma?', en:'Speak Chinese with me, okay?' }
      ]
    }
  ],

  dialogues: [
    {
      id:'d1', title:'Dialogue I: Calling Teacher Chang', note:'Li You phones her teacher.',
      roles:['常老师','李友'],
      lines:[
        { who:'常老师', zh:'喂？', py:'Wéi?', en:'Hello?' },
        { who:'李友', zh:'喂，请问，常老师在吗？', zt:'喂，請問，常老師在嗎？', py:'Wéi, qǐng wèn, Cháng lǎoshī zài ma?', en:'Hello, is Teacher Chang there?' },
        { who:'常老师', zh:'我就是。您是哪位？', py:'Wǒ jiù shì. Nín shì nǎ wèi?', en:'Speaking. Who is this?' },
        { who:'李友', zh:'老师，您好。我是李友。', zt:'老師，您好。我是李友。', py:'Lǎoshī, nín hǎo. Wǒ shì Lǐ Yǒu.', en:'Hello, Teacher. This is Li You.' },
        { who:'常老师', zh:'李友，有事儿吗？', zt:'李友，有事兒嗎？', py:'Lǐ Yǒu, yǒu shìr ma?', en:'Li You, what can I do for you?' },
        { who:'李友', zh:'老师，今天下午您有时间吗？我想问您几个问题。', zt:'老師，今天下午您有時間嗎？我想問您幾個問題。', py:'Lǎoshī, jīntiān xiàwǔ nín yǒu shíjiān ma? Wǒ xiǎng wèn nín jǐ ge wèntí.', en:'Do you have time this afternoon? I want to ask you a few questions.' },
        { who:'常老师', zh:'对不起，今天下午我要开会。', zt:'對不起，今天下午我要開會。', py:'Duìbuqǐ, jīntiān xiàwǔ wǒ yào kāi huì.', en:'Sorry, I have a meeting this afternoon.' },
        { who:'李友', zh:'明天呢？', py:'Míngtiān ne?', en:'How about tomorrow?' },
        { who:'常老师', zh:'明天上午我有两节课，下午三点要给二年级考试。', zt:'明天上午我有兩節課，下午三點要給二年級考試。', py:'Míngtiān shàngwǔ wǒ yǒu liǎng jié kè, xiàwǔ sān diǎn yào gěi èr niánjí kǎo shì.', en:'Tomorrow morning I have two classes, and at three I give the second year a test.' },
        { who:'李友', zh:'您什么时候有空儿？', zt:'您什麼時候有空兒？', py:'Nín shénme shíhou yǒu kòngr?', en:'When are you free?' },
        { who:'常老师', zh:'明天四点以后才有空儿。', zt:'明天四點以後才有空兒。', py:'Míngtiān sì diǎn yǐhòu cái yǒu kòngr.', en:'Not until after four tomorrow.' },
        { who:'李友', zh:'要是您方便，四点半我到您的办公室去，行吗？', zt:'要是您方便，四點半我到您的辦公室去，行嗎？', py:'Yàoshi nín fāngbiàn, sì diǎn bàn wǒ dào nín de bàngōngshì qù, xíng ma?', en:'If it is convenient, I will come to your office at 4:30, okay?' },
        { who:'常老师', zh:'四点半，没问题。我在办公室等你。', zt:'四點半，沒問題。我在辦公室等你。', py:'Sì diǎn bàn, méi wèntí. Wǒ zài bàngōngshì děng nǐ.', en:'4:30, no problem. I will wait for you in my office.' },
        { who:'李友', zh:'谢谢您。', zt:'謝謝您。', py:'Xièxie nín.', en:'Thank you.' },
        { who:'常老师', zh:'别客气。', zt:'別客氣。', py:'Bié kèqi.', en:"You're welcome." }
      ]
    },
    {
      id:'d2', title:'Dialogue II: Calling Wang Peng', note:'Li You asks a friend for help.',
      roles:['李友','王朋'],
      lines:[
        { who:'李友', zh:'喂，请问王朋在吗？', zt:'喂，請問王朋在嗎？', py:'Wéi, qǐng wèn Wáng Péng zài ma?', en:'Hello, is Wang Peng there?' },
        { who:'王朋', zh:'我就是。你是李友吧？有事儿吗？', zt:'我就是。你是李友吧？有事兒嗎？', py:'Wǒ jiù shì. Nǐ shì Lǐ Yǒu ba? Yǒu shìr ma?', en:"Speaking. It's Li You, right? What's up?" },
        { who:'李友', zh:'我下个星期要考中文，你帮我准备一下，跟我说中文，好吗？', zt:'我下個星期要考中文，你幫我準備一下，跟我說中文，好嗎？', py:'Wǒ xià ge xīngqī yào kǎo Zhōngwén, nǐ bāng wǒ zhǔnbèi yí xià, gēn wǒ shuō Zhōngwén, hǎo ma?', en:'I have a Chinese test next week. Help me prepare and speak Chinese with me, okay?' },
        { who:'王朋', zh:'好啊，但是你得请我喝咖啡。', zt:'好啊，但是你得請我喝咖啡。', py:'Hǎo a, dànshì nǐ děi qǐng wǒ hē kāfēi.', en:'Sure, but you have to treat me to coffee.' },
        { who:'李友', zh:'喝咖啡，没问题。那我什么时候跟你见面？你今天晚上有空儿吗？', zt:'喝咖啡，沒問題。那我什麼時候跟你見面？你今天晚上有空兒嗎？', py:'Hē kāfēi, méi wèntí. Nà wǒ shénme shíhou gēn nǐ jiàn miàn? Nǐ jīntiān wǎnshang yǒu kòngr ma?', en:'Coffee, no problem. When can I meet you? Are you free tonight?' },
        { who:'王朋', zh:'今天晚上有人请我吃饭。你明天晚上有空吗？', zt:'今天晚上有人請我吃飯。你明天晚上有空嗎？', py:'Jīntiān wǎnshang yǒu rén qǐng wǒ chī fàn. Nǐ míngtiān wǎnshang yǒu kòng ma?', en:'Someone is taking me to dinner tonight. Are you free tomorrow night?' },
        { who:'李友', zh:'明天晚上有空。', zt:'明天晚上有空。', py:'Míngtiān wǎnshang yǒu kòng.', en:'Tomorrow night I am free.' },
        { who:'王朋', zh:'那明天晚上我到你的宿舍去，行吗？', zt:'那明天晚上我到你的宿舍去，行嗎？', py:'Nà míngtiān wǎnshang wǒ dào nǐ de sùshè qù, xíng ma?', en:'Then tomorrow night I will come to your dorm, okay?' },
        { who:'李友', zh:'好，我在宿舍等你。', py:'Hǎo, wǒ zài sùshè děng nǐ.', en:'Okay, I will wait for you at the dorm.' }
      ]
    }
  ],

  comprehension: [
    { q:'Why can Teacher Chang not meet this afternoon?', opts:['She has a meeting','She is giving a test','She has two classes','She is not at school'], ans:0, why:'今天下午我要开会。' },
    { q:'When is Teacher Chang free tomorrow?', opts:['After four','Before noon','At three','All day'], ans:0, why:'明天四点以后才有空儿。' },
    { q:'Where will Li You meet the teacher?', opts:["In the teacher's office",'At the library','At the dorm','At a café'], ans:0, why:'我在办公室等你。' },
    { q:'What does Wang Peng ask for in return for helping?', opts:['Coffee','Tea','Dinner','Nothing'], ans:0, why:'你得请我喝咖啡。' },
    { q:'When will Wang Peng come to the dorm?', opts:['Tomorrow night','Tonight','Tomorrow morning','Next week'], ans:0, why:'明天晚上我到你的宿舍去。' }
  ],

  free: [
    { en:'Do you have time this afternoon? I want to ask you a few questions.', answers:['今天下午你有时间吗？我想问你几个问题。','今天下午您有时间吗？我想问您几个问题。'], hint:'有时间 / 几个问题' },
    { en:'I will call you tomorrow after four.', answers:['明天四点以后我给你打电话。','我明天四点以后给你打电话。'], hint:'以后 after the time; 给 before the verb.' },
    { en:"Don't be polite.", answers:['别客气。'], hint:'别 + adjective/verb' },
    { zh:'要是您方便，四点半我到您的办公室去，行吗？', zt:'要是您方便，四點半我到您的辦公室去，行嗎？', py:'Yàoshi nín fāngbiàn, sì diǎn bàn wǒ dào nín de bàngōngshì qù, xíng ma?', answers:["If it's convenient for you, I'll come to your office at 4:30, is that okay?"], hint:'要是 = if; 到…去 = go to.' }
  ],

  writing: ['给','打','电','话','喂','就','您','位','午','时','间','问','题','开','会','节','课','年','级','考','试','后','空','方','便','到','办','公','室','行','等','别','客','气','帮','准','备','练','习','说','但','得','跟','见','面']
});
