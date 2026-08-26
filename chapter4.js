/* Integrated Chinese L1P1 — Chapter 4: Hobbies (爱好)
   Vocabulary and grammar follow the textbook. Dialogues are original scenes
   using Chapter 1–4 vocabulary; the book's own text is not reproduced. */
window.IC_CHAPTERS = window.IC_CHAPTERS || [];
window.IC_CHAPTERS.push({
  id:'ch4', number:4, title:'Hobbies', zh:'爱好', zt:'愛好', py:'Àihào',
  blurb:'Weekend plans: what you like to do, inviting a friend to a movie, and politely turning an invitation down.',
  vocab:[
    { s:'周末', t:'週末', py:'zhōumò', en:'weekend' },
    { s:'打球', py:'dǎ qiú', en:'to play ball' },
    { s:'打', py:'dǎ', en:'to hit' },
    { s:'球', py:'qiú', en:'ball' },
    { s:'看', py:'kàn', en:'to watch, to look, to read' },
    { s:'电视', t:'電視', py:'diànshì', en:'television' },
    { s:'唱歌', py:'chàng gē', en:'to sing' },
    { s:'唱', py:'chàng', en:'to sing' },
    { s:'歌', py:'gē', en:'song' },
    { s:'跳舞', py:'tiào wǔ', en:'to dance' },
    { s:'跳', py:'tiào', en:'to jump' },
    { s:'舞', py:'wǔ', en:'dance' },
    { s:'听', t:'聽', py:'tīng', en:'to listen' },
    { s:'音乐', t:'音樂', py:'yīnyuè', en:'music' },
    { s:'书', t:'書', py:'shū', en:'book' },
    { s:'对', t:'對', py:'duì', en:'right, correct' },
    { s:'有的', py:'yǒude', en:'some' },
    { s:'时候', t:'時候', py:'shíhou', en:'(a point in) time, moment' },
    { s:'电影', t:'電影', py:'diànyǐng', en:'movie' },
    { s:'常常', py:'chángcháng', en:'often' },
    { s:'那', py:'nà', en:'in that case, then' },
    { s:'去', py:'qù', en:'to go' },
    { s:'外国', t:'外國', py:'wàiguó', en:'foreign country' },
    { s:'请客', t:'請客', py:'qǐng kè', en:'to treat, to invite (and pay)' },
    { s:'昨天', py:'zuótiān', en:'yesterday' },
    { s:'所以', py:'suǒyǐ', en:'so, therefore' },
    { s:'小', py:'xiǎo', en:'small, little' },
    { s:'好久', py:'hǎo jiǔ', en:'a long time' },
    { s:'不错', t:'不錯', py:'búcuò', en:'pretty good' },
    { s:'想', py:'xiǎng', en:'to want to, would like to' },
    { s:'觉得', t:'覺得', py:'juéde', en:'to feel, to think' },
    { s:'有意思', py:'yǒu yìsi', en:'interesting' },
    { s:'意思', py:'yìsi', en:'meaning' },
    { s:'只', py:'zhǐ', en:'only' },
    { s:'睡觉', t:'睡覺', py:'shuì jiào', en:'to sleep' },
    { s:'睡', py:'shuì', en:'to sleep' },
    { s:'觉', t:'覺', py:'jiào', en:'sleep' },
    { s:'算了', py:'suàn le', en:'forget it, never mind' },
    { s:'找', py:'zhǎo', en:'to look for' },
    { s:'别人', t:'別人', py:'biérén', en:'other people' }
  ],
  measureWords:[
    { noun:'电影', nt:'電影', mw:'个', py:'yí ge diànyǐng', en:'one movie' },
    { noun:'书', nt:'書', mw:'本', py:'yì běn shū', en:'one book' }
  ],
  measureDistractors:['个','本','张','只'],
  grammar:[
    { id:'g1', title:'Verb–object hobbies', zh:'打球 · 看书 · 唱歌', zt:'打球 · 看書 · 唱歌', py:'dǎ qiú · kàn shū · chàng gē',
      summary:'Most hobby words are verb + object pairs: 打球, 看书, 看电视, 唱歌, 跳舞, 听音乐. Keep both halves; "I like to sing" is 我喜欢唱歌, not just 我喜欢唱.',
      rules:[['喜欢 + verb-object','我喜欢听音乐。'],['Ask about hobbies','你周末喜欢做什么？'],['List with 、','我喜欢看书、看电视。']],
      examples:[
        { zh:'你周末喜欢做什么？', zt:'你週末喜歡做什麼？', py:'Nǐ zhōumò xǐhuan zuò shénme?', en:'What do you like to do on weekends?' },
        { zh:'我喜欢打球、看电视。', zt:'我喜歡打球、看電視。', py:'Wǒ xǐhuan dǎ qiú, kàn diànshì.', en:'I like to play ball and watch TV.' },
        { zh:'她常常唱歌、跳舞。', py:'Tā chángcháng chàng gē, tiào wǔ.', en:'She often sings and dances.' }
      ],
      exercises:[
        { t:'fill', zh:'我喜欢___球。', zt:'我喜歡___球。', opts:['打','看','听','跳'], ans:'打', py:'Wǒ xǐhuan dǎ qiú.', en:'I like to play ball.', why:'打 is the verb that goes with 球.' },
        { t:'fill', zh:'你喜欢___音乐吗？', zt:'你喜歡___音樂嗎？', opts:['听','看','唱','打'], ans:'听', py:'Nǐ xǐhuan tīng yīnyuè ma?', en:'Do you like listening to music?', why:'听音乐 = listen to music.' },
        { t:'multi', zh:'我周末喜欢___歌、___舞。', zt:'我週末喜歡___歌、___舞。', blanks:[['唱','打','看'],['跳','听','去']], ans:['唱','跳'], py:'Wǒ zhōumò xǐhuan chàng gē, tiào wǔ.', en:'On weekends I like to sing and dance.', why:'唱歌 and 跳舞 are fixed verb-object pairs.' },
        { t:'mc', label:'Spot the error', zh:'我喜欢唱。', zt:'我喜歡唱。', q:'What sounds wrong?', opts:['唱 needs its object: 唱歌','It needs 是','喜欢 should be 想','Nothing — it is correct'], ans:0 },
        { t:'wo', words:['你','周末','喜欢','做','什么','？'], en:'What do you like to do at the weekend?', py:'Nǐ zhōumò xǐhuan zuò shénme?' },
        { t:'speak', zh:'我喜欢看书，也喜欢看电视。', zt:'我喜歡看書，也喜歡看電視。', py:'Wǒ xǐhuan kàn shū, yě xǐhuan kàn diànshì.', en:'I like reading and also watching TV.' }
      ] },
    { id:'g2', title:'去 + place/activity', zh:'去', py:'qù',
      summary:'去 ("to go") is followed by a place or directly by an activity: 去看电影 = go (to) see a movie. Time words still go before 去.',
      rules:[['去 + activity','去看电影 · 去打球'],['Time + 去 + activity','我明天去看电影。'],['Invite','我们去跳舞，好吗？']],
      examples:[
        { zh:'我们去看外国电影吧。', zt:'我們去看外國電影吧。', py:'Wǒmen qù kàn wàiguó diànyǐng ba.', en:"Let's go see a foreign movie." },
        { zh:'你周末去不去打球？', zt:'你週末去不去打球？', py:'Nǐ zhōumò qù bu qù dǎ qiú?', en:'Are you going to play ball this weekend?' }
      ],
      exercises:[
        { t:'fill', zh:'我们明天___看电影吧。', zt:'我們明天___看電影吧。', opts:['去','来','在','想'], ans:'去', py:'Wǒmen míngtiān qù kàn diànyǐng ba.', en:"Let's go see a movie tomorrow.", why:'去 + activity = go do something.' },
        { t:'pos', words:['我','星期六','打球','。'], insert:'去', ans:2, en:'I am going to play ball on Saturday.', py:'Wǒ xīngqīliù qù dǎ qiú.', why:'去 comes right before the activity, after the time.' },
        { t:'wo', words:['你','周末','去','不','去','跳舞','？'], en:'Are you going dancing this weekend?', py:'Nǐ zhōumò qù bu qù tiào wǔ?' },
        { t:'mc', label:'Spot the error', zh:'我去看电影明天。', zt:'我去看電影明天。', q:'What is wrong?', opts:['The time word goes before 去','看 should be 听','It needs 想','Nothing — it is correct'], ans:0 },
        { t:'speak', zh:'我们去看电影吧。', zt:'我們去看電影吧。', py:'Wǒmen qù kàn diànyǐng ba.', en:"Let's go see a movie." }
      ] },
    { id:'g3', title:'想 and 觉得', zh:'想 · 觉得', zt:'想 · 覺得', py:'xiǎng · juéde',
      summary:'想 + verb = "would like to / want to" (softer than 要). 觉得 + clause = "feel / think that". Both are negated with 不.',
      rules:[['想 + verb','我想看电影。'],['不想','我不想去。'],['觉得 + opinion','我觉得这个电影很有意思。']],
      examples:[
        { zh:'你想去打球吗？', zt:'你想去打球嗎？', py:'Nǐ xiǎng qù dǎ qiú ma?', en:'Would you like to go play ball?' },
        { zh:'我觉得跳舞很有意思。', zt:'我覺得跳舞很有意思。', py:'Wǒ juéde tiào wǔ hěn yǒu yìsi.', en:'I think dancing is interesting.' },
        { zh:'我觉得这个电影没有意思。', zt:'我覺得這個電影沒有意思。', py:'Wǒ juéde zhè ge diànyǐng méiyǒu yìsi.', en:'I think this movie is boring.' }
      ],
      exercises:[
        { t:'fill', zh:'我不___去看电影。', zt:'我不___去看電影。', opts:['想','觉得','喜欢','是'], ans:'想', py:'Wǒ bù xiǎng qù kàn diànyǐng.', en:"I don't want to go see a movie.", why:'不想 = do not want to.' },
        { t:'fill', zh:'你___这个电影怎么样？', zt:'你___這個電影怎麼樣？', opts:['觉得','想','看','喜欢'], ans:'觉得', py:'Nǐ juéde zhè ge diànyǐng zěnmeyàng?', en:'What do you think of this movie?', why:'觉得 introduces an opinion.' },
        { t:'multi', zh:'我___去跳舞，因为我___跳舞很有意思。', zt:'我___去跳舞，因為我___跳舞很有意思。', blanks:[['想','觉得','只'],['觉得','想','看']], ans:['想','觉得'], py:'Wǒ xiǎng qù tiào wǔ, yīnwèi wǒ juéde tiào wǔ hěn yǒu yìsi.', en:'I want to go dancing because I think dancing is fun.', why:'想 = want to; 觉得 = think that.' },
        { t:'tr', zh:'我觉得看书没有意思，我只想睡觉。', zt:'我覺得看書沒有意思，我只想睡覺。', py:'Wǒ juéde kàn shū méiyǒu yìsi, wǒ zhǐ xiǎng shuì jiào.', opts:['I think reading is boring; I only want to sleep.','I think reading is interesting, but I want to sleep.','I read books before I sleep.','I only read books; I never sleep.'], ans:0 },
        { t:'wo', words:['你','觉得','这个','电影','有意思','吗','？'], en:'Do you think this movie is interesting?', py:'Nǐ juéde zhè ge diànyǐng yǒu yìsi ma?' },
        { t:'speak', zh:'我想去看电影。', zt:'我想去看電影。', py:'Wǒ xiǎng qù kàn diànyǐng.', en:'I want to go see a movie.' }
      ] },
    { id:'g4', title:'Frequency: 常常, 有的时候, 只', zh:'常常 · 有的时候 · 只', zt:'常常 · 有的時候 · 只', py:'chángcháng · yǒude shíhou · zhǐ',
      summary:'常常 ("often") and 只 ("only") are adverbs placed before the verb. 有的时候 ("sometimes") is a time phrase and can start the sentence or follow the subject.',
      rules:[['Subject + 常常 + verb','我常常看电视。'],['有的时候 + clause','有的时候我去打球。'],['只 + verb','我只喜欢听音乐。'],['Negate 常常 with 不常','我不常看电影。']],
      examples:[
        { zh:'我周末常常去打球。', zt:'我週末常常去打球。', py:'Wǒ zhōumò chángcháng qù dǎ qiú.', en:'I often go play ball at the weekend.' },
        { zh:'有的时候我也看外国电影。', zt:'有的時候我也看外國電影。', py:'Yǒude shíhou wǒ yě kàn wàiguó diànyǐng.', en:'Sometimes I also watch foreign movies.' },
        { zh:'他只喜欢睡觉。', zt:'他只喜歡睡覺。', py:'Tā zhǐ xǐhuan shuì jiào.', en:'He only likes sleeping.' }
      ],
      exercises:[
        { t:'pos', words:['我','周末','去','看','电影','。'], wt:['我','週末','去','看','電影','。'], insert:'常常', ans:2, en:'I often go to the movies at the weekend.', py:'Wǒ zhōumò chángcháng qù kàn diànyǐng.', why:'常常 goes before the verb 去.' },
        { t:'multi', zh:'我___看电视，___我也听音乐。', zt:'我___看電視，___我也聽音樂。', blanks:[['常常','有的','只'],['有的时候','常常','所以']], ans:['常常','有的时候'], py:'Wǒ chángcháng kàn diànshì, yǒude shíhou wǒ yě tīng yīnyuè.', en:'I often watch TV; sometimes I also listen to music.', why:'常常 before the verb; 有的时候 opens the clause.' },
        { t:'pos', words:['我','喜欢','唱歌','。'], wt:['我','喜歡','唱歌','。'], insert:'只', ans:1, en:'I only like singing.', py:'Wǒ zhǐ xǐhuan chàng gē.', why:'只 sits before the verb.' },
        { t:'wo', words:['他','不','常','看','书','。'], extra:['没'], en:"He doesn't read often.", py:'Tā bù cháng kàn shū.' },
        { t:'speak', zh:'我常常去看电影。', zt:'我常常去看電影。', py:'Wǒ chángcháng qù kàn diànyǐng.', en:'I often go to the movies.' }
      ] },
    { id:'g5', title:'所以, 那, and 请客', zh:'所以 · 那 · 请客', zt:'所以 · 那 · 請客', py:'suǒyǐ · nà · qǐng kè',
      summary:'因为…所以… links a reason to its result; either half can stand alone. 那 at the start of a sentence means "in that case". 请客 = to treat; 请 + person + verb = invite someone to do something.',
      rules:[['因为 A，所以 B','因为你昨天请客，所以今天我请客。'],['那 + suggestion','那我们去看电影吧。'],['请 + person + verb','我请你看电影。']],
      examples:[
        { zh:'昨天你请客，所以今天我请客。', zt:'昨天你請客，所以今天我請客。', py:'Zuótiān nǐ qǐng kè, suǒyǐ jīntiān wǒ qǐng kè.', en:'You treated yesterday, so today I treat.' },
        { zh:'那我们去听音乐吧。', zt:'那我們去聽音樂吧。', py:'Nà wǒmen qù tīng yīnyuè ba.', en:"In that case, let's go listen to music." },
        { zh:'算了，我找别人吧。', zt:'算了，我找別人吧。', py:'Suàn le, wǒ zhǎo biérén ba.', en:"Never mind, I'll ask someone else." }
      ],
      exercises:[
        { t:'multi', zh:'___你昨天请客，___今天我请客。', zt:'___你昨天請客，___今天我請客。', blanks:[['因为','所以','可是'],['所以','因为','还是']], ans:['因为','所以'], py:'Yīnwèi nǐ zuótiān qǐng kè, suǒyǐ jīntiān wǒ qǐng kè.', en:'Because you treated yesterday, I will treat today.', why:'因为 gives the reason; 所以 the result.' },
        { t:'fill', zh:'你不想看电影？___我们去打球吧。', zt:'你不想看電影？___我們去打球吧。', opts:['那','所以','因为','可是'], ans:'那', py:'Nǐ bù xiǎng kàn diànyǐng? Nà wǒmen qù dǎ qiú ba.', en:"You don't want a movie? Then let's play ball.", why:'那 = in that case.' },
        { t:'wo', words:['我','请','你','看','电影','。'], en:'I will treat you to a movie.', py:'Wǒ qǐng nǐ kàn diànyǐng.' },
        { t:'mc', label:'Meaning', zh:'算了，我找别人吧。', zt:'算了，我找別人吧。', q:'What is the speaker doing?', opts:['Giving up and looking for someone else','Agreeing happily','Asking who else is coming','Counting the guests'], ans:0, why:'算了 = forget it.' },
        { t:'speak', zh:'那我们去看电影吧。', zt:'那我們去看電影吧。', py:'Nà wǒmen qù kàn diànyǐng ba.', en:"Then let's go see a movie." }
      ] }
  ],
  dialogues:[
    { id:'d1', title:'Dialogue: Weekend plans', note:'Gao Wenzhong and Bai Ying\'ai compare hobbies. (Original scene.)', roles:['高文中','白英爱'],
      lines:[
        { who:'高文中', zh:'英爱，你周末喜欢做什么？', zt:'英愛，你週末喜歡做什麼？', py:'Yīng\'ài, nǐ zhōumò xǐhuan zuò shénme?', en:"Ying'ai, what do you like to do on weekends?" },
        { who:'白英爱', zh:'我喜欢打球、唱歌、跳舞，有的时候也看书。你呢？', zt:'我喜歡打球、唱歌、跳舞，有的時候也看書。你呢？', py:'Wǒ xǐhuan dǎ qiú, chàng gē, tiào wǔ, yǒude shíhou yě kàn shū. Nǐ ne?', en:'I like playing ball, singing, dancing, and sometimes reading. You?' },
        { who:'高文中', zh:'我不喜欢打球，我常常听音乐、看电视。', zt:'我不喜歡打球，我常常聽音樂、看電視。', py:'Wǒ bù xǐhuan dǎ qiú, wǒ chángcháng tīng yīnyuè, kàn diànshì.', en:"I don't like ball games; I often listen to music and watch TV." },
        { who:'白英爱', zh:'你喜欢看电影吗？', zt:'你喜歡看電影嗎？', py:'Nǐ xǐhuan kàn diànyǐng ma?', en:'Do you like movies?' },
        { who:'高文中', zh:'对，我很喜欢看外国电影。', zt:'對，我很喜歡看外國電影。', py:'Duì, wǒ hěn xǐhuan kàn wàiguó diànyǐng.', en:'Yes, I really like foreign movies.' },
        { who:'白英爱', zh:'那我们这个周末去看电影，怎么样？我请客。', zt:'那我們這個週末去看電影，怎麼樣？我請客。', py:'Nà wǒmen zhè ge zhōumò qù kàn diànyǐng, zěnmeyàng? Wǒ qǐng kè.', en:"Then let's see a movie this weekend. My treat." },
        { who:'高文中', zh:'为什么你请客？', zt:'為什麼你請客？', py:'Wèishénme nǐ qǐng kè?', en:'Why your treat?' },
        { who:'白英爱', zh:'因为昨天你请我吃饭，所以今天我请你看电影。', zt:'因為昨天你請我吃飯，所以今天我請你看電影。', py:'Yīnwèi zuótiān nǐ qǐng wǒ chī fàn, suǒyǐ jīntiān wǒ qǐng nǐ kàn diànyǐng.', en:'Because you bought me dinner yesterday, so today I treat you to a movie.' },
        { who:'高文中', zh:'太好了，谢谢！', zt:'太好了，謝謝！', py:'Tài hǎo le, xièxie!', en:'Great, thanks!' }
      ] },
    { id:'d2', title:'Dialogue: Not tonight', note:'Wang Peng tries to get Li You out of the dorm. (Original scene.)', roles:['王朋','李友'],
      lines:[
        { who:'王朋', zh:'小李，好久不见，你好吗？', zt:'小李，好久不見，你好嗎？', py:'Xiǎo Lǐ, hǎo jiǔ bú jiàn, nǐ hǎo ma?', en:"Li, long time no see. How are you?" },
        { who:'李友', zh:'我很好，你怎么样？', zt:'我很好，你怎麼樣？', py:'Wǒ hěn hǎo, nǐ zěnmeyàng?', en:"I'm fine. How about you?" },
        { who:'王朋', zh:'我也不错。今天晚上我想去跳舞，你想不想去？', zt:'我也不錯。今天晚上我想去跳舞，你想不想去？', py:'Wǒ yě búcuò. Jīntiān wǎnshang wǒ xiǎng qù tiào wǔ, nǐ xiǎng bu xiǎng qù?', en:"Pretty good too. I want to go dancing tonight; do you want to come?" },
        { who:'李友', zh:'我觉得跳舞没有意思。', zt:'我覺得跳舞沒有意思。', py:'Wǒ juéde tiào wǔ méiyǒu yìsi.', en:"I think dancing is boring." },
        { who:'王朋', zh:'那我们去看电影吧。', zt:'那我們去看電影吧。', py:'Nà wǒmen qù kàn diànyǐng ba.', en:"Then let's go see a movie." },
        { who:'李友', zh:'我今天太忙了，晚上只想睡觉。', zt:'我今天太忙了，晚上只想睡覺。', py:'Wǒ jīntiān tài máng le, wǎnshang zhǐ xiǎng shuì jiào.', en:"I'm too busy today; tonight I just want to sleep." },
        { who:'王朋', zh:'算了，我找别人吧。', zt:'算了，我找別人吧。', py:'Suàn le, wǒ zhǎo biérén ba.', en:"Forget it, I'll ask someone else." },
        { who:'李友', zh:'对不起，我们周末去打球，好吗？', zt:'對不起，我們週末去打球，好嗎？', py:'Duìbuqǐ, wǒmen zhōumò qù dǎ qiú, hǎo ma?', en:"Sorry. Let's play ball at the weekend, okay?" },
        { who:'王朋', zh:'好，周末见。', zt:'好，週末見。', py:'Hǎo, zhōumò jiàn.', en:'OK, see you at the weekend.' }
      ] }
  ],
  comprehension:[
    { q:"Which does Bai Ying'ai NOT list as a hobby?", opts:['Watching TV','Playing ball','Singing','Dancing'], ans:0, why:'她喜欢打球、唱歌、跳舞，有的时候看书。' },
    { q:'What kind of movies does Gao Wenzhong like?', opts:['Foreign movies','Chinese movies','He does not like movies','Only old movies'], ans:0, why:'我很喜欢看外国电影。' },
    { q:"Why is Bai Ying'ai paying?", opts:['Gao Wenzhong treated her to dinner yesterday','It is her birthday','She has free tickets','She always pays'], ans:0, why:'因为昨天你请我吃饭。' },
    { q:'What does Li You think of dancing?', opts:['Boring','Fun','Too hard','She loves it'], ans:0, why:'我觉得跳舞没有意思。' },
    { q:'What does Li You want to do tonight?', opts:['Sleep','Dance','See a movie','Play ball'], ans:0, why:'晚上只想睡觉。' },
    { q:'What do they agree to do at the weekend?', opts:['Play ball','Go dancing','Watch TV','Sing'], ans:0, why:'我们周末去打球。' }
  ],
  free:[
    { en:'What do you like to do at the weekend? I like to listen to music and read.', answers:['你周末喜欢做什么？我喜欢听音乐、看书。','你周末喜欢做什么？我喜欢听音乐和看书。'], hint:'verb-object pairs' },
    { en:"Let's go see a foreign movie tonight.", answers:['我们今天晚上去看外国电影吧。','今天晚上我们去看外国电影吧。'], hint:'time + 去 + activity + 吧' },
    { en:'I think dancing is very interesting, but I only want to sleep.', answers:['我觉得跳舞很有意思，可是我只想睡觉。'], hint:'觉得 / 只想' },
    { en:'Because you treated yesterday, today I treat.', answers:['因为昨天你请客，所以今天我请客。','因为你昨天请客，所以今天我请客。'], hint:'因为…所以…' },
    { zh:'我常常去打球，有的时候也去跳舞。', zt:'我常常去打球，有的時候也去跳舞。', py:'Wǒ chángcháng qù dǎ qiú, yǒude shíhou yě qù tiào wǔ.', answers:['I often go play ball, and sometimes I also go dancing.','I often play ball and sometimes dance too.'], hint:'常常 / 有的时候' }
  ],
  writing:['周','末','打','球','看','电','视','唱','歌','跳','舞','听','音','乐','书','对','时','候','影','常','去','外','客','昨','所','以','小','久','错','想','觉','得','意','思','只','睡','算','找','别']
});
