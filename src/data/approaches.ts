export type ApproachPage = {
  slug: string;
  number: string;
  keyword: string;
  title: string;
  catchphrase: string;
  lead: string[];
  emphasis: string;
  image: string;
  imageAlt: string;
  process: string[];
  examplesTitle: string;
  examples: string[];
  closing: string;
  next?: {
    slug: string;
    number: string;
    keyword: string;
    title: string;
  };
};

export const approaches: ApproachPage[] = [
  {
    slug: 'question',
    number: '01',
    keyword: 'QUESTION',
    title: '研究テーマ創出',
    catchphrase: '宇宙だからこそ挑戦する「問い」をつくる。',
    lead: [
      '新しい発見は、新しい問いから始まります。',
      '地上で取り組んでいる研究や技術課題を、そのまま宇宙へ持っていくだけではありません。',
      '「重力という前提がなくなったらどうなるか。」',
      '「宇宙環境だからこそ観察できる現象はないか。」',
      '研究者、企業、宇宙環境の知見を掛け合わせることで、これまでの研究開発の延長線上にはない、新しい研究テーマを生み出します。',
      'LVNS SPACE PROJECTは、宇宙で研究テーマを「探す」のではなく、',
    ],
    emphasis: '宇宙を使うからこそ生まれる問いを、研究者とともにつくります。',
    image: '/images/space-project/approaches/01-research-theme.png',
    imageAlt: '研究テーマ創出事業の全体像を示すスライド',
    process: ['技術・研究課題', '研究者との対話', '宇宙環境との掛け合わせ', '仮説', '研究テーマ', '地上予備実験', '宇宙実験'],
    examplesTitle: '問いをつくる起点',
    examples: ['技術・研究課題', '宇宙環境との掛け合わせ', '仮説から研究テーマへ'],
    closing: '研究テーマを探すのではない。宇宙だからこそ生まれる問いをつくる。',
    next: { slug: 'access', number: '02', keyword: 'ACCESS', title: '実験アクセス基盤構築' },
  },
  {
    slug: 'access',
    number: '02',
    keyword: 'ACCESS',
    title: '実験アクセス基盤構築',
    catchphrase: '研究に最適な「宇宙への行き方」をつくる。',
    lead: [
      '宇宙実験の方法は、一つではありません。',
      'ISSなどの軌道上実験をはじめ、短期間・長期間のさまざまな実験機会が、研究者に開かれています。',
      '重要なのは、「宇宙へ行くこと」ではなく、',
    ],
    emphasis: '研究目的に最適な宇宙環境を選ぶことです。',
    image: '/images/space-project/approaches/02-experiment-access.png',
    imageAlt: '宇宙実験アクセス基盤の全体像を示すスライド',
    process: ['研究テーマ', '研究要件整理', '宇宙実験機会調査', '比較・評価', 'アクセス方法選定', '実施計画', '宇宙実験'],
    examplesTitle: '比較する項目',
    examples: ['実施時期', '実験期間', '搭載サイズ', '回収条件', '運用条件', '打上げ頻度', 'リスク', '代替機会'],
    closing: '宇宙へ行く方法を選ぶのではない。研究に最適な宇宙環境を選ぶ。',
    next: { slug: 'experiment', number: '03', keyword: 'EXPERIMENT', title: '宇宙機器開発' },
  },
  {
    slug: 'experiment',
    number: '03',
    keyword: 'EXPERIMENT',
    title: '宇宙機器開発',
    catchphrase: '宇宙で「できる実験」を増やす。',
    lead: [
      '宇宙へ行く機会があっても、実験するための装置がなければ研究はできません。',
      '地上の研究装置は、そのまま宇宙で使えるとは限りません。',
      '微小重力、安全性、サイズ、電力、通信、振動、温度など、宇宙ならではの条件へ対応する必要があります。',
      'LVNS SPACE PROJECTは、地上で使われている研究機器や実験方法を宇宙対応化し、宇宙実証を重ねながら、さまざまな研究者が利用できる共通実験基盤へ育てます。',
    ],
    emphasis: '一つの宇宙実験を実現するだけではなく、次の研究者も使える研究インフラをつくります。',
    image: '/images/space-project/approaches/03-space-equipment.png',
    imageAlt: '宇宙実験基盤創出事業の全体像を示すスライド',
    process: ['地上研究機器', '宇宙対応設計', '研究機器開発', '地上試験', '宇宙実証', '共通実験ツール', '標準実験メニュー'],
    examplesTitle: '想定する研究例',
    examples: ['細胞培養', '結晶成長', '材料評価', '流体実験'],
    closing: '一つの実験をつくるのではない。宇宙でできる研究そのものを増やす。',
    next: { slug: 'value', number: '04', keyword: 'VALUE', title: '価値基準創出' },
  },
  {
    slug: 'value',
    number: '04',
    keyword: 'VALUE',
    title: '価値基準創出',
    catchphrase: '宇宙から、新しい「価値のものさし」をつくる。',
    lead: [
      '宇宙で得られた研究成果を、宇宙だけの成果で終わらせない。',
      'それもLVNS SPACE PROJECTの重要な役割です。',
      '宇宙という極限環境に置くことで、地球上で「当たり前」と考えていた製品や技術の価値を、別の視点から見直すことができます。',
      '食品、飲料、化粧品、住環境、ヘルスケア、素材。',
      '宇宙で本当に必要とされる性能を科学的に評価することで、安全性、快適性、機能性、信頼性など、新しい価値の基準を定義することができます。',
      'そして、その基準を地球の商品や産業へ還元します。',
    ],
    emphasis: '宇宙向けの商品をつくることが目的ではありません。宇宙を使って、地球の商品価値を問い直します。',
    image: '/images/space-project/approaches/04-value-standards.png',
    imageAlt: '価値基準創出事業の全体像を示すスライド',
    process: ['価値仮説', '宇宙環境での研究', 'データ取得', '評価方法', '基準・標準', '製品・サービス', '市場・社会'],
    examplesTitle: '価値の例',
    examples: ['おいしさ', '快適性', '安全性', '信頼性', '生理的効果', '心理的満足', '持続可能性'],
    closing: '宇宙で商品をつくるのではない。宇宙から、地球の価値を問い直す。',
  },
];

export const approachBySlug = Object.fromEntries(approaches.map((approach) => [approach.slug, approach]));
