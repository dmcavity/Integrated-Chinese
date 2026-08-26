/* Integrated Chinese L1P1 — Chapter 3: Dates and Time (时间)
   Vocabulary and grammar follow the textbook. Dialogues are original scenes
   using Chapter 1–3 vocabulary; the book's own text is not reproduced. */
window.IC_CHAPTERS = window.IC_CHAPTERS || [];
window.IC_CHAPTERS.push({
  id:'ch3', number:3, title:'Dates and Time', zh:'时间', zt:'時間', py:'Shíjiān',
  blurb:'A birthday dinner: saying the date and day of the week, asking someone\'s age, and agreeing on a time to meet.',
  vocab:[
    { s:'九月', py:'jiǔyuè', en:'September' },
    { s:'月', py:'yuè', en:'month' },
    { s:'十二', py:'shí\'èr', en:'twelve' },
    { s:'号', t:'號', py:'hào', en:'day of the month; number' },
    { s:'星期', py:'xīngqī', en:'week' },
    { s:'星期四', py:'xīngqīsì', en:'Thursday' },
    { s:'天', py:'tiān', en:'day' },
    { s:'生日', py:'shēngrì', en:'birthday' },
    { s:'今年', py:'jīnnián', en:'this year' },
    { s:'年', py:'nián', en:'year' },
    { s:'多', py:'duō', en:'how many/much; many' },
    { s:'大', py:'dà', en:'big; old (age)' },
    { s:'十八', py:'shíbā', en:'eighteen' },
    { s:'岁', t:'歲', py:'suì', en:'years of age' },
    { s:'吃', py:'chī', en:'to eat' },
    { s:'饭', t:'飯', py:'fàn', en:'meal, (cooked) rice' },
    { s:'怎么样', t:'怎麼樣', py:'zěnmeyàng', en:'how about; how is it' },
    { s:'太…了', py:'tài … le', en:'too, extremely' },
    { s:'谢谢', t:'謝謝', py:'xièxie', en:'thank you' },
    { s:'喜欢', t:'喜歡', py:'xǐhuan', en:'to like' },
    { s:'菜', py:'cài', en:'dish, cuisine' },
    { s:'还是', t:'還是', py:'háishi', en:'or (in questions)' },
    { s:'可是', py:'kěshì', en:'but' },
    { s:'我们', t:'我們', py:'wǒmen', en:'we, us' },
    { s:'点', t:'點', py:'diǎn', en:"o'clock" },
    { s:'半', py:'bàn', en:'half' },
    { s:'晚上', py:'wǎnshang', en:'evening, night' },
    { s:'见', t:'見', py:'jiàn', en:'to see' },
    { s:'再见', t:'再見', py:'zàijiàn', en:'goodbye' },
    { s:'现在', t:'現在', py:'xiànzài', en:'now' },
    { s:'刻', py:'kè', en:'quarter (hour)' },
    { s:'事儿', t:'事兒', py:'shìr', en:'matter, business' },
    { s:'今天', py:'jīntiān', en:'today' },
    { s:'很', py:'hěn', en:'very' },
    { s:'忙', py:'máng', en:'busy' },
    { s:'明天', py:'míngtiān', en:'tomorrow' },
    { s:'晚饭', t:'晚飯', py:'wǎnfàn', en:'dinner' },
    { s:'为什么', t:'為什麼', py:'wèishénme', en:'why' },
    { s:'因为', t:'因為', py:'yīnwèi', en:'because' },
    { s:'还', t:'還', py:'hái', en:'also, in addition' },
    { s:'同学', t:'同學', py:'tóngxué', en:'classmate' },
    { s:'认识', t:'認識', py:'rènshi', en:'to know (a person)' },
    { s:'朋友', py:'péngyou', en:'friend' }
  ],
  measureWords:[
    { noun:'同学', nt:'同學', mw:'个', py:'yí ge tóngxué', en:'one classmate' },
    { noun:'朋友', mw:'个', py:'yí ge péngyou', en:'one friend' }
  ],
  measureDistractors:['个','张','号','岁'],
  grammar:[
    { id:'g1', title:'Dates and days of the week', zh:'月 · 号 · 星期', zt:'月 · 號 · 星期', py:'yuè · hào · xīngqī',
      summary:'Time goes from large to small: year → month → day → weekday. Months are number + 月, dates are number + 号, weekdays are 星期 + number (Sunday is 星期天/星期日). Time words connect to a noun directly, with no 是.',
      rules:[['Order: year, month, day, weekday','二〇二六年九月十二号星期四'],['Months: number + 月','九月 = September'],['Days: number + 号','十二号 = the 12th'],['Weekdays: 星期 + number','星期四 = Thursday; 星期天 = Sunday'],['No 是 needed','今天星期四。']],
      examples:[
        { zh:'今天是九月十二号。', zt:'今天是九月十二號。', py:'Jīntiān shì jiǔyuè shí\'èr hào.', en:'Today is September 12th.' },
        { zh:'九月十二号是星期四。', zt:'九月十二號是星期四。', py:'Jiǔyuè shí\'èr hào shì xīngqīsì.', en:'September 12th is a Thursday.' },
        { zh:'明天是我的生日。', py:'Míngtiān shì wǒ de shēngrì.', en:'Tomorrow is my birthday.' }
      ],
      exercises:[
        { t:'fill', zh:'今天是九月十二___。', zt:'今天是九月十二___。', opts:['号','月','年','天'], ans:'号', py:'Jīntiān shì jiǔyuè shí\'èr hào.', en:'Today is September 12th.', why:'号 marks the day of the month.' },
        { t:'mc', label:'Meaning', zh:'星期四', q:'Which day is this?', opts:['Thursday','Wednesday','Friday','Sunday'], ans:0, why:'星期 + 四 = the fourth weekday, Thursday.' },
        { t:'mc', label:'Meaning', zh:'十一月三号', zt:'十一月三號', q:'Which date is this?', opts:['November 3rd','March 11th','November 13th','October 3rd'], ans:0 },
        { t:'wo', words:['明天','是','星期','几','？'], en:'What day is tomorrow?', py:'Míngtiān shì xīngqī jǐ?' },
        { t:'wo', words:['今年','九月','十二号','是','星期四','。'], en:'This year September 12th is a Thursday.', py:'Jīnnián jiǔyuè shí\'èr hào shì xīngqīsì.' },
        { t:'mc', label:'Spot the error', zh:'今天是十二号九月。', zt:'今天是十二號九月。', q:'What is wrong?', opts:['Month comes before day: 九月十二号','It needs 星期','号 should be 天','Nothing — it is correct'], ans:0 },
        { t:'speak', zh:'今天是几月几号？', zt:'今天是幾月幾號？', py:'Jīntiān shì jǐ yuè jǐ hào?', en:'What is the date today?' }
      ] },
    { id:'g2', title:'Telling time', zh:'点 · 半 · 刻', zt:'點 · 半 · 刻', py:'diǎn · bàn · kè',
      summary:'Hours use 点; 半 = half past; 一刻 = quarter past; 三刻 = quarter to the next hour. Like dates, time words come before the verb, not at the end.',
      rules:[['Number + 点','七点 = 7:00'],['Half past','七点半 = 7:30'],['Quarter past / to','七点一刻 = 7:15 · 七点三刻 = 7:45'],['Time before the verb','我们七点半吃饭。'],['Ask: 几点','现在几点？']],
      examples:[
        { zh:'现在几点？', zt:'現在幾點？', py:'Xiànzài jǐ diǎn?', en:'What time is it now?' },
        { zh:'我们晚上七点半吃饭。', zt:'我們晚上七點半吃飯。', py:'Wǒmen wǎnshang qī diǎn bàn chī fàn.', en:'We eat at 7:30 in the evening.' },
        { zh:'现在八点三刻。', zt:'現在八點三刻。', py:'Xiànzài bā diǎn sān kè.', en:'It is 8:45 now.' }
      ],
      exercises:[
        { t:'mc', label:'Meaning', zh:'六点三刻', zt:'六點三刻', q:'What time is this?', opts:['6:45','6:15','6:30','3:06'], ans:0, why:'三刻 = three quarters = :45.' },
        { t:'mc', label:'Meaning', zh:'九点半', zt:'九點半', q:'What time is this?', opts:['9:30','9:15','8:30','9:45'], ans:0 },
        { t:'fill', zh:'现在___点？', zt:'現在___點？', opts:['几','多','什么','半'], ans:'几', py:'Xiànzài jǐ diǎn?', en:'What time is it?', why:'几点 asks the hour.' },
        { t:'pos', words:['我们','晚上','吃','晚饭','。'], wt:['我們','晚上','吃','晚飯','。'], insert:'七点', ans:2, en:'We eat dinner at 7 in the evening.', py:'Wǒmen wǎnshang qī diǎn chī wǎnfàn.', why:'Time expressions go before the verb, after the larger time word 晚上.' },
        { t:'mc', label:'Spot the error', zh:'我们吃饭七点半。', zt:'我們吃飯七點半。', q:'What is wrong?', opts:['Time goes before the verb: 我们七点半吃饭','半 should be 刻','It needs 在','Nothing — it is correct'], ans:0 },
        { t:'wo', words:['你','明天','晚上','几点','吃饭','？'], en:'What time do you eat tomorrow evening?', py:'Nǐ míngtiān wǎnshang jǐ diǎn chī fàn?' },
        { t:'speak', zh:'我们七点半见。', zt:'我們七點半見。', py:'Wǒmen qī diǎn bàn jiàn.', en:'See you at 7:30.' }
      ] },
    { id:'g3', title:'Age: 多大 and 岁', zh:'多大 · 岁', zt:'多大 · 歲', py:'duō dà · suì',
      summary:'Ask an age with 多大 ("how old"). Answer with number + 岁; no verb is needed (是 is optional for emphasis). 今年 = this year.',
      rules:[['Ask','你今年多大？'],['Answer: number + 岁','我十八岁。'],['Under 10 / children','几岁？']],
      examples:[
        { zh:'你今年多大？', py:'Nǐ jīnnián duō dà?', en:'How old are you this year?' },
        { zh:'我今年十八岁。', zt:'我今年十八歲。', py:'Wǒ jīnnián shíbā suì.', en:'I am eighteen this year.' }
      ],
      exercises:[
        { t:'fill', zh:'你今年___？', opts:['多大','几大','多岁','大吗'], ans:'多大', py:'Nǐ jīnnián duō dà?', en:'How old are you?', why:'多大 = how old.' },
        { t:'fill', zh:'我今年二十___。', zt:'我今年二十___。', opts:['岁','年','号','天'], ans:'岁', py:'Wǒ jīnnián èrshí suì.', en:'I am twenty this year.', why:'岁 = years of age.' },
        { t:'wo', words:['你','弟弟','今年','多大','？'], en:'How old is your younger brother this year?', py:'Nǐ dìdi jīnnián duō dà?' },
        { t:'tr', zh:'我姐姐今年十九岁。', zt:'我姐姐今年十九歲。', py:'Wǒ jiějie jīnnián shíjiǔ suì.', opts:['My older sister is nineteen this year.','My older sister will be nineteen next year.','My older sister was born in 1999.','My younger sister is nineteen.'], ans:0 },
        { t:'speak', zh:'你今年多大？', py:'Nǐ jīnnián duō dà?', en:'How old are you?' }
      ] },
    { id:'g4', title:'还是 questions and 太…了', zh:'还是 · 太…了', zt:'還是 · 太…了', py:'háishi · tài … le',
      summary:'还是 offers a choice: "A or B?" It is only for questions; no 吗 is added. 太 + adjective + 了 means "too / extremely" and is often used for exclamations: 太好了！',
      rules:[['A 还是 B？','你喜欢中国菜还是美国菜？'],['No 吗 with 还是','还是…吗 ✗'],['太 + adj + 了','太好了！ 太忙了。']],
      examples:[
        { zh:'你喜欢吃中国菜还是美国菜？', zt:'你喜歡吃中國菜還是美國菜？', py:'Nǐ xǐhuan chī Zhōngguó cài háishi Měiguó cài?', en:'Do you like Chinese food or American food?' },
        { zh:'太好了！谢谢！', zt:'太好了！謝謝！', py:'Tài hǎo le! Xièxie!', en:'Great! Thank you!' },
        { zh:'我今天太忙了。', py:'Wǒ jīntiān tài máng le.', en:'I am too busy today.' }
      ],
      exercises:[
        { t:'fill', zh:'我们星期四___星期五吃饭？', zt:'我們星期四___星期五吃飯？', opts:['还是','和','也','可是'], ans:'还是', py:'Wǒmen xīngqīsì háishi xīngqīwǔ chī fàn?', en:'Shall we eat on Thursday or Friday?', why:'还是 = or, in a question.' },
        { t:'multi', zh:'___好___！我___喜欢中国菜。', zt:'___好___！我___喜歡中國菜。', blanks:[['太','很','也'],['了','吗','呢'],['很','太','都']], ans:['太','了','很'], py:'Tài hǎo le! Wǒ hěn xǐhuan Zhōngguó cài.', en:'Great! I really like Chinese food.', why:'太…了 for the exclamation; plain 很 before 喜欢.' },
        { t:'mc', label:'Spot the error', zh:'你喜欢茶还是咖啡吗？', zt:'你喜歡茶還是咖啡嗎？', q:'What is wrong?', opts:['Drop 吗 — 还是 already makes a question','还是 should be 和','It needs 太','Nothing — it is correct'], ans:0 },
        { t:'multi', zh:'你喜欢中国菜___美国菜？中国菜___好吃了！', zt:'你喜歡中國菜___美國菜？中國菜___好吃了！', blanks:[['还是','和','可是'],['太','很','都']], ans:['还是','太'], py:'Nǐ xǐhuan Zhōngguó cài háishi Měiguó cài? — Zhōngguó cài tài hǎochī le!', en:'Do you like Chinese or American food? — Chinese food is delicious!', why:'还是 asks the choice; 太…了 is the exclamation.' },
        { t:'wo', words:['你','是','老师','还是','学生','？'], en:'Are you a teacher or a student?', py:'Nǐ shì lǎoshī háishi xuésheng?' },
        { t:'speak', zh:'太好了！', py:'Tài hǎo le!', en:'Great!' }
      ] },
    { id:'g5', title:'为什么 and 因为; 还', zh:'为什么 · 因为 · 还', zt:'為什麼 · 因為 · 還', py:'wèishénme · yīnwèi · hái',
      summary:'为什么 asks why; answer with 因为 ("because"). 还 ("also, in addition") is an adverb before the verb, adding another item.',
      rules:[['为什么 + verb phrase','你为什么忙？'],['因为 + clause','因为明天是我的生日。'],['Subject + 还 + verb','我还认识你的同学。']],
      examples:[
        { zh:'你为什么请我吃饭？', zt:'你為什麼請我吃飯？', py:'Nǐ wèishénme qǐng wǒ chī fàn?', en:'Why are you treating me to a meal?' },
        { zh:'因为明天是你的生日。', zt:'因為明天是你的生日。', py:'Yīnwèi míngtiān shì nǐ de shēngrì.', en:'Because tomorrow is your birthday.' },
        { zh:'我还认识你的朋友。', zt:'我還認識你的朋友。', py:'Wǒ hái rènshi nǐ de péngyou.', en:'I also know your friend.' }
      ],
      exercises:[
        { t:'multi', zh:'你___忙？___今天我有事儿。', zt:'你___忙？___今天我有事兒。', blanks:[['为什么','怎么样','什么'],['因为','可是','还是']], ans:['为什么','因为'], py:'Nǐ wèishénme máng? — Yīnwèi jīntiān wǒ yǒu shìr.', en:'Why are you busy? — Because I have something on today.', why:'为什么 asks; 因为 answers.' },
        { t:'pos', words:['我','认识','你','的','同学','。'], wt:['我','認識','你','的','同學','。'], insert:'还', ans:1, en:'I also know your classmate.', py:'Wǒ hái rènshi nǐ de tóngxué.', why:'还 sits before the verb.' },
        { t:'wo', words:['你','为什么','不','吃饭','？'], en:"Why aren't you eating?", py:'Nǐ wèishénme bù chī fàn?' },
        { t:'tr', zh:'我很忙，可是我还认识很多朋友。', zt:'我很忙，可是我還認識很多朋友。', py:'Wǒ hěn máng, kěshì wǒ hái rènshi hěn duō péngyou.', opts:['I am busy, but I still know a lot of friends.','I am busy because I have many friends.','I am not busy, so I know many friends.','I am busy and I want to meet friends.'], ans:0 },
        { t:'speak', zh:'因为今天是我的生日。', zt:'因為今天是我的生日。', py:'Yīnwèi jīntiān shì wǒ de shēngrì.', en:'Because today is my birthday.' }
      ] }
  ],
  dialogues:[
    { id:'d1', title:'Dialogue: A birthday dinner', note:'Wang Peng invites Gao Wenzhong out. (Original scene.)', roles:['王朋','高文中'],
      lines:[
        { who:'王朋', zh:'文中，今天几月几号？', zt:'文中，今天幾月幾號？', py:'Wénzhōng, jīntiān jǐ yuè jǐ hào?', en:"Wenzhong, what's the date today?" },
        { who:'高文中', zh:'今天九月十一号，星期三。', zt:'今天九月十一號，星期三。', py:'Jīntiān jiǔyuè shíyī hào, xīngqīsān.', en:'September 11th, Wednesday.' },
        { who:'王朋', zh:'明天是我的生日。你明天有事儿吗？', zt:'明天是我的生日。你明天有事兒嗎？', py:'Míngtiān shì wǒ de shēngrì. Nǐ míngtiān yǒu shìr ma?', en:'Tomorrow is my birthday. Are you busy tomorrow?' },
        { who:'高文中', zh:'明天星期四，我没有事儿。你今年多大？', zt:'明天星期四，我沒有事兒。你今年多大？', py:'Míngtiān xīngqīsì, wǒ méiyǒu shìr. Nǐ jīnnián duō dà?', en:"Tomorrow is Thursday; I'm free. How old are you this year?" },
        { who:'王朋', zh:'我今年十九岁。我请你吃晚饭，怎么样？', zt:'我今年十九歲。我請你吃晚飯，怎麼樣？', py:'Wǒ jīnnián shíjiǔ suì. Wǒ qǐng nǐ chī wǎnfàn, zěnmeyàng?', en:"I'm nineteen. Let me treat you to dinner, how about it?" },
        { who:'高文中', zh:'太好了！谢谢。我们吃中国菜还是美国菜？', zt:'太好了！謝謝。我們吃中國菜還是美國菜？', py:'Tài hǎo le! Xièxie. Wǒmen chī Zhōngguó cài háishi Měiguó cài?', en:'Great! Thanks. Chinese or American food?' },
        { who:'王朋', zh:'我喜欢中国菜，可是你喜欢什么菜？', zt:'我喜歡中國菜，可是你喜歡什麼菜？', py:'Wǒ xǐhuan Zhōngguó cài, kěshì nǐ xǐhuan shénme cài?', en:'I like Chinese food, but what do you like?' },
        { who:'高文中', zh:'我也喜欢中国菜。我们几点吃饭？', zt:'我也喜歡中國菜。我們幾點吃飯？', py:'Wǒ yě xǐhuan Zhōngguó cài. Wǒmen jǐ diǎn chī fàn?', en:'I like Chinese food too. What time do we eat?' },
        { who:'王朋', zh:'晚上七点半，怎么样？', zt:'晚上七點半，怎麼樣？', py:'Wǎnshang qī diǎn bàn, zěnmeyàng?', en:'7:30 in the evening, how about that?' },
        { who:'高文中', zh:'七点半太晚了。七点一刻吧。', zt:'七點半太晚了。七點一刻吧。', py:'Qī diǎn bàn tài wǎn le. Qī diǎn yí kè ba.', en:"7:30 is too late. Let's say 7:15." },
        { who:'王朋', zh:'好，明天晚上七点一刻见。', zt:'好，明天晚上七點一刻見。', py:'Hǎo, míngtiān wǎnshang qī diǎn yí kè jiàn.', en:'OK, see you tomorrow at 7:15.' },
        { who:'高文中', zh:'再见！', zt:'再見！', py:'Zàijiàn!', en:'Bye!' }
      ] },
    { id:'d2', title:'Dialogue: Why so busy?', note:'Li You catches Bai Ying\'ai in a hurry. (Original scene.)', roles:['李友','白英爱'],
      lines:[
        { who:'李友', zh:'英爱，现在几点？', zt:'英愛，現在幾點？', py:'Yīng\'ài, xiànzài jǐ diǎn?', en:"Ying'ai, what time is it?" },
        { who:'白英爱', zh:'现在五点三刻。', zt:'現在五點三刻。', py:'Xiànzài wǔ diǎn sān kè.', en:"It's 5:45." },
        { who:'李友', zh:'你今天晚上很忙吗？', zt:'你今天晚上很忙嗎？', py:'Nǐ jīntiān wǎnshang hěn máng ma?', en:'Are you busy tonight?' },
        { who:'白英爱', zh:'很忙。', py:'Hěn máng.', en:'Very busy.' },
        { who:'李友', zh:'为什么？', zt:'為什麼？', py:'Wèishénme?', en:'Why?' },
        { who:'白英爱', zh:'因为今天是我同学的生日，我请她吃饭。', zt:'因為今天是我同學的生日，我請她吃飯。', py:'Yīnwèi jīntiān shì wǒ tóngxué de shēngrì, wǒ qǐng tā chī fàn.', en:"Because it's my classmate's birthday and I'm treating her to dinner." },
        { who:'李友', zh:'我认识你的同学吗？', zt:'我認識你的同學嗎？', py:'Wǒ rènshi nǐ de tóngxué ma?', en:'Do I know your classmate?' },
        { who:'白英爱', zh:'认识，她是王朋的朋友。她还认识你的姐姐。', zt:'認識，她是王朋的朋友。她還認識你的姐姐。', py:'Rènshi, tā shì Wáng Péng de péngyou. Tā hái rènshi nǐ de jiějie.', en:"You do; she's Wang Peng's friend. She also knows your older sister." }
      ] }
  ],
  comprehension:[
    { q:"When is Wang Peng's birthday?", opts:['Thursday, September 12th','Wednesday, September 11th','Friday','Today'], ans:0, why:'今天九月十一号星期三；明天是我的生日。' },
    { q:'How old is Wang Peng this year?', opts:['Nineteen','Eighteen','Twenty','He does not say'], ans:0, why:'我今年十九岁。' },
    { q:'What time do they agree to meet?', opts:['7:15','7:30','7:45','7:00'], ans:0, why:'七点一刻吧。' },
    { q:"Why is Bai Ying'ai busy tonight?", opts:["It is her classmate's birthday",'She has class','She is going home','She is meeting Wang Peng'], ans:0, why:'因为今天是我同学的生日。' },
    { q:'What time is it in the second dialogue?', opts:['5:45','5:15','5:30','6:45'], ans:0, why:'现在五点三刻。' }
  ],
  free:[
    { en:'Today is Thursday, September 12th.', answers:['今天是九月十二号，星期四。','今天九月十二号星期四。','今天是九月十二号星期四。'], hint:'month → day → weekday' },
    { en:'What time is it now? It is 8:30.', answers:['现在几点？现在八点半。','现在几点？八点半。'], hint:'几点 / 点半' },
    { en:'Do you like Chinese food or American food?', answers:['你喜欢中国菜还是美国菜？','你喜欢吃中国菜还是美国菜？'], hint:'A 还是 B' },
    { en:'Why are you busy tomorrow? Because tomorrow is my birthday.', answers:['你明天为什么忙？因为明天是我的生日。','你为什么明天忙？因为明天是我的生日。'], hint:'为什么 / 因为' },
    { zh:'我们晚上七点一刻吃晚饭，怎么样？', zt:'我們晚上七點一刻吃晚飯，怎麼樣？', py:'Wǒmen wǎnshang qī diǎn yí kè chī wǎnfàn, zěnmeyàng?', answers:['How about we have dinner at 7:15 tonight?','We eat dinner at 7:15 this evening, how about that?'], hint:'一刻 = quarter past' }
  ],
  writing:['月','号','星','期','天','生','日','今','年','多','大','岁','吃','饭','怎','样','太','谢','喜','欢','菜','还','是','可','们','点','半','晚','见','再','现','在','刻','事','很','忙','明','为','因','同','认','识','朋','友']
});
