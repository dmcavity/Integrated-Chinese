/* Integrated Chinese L1P1 — Chapter 2: Family (家庭)
   Vocabulary and grammar follow the textbook. Dialogues are original scenes
   using Chapter 1–2 vocabulary; the book's own text is not reproduced. */
window.IC_CHAPTERS = window.IC_CHAPTERS || [];
window.IC_CHAPTERS.push({
  id:'ch2', number:2, title:'Family', zh:'家庭', py:'Jiātíng',
  blurb:'Looking at a family photo: who is who, how many siblings, and what everyone does for a living.',
  vocab:[
    { s:'那', t:'那', py:'nà', en:'that' },
    { s:'的', t:'的', py:'de', en:'possessive particle' },
    { s:'照片', t:'照片', py:'zhàopiàn', en:'picture, photo' },
    { s:'这', t:'這', py:'zhè', en:'this' },
    { s:'爸爸', t:'爸爸', py:'bàba', en:'father, dad' },
    { s:'妈妈', t:'媽媽', py:'māma', en:'mother, mom' },
    { s:'个', t:'個', py:'ge', en:'general measure word', mw:true },
    { s:'女', t:'女', py:'nǚ', en:'female' },
    { s:'孩子', t:'孩子', py:'háizi', en:'child' },
    { s:'谁', t:'誰', py:'shéi', en:'who' },
    { s:'她', t:'她', py:'tā', en:'she, her' },
    { s:'姐姐', t:'姐姐', py:'jiějie', en:'older sister' },
    { s:'男', t:'男', py:'nán', en:'male' },
    { s:'弟弟', t:'弟弟', py:'dìdi', en:'younger brother' },
    { s:'他', t:'他', py:'tā', en:'he, him' },
    { s:'大哥', t:'大哥', py:'dàgē', en:'eldest brother' },
    { s:'儿子', t:'兒子', py:'érzi', en:'son' },
    { s:'有', t:'有', py:'yǒu', en:'to have, there is' },
    { s:'女儿', t:'女兒', py:'nǚ\'ér', en:'daughter' },
    { s:'没', t:'沒', py:'méi', en:'not (negates 有)' },
    { s:'高文中', t:'高文中', py:'Gāo Wénzhōng', en:'(a personal name)', name:true },
    { s:'家', t:'家', py:'jiā', en:'family, home' },
    { s:'几', t:'幾', py:'jǐ', en:'how many (small number)' },
    { s:'哥哥', t:'哥哥', py:'gēge', en:'older brother' },
    { s:'两', t:'兩', py:'liǎng', en:'two (before a measure word)' },
    { s:'妹妹', t:'妹妹', py:'mèimei', en:'younger sister' },
    { s:'和', t:'和', py:'hé', en:'and' },
    { s:'大姐', t:'大姐', py:'dàjiě', en:'eldest sister' },
    { s:'二姐', t:'二姐', py:'èrjiě', en:'second oldest sister' },
    { s:'做', t:'做', py:'zuò', en:'to do' },
    { s:'工作', t:'工作', py:'gōngzuò', en:'job; to work' },
    { s:'律师', t:'律師', py:'lǜshī', en:'lawyer' },
    { s:'英文', t:'英文', py:'Yīngwén', en:'English language' },
    { s:'都', t:'都', py:'dōu', en:'both, all' },
    { s:'医生', t:'醫生', py:'yīshēng', en:'doctor' },
    { s:'白英爱', t:'白英愛', py:'Bái Yīng\'ài', en:'(a personal name)', name:true }
  ],
  measureWords:[
    { noun:'姐姐', mw:'个', py:'yí ge jiějie', en:'one older sister' },
    { noun:'孩子', mw:'个', py:'yí ge háizi', en:'one child' },
    { noun:'照片', mw:'张', nt:'照片', py:'yì zhāng zhàopiàn', en:'one photo' }
  ],
  measureDistractors:['个','张','本','位'],
  grammar:[
    { id:'g1', title:'Possessive 的', zh:'的', py:'de',
      summary:'的 links a possessor to what is possessed: 王朋的书. With close family and personal pronouns it is usually dropped: 我妈妈, 你家.',
      rules:[['Owner + 的 + noun','李友的照片'],['Dropped for family/pronouns','我爸爸 · 你家'],['这/那 + 是 + …','这是我的照片。']],
      examples:[
        { zh:'这是王朋的照片。', zt:'這是王朋的照片。', py:'Zhè shì Wáng Péng de zhàopiàn.', en:"This is Wang Peng's photo." },
        { zh:'那是我妈妈。', zt:'那是我媽媽。', py:'Nà shì wǒ māma.', en:'That is my mom.' },
        { zh:'他是李友的弟弟。', py:'Tā shì Lǐ Yǒu de dìdi.', en:"He is Li You's younger brother." }
      ],
      exercises:[
        { t:'fill', zh:'这是高文中___照片。', zt:'這是高文中___照片。', opts:['的','是','有','个'], ans:'的', py:'Zhè shì Gāo Wénzhōng de zhàopiàn.', en:"This is Gao Wenzhong's photo.", why:'的 marks possession.' },
        { t:'mc', label:'Natural or not?', zh:'那是我的妈妈。', zt:'那是我的媽媽。', q:'How does this sound?', opts:['Grammatical, but 我妈妈 (without 的) is more natural for family','Wrong — 的 is required','Wrong — 那 should be 这','It means "that is mom\'s"'], ans:0 },
        { t:'wo', words:['这','是','我','爸爸','和','妈妈','。'], en:'These are my dad and mom.', py:'Zhè shì wǒ bàba hé māma.' },
        { t:'wo', words:['那','个','人','是','谁','？'], en:'Who is that person?', py:'Nà ge rén shì shéi?' },
        { t:'tr', zh:'她是李友的姐姐。', py:'Tā shì Lǐ Yǒu de jiějie.', opts:["She is Li You's older sister.","She is Li You's younger sister.","Li You is her older sister.","She and Li You are sisters."], ans:0 },
        { t:'speak', zh:'这是我的照片。', zt:'這是我的照片。', py:'Zhè shì wǒ de zhàopiàn.', en:'This is my photo.' }
      ] },
    { id:'g2', title:'Measure words and 两', zh:'个 · 两', zt:'個 · 兩', py:'ge · liǎng',
      summary:'A number or 这/那 must be joined to a noun by a measure word. 个 is the all-purpose one. The number two is 两 before a measure word, not 二.',
      rules:[['Number + MW + noun','三个孩子'],['这/那 + MW + noun','这个人'],['两 before a measure word','两个姐姐 (not 二个)'],['几 asks the number','几个哥哥？']],
      examples:[
        { zh:'我有两个姐姐。', zt:'我有兩個姐姐。', py:'Wǒ yǒu liǎng ge jiějie.', en:'I have two older sisters.' },
        { zh:'这个人是我大哥。', zt:'這個人是我大哥。', py:'Zhè ge rén shì wǒ dàgē.', en:'This person is my eldest brother.' }
      ],
      exercises:[
        { t:'fill', zh:'我有___个弟弟。', zt:'我有___個弟弟。', opts:['两','二','几个','都'], ans:'两', py:'Wǒ yǒu liǎng ge dìdi.', en:'I have two younger brothers.', why:'两 is used before a measure word.' },
        { t:'fill', zh:'那___人是谁？', zt:'那___人是誰？', opts:['个','的','两','是'], ans:'个', py:'Nà ge rén shì shéi?', en:'Who is that person?', why:'那 needs a measure word before the noun.' },
        { t:'mc', label:'Spot the error', zh:'我有二个哥哥。', zt:'我有二個哥哥。', q:'What is wrong?', opts:['Use 两 before a measure word','个 should be 张','有 should be 是','Nothing — it is correct'], ans:0 },
        { t:'pos', words:['我','有','三','妹妹','。'], insert:'个', ans:3, en:'I have three younger sisters.', py:'Wǒ yǒu sān ge mèimei.', why:'The measure word sits between number and noun.' },
        { t:'wo', words:['你','有','几','个','孩子','？'], en:'How many children do you have?', py:'Nǐ yǒu jǐ ge háizi?' },
        { t:'speak', zh:'我有两个姐姐。', zt:'我有兩個姐姐。', py:'Wǒ yǒu liǎng ge jiějie.', en:'I have two older sisters.' }
      ] },
    { id:'g3', title:'有 and 没有', zh:'有 · 没有', zt:'有 · 沒有', py:'yǒu · méiyǒu',
      summary:'有 means "to have" (or "there is"). It is the one verb negated with 没, never 不.',
      rules:[['Subject + 有 + noun','我有一个哥哥。'],['Negative: 没有','我没有妹妹。'],['Question: 有…吗？ / 有没有？','你有弟弟吗？']],
      examples:[
        { zh:'高文中有一个姐姐。', zt:'高文中有一個姐姐。', py:'Gāo Wénzhōng yǒu yí ge jiějie.', en:'Gao Wenzhong has an older sister.' },
        { zh:'我没有哥哥。', zt:'我沒有哥哥。', py:'Wǒ méiyǒu gēge.', en:'I do not have an older brother.' }
      ],
      exercises:[
        { t:'fill', zh:'我___有弟弟，我有妹妹。', zt:'我___有弟弟，我有妹妹。', opts:['没','不','也','都'], ans:'没', py:'Wǒ méiyǒu dìdi, wǒ yǒu mèimei.', en:'I do not have a younger brother; I have a younger sister.', why:'有 is negated with 没.' },
        { t:'mc', label:'Spot the error', zh:'我不有姐姐。', q:'What is wrong?', opts:['有 is negated with 没, not 不','It needs 个','It needs 的','Nothing — it is correct'], ans:0 },
        { t:'multi', zh:'你___哥哥吗？我___哥哥，有姐姐。', zt:'你___哥哥嗎？我___哥哥，有姐姐。', blanks:[['有','是','没'],['没有','不是','不有']], ans:['有','没有'], py:'Nǐ yǒu gēge ma? — Wǒ méiyǒu gēge, yǒu jiějie.', en:'Do you have an older brother? — No, but I have an older sister.', why:'有 … / 没有 …' },
        { t:'wo', words:['王朋','没有','妹妹','。'], extra:['不'], en:'Wang Peng has no younger sister.', py:'Wáng Péng méiyǒu mèimei.' },
        { t:'speak', zh:'你有弟弟吗？', zt:'你有弟弟嗎？', py:'Nǐ yǒu dìdi ma?', en:'Do you have a younger brother?' }
      ] },
    { id:'g4', title:'谁 and 几 questions', zh:'谁 · 几', zt:'誰 · 幾', py:'shéi · jǐ',
      summary:'Question words stay where the answer would go; do not add 吗. 谁 = who; 几 = how many (expects a small number and needs a measure word).',
      rules:[['Answer slot = question word','这是谁？ → 这是我妈妈。'],['几 + MW + noun','你家有几个人？'],['No 吗 with question words','谁是老师？ (not 谁是老师吗)']],
      examples:[
        { zh:'这个女孩子是谁？', zt:'這個女孩子是誰？', py:'Zhè ge nǚ háizi shì shéi?', en:'Who is this girl?' },
        { zh:'你家有几个人？', zt:'你家有幾個人？', py:'Nǐ jiā yǒu jǐ ge rén?', en:'How many people are in your family?' }
      ],
      exercises:[
        { t:'fill', zh:'那个男孩子是___？', zt:'那個男孩子是___？', opts:['谁','什么','几','吗'], ans:'谁', py:'Nà ge nán háizi shì shéi?', en:'Who is that boy?', why:'谁 asks about a person.' },
        { t:'fill', zh:'你有___个姐姐？', zt:'你有___個姐姐？', opts:['几','谁','什么','两'], ans:'几', py:'Nǐ yǒu jǐ ge jiějie?', en:'How many older sisters do you have?', why:'几 + measure word asks a small number.' },
        { t:'mc', label:'Spot the error', zh:'他是谁吗？', zt:'他是誰嗎？', q:'What is wrong?', opts:['Drop 吗 — 谁 already makes it a question','谁 should be 什么','It needs 的','Nothing — it is correct'], ans:0 },
        { t:'wo', words:['你','家','有','几','个','人','？'], en:'How many people are in your family?', py:'Nǐ jiā yǒu jǐ ge rén?' },
        { t:'speak', zh:'这个人是谁？', zt:'這個人是誰？', py:'Zhè ge rén shì shéi?', en:'Who is this person?' }
      ] },
    { id:'g5', title:'都 and 做什么工作', zh:'都 · 做工作', py:'dōu · zuò gōngzuò',
      summary:'都 ("both / all") is an adverb before the verb and refers back to the subject. To ask a job: 做什么工作？ Answer: 是 + occupation.',
      rules:[['Plural subject + 都 + verb','他们都是学生。'],['都 after the subject, never before it','都他们 ✗'],['Ask a job','你爸爸做什么工作？'],['Answer','他是医生。']],
      examples:[
        { zh:'我爸爸妈妈都是老师。', zt:'我爸爸媽媽都是老師。', py:'Wǒ bàba māma dōu shì lǎoshī.', en:'My dad and mom are both teachers.' },
        { zh:'白英爱的妈妈做什么工作？', zt:'白英愛的媽媽做什麼工作？', py:'Bái Yīng\'ài de māma zuò shénme gōngzuò?', en:"What does Bai Ying'ai's mother do?" }
      ],
      exercises:[
        { t:'pos', words:['我','哥哥','和','姐姐','是','律师','。'], wt:['我','哥哥','和','姐姐','是','律師','。'], insert:'都', ans:4, en:'My older brother and sister are both lawyers.', py:'Wǒ gēge hé jiějie dōu shì lǜshī.', why:'都 goes right before the verb.' },
        { t:'fill', zh:'你妈妈___什么工作？', zt:'你媽媽___什麼工作？', opts:['做','是','有','叫'], ans:'做', py:'Nǐ māma zuò shénme gōngzuò?', en:'What does your mom do?', why:'做工作 = do (a) job.' },
        { t:'mc', label:'Spot the error', zh:'都他们是医生。', zt:'都他們是醫生。', q:'What is wrong?', opts:['都 must follow the subject: 他们都是','都 should be 也','It needs 有','Nothing — it is correct'], ans:0 },
        { t:'tr', zh:'我爸爸是医生，我妈妈也是医生，他们都是医生。', zt:'我爸爸是醫生，我媽媽也是醫生，他們都是醫生。', py:'Wǒ bàba shì yīshēng, wǒ māma yě shì yīshēng, tāmen dōu shì yīshēng.', opts:['My dad is a doctor, my mom is a doctor too; they are both doctors.','My dad is a doctor but my mom is a lawyer.','My parents are both teachers.','My dad and mom both work at a hospital.'], ans:0 },
        { t:'speak', zh:'他们都是老师。', zt:'他們都是老師。', py:'Tāmen dōu shì lǎoshī.', en:'They are all teachers.' }
      ] }
  ],
  dialogues:[
    { id:'d1', title:'Dialogue: The photo', note:'Wang Peng looks at a photo in Gao Wenzhong\'s room. (Original scene.)', roles:['王朋','高文中'],
      lines:[
        { who:'王朋', zh:'文中，那是你的照片吗？', zt:'文中，那是你的照片嗎？', py:'Wénzhōng, nà shì nǐ de zhàopiàn ma?', en:'Wenzhong, is that your photo?' },
        { who:'高文中', zh:'是，这是我家的照片。', zt:'是，這是我家的照片。', py:'Shì, zhè shì wǒ jiā de zhàopiàn.', en:"Yes, it's a photo of my family." },
        { who:'王朋', zh:'这个人是谁？', zt:'這個人是誰？', py:'Zhè ge rén shì shéi?', en:'Who is this?' },
        { who:'高文中', zh:'这是我爸爸，那是我妈妈。', zt:'這是我爸爸，那是我媽媽。', py:'Zhè shì wǒ bàba, nà shì wǒ māma.', en:"That's my dad, and that's my mom." },
        { who:'王朋', zh:'这个女孩子是你妹妹吗？', zt:'這個女孩子是你妹妹嗎？', py:'Zhè ge nǚ háizi shì nǐ mèimei ma?', en:'Is this girl your younger sister?' },
        { who:'高文中', zh:'不是，她是我姐姐。我没有妹妹。', zt:'不是，她是我姐姐。我沒有妹妹。', py:'Bú shì, tā shì wǒ jiějie. Wǒ méiyǒu mèimei.', en:"No, she's my older sister. I don't have a younger sister." },
        { who:'王朋', zh:'那个男孩子呢？', zt:'那個男孩子呢？', py:'Nà ge nán háizi ne?', en:'And that boy?' },
        { who:'高文中', zh:'那是我大哥的儿子。', zt:'那是我大哥的兒子。', py:'Nà shì wǒ dàgē de érzi.', en:"That's my eldest brother's son." },
        { who:'王朋', zh:'你家有几个人？', zt:'你家有幾個人？', py:'Nǐ jiā yǒu jǐ ge rén?', en:'How many people are in your family?' },
        { who:'高文中', zh:'我家有六个人：爸爸、妈妈、大哥、姐姐、我，和大哥的儿子。', zt:'我家有六個人：爸爸、媽媽、大哥、姐姐、我，和大哥的兒子。', py:'Wǒ jiā yǒu liù ge rén: bàba, māma, dàgē, jiějie, wǒ, hé dàgē de érzi.', en:'Six: dad, mom, my eldest brother, my sister, me, and my brother\'s son.' }
      ] },
    { id:'d2', title:'Dialogue: What do they do?', note:'Li You asks Bai Ying\'ai about her family. (Original scene.)', roles:['李友','白英爱'],
      lines:[
        { who:'李友', zh:'英爱，你有几个哥哥？', zt:'英愛，你有幾個哥哥？', py:'Yīng\'ài, nǐ yǒu jǐ ge gēge?', en:"Ying'ai, how many older brothers do you have?" },
        { who:'白英爱', zh:'我没有哥哥，我有两个姐姐和一个弟弟。', zt:'我沒有哥哥，我有兩個姐姐和一個弟弟。', py:'Wǒ méiyǒu gēge, wǒ yǒu liǎng ge jiějie hé yí ge dìdi.', en:"I don't have an older brother; I have two older sisters and a younger brother." },
        { who:'李友', zh:'你爸爸妈妈做什么工作？', zt:'你爸爸媽媽做什麼工作？', py:'Nǐ bàba māma zuò shénme gōngzuò?', en:'What do your parents do?' },
        { who:'白英爱', zh:'我爸爸是律师，我妈妈是英文老师。', zt:'我爸爸是律師，我媽媽是英文老師。', py:'Wǒ bàba shì lǜshī, wǒ māma shì Yīngwén lǎoshī.', en:'My dad is a lawyer and my mom is an English teacher.' },
        { who:'李友', zh:'你大姐和二姐呢？', py:'Nǐ dàjiě hé èrjiě ne?', en:'And your two sisters?' },
        { who:'白英爱', zh:'她们都是医生。', zt:'她們都是醫生。', py:'Tāmen dōu shì yīshēng.', en:'They are both doctors.' },
        { who:'李友', zh:'你弟弟呢？他做什么工作？', zt:'你弟弟呢？他做什麼工作？', py:'Nǐ dìdi ne? Tā zuò shénme gōngzuò?', en:'And your younger brother? What does he do?' },
        { who:'白英爱', zh:'他是学生，他不工作。', zt:'他是學生，他不工作。', py:'Tā shì xuésheng, tā bù gōngzuò.', en:"He's a student; he doesn't work." }
      ] }
  ],
  comprehension:[
    { q:'Who is the girl in the photo?', opts:["Gao Wenzhong's older sister",'His younger sister','His daughter',"His brother's daughter"], ans:0, why:'她是我姐姐。' },
    { q:'Whose son is the boy?', opts:["Gao Wenzhong's eldest brother's",'Gao Wenzhong\'s','His sister\'s','His mother\'s'], ans:0, why:'那是我大哥的儿子。' },
    { q:"How many people are in Gao Wenzhong's family?", opts:['Six','Five','Four','Seven'], ans:0, why:'我家有六个人。' },
    { q:"What does Bai Ying'ai's father do?", opts:['Lawyer','Doctor','Teacher','Student'], ans:0, why:'我爸爸是律师。' },
    { q:"What do Bai Ying'ai's sisters do?", opts:['Both are doctors','One is a lawyer','Both are teachers','Both are students'], ans:0, why:'她们都是医生。' }
  ],
  free:[
    { en:'This is my older sister; that is my younger brother.', answers:['这是我姐姐，那是我弟弟。','这是我的姐姐，那是我的弟弟。'], hint:'这/那 + 是' },
    { en:'I have two older brothers. I do not have a younger sister.', answers:['我有两个哥哥，没有妹妹。','我有两个哥哥。我没有妹妹。'], hint:'两个 / 没有' },
    { en:'What does your mom do? She is a doctor.', answers:['你妈妈做什么工作？她是医生。'], hint:'做什么工作' },
    { zh:'我爸爸和妈妈都是老师。', zt:'我爸爸和媽媽都是老師。', py:'Wǒ bàba hé māma dōu shì lǎoshī.', answers:['My dad and mom are both teachers.','Both my parents are teachers.'], hint:'都 = both' }
  ],
  writing:['那','的','照','片','这','爸','妈','个','女','孩','子','谁','她','姐','男','弟','他','大','哥','儿','有','没','家','几','两','妹','和','做','工','作','律','英','文','都','医']
});
