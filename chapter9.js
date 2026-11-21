/* Integrated Chinese L1P1 — Chapter 9: Shopping (买东西)
   Vocabulary and grammar follow the textbook (3rd edition lesson outline).
   Dialogues are original scenes using Chapter 1–9 vocabulary; the book's own
   text is not reproduced. Check the vocab list against your edition. */
window.IC_CHAPTERS = window.IC_CHAPTERS || [];
window.IC_CHAPTERS.push({
  id:'ch9', number:9, title:'Shopping', zh:'买东西', zt:'買東西', py:'Mǎi dōngxi',
  blurb:'Buying a shirt and trousers: colours, sizes, prices and paying by card, then exchanging a pair of shoes that does not fit.',
  vocab:[
    { s:'售货员', t:'售貨員', py:'shòuhuòyuán', en:'shop assistant, salesclerk' },
    { s:'买', t:'買', py:'mǎi', en:'to buy' },
    { s:'东西', t:'東西', py:'dōngxi', en:'things, objects' },
    { s:'衣服', t:'衣服', py:'yīfu', en:'clothes' },
    { s:'件', t:'件', py:'jiàn', en:'measure word for shirts, items of clothing', mw:true },
    { s:'衬衫', t:'襯衫', py:'chènshān', en:'shirt' },
    { s:'颜色', t:'顏色', py:'yánsè', en:'color' },
    { s:'黄', t:'黃', py:'huáng', en:'yellow' },
    { s:'红', t:'紅', py:'hóng', en:'red' },
    { s:'黑', t:'黑', py:'hēi', en:'black' },
    { s:'咖啡色', t:'咖啡色', py:'kāfēisè', en:'brown, coffee color' },
    { s:'穿', t:'穿', py:'chuān', en:'to wear, to put on' },
    { s:'号', t:'號', py:'hào', en:'size' },
    { s:'中', t:'中', py:'zhōng', en:'medium, middle' },
    { s:'便宜', t:'便宜', py:'piányi', en:'cheap, inexpensive' },
    { s:'如果…的话', t:'如果…的話', py:'rúguǒ … dehuà', en:'if' },
    { s:'条', t:'條', py:'tiáo', en:'measure word for trousers, long objects', mw:true },
    { s:'裤子', t:'褲子', py:'kùzi', en:'trousers, pants' },
    { s:'多少', t:'多少', py:'duōshao', en:'how much, how many' },
    { s:'钱', t:'錢', py:'qián', en:'money' },
    { s:'块', t:'塊', py:'kuài', en:'dollar (colloquial unit of money)' },
    { s:'毛', t:'毛', py:'máo', en:'dime, ten cents' },
    { s:'分', t:'分', py:'fēn', en:'cent' },
    { s:'百', t:'百', py:'bǎi', en:'hundred' },
    { s:'一共', t:'一共', py:'yígòng', en:'altogether' },
    { s:'付钱', t:'付錢', py:'fù qián', en:'to pay' },
    { s:'信用卡', t:'信用卡', py:'xìnyòngkǎ', en:'credit card' },
    { s:'找钱', t:'找錢', py:'zhǎo qián', en:'to give change' },
    { s:'双', t:'雙', py:'shuāng', en:'pair (measure word)', mw:true },
    { s:'鞋', t:'鞋', py:'xié', en:'shoes' },
    { s:'换', t:'換', py:'huàn', en:'to exchange, to change' },
    { s:'一样', t:'一樣', py:'yíyàng', en:'same, alike' },
    { s:'虽然', t:'雖然', py:'suīrán', en:'although' },
    { s:'但是', t:'但是', py:'dànshì', en:'but' },
    { s:'合适', t:'合適', py:'héshì', en:'suitable, a good fit' },
    { s:'极了', t:'極了', py:'jíle', en:'extremely' },
    { s:'试', t:'試', py:'shì', en:'to try' },
    { s:'大小', t:'大小', py:'dàxiǎo', en:'size' }
  ],
  measureWords:[
    { noun:'衬衫', nt:'襯衫', mw:'件', py:'yí jiàn chènshān', en:'one shirt' },
    { noun:'衣服', mw:'件', py:'yí jiàn yīfu', en:'one item of clothing' },
    { noun:'裤子', nt:'褲子', mw:'条', py:'yì tiáo kùzi', en:'one pair of trousers' },
    { noun:'鞋', mw:'双', py:'yì shuāng xié', en:'one pair of shoes' },
    { noun:'信用卡', mw:'张', py:'yì zhāng xìnyòngkǎ', en:'one credit card' }
  ],
  measureDistractors:['件','条','双','张','个','本'],
  grammar:[
    { id:'g1', title:'Adjective + 的 as a noun', zh:'的', py:'de',
      summary:'When the noun is clear from context, drop it and keep 的: 黄的 "the yellow one", 大的 "the big one", 便宜的 "the cheap one". It works with colours, sizes, and other descriptions.',
      rules:[['Adjective/colour + 的 = "the … one"','我要黑的。'],['Questions with 还是','你要红的还是黄的？'],['Size: number + 号 + 的','我穿中号的。']],
      examples:[
        { zh:'这件衬衫有黄的，也有红的。', zt:'這件襯衫有黃的，也有紅的。', py:'Zhè jiàn chènshān yǒu huáng de, yě yǒu hóng de.', en:'This shirt comes in yellow and in red.' },
        { zh:'我不要贵的，我要便宜的。', zt:'我不要貴的，我要便宜的。', py:'Wǒ bú yào guì de, wǒ yào piányi de.', en:"I don't want the expensive one; I want the cheap one." },
        { zh:'你穿中号的还是大号的？', zt:'你穿中號的還是大號的？', py:'Nǐ chuān zhōng hào de háishi dà hào de?', en:'Do you wear a medium or a large?' }
      ],
      exercises:[
        { t:'fill', zh:'我不喜欢黄的，我喜欢___。', zt:'我不喜歡黃的，我喜歡___。', opts:['红的','红','很红','红色衬衫的'], ans:'红的', py:'Wǒ bù xǐhuan huáng de, wǒ xǐhuan hóng de.', en:"I don't like the yellow one; I like the red one.", why:'Colour + 的 stands in for the noun.' },
        { t:'mc', label:'Meaning', zh:'我要大的。', q:'What does the speaker want?', opts:['the big one','a big amount','to be big','an adult'], ans:0 },
        { t:'multi', zh:'你要黄的___红的？我要___的。', zt:'你要黃的___紅的？我要___的。', blanks:[['还是','或者','和'],['黑','很','是']], ans:['还是','黑'], py:'Nǐ yào huáng de háishi hóng de? — Wǒ yào hēi de.', en:'Do you want the yellow one or the red one? — I want the black one.', why:'还是 offers the choice; colour + 的 = "the … one".' },
        { t:'wo', words:['我','想','买','黑','的','。'], en:'I want to buy the black one.', py:'Wǒ xiǎng mǎi hēi de.' },
        { t:'wo', words:['你','穿','中号','的','还是','大号','的','？'], en:'Do you wear a medium or a large?', py:'Nǐ chuān zhōng hào de háishi dà hào de?' },
        { t:'speak', zh:'我不要贵的，我要便宜的。', zt:'我不要貴的，我要便宜的。', py:'Wǒ bú yào guì de, wǒ yào piányi de.', en:"I don't want the expensive one; I want the cheap one." }
      ] },
    { id:'g2', title:'Prices: 多少钱, 块 and 毛', zh:'多少钱', zt:'多少錢', py:'duōshao qián',
      summary:'Ask a price with 多少钱. In speech, dollars are 块, dimes 毛, cents 分 (written: 元, 角, 分). The last unit is often dropped: 两块五 = $2.50. Use 两 before 块/百. 一共 = altogether.',
      rules:[['Ask','这件衬衫多少钱？'],['块 · 毛 · 分','三块四毛五 = $3.45'],['Drop the last unit','二十一块五 = $21.50'],['两 before a unit','两块 · 两百']],
      examples:[
        { zh:'这条裤子多少钱？', zt:'這條褲子多少錢？', py:'Zhè tiáo kùzi duōshao qián?', en:'How much are these trousers?' },
        { zh:'四十五块。', zt:'四十五塊。', py:'Sìshíwǔ kuài.', en:'Forty-five dollars.' },
        { zh:'一共一百二十块五。', zt:'一共一百二十塊五。', py:'Yígòng yìbǎi èrshí kuài wǔ.', en:'That comes to $120.50 altogether.' }
      ],
      exercises:[
        { t:'fill', zh:'这双鞋___钱？', zt:'這雙鞋___錢？', opts:['多少','几','什么','怎么'], ans:'多少', py:'Zhè shuāng xié duōshao qián?', en:'How much are these shoes?', why:'多少钱 asks a price.' },
        { t:'mc', label:'How much?', zh:'三十五块五', zt:'三十五塊五', q:'What is the price?', opts:['$35.50','$35.05','$3.55','$355'], ans:0, why:'The 五 after 块 means five 毛 = 50 cents.' },
        { t:'mc', label:'How much?', zh:'两块三毛八', zt:'兩塊三毛八', q:'What is the price?', opts:['$2.38','$23.80','$2.83','$3.28'], ans:0 },
        { t:'mc', label:'How much?', zh:'一百二十块', zt:'一百二十塊', q:'What is the price?', opts:['$120','$12','$102','$1,200'], ans:0 },
        { t:'multi', zh:'一共___钱？一共四十___。', zt:'一共___錢？一共四十___。', blanks:[['多少','几个','什么'],['块','个','件']], ans:['多少','块'], py:'Yígòng duōshao qián? — Yígòng sìshí kuài.', en:'How much altogether? — Forty dollars.', why:'多少钱 asks; 块 is the spoken dollar.' },
        { t:'speak', zh:'这件衬衫多少钱？', zt:'這件襯衫多少錢？', py:'Zhè jiàn chènshān duōshao qián?', en:'How much is this shirt?' }
      ] },
    { id:'g3', title:'如果…的话', zh:'如果…的话', zt:'如果…的話', py:'rúguǒ … dehuà',
      summary:'如果 X 的话 = "if X". Either 如果 or 的话 can be dropped. The result clause often has 就 before its verb.',
      rules:[['如果 + condition + 的话，(就) + result','如果你喜欢的话，就买吧。'],['Drop either half','如果太贵，我就不买。 · 太贵的话，我就不买。']],
      examples:[
        { zh:'如果你喜欢的话，就买吧。', zt:'如果你喜歡的話，就買吧。', py:'Rúguǒ nǐ xǐhuan dehuà, jiù mǎi ba.', en:'If you like it, buy it.' },
        { zh:'如果这件不合适，你可以换。', zt:'如果這件不合適，你可以換。', py:'Rúguǒ zhè jiàn bù héshì, nǐ kěyǐ huàn.', en:"If this one doesn't fit, you can exchange it." }
      ],
      exercises:[
        { t:'fill', zh:'___你穿中号的话，这件很合适。', zt:'___你穿中號的話，這件很合適。', opts:['如果','虽然','因为','除了'], ans:'如果', py:'Rúguǒ nǐ chuān zhōng hào dehuà, zhè jiàn hěn héshì.', en:'If you wear a medium, this one fits well.', why:'如果 … 的话 frames a condition.' },
        { t:'pos', words:['如果','太贵','，','我们','就','不','买','。'], wt:['如果','太貴','，','我們','就','不','買','。'], insert:'的话', ans:2, en:"If it's too expensive, we won't buy it.", py:'Rúguǒ tài guì dehuà, wǒmen jiù bù mǎi.', why:'的话 closes the condition, before the comma.' },
        { t:'multi', zh:'如果你喜欢___，___买吧。', zt:'如果你喜歡___，___買吧。', blanks:[['的话','以后','以外'],['就','才','都']], ans:['的话','就'], py:'Rúguǒ nǐ xǐhuan dehuà, jiù mǎi ba.', en:'If you like it, then buy it.', why:'如果…的话 for the condition, 就 for the result.' },
        { t:'tr', zh:'如果这双鞋不合适，你可以换。', zt:'如果這雙鞋不合適，你可以換。', py:'Rúguǒ zhè shuāng xié bù héshì, nǐ kěyǐ huàn.', opts:["If these shoes don't fit, you can exchange them.","These shoes don't fit, so you should exchange them.","Although the shoes fit, you can exchange them.","If you exchange the shoes, they will fit."], ans:0 },
        { t:'speak', zh:'如果你喜欢的话，就买吧。', zt:'如果你喜歡的話，就買吧。', py:'Rúguǒ nǐ xǐhuan dehuà, jiù mǎi ba.', en:'If you like it, buy it.' }
      ] },
    { id:'g4', title:'虽然…但是 / 可是', zh:'虽然…但是', zt:'雖然…但是', py:'suīrán … dànshì',
      summary:'虽然 "although" sets up a concession; the second clause starts with 但是 or 可是 "but". Unlike English, Chinese keeps both words. 虽然 can go before or after the subject.',
      rules:[['虽然 A，但是/可是 B','虽然很便宜，但是不合适。'],['Keep both halves','English drops "but"; Chinese does not.'],['Not 所以 after 虽然','虽然…所以 ✗']],
      examples:[
        { zh:'这件衬衫虽然很便宜，但是颜色不好。', zt:'這件襯衫雖然很便宜，但是顏色不好。', py:'Zhè jiàn chènshān suīrán hěn piányi, dànshì yánsè bù hǎo.', en:"Although this shirt is cheap, the colour isn't nice." },
        { zh:'虽然这双鞋很贵，可是很合适。', zt:'雖然這雙鞋很貴，可是很合適。', py:'Suīrán zhè shuāng xié hěn guì, kěshì hěn héshì.', en:'Although these shoes are expensive, they fit well.' }
      ],
      exercises:[
        { t:'multi', zh:'___这双鞋很便宜，___不太合适。', zt:'___這雙鞋很便宜，___不太合適。', blanks:[['虽然','如果','因为'],['但是','所以','还是']], ans:['虽然','但是'], py:'Suīrán zhè shuāng xié hěn piányi, dànshì bú tài héshì.', en:"Although these shoes are cheap, they don't fit very well.", why:'虽然 … 但是 marks a concession.' },
        { t:'fill', zh:'这件衬衫虽然很便宜，___颜色不好。', zt:'這件襯衫雖然很便宜，___顏色不好。', opts:['可是','所以','因为','如果'], ans:'可是', py:'Zhè jiàn chènshān suīrán hěn piányi, kěshì yánsè bù hǎo.', en:"This shirt is cheap, but the colour isn't nice.", why:'可是 works like 但是 after 虽然.' },
        { t:'mc', label:'Spot the error', zh:'虽然很贵，所以我不买。', zt:'雖然很貴，所以我不買。', q:'What is wrong?', opts:['虽然 pairs with 但是/可是, not 所以','It needs 的话','贵 should be 便宜','Nothing — it is correct'], ans:0 },
        { t:'wo', words:['虽然','很','贵','，','但是','很','合适','。'], en:"Although it's expensive, it fits well.", py:'Suīrán hěn guì, dànshì hěn héshì.' },
        { t:'speak', zh:'虽然很便宜，但是不合适。', zt:'雖然很便宜，但是不合適。', py:'Suīrán hěn piányi, dànshì bù héshì.', en:"Although it's cheap, it doesn't fit." }
      ] },
    { id:'g5', title:'跟…一样 and 极了', zh:'跟…一样 · 极了', zt:'跟…一樣 · 極了', py:'gēn … yíyàng · jíle',
      summary:'A 跟 B 一样 = A is the same as B; add an adjective to say in what way: 跟那双一样大. Negate with 不一样. Adjective + 极了 = "extremely": 便宜极了.',
      rules:[['A 跟 B 一样','这件跟那件一样。'],['A 跟 B 一样 + adjective','这双跟那双一样贵。'],['Negative: 不一样','颜色不一样。'],['Adjective + 极了','合适极了！']],
      examples:[
        { zh:'这条裤子跟那条一样大。', zt:'這條褲子跟那條一樣大。', py:'Zhè tiáo kùzi gēn nà tiáo yíyàng dà.', en:'These trousers are the same size as those.' },
        { zh:'这两件衬衫的颜色不一样。', zt:'這兩件襯衫的顏色不一樣。', py:'Zhè liǎng jiàn chènshān de yánsè bù yíyàng.', en:'These two shirts are different colours.' },
        { zh:'这双鞋便宜极了！', zt:'這雙鞋便宜極了！', py:'Zhè shuāng xié piányi jíle!', en:'These shoes are incredibly cheap!' }
      ],
      exercises:[
        { t:'fill', zh:'这双鞋跟那双___大。', zt:'這雙鞋跟那雙___大。', opts:['一样','一起','一下','一边'], ans:'一样', py:'Zhè shuāng xié gēn nà shuāng yíyàng dà.', en:'These shoes are the same size as those.', why:'跟 … 一样 + adjective.' },
        { t:'pos', words:['这件','衬衫','漂亮','！'], wt:['這件','襯衫','漂亮','！'], insert:'极了', ans:3, en:'This shirt is extremely pretty!', py:'Zhè jiàn chènshān piàoliang jíle!', why:'极了 follows the adjective.' },
        { t:'multi', zh:'这双鞋___那双一样大，可是便宜___了！', zt:'這雙鞋___那雙一樣大，可是便宜___了！', blanks:[['跟','给','在'],['极','很','太']], ans:['跟','极'], py:'Zhè shuāng xié gēn nà shuāng yíyàng dà, kěshì piányi jí le!', en:'These shoes are the same size as those, but incredibly cheap!', why:'跟…一样 + adjective; adjective + 极了 (太 would have to go before the adjective).' },
        { t:'mc', label:'Meaning', zh:'这两条裤子不一样。', zt:'這兩條褲子不一樣。', q:'What does this mean?', opts:['These two pairs of trousers are different','These two pairs are the same','These trousers are not cheap','I do not want these trousers'], ans:0 },
        { t:'wo', words:['这双','跟','那双','一样','贵','吗','？'], en:'Are these as expensive as those?', py:'Zhè shuāng gēn nà shuāng yíyàng guì ma?' },
        { t:'speak', zh:'这双鞋合适极了！', zt:'這雙鞋合適極了！', py:'Zhè shuāng xié héshì jíle!', en:'These shoes fit perfectly!' }
      ] }
  ],
  dialogues:[
    { id:'d1', title:'Dialogue: Buying clothes', note:'Li You shops for a shirt and trousers. (Original scene.)', roles:['售货员','李友'],
      lines:[
        { who:'售货员', zh:'小姐，您要买什么衣服？', zt:'小姐，您要買什麼衣服？', py:'Xiǎojiě, nín yào mǎi shénme yīfu?', en:'Miss, what clothes are you looking for?' },
        { who:'李友', zh:'我想买一件衬衫。', zt:'我想買一件襯衫。', py:'Wǒ xiǎng mǎi yí jiàn chènshān.', en:"I'd like to buy a shirt." },
        { who:'售货员', zh:'您喜欢什么颜色的？黄的还是红的？', zt:'您喜歡什麼顏色的？黃的還是紅的？', py:'Nín xǐhuan shénme yánsè de? Huáng de háishi hóng de?', en:'What colour do you like? Yellow or red?' },
        { who:'李友', zh:'我喜欢黑的。', zt:'我喜歡黑的。', py:'Wǒ xǐhuan hēi de.', en:'I like black.' },
        { who:'售货员', zh:'您穿几号的？', zt:'您穿幾號的？', py:'Nín chuān jǐ hào de?', en:'What size do you wear?' },
        { who:'李友', zh:'中号的。', zt:'中號的。', py:'Zhōng hào de.', en:'Medium.' },
        { who:'售货员', zh:'这件怎么样？您可以试一下。', zt:'這件怎麼樣？您可以試一下。', py:'Zhè jiàn zěnmeyàng? Nín kěyǐ shì yí xià.', en:'How about this one? You can try it on.' },
        { who:'李友', zh:'大小很合适，颜色也不错。多少钱？', zt:'大小很合適，顏色也不錯。多少錢？', py:'Dàxiǎo hěn héshì, yánsè yě búcuò. Duōshao qián?', en:'The size is right and the colour is nice too. How much?' },
        { who:'售货员', zh:'二十一块五。', zt:'二十一塊五。', py:'Èrshíyī kuài wǔ.', en:'$21.50.' },
        { who:'李友', zh:'我还想买一条裤子。', zt:'我還想買一條褲子。', py:'Wǒ hái xiǎng mǎi yì tiáo kùzi.', en:"I'd also like to buy a pair of trousers." },
        { who:'售货员', zh:'这条咖啡色的虽然不便宜，但是很漂亮。', zt:'這條咖啡色的雖然不便宜，但是很漂亮。', py:'Zhè tiáo kāfēisè de suīrán bù piányi, dànshì hěn piàoliang.', en:"This brown pair isn't cheap, but it's very nice." },
        { who:'李友', zh:'多少钱？', zt:'多少錢？', py:'Duōshao qián?', en:'How much?' },
        { who:'售货员', zh:'四十块。一共六十一块五。', zt:'四十塊。一共六十一塊五。', py:'Sìshí kuài. Yígòng liùshíyī kuài wǔ.', en:'$40. That comes to $61.50 altogether.' },
        { who:'李友', zh:'我用信用卡付钱，可以吗？', zt:'我用信用卡付錢，可以嗎？', py:'Wǒ yòng xìnyòngkǎ fù qián, kěyǐ ma?', en:'Can I pay by credit card?' },
        { who:'售货员', zh:'可以。', py:'Kěyǐ.', en:'Yes, you can.' }
      ] },
    { id:'d2', title:'Dialogue: Exchanging shoes', note:'Wang Peng brings back a pair that does not fit. (Original scene.)', roles:['王朋','售货员'],
      lines:[
        { who:'王朋', zh:'对不起，这双鞋太大了，我想换一双。', zt:'對不起，這雙鞋太大了，我想換一雙。', py:'Duìbuqǐ, zhè shuāng xié tài dà le, wǒ xiǎng huàn yì shuāng.', en:"Excuse me, these shoes are too big. I'd like to exchange them." },
        { who:'售货员', zh:'您穿几号的？', zt:'您穿幾號的？', py:'Nín chuān jǐ hào de?', en:'What size do you wear?' },
        { who:'王朋', zh:'九号的。', zt:'九號的。', py:'Jiǔ hào de.', en:'Size nine.' },
        { who:'售货员', zh:'九号的有黑的，也有咖啡色的。', zt:'九號的有黑的，也有咖啡色的。', py:'Jiǔ hào de yǒu hēi de, yě yǒu kāfēisè de.', en:'Size nine comes in black and in brown.' },
        { who:'王朋', zh:'我要咖啡色的。这双跟那双一样贵吗？', zt:'我要咖啡色的。這雙跟那雙一樣貴嗎？', py:'Wǒ yào kāfēisè de. Zhè shuāng gēn nà shuāng yíyàng guì ma?', en:"I'll take brown. Are these the same price as those?" },
        { who:'售货员', zh:'一样。如果不合适的话，您可以再换。', zt:'一樣。如果不合適的話，您可以再換。', py:'Yíyàng. Rúguǒ bù héshì dehuà, nín kěyǐ zài huàn.', en:"Same. If they don't fit, you can exchange them again." },
        { who:'王朋', zh:'我试一下。……这双合适极了！谢谢！', zt:'我試一下。……這雙合適極了！謝謝！', py:'Wǒ shì yí xià. … Zhè shuāng héshì jíle! Xièxie!', en:'Let me try them. … These fit perfectly! Thank you!' }
      ] }
  ],
  comprehension:[
    { q:'What colour shirt does Li You want?', opts:['Black','Yellow','Red','Brown'], ans:0, why:'我喜欢黑的。' },
    { q:'What size does she wear?', opts:['Medium','Small','Large','Size nine'], ans:0, why:'中号的。' },
    { q:'How much is the shirt?', opts:['$21.50','$40','$61.50','$25.10'], ans:0, why:'二十一块五。' },
    { q:'How much does she spend altogether?', opts:['$61.50','$40','$21.50','$65'], ans:0, why:'一共六十一块五。' },
    { q:'How does she pay?', opts:['By credit card','In cash','She does not buy anything','By cheque'], ans:0, why:'我用信用卡付钱。' },
    { q:'Why does Wang Peng exchange his shoes?', opts:['They are too big','The colour is wrong','They are too expensive','They are broken'], ans:0, why:'这双鞋太大了。' },
    { q:'Which colour does he choose?', opts:['Brown','Black','Red','Yellow'], ans:0, why:'我要咖啡色的。' }
  ],
  free:[
    { en:'How much is this shirt? It is twenty-five dollars.', answers:['这件衬衫多少钱？二十五块。','这件衬衫多少钱？二十五块钱。'], hint:'件 for shirts; 块 for dollars' },
    { en:"I don't want the yellow one; I want the black one.", answers:['我不要黄的，我要黑的。'], hint:'colour + 的' },
    { en:"Although these shoes are cheap, they don't fit.", answers:['这双鞋虽然很便宜，但是不合适。','虽然这双鞋很便宜，但是不合适。','虽然这双鞋很便宜，可是不合适。'], hint:'虽然 … 但是 …' },
    { en:'If you like it, buy it.', answers:['如果你喜欢的话，就买吧。','如果你喜欢，就买吧。','你喜欢的话，就买吧。'], hint:'如果 … 的话，就 …' },
    { zh:'这条裤子跟那条一样大，可是颜色不一样。', zt:'這條褲子跟那條一樣大，可是顏色不一樣。', py:'Zhè tiáo kùzi gēn nà tiáo yíyàng dà, kěshì yánsè bù yíyàng.', answers:['These trousers are the same size as those, but the colour is different.','These pants are as big as those, but a different colour.'], hint:'跟 … 一样 + adjective' }
  ],
  writing:['售','货','员','买','东','西','衣','服','件','衬','衫','颜','色','黄','红','黑','穿','号','便','宜','如','果','话','条','裤','少','钱','块','毛','分','百','共','付','卡','双','鞋','换','样','虽','但','合','适','极','试']
});
