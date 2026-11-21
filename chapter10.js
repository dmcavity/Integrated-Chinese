/* Integrated Chinese L1P1 — Chapter 10: Transportation (交通)
   Vocabulary and grammar follow the textbook (3rd edition lesson outline).
   Dialogue and email are original texts using Chapter 1–10 vocabulary; the
   book's own text is not reproduced. Check the vocab list against your edition. */
window.IC_CHAPTERS = window.IC_CHAPTERS || [];
window.IC_CHAPTERS.push({
  id:'ch10', number:10, title:'Transportation', zh:'交通', py:'Jiāotōng',
  blurb:'Going home for winter break: how to get to the airport, a friend who offers a ride, and an email about riding the subway.',
  vocab:[
    { s:'寒假', t:'寒假', py:'hánjià', en:'winter vacation' },
    { s:'飞机', t:'飛機', py:'fēijī', en:'airplane' },
    { s:'票', t:'票', py:'piào', en:'ticket' },
    { s:'送', t:'送', py:'sòng', en:'to see off, to take someone (somewhere)' },
    { s:'机场', t:'機場', py:'jīchǎng', en:'airport' },
    { s:'开车', t:'開車', py:'kāi chē', en:'to drive a car' },
    { s:'车', t:'車', py:'chē', en:'car, vehicle' },
    { s:'坐', t:'坐', py:'zuò', en:'to travel by' },
    { s:'公共汽车', t:'公共汽車', py:'gōnggòng qìchē', en:'bus' },
    { s:'或者', t:'或者', py:'huòzhě', en:'or (in statements)' },
    { s:'地铁', t:'地鐵', py:'dìtiě', en:'subway' },
    { s:'站', t:'站', py:'zhàn', en:'station, stop' },
    { s:'下车', t:'下車', py:'xià chē', en:'to get off a vehicle' },
    { s:'换车', t:'換車', py:'huàn chē', en:'to change buses or trains' },
    { s:'绿', t:'綠', py:'lǜ', en:'green' },
    { s:'蓝', t:'藍', py:'lán', en:'blue' },
    { s:'线', t:'線', py:'xiàn', en:'line, route' },
    { s:'麻烦', t:'麻煩', py:'máfan', en:'troublesome; to trouble someone' },
    { s:'出租汽车', t:'出租汽車', py:'chūzū qìchē', en:'taxi' },
    { s:'走', t:'走', py:'zǒu', en:'to walk, to leave' },
    { s:'高速公路', t:'高速公路', py:'gāosù gōnglù', en:'highway' },
    { s:'路', t:'路', py:'lù', en:'road, route' },
    { s:'最', t:'最', py:'zuì', en:'most, -est' },
    { s:'每', t:'每', py:'měi', en:'every, each' },
    { s:'紧张', t:'緊張', py:'jǐnzhāng', en:'nervous, anxious' },
    { s:'自己', t:'自己', py:'zìjǐ', en:'oneself' },
    { s:'不好意思', t:'不好意思', py:'bù hǎo yìsi', en:'sorry to trouble you; embarrassed' },
    { s:'花', t:'花', py:'huā', en:'to spend (time, money)' },
    { s:'新年', t:'新年', py:'xīnnián', en:'New Year' },
    { s:'快乐', t:'快樂', py:'kuàilè', en:'happy' },
    { s:'电子邮件', t:'電子郵件', py:'diànzǐ yóujiàn', en:'email' },
    { s:'一路平安', t:'一路平安', py:'yílù píng\'ān', en:'have a good trip' }
  ],
  measureWords:[
    { noun:'飞机票', nt:'飛機票', mw:'张', py:'yì zhāng fēijī piào', en:'one plane ticket' },
    { noun:'车', nt:'車', mw:'辆', py:'yí liàng chē', en:'one car' },
    { noun:'电子邮件', nt:'電子郵件', mw:'封', py:'yì fēng diànzǐ yóujiàn', en:'one email' }
  ],
  measureDistractors:['张','辆','封','件','个','条'],
  grammar:[
    { id:'g1', title:'Getting there: 坐 / 开车 + 去', zh:'坐…去', py:'zuò … qù',
      summary:'To say how you travel, put the means before 去/来/回: 坐飞机回家 "fly home", 开车去机场 "drive to the airport". Ask with 怎么去？ The order is always subject + time + means + 去 + place.',
      rules:[['坐 + vehicle + 去/回 + place','我坐飞机回北京。'],['开车 + 去 + place','他开车去机场。'],['Ask how','你怎么去机场？'],['走路去 = go on foot','我走路去学校。']],
      examples:[
        { zh:'寒假我坐飞机回家。', zt:'寒假我坐飛機回家。', py:'Hánjià wǒ zuò fēijī huí jiā.', en:'Over winter break I am flying home.' },
        { zh:'你怎么去机场？', zt:'你怎麼去機場？', py:'Nǐ zěnme qù jīchǎng?', en:'How are you getting to the airport?' },
        { zh:'我开车送你去机场吧。', zt:'我開車送你去機場吧。', py:'Wǒ kāi chē sòng nǐ qù jīchǎng ba.', en:"Let me drive you to the airport." }
      ],
      exercises:[
        { t:'fill', zh:'寒假我___飞机回家。', zt:'寒假我___飛機回家。', opts:['坐','开','走','上'], ans:'坐', py:'Hánjià wǒ zuò fēijī huí jiā.', en:'Over winter break I am flying home.', why:'Passengers 坐 a plane, bus, subway or taxi.' },
        { t:'fill', zh:'你可以___车送我去机场吗？', zt:'你可以___車送我去機場嗎？', opts:['开','坐','走','打'], ans:'开', py:'Nǐ kěyǐ kāi chē sòng wǒ qù jīchǎng ma?', en:'Could you drive me to the airport?', why:'The driver 开车.' },
        { t:'mc', label:'Spot the error', zh:'我去机场坐地铁。', zt:'我去機場坐地鐵。', q:'What is the usual order?', opts:['Means before 去: 我坐地铁去机场','坐 should be 开','It needs 了','Nothing — this is the usual order'], ans:0, why:'Means of transport comes before 去 + destination.' },
        { t:'wo', words:['我','坐','公共汽车','去','机场','。'], en:'I take the bus to the airport.', py:'Wǒ zuò gōnggòng qìchē qù jīchǎng.' },
        { t:'wo', words:['你','怎么','去','机场','？'], extra:['什么'], en:'How are you getting to the airport?', py:'Nǐ zěnme qù jīchǎng?' },
        { t:'speak', zh:'你怎么去机场？', zt:'你怎麼去機場？', py:'Nǐ zěnme qù jīchǎng?', en:'How are you getting to the airport?' },
        { t:'speak', zh:'我开车送你去机场吧。', zt:'我開車送你去機場吧。', py:'Wǒ kāi chē sòng nǐ qù jīchǎng ba.', en:'Let me drive you to the airport.' }
      ] },
    { id:'g2', title:'还是 vs 或者', zh:'还是 · 或者', zt:'還是 · 或者', py:'háishi · huòzhě',
      summary:'Both mean "or". 还是 is for questions that offer a choice. 或者 is for statements ("either one is fine"). This is one of the most common learner mistakes.',
      rules:[['Question: A 还是 B？','你坐地铁还是坐公共汽车？'],['Statement: A 或者 B','坐地铁或者坐公共汽车都可以。'],['或者 in a question sounds wrong','你要茶或者咖啡？ ✗']],
      examples:[
        { zh:'你坐地铁还是坐公共汽车？', zt:'你坐地鐵還是坐公共汽車？', py:'Nǐ zuò dìtiě háishi zuò gōnggòng qìchē?', en:'Are you taking the subway or the bus?' },
        { zh:'坐地铁或者坐出租汽车都可以。', zt:'坐地鐵或者坐出租汽車都可以。', py:'Zuò dìtiě huòzhě zuò chūzū qìchē dōu kěyǐ.', en:'Taking the subway or a taxi are both fine.' }
      ],
      exercises:[
        { t:'multi', zh:'你坐地铁___坐公共汽车？我坐地铁___坐出租汽车都可以。', zt:'你坐地鐵___坐公共汽車？我坐地鐵___坐出租汽車都可以。', blanks:[['还是','或者','和'],['或者','还是','跟']], ans:['还是','或者'], py:'Nǐ zuò dìtiě háishi zuò gōnggòng qìchē? — Wǒ zuò dìtiě huòzhě zuò chūzū qìchē dōu kěyǐ.', en:'Subway or bus? — Subway or taxi, either is fine for me.', why:'还是 in the question, 或者 in the statement.' },
        { t:'fill', zh:'你可以坐公共汽车___地铁。', zt:'你可以坐公共汽車___地鐵。', opts:['或者','还是','和','跟'], ans:'或者', py:'Nǐ kěyǐ zuò gōnggòng qìchē huòzhě dìtiě.', en:'You can take the bus or the subway.', why:'A statement: 或者.' },
        { t:'fill', zh:'你寒假回家___不回家？', zt:'你寒假回家___不回家？', opts:['还是','或者','都','也'], ans:'还是', py:'Nǐ hánjià huí jiā háishi bù huí jiā?', en:'Are you going home for winter break or not?', why:'A choice question: 还是.' },
        { t:'mc', label:'Spot the error', zh:'你要咖啡或者茶？', q:'What is wrong?', opts:['A choice question needs 还是','咖啡 should come second','It needs 吗','Nothing — it is correct'], ans:0 },
        { t:'speak', zh:'你坐地铁还是坐公共汽车？', zt:'你坐地鐵還是坐公共汽車？', py:'Nǐ zuò dìtiě háishi zuò gōnggòng qìchē?', en:'Are you taking the subway or the bus?' }
      ] },
    { id:'g3', title:'每…都', zh:'每…都', py:'měi … dōu',
      summary:'每 "every" needs a measure word or a time word after it (每天, 每个人, 每站). The sentence usually adds 都 before the verb to sum up "all of them".',
      rules:[['每 + MW/time + noun … 都 + verb','每个学生都很紧张。'],['每天 · 每个星期 · 每站','我每天都坐地铁。'],['Without 都 it sounds incomplete','每个人很忙 ✗']],
      examples:[
        { zh:'我每天都坐地铁去学校。', zt:'我每天都坐地鐵去學校。', py:'Wǒ měitiān dōu zuò dìtiě qù xuéxiào.', en:'I take the subway to school every day.' },
        { zh:'每个周末他都开车回家。', zt:'每個週末他都開車回家。', py:'Měi ge zhōumò tā dōu kāi chē huí jiā.', en:'Every weekend he drives home.' }
      ],
      exercises:[
        { t:'pos', words:['我','每天','开车','去','学校','。'], wt:['我','每天','開車','去','學校','。'], insert:'都', ans:2, en:'I drive to school every day.', py:'Wǒ měitiān dōu kāi chē qù xuéxiào.', why:'都 sits after the 每 phrase, before the verb.' },
        { t:'fill', zh:'___个周末他都回家。', zt:'___個週末他都回家。', opts:['每','都','最','常'], ans:'每', py:'Měi ge zhōumò tā dōu huí jiā.', en:'He goes home every weekend.', why:'每 + measure word + noun.' },
        { t:'mc', label:'Spot the error', zh:'每个学生很紧张。', zt:'每個學生很緊張。', q:'What is missing?', opts:['都 before 很: 每个学生都很紧张','了 at the end','是 before 很','Nothing — it is correct'], ans:0 },
        { t:'wo', words:['每','个','人','都','坐','地铁','。'], en:'Everyone takes the subway.', py:'Měi ge rén dōu zuò dìtiě.' },
        { t:'speak', zh:'我每天都坐地铁。', zt:'我每天都坐地鐵。', py:'Wǒ měitiān dōu zuò dìtiě.', en:'I take the subway every day.' }
      ] },
    { id:'g4', title:'最 and 自己', zh:'最 · 自己', py:'zuì · zìjǐ',
      summary:'最 + adjective/verb = "the most": 最方便, 最喜欢. 自己 "oneself" stresses that someone does something on their own: 我自己去.',
      rules:[['最 + adjective','坐地铁最方便。'],['最 + 喜欢','我最喜欢坐飞机。'],['Subject + 自己 + verb','我自己开车去。']],
      examples:[
        { zh:'坐地铁最方便。', zt:'坐地鐵最方便。', py:'Zuò dìtiě zuì fāngbiàn.', en:'Taking the subway is the most convenient.' },
        { zh:'我自己去机场，不麻烦你了。', zt:'我自己去機場，不麻煩你了。', py:'Wǒ zìjǐ qù jīchǎng, bù máfan nǐ le.', en:"I'll get to the airport myself; I won't trouble you." }
      ],
      exercises:[
        { t:'fill', zh:'坐飞机___快。', zt:'坐飛機___快。', opts:['最','每','都','太'], ans:'最', py:'Zuò fēijī zuì kuài.', en:'Flying is the fastest.', why:'最 + adjective = the most.' },
        { t:'multi', zh:'坐出租汽车___方便，可是太贵了，所以我___坐公共汽车。', zt:'坐出租汽車___方便，可是太貴了，所以我___坐公共汽車。', blanks:[['最','每','都'],['自己','一起','一样']], ans:['最','自己'], py:'Zuò chūzū qìchē zuì fāngbiàn, kěshì tài guì le, suǒyǐ wǒ zìjǐ zuò gōnggòng qìchē.', en:"A taxi is the most convenient, but it's too expensive, so I take the bus on my own.", why:'最 = most; 自己 = by oneself.' },
        { t:'wo', words:['坐','地铁','最','方便','。'], en:'The subway is the most convenient.', py:'Zuò dìtiě zuì fāngbiàn.' },
        { t:'tr', zh:'我自己去机场，不麻烦你了。', zt:'我自己去機場，不麻煩你了。', py:'Wǒ zìjǐ qù jīchǎng, bù máfan nǐ le.', opts:["I'll get to the airport myself; I won't trouble you.","Going to the airport by myself is a lot of trouble.","Please take me to the airport; sorry for the trouble.","The airport is troublesome, so I'm not going."], ans:0 },
        { t:'speak', zh:'坐地铁最方便。', zt:'坐地鐵最方便。', py:'Zuò dìtiě zuì fāngbiàn.', en:'The subway is the most convenient.' }
      ] },
    { id:'g5', title:'Topic–comment sentences', zh:'话题句', zt:'話題句', py:'huàtí jù',
      summary:'Chinese often puts the thing being talked about (the topic) first, then the comment: 飞机票我买了 "the plane ticket — I bought it". This is common when the object is already known from context.',
      rules:[['Topic + subject + verb','飞机票我买了。'],['Topic sets up what we are discussing','高速公路我不喜欢开。'],['Normal order is still correct','我买了飞机票。']],
      examples:[
        { zh:'飞机票你买了吗？', zt:'飛機票你買了嗎？', py:'Fēijī piào nǐ mǎi le ma?', en:'Have you bought the plane ticket?' },
        { zh:'高速公路我最不喜欢开。', zt:'高速公路我最不喜歡開。', py:'Gāosù gōnglù wǒ zuì bù xǐhuan kāi.', en:'Highways are what I least like driving on.' }
      ],
      exercises:[
        { t:'mc', label:'Find the topic', zh:'飞机票我买了。', zt:'飛機票我買了。', q:'What is the topic of this sentence?', opts:['飞机票 (the plane ticket)','我 (I)','买 (buy)','了 (completed)'], ans:0 },
        { t:'wo', words:['飞机票','你','买','了','吗','？'], en:'Have you bought the plane ticket?', py:'Fēijī piào nǐ mǎi le ma?' },
        { t:'wo', words:['这','封','电子邮件','我','看','了','。'], en:'I have read this email.', py:'Zhè fēng diànzǐ yóujiàn wǒ kàn le.' },
        { t:'tr', zh:'高速公路我最不喜欢开。', zt:'高速公路我最不喜歡開。', py:'Gāosù gōnglù wǒ zuì bù xǐhuan kāi.', opts:['Highways are what I least like driving on.','The highway is the fastest road.','I like driving on highways the most.','The highway is not open.'], ans:0 },
        { t:'speak', zh:'飞机票你买了吗？', zt:'飛機票你買了嗎？', py:'Fēijī piào nǐ mǎi le ma?', en:'Have you bought the plane ticket?' }
      ] }
  ],
  dialogues:[
    { id:'d1', title:'Dialogue: A ride to the airport', note:'Li You asks about Wang Peng\'s trip home. (Original scene.)', roles:['李友','王朋'],
      lines:[
        { who:'李友', zh:'王朋，寒假你回家吗？', zt:'王朋，寒假你回家嗎？', py:'Wáng Péng, hánjià nǐ huí jiā ma?', en:'Wang Peng, are you going home for winter break?' },
        { who:'王朋', zh:'对，我坐飞机回北京。', zt:'對，我坐飛機回北京。', py:'Duì, wǒ zuò fēijī huí Běijīng.', en:"Yes, I'm flying back to Beijing." },
        { who:'李友', zh:'飞机票你买了吗？', zt:'飛機票你買了嗎？', py:'Fēijī piào nǐ mǎi le ma?', en:'Have you bought your ticket?' },
        { who:'王朋', zh:'买了，是二十一号下午三点的飞机。', zt:'買了，是二十一號下午三點的飛機。', py:'Mǎi le, shì èrshíyī hào xiàwǔ sān diǎn de fēijī.', en:"Yes, it's a 3 p.m. flight on the 21st." },
        { who:'李友', zh:'你怎么去机场？', zt:'你怎麼去機場？', py:'Nǐ zěnme qù jīchǎng?', en:'How are you getting to the airport?' },
        { who:'王朋', zh:'我坐公共汽车或者坐地铁。', zt:'我坐公共汽車或者坐地鐵。', py:'Wǒ zuò gōnggòng qìchē huòzhě zuò dìtiě.', en:"I'll take the bus or the subway." },
        { who:'李友', zh:'坐公共汽车太麻烦了，还得换车。我开车送你吧。', zt:'坐公共汽車太麻煩了，還得換車。我開車送你吧。', py:'Zuò gōnggòng qìchē tài máfan le, hái děi huàn chē. Wǒ kāi chē sòng nǐ ba.', en:"The bus is too much hassle; you'd have to transfer. Let me drive you." },
        { who:'王朋', zh:'不好意思，太麻烦你了。', zt:'不好意思，太麻煩你了。', py:'Bù hǎo yìsi, tài máfan nǐ le.', en:"Sorry to put you to so much trouble." },
        { who:'李友', zh:'别客气。我们十二点走，怎么样？', zt:'別客氣。我們十二點走，怎麼樣？', py:'Bié kèqi. Wǒmen shí\'èr diǎn zǒu, zěnmeyàng?', en:"Don't mention it. Shall we leave at twelve?" },
        { who:'王朋', zh:'好，谢谢你！', zt:'好，謝謝你！', py:'Hǎo, xièxie nǐ!', en:'Great, thank you!' },
        { who:'李友', zh:'祝你一路平安！', zt:'祝你一路平安！', py:'Zhù nǐ yílù píng\'ān!', en:'Have a good trip!' }
      ] },
    { id:'n1', title:'Email: Taking the subway', note:'Wang Peng writes to Li You from Beijing. (Original text.)', roles:['邮件'],
      lines:[
        { who:'邮件', zh:'李友，你好！谢谢你那天开车送我去机场。', zt:'李友，你好！謝謝你那天開車送我去機場。', py:'Lǐ Yǒu, nǐ hǎo! Xièxie nǐ nà tiān kāi chē sòng wǒ qù jīchǎng.', en:'Li You, hello! Thank you for driving me to the airport that day.' },
        { who:'邮件', zh:'那天高速公路上车很多，我很紧张，可是你开得很好。', zt:'那天高速公路上車很多，我很緊張，可是你開得很好。', py:'Nà tiān gāosù gōnglù shang chē hěn duō, wǒ hěn jǐnzhāng, kěshì nǐ kāi de hěn hǎo.', en:'There was a lot of traffic on the highway that day and I was nervous, but you drove really well.' },
        { who:'邮件', zh:'我回家以后，每天都坐地铁。', zt:'我回家以後，每天都坐地鐵。', py:'Wǒ huí jiā yǐhòu, měitiān dōu zuò dìtiě.', en:'Since I got home I have taken the subway every day.' },
        { who:'邮件', zh:'在北京坐地铁最方便：先坐绿线，再换蓝线，三站就到了。', zt:'在北京坐地鐵最方便：先坐綠線，再換藍線，三站就到了。', py:'Zài Běijīng zuò dìtiě zuì fāngbiàn: xiān zuò lǜ xiàn, zài huàn lán xiàn, sān zhàn jiù dào le.', en:'In Beijing the subway is the most convenient: take the green line first, change to the blue line, and you are there in three stops.' },
        { who:'邮件', zh:'我不喜欢坐出租汽车，因为太贵了，也花很多时间。', zt:'我不喜歡坐出租汽車，因為太貴了，也花很多時間。', py:'Wǒ bù xǐhuan zuò chūzū qìchē, yīnwèi tài guì le, yě huā hěn duō shíjiān.', en:"I don't like taking taxis because they're too expensive and take a lot of time." },
        { who:'邮件', zh:'新年快乐！王朋', zt:'新年快樂！王朋', py:'Xīnnián kuàilè! Wáng Péng', en:'Happy New Year! Wang Peng' }
      ] }
  ],
  comprehension:[
    { q:'How is Wang Peng getting home for winter break?', opts:['By plane','By train','By car','By bus'], ans:0, why:'我坐飞机回北京。' },
    { q:'When is his flight?', opts:['3 p.m. on the 21st','Noon on the 21st','3 p.m. on the 12th','He has no ticket yet'], ans:0, why:'二十一号下午三点的飞机。' },
    { q:'How did he plan to get to the airport?', opts:['Bus or subway','Taxi','Walking','His own car'], ans:0, why:'我坐公共汽车或者坐地铁。' },
    { q:'Why does Li You offer to drive?', opts:['The bus is a hassle and needs a transfer','Wang Peng asked her','She is going to the airport too','The subway is closed'], ans:0, why:'坐公共汽车太麻烦了，还得换车。' },
    { q:'How did Wang Peng feel on the highway?', opts:['Nervous','Bored','Sleepy','Happy'], ans:0, why:'我很紧张。' },
    { q:'Which subway route does he describe?', opts:['Green line, then change to blue','Blue line only','Blue, then green','Green line only'], ans:0, why:'先坐绿线，再换蓝线。' },
    { q:'Why doesn\'t he like taxis?', opts:['Too expensive and slow','Too crowded','He gets lost','He does not like the drivers'], ans:0, why:'因为太贵了，也花很多时间。' }
  ],
  free:[
    { en:'How are you getting to the airport?', answers:['你怎么去机场？'], hint:'怎么 + 去' },
    { en:"I'll take the bus or the subway.", answers:['我坐公共汽车或者坐地铁。','我坐公共汽车或者地铁。'], hint:'Statement → 或者' },
    { en:'Are you taking the subway or a taxi?', answers:['你坐地铁还是坐出租汽车？','你坐地铁还是出租汽车？'], hint:'Question → 还是' },
    { en:'I take the subway to school every day.', answers:['我每天都坐地铁去学校。','我每天坐地铁去学校。'], hint:'每天都 + means + 去' },
    { zh:'不好意思，太麻烦你了。', zt:'不好意思，太麻煩你了。', py:'Bù hǎo yìsi, tài máfan nǐ le.', answers:["Sorry to put you to so much trouble.","Sorry, that's too much trouble for you."], hint:'麻烦 + person = to trouble someone' }
  ],
  writing:['寒','假','飞','机','票','送','场','开','车','坐','公','汽','或','者','地','铁','站','换','绿','蓝','线','麻','烦','租','走','高','速','路','最','每','紧','张','自','己','意','思','花','新','快','乐','邮','件','平','安']
});
