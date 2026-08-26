/* Integrated Chinese L1P1 — Chapter 1: Greetings (问好)
   Vocabulary and grammar follow the textbook. Dialogues are original scenes
   written for this app using only Chapter 1 vocabulary; the book's own text
   is not reproduced here. Swap in the book's lines if you prefer. */
window.IC_CHAPTERS = window.IC_CHAPTERS || [];
window.IC_CHAPTERS.push({
  id:'ch1', number:1, title:'Greetings', zh:'问好', zt:'問好', py:'Wèn hǎo',
  blurb:'Wang Peng and Li You meet for the first time, exchange names, and find out who is a teacher, who is a student, and where each is from.',
  vocab:[
    { s:'你', t:'你', py:'nǐ', en:'you' },
    { s:'好', t:'好', py:'hǎo', en:'fine, good, OK' },
    { s:'请', t:'請', py:'qǐng', en:'please' },
    { s:'问', t:'問', py:'wèn', en:'to ask' },
    { s:'贵', t:'貴', py:'guì', en:'honorable, expensive' },
    { s:'姓', t:'姓', py:'xìng', en:'surname; to be surnamed' },
    { s:'我', t:'我', py:'wǒ', en:'I, me' },
    { s:'呢', t:'呢', py:'ne', en:'question particle (and you?)' },
    { s:'小姐', t:'小姐', py:'xiǎojiě', en:'Miss, young lady' },
    { s:'叫', t:'叫', py:'jiào', en:'to be called' },
    { s:'什么', t:'什麼', py:'shénme', en:'what' },
    { s:'名字', t:'名字', py:'míngzi', en:'name' },
    { s:'先生', t:'先生', py:'xiānsheng', en:'Mr., husband' },
    { s:'李友', t:'李友', py:'Lǐ Yǒu', en:'(a personal name)', name:true },
    { s:'王朋', t:'王朋', py:'Wáng Péng', en:'(a personal name)', name:true },
    { s:'是', t:'是', py:'shì', en:'to be' },
    { s:'老师', t:'老師', py:'lǎoshī', en:'teacher' },
    { s:'吗', t:'嗎', py:'ma', en:'yes/no question particle' },
    { s:'不', t:'不', py:'bù', en:'not, no' },
    { s:'学生', t:'學生', py:'xuésheng', en:'student' },
    { s:'也', t:'也', py:'yě', en:'also, too' },
    { s:'人', t:'人', py:'rén', en:'person, people' },
    { s:'中国', t:'中國', py:'Zhōngguó', en:'China' },
    { s:'北京', t:'北京', py:'Běijīng', en:'Beijing' },
    { s:'美国', t:'美國', py:'Měiguó', en:'America' },
    { s:'纽约', t:'紐約', py:'Niǔyuē', en:'New York' }
  ],
  measureWords:[], measureDistractors:[],
  grammar:[
    { id:'g1', title:'姓 and 叫', zh:'姓 · 叫', py:'xìng · jiào',
      summary:'姓 is a verb meaning "to be surnamed" and takes only the family name. 叫 ("to be called") takes the full name or the given name. 您贵姓 is the polite way to ask a surname.',
      rules:[['姓 + surname only','我姓李。'],['叫 + full name / given name','我叫李友。'],['Polite question','您贵姓？ (never 你贵姓什么)'],['Neutral question','你叫什么名字？']],
      examples:[
        { zh:'请问，您贵姓？', zt:'請問，您貴姓？', py:'Qǐng wèn, nín guì xìng?', en:'May I ask your surname?' },
        { zh:'我姓李，叫李友。', py:'Wǒ xìng Lǐ, jiào Lǐ Yǒu.', en:'My surname is Li; I am called Li You.' },
        { zh:'你叫什么名字？', zt:'你叫什麼名字？', py:'Nǐ jiào shénme míngzi?', en:'What is your name?' }
      ],
      exercises:[
        { t:'fill', zh:'我___王，叫王朋。', opts:['姓','叫','是','好'], ans:'姓', py:'Wǒ xìng Wáng, jiào Wáng Péng.', en:'My surname is Wang; I am called Wang Peng.', why:'姓 takes the surname alone.' },
        { t:'fill', zh:'请问，您___姓？', zt:'請問，您___姓？', opts:['贵','好','什么','叫'], ans:'贵', py:'Qǐng wèn, nín guì xìng?', en:'May I ask your surname?', why:'您贵姓 is the set polite phrase.' },
        { t:'mc', label:'Spot the error', zh:'我姓王朋。', q:'What is wrong?', opts:['姓 takes only the surname: 我姓王','It needs 叫 as well','王朋 should come first','Nothing — it is correct'], ans:0 },
        { t:'mc', label:'Spot the error', zh:'你贵姓什么？', zt:'你貴姓什麼？', q:'What is wrong?', opts:['贵姓 is not followed by 什么, and 您 is the polite form','It needs 叫','It needs 吗','Nothing — it is correct'], ans:0, why:'Say 您贵姓？ or 你姓什么？' },
        { t:'wo', words:['你','叫','什么','名字','？'], en:'What is your name?', py:'Nǐ jiào shénme míngzi?' },
        { t:'wo', words:['我','姓','李','，','叫','李友','。'], en:'My surname is Li; I am called Li You.', py:'Wǒ xìng Lǐ, jiào Lǐ Yǒu.' },
        { t:'speak', zh:'请问，您贵姓？', zt:'請問，您貴姓？', py:'Qǐng wèn, nín guì xìng?', en:'May I ask your surname?' },
        { t:'speak', zh:'我叫王朋。', py:'Wǒ jiào Wáng Péng.', en:'I am called Wang Peng.' }
      ] },
    { id:'g2', title:'The verb 是', zh:'是', py:'shì',
      summary:'是 links a subject to a noun: A 是 B. Negate with 不是. Note that adjectives do not use 是 (that comes in Chapter 5).',
      rules:[['Noun + 是 + Noun','我是学生。'],['Negative','我不是老师。'],['Question','你是老师吗？']],
      examples:[
        { zh:'王朋是学生。', zt:'王朋是學生。', py:'Wáng Péng shì xuésheng.', en:'Wang Peng is a student.' },
        { zh:'李友不是中国人。', zt:'李友不是中國人。', py:'Lǐ Yǒu bú shì Zhōngguórén.', en:'Li You is not Chinese.' }
      ],
      exercises:[
        { t:'fill', zh:'我___学生，不___老师。', zt:'我___學生，不___老師。', opts:['是','叫','姓','也'], ans:'是', py:'Wǒ shì xuésheng, bú shì lǎoshī.', en:'I am a student, not a teacher.', why:'是 links subject and noun in both halves.' },
        { t:'wo', words:['李友','是','美国人','。'], en:'Li You is American.', py:'Lǐ Yǒu shì Měiguórén.' },
        { t:'wo', words:['王','先生','不','是','老师','。'], extra:['也'], en:'Mr. Wang is not a teacher.', py:'Wáng xiānsheng bú shì lǎoshī.' },
        { t:'tr', zh:'李小姐是北京人。', py:'Lǐ xiǎojiě shì Běijīngrén.', opts:['Miss Li is from Beijing.','Miss Li is in Beijing.','Miss Li likes Beijing.','Miss Li is not from Beijing.'], ans:0 },
        { t:'speak', zh:'我是美国人。', zt:'我是美國人。', py:'Wǒ shì Měiguórén.', en:'I am American.' }
      ] },
    { id:'g3', title:'Questions with 吗', zh:'吗', zt:'嗎', py:'ma',
      summary:'Add 吗 to the end of a statement to make a yes/no question. Word order does not change. Answer by repeating the verb: 是 / 不是.',
      rules:[['Statement + 吗？','你是老师吗？'],['Answer with the verb','是。 / 不是。']],
      examples:[
        { zh:'你是老师吗？', zt:'你是老師嗎？', py:'Nǐ shì lǎoshī ma?', en:'Are you a teacher?' },
        { zh:'王朋是中国人吗？', zt:'王朋是中國人嗎？', py:'Wáng Péng shì Zhōngguórén ma?', en:'Is Wang Peng Chinese?' }
      ],
      exercises:[
        { t:'fill', zh:'你是学生___？', zt:'你是學生___？', opts:['吗','呢','不','也'], ans:'吗', py:'Nǐ shì xuésheng ma?', en:'Are you a student?', why:'吗 turns the statement into a yes/no question.' },
        { t:'mc', label:'Answer', zh:'你是中国人吗？', zt:'你是中國人嗎？', q:'Which is a natural answer for someone from New York?', opts:['不是，我是美国人。','是，我是美国人。','吗，我是美国人。','也，我是美国人。'], ans:0 },
        { t:'wo', words:['李友','是','中国人','吗','？'], en:'Is Li You Chinese?', py:'Lǐ Yǒu shì Zhōngguórén ma?' },
        { t:'mc', label:'Spot the error', zh:'吗你是老师？', zt:'嗎你是老師？', q:'What is wrong?', opts:['吗 goes at the end of the sentence','It needs 不','老师 should come first','Nothing — it is correct'], ans:0 },
        { t:'speak', zh:'你是老师吗？', zt:'你是老師嗎？', py:'Nǐ shì lǎoshī ma?', en:'Are you a teacher?' }
      ] },
    { id:'g4', title:'也 and 不', zh:'也 · 不', py:'yě · bù',
      summary:'也 ("also") and 不 ("not") are adverbs: they sit right before the verb, never at the end. Together the order is 也不 ("also not").',
      rules:[['Subject + 也 + verb','我也是学生。'],['Subject + 不 + verb','我不是老师。'],['也 before 不','他也不是老师。'],['不 changes to 2nd tone before 是 (bú shì)','不是']],
      examples:[
        { zh:'王朋是学生，李友也是学生。', zt:'王朋是學生，李友也是學生。', py:'Wáng Péng shì xuésheng, Lǐ Yǒu yě shì xuésheng.', en:'Wang Peng is a student; Li You is also a student.' },
        { zh:'我不是老师，他也不是老师。', zt:'我不是老師，他也不是老師。', py:'Wǒ bú shì lǎoshī, tā yě bú shì lǎoshī.', en:'I am not a teacher, and he is not either.' }
      ],
      exercises:[
        { t:'pos', words:['李友','是','学生','。'], wt:['李友','是','學生','。'], insert:'也', ans:1, en:'Li You is also a student.', py:'Lǐ Yǒu yě shì xuésheng.', why:'也 goes before the verb 是.' },
        { t:'wo', words:['我','也','不','是','中国人','。'], en:'I am not Chinese either.', py:'Wǒ yě bú shì Zhōngguórén.' },
        { t:'multi', zh:'我是学生，你___是学生吗？我___是学生。', zt:'我是學生，你___是學生嗎？我___是學生。', blanks:[['也','不','是'],['不','也','吗']], ans:['也','不'], py:'Wǒ shì xuésheng, nǐ yě shì xuésheng ma? — Wǒ bú shì xuésheng.', en:'I am a student; are you also a student? — I am not a student.', why:'也 = also; 不 = not.' },
        { t:'mc', label:'Spot the error', zh:'我是学生也。', zt:'我是學生也。', q:'What is wrong?', opts:['也 must come before the verb','It needs 吗','It needs 不','Nothing — it is correct'], ans:0 },
        { t:'speak', zh:'我也是学生。', zt:'我也是學生。', py:'Wǒ yě shì xuésheng.', en:'I am also a student.' }
      ] },
    { id:'g5', title:'The particle 呢', zh:'呢', py:'ne',
      summary:'Noun + 呢？ bounces a question back: "and you?" / "what about…?". The context supplies the question.',
      rules:[['Noun + 呢？','我姓王，你呢？']],
      examples:[
        { zh:'我是美国人，你呢？', zt:'我是美國人，你呢？', py:'Wǒ shì Měiguórén, nǐ ne?', en:'I am American. And you?' },
        { zh:'王朋是学生，李友呢？', zt:'王朋是學生，李友呢？', py:'Wáng Péng shì xuésheng, Lǐ Yǒu ne?', en:'Wang Peng is a student. What about Li You?' }
      ],
      exercises:[
        { t:'fill', zh:'我姓王，你___？', opts:['呢','吗','也','是'], ans:'呢', py:'Wǒ xìng Wáng, nǐ ne?', en:'My surname is Wang. And yours?', why:'呢 asks the same question back.' },
        { t:'mc', label:'呢 or 吗?', zh:'王朋是北京人，李友___？', q:'Which particle fits?', opts:['呢','吗'], ans:0, why:'A bare noun + 呢 = "what about Li You?"; 吗 needs a full statement.' },
        { t:'wo', words:['我','是','老师','，','你','呢','？'], en:'I am a teacher. And you?', py:'Wǒ shì lǎoshī, nǐ ne?' },
        { t:'speak', zh:'我是美国人，你呢？', zt:'我是美國人，你呢？', py:'Wǒ shì Měiguórén, nǐ ne?', en:'I am American. And you?' }
      ] }
  ],
  dialogues:[
    { id:'d1', title:'Dialogue: First meeting', note:'Two students meet on campus. (Original scene using Chapter 1 vocabulary.)', roles:['王朋','李友'],
      lines:[
        { who:'王朋', zh:'你好！', py:'Nǐ hǎo!', en:'Hello!' },
        { who:'李友', zh:'你好！请问，您贵姓？', zt:'你好！請問，您貴姓？', py:'Nǐ hǎo! Qǐng wèn, nín guì xìng?', en:'Hello! May I ask your surname?' },
        { who:'王朋', zh:'我姓王，叫王朋。你呢？', py:'Wǒ xìng Wáng, jiào Wáng Péng. Nǐ ne?', en:'My surname is Wang; I am Wang Peng. And you?' },
        { who:'李友', zh:'我姓李。我叫李友。', py:'Wǒ xìng Lǐ. Wǒ jiào Lǐ Yǒu.', en:'My surname is Li. I am Li You.' },
        { who:'王朋', zh:'李小姐，你是老师吗？', zt:'李小姐，你是老師嗎？', py:'Lǐ xiǎojiě, nǐ shì lǎoshī ma?', en:'Miss Li, are you a teacher?' },
        { who:'李友', zh:'不是，我是学生。王先生，你也是学生吗？', zt:'不是，我是學生。王先生，你也是學生嗎？', py:'Bú shì, wǒ shì xuésheng. Wáng xiānsheng, nǐ yě shì xuésheng ma?', en:'No, I am a student. Mr. Wang, are you a student too?' },
        { who:'王朋', zh:'我也是学生。你是中国人吗？', zt:'我也是學生。你是中國人嗎？', py:'Wǒ yě shì xuésheng. Nǐ shì Zhōngguórén ma?', en:'I am also a student. Are you Chinese?' },
        { who:'李友', zh:'不是，我是美国人，纽约人。你呢？', zt:'不是，我是美國人，紐約人。你呢？', py:'Bú shì, wǒ shì Měiguórén, Niǔyuērén. Nǐ ne?', en:'No, I am American, from New York. And you?' },
        { who:'王朋', zh:'我是中国人，北京人。', zt:'我是中國人，北京人。', py:'Wǒ shì Zhōngguórén, Běijīngrén.', en:'I am Chinese, from Beijing.' }
      ] },
    { id:'n1', title:'Narrative: Who they are', note:'A short summary.', roles:['叙述'],
      lines:[
        { who:'叙述', zh:'王朋是中国人，是北京人。', zt:'王朋是中國人，是北京人。', py:'Wáng Péng shì Zhōngguórén, shì Běijīngrén.', en:'Wang Peng is Chinese, from Beijing.' },
        { who:'叙述', zh:'李友是美国人，是纽约人。', zt:'李友是美國人，是紐約人。', py:'Lǐ Yǒu shì Měiguórén, shì Niǔyuērén.', en:'Li You is American, from New York.' },
        { who:'叙述', zh:'王朋是学生，李友也是学生。他们不是老师。', zt:'王朋是學生，李友也是學生。他們不是老師。', py:'Wáng Péng shì xuésheng, Lǐ Yǒu yě shì xuésheng. Tāmen bú shì lǎoshī.', en:'Wang Peng is a student and so is Li You. They are not teachers.' }
      ] }
  ],
  comprehension:[
    { q:"What is Wang Peng's surname?", opts:['王','李','朋','友'], ans:0, why:'我姓王。' },
    { q:'Is Li You a teacher?', opts:['No, a student','Yes','She does not say','She is both'], ans:0, why:'不是，我是学生。' },
    { q:'Where is Li You from?', opts:['New York','Beijing','China','She does not say'], ans:0, why:'我是美国人，纽约人。' },
    { q:'Where is Wang Peng from?', opts:['Beijing','New York','Shanghai','He does not say'], ans:0, why:'我是中国人，北京人。' }
  ],
  free:[
    { en:'May I ask your surname?', answers:['请问，您贵姓？','您贵姓？'], hint:'The polite set phrase with 贵.' },
    { en:'I am not a teacher; I am a student.', answers:['我不是老师，我是学生。','我不是老师，是学生。'], hint:'不是 … 是 …' },
    { en:'I am American. And you?', answers:['我是美国人，你呢？'], hint:'Noun + 呢' },
    { zh:'王先生也是北京人吗？', zt:'王先生也是北京人嗎？', py:'Wáng xiānsheng yě shì Běijīngrén ma?', answers:['Is Mr. Wang also from Beijing?','Is Mr. Wang from Beijing too?'], hint:'也 = also' }
  ],
  writing:['你','好','请','问','贵','姓','我','呢','叫','什','么','名','字','是','老','师','吗','不','学','生','也','人','中','国','美','北','京']
});
