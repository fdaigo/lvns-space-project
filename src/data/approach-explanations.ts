export type ApproachStage = {
  number: string;
  title: string;
  description: string;
  outputs: string[];
};

export type ApproachExplanation = {
  kicker: string;
  title: string;
  summary: string;
  inputLabel: string;
  inputItems: string[];
  stages: ApproachStage[];
  outputLabel: string;
  outputItems: string[];
  rolesTitle: string;
  roles: { name: string; role: string; detail: string }[];
};

export const approachExplanations: Record<string, ApproachExplanation> = {
  question: {
    kicker: 'MODEL EXPLAINED / 図解',
    title: '技術課題を、宇宙で挑戦する研究テーマへ',
    summary: '企業が抱える技術・研究課題を出発点に、研究者との対話と宇宙環境の知見を重ねます。問いをつくり、仮説を育て、地上で確かめてから宇宙実験へつなげる入口です。',
    inputLabel: '企業の技術・研究課題',
    inputItems: ['素材・化学', '食品・飲料', 'ヘルスケア', '住・環境'],
    stages: [
      { number: '01', title: '問いをひらく', description: '地上の課題を整理し、重力や対流などの前提を外して考えます。', outputs: ['課題の整理', '仮説の種'] },
      { number: '02', title: '研究テーマを設計する', description: '研究者と仮説を磨き、科学的に検証できる研究テーマへ具体化します。', outputs: ['検証可能なテーマ', '地上予備実験計画'] },
      { number: '03', title: '研究を実証へつなぐ', description: '地上で成立性を確かめ、宇宙で何を観察するか、次の実験計画へ落とし込みます。', outputs: ['研究結果・データ', '宇宙実験への接続'] },
    ],
    outputLabel: '宇宙で挑戦すべき研究テーマ',
    outputItems: ['研究計画', '研究者との実施体制', '宇宙実験につなぐ準備'],
    rolesTitle: '研究テーマを育てる役割',
    roles: [
      { name: 'リバネス', role: 'Research Producer', detail: '課題を研究プロジェクトとして成立させる' },
      { name: 'スペースノーム研究所', role: 'Science Lead', detail: '科学的に成立する仮説と実験へ導く' },
      { name: 'IDDK', role: 'Engineering Reviewer', detail: '宇宙実装の可能性と技術条件を確認する' },
    ],
  },
  access: {
    kicker: 'MODEL EXPLAINED / 図解',
    title: '研究要件から、最適な宇宙実験計画へ',
    summary: '研究目的や実験条件を整理し、複数の宇宙実験機会を同じ視点で比較します。宇宙へ行くこと自体ではなく、研究に最適な場所・時期・方法を選ぶための設計機能です。',
    inputLabel: '企業・研究者の研究テーマ',
    inputItems: ['研究目的', '必要な宇宙環境', '実験期間', '搭載・試料条件', '回収・操作の必要性'],
    stages: [
      { number: '01', title: '研究要件を整理する', description: '研究として何が必要かを定義し、宇宙環境に求める条件へ変換します。', outputs: ['研究要件', '実験条件の優先順位'] },
      { number: '02', title: '実験機会を調査する', description: '有人宇宙環境、無人回収型衛星、短期・長期の軌道上実験などを候補化します。', outputs: ['候補となる実験機会', '搭載・運用条件'] },
      { number: '03', title: '比較・評価する', description: '科学的適合性、技術的成立性、実施時期、回収や運用の条件を横並びで評価します。', outputs: ['比較結果', '推奨アクセス方法'] },
      { number: '04', title: '実施計画に落とし込む', description: '選定した機会で何を、いつ、どのように実施するかを具体的な計画にします。', outputs: ['宇宙実験アクセス計画', '次の実施アクション'] },
    ],
    outputLabel: '研究に最適な宇宙実験アクセス計画',
    outputItems: ['WHERE / どこで', 'WHEN / いつ', 'HOW / どうやって', 'WHAT / 何を実験するか'],
    rolesTitle: 'アクセスを設計する役割',
    roles: [
      { name: 'リバネス', role: 'Research Producer', detail: '研究目的から実施可能な計画を設計する' },
      { name: 'IDDK', role: 'Space Access Partner', detail: '宇宙実験機会を探索し、選択肢を比較可能にする' },
    ],
  },
  experiment: {
    kicker: 'MODEL EXPLAINED / 図解',
    title: '地上の研究機器を、宇宙で使える共通基盤へ',
    summary: '地上で使われている研究機器や方法を、そのまま持ち込むのではなく、宇宙環境に合わせて設計し直します。実証を一度で終わらせず、次の研究者も使えるツールとメニューへ育てます。',
    inputLabel: '地上の研究機器・技術',
    inputItems: ['顕微鏡', '培養装置', 'センサー', '分析装置', '材料評価装置'],
    stages: [
      { number: '01', title: '宇宙対応を設計する', description: '用途と利用ニーズを整理し、微小重力、安全性、サイズ、電力、通信、温度などの条件を定義します。', outputs: ['宇宙利用要件', '対応方針'] },
      { number: '02', title: '研究機器を開発する', description: '研究者が使える操作性を保ちながら、宇宙で実験できる試作機と運用方法をつくります。', outputs: ['宇宙対応試作機', '地上試験結果'] },
      { number: '03', title: '宇宙で実証する', description: '軌道上での動作、性能、信頼性、データ取得を確認し、実験機器としての成立性を評価します。', outputs: ['宇宙実証データ', '改良ポイント'] },
      { number: '04', title: '共通ツールへ育てる', description: '利用条件や実験手順を標準化し、複数の研究者が利用できる共通実験基盤へ展開します。', outputs: ['共通実験ツール', '標準実験メニュー'] },
    ],
    outputLabel: '宇宙で使える共通実験基盤',
    outputItems: ['細胞培養・結晶成長', '材料評価・流体実験', '利用者の拡大', '次の研究への改良'],
    rolesTitle: '機器を基盤へ育てる役割',
    roles: [
      { name: 'リバネス', role: 'Research Producer / PM', detail: '研究用途と利用者をつなぎ、全体を進行する' },
      { name: 'IDDK', role: 'Space Engineering', detail: '宇宙対応設計、技術評価、実証を担う' },
      { name: '研究機器メーカー', role: 'Technology Owner', detail: '既存機器の知見と製造・改良技術を提供する' },
    ],
  },
  value: {
    kicker: 'MODEL EXPLAINED / 図解',
    title: '宇宙のデータから、地球の商品価値を再定義する',
    summary: '食品・飲料、化粧品、住環境、ヘルスケア、素材など、地上で当たり前とされてきた価値を宇宙環境から見直します。仮説を評価方法へ変え、商品や社会で使える基準へつなげます。',
    inputLabel: '企業が見直したい商品価値',
    inputItems: ['おいしさ', '心地よさ', '安全性', 'QOL', '機能性', '耐久性'],
    stages: [
      { number: '01', title: '価値仮説をつくる', description: '商品や技術の価値を分解し、宇宙環境で問い直すべき仮説を研究テーマにします。', outputs: ['価値仮説', '研究テーマ'] },
      { number: '02', title: '宇宙で評価する', description: '実験を設計し、データ取得と評価プロトコルを整え、地上との違いを科学的に捉えます。', outputs: ['実験データ', '評価方法・指標'] },
      { number: '03', title: '地球の商品へ実装する', description: '得られた知見を基準や商品仕様に変換し、製品開発と社会実装へつなげます。', outputs: ['新しい価値基準', '商品開発ロードマップ'] },
    ],
    outputLabel: '宇宙から再定義された商品価値',
    outputItems: ['科学的な評価基準', '商品・サービスへの実装', '地上商品の差別化'],
    rolesTitle: '価値を社会へつなぐ役割',
    roles: [
      { name: 'リバネス', role: 'Research Producer', detail: '価値テーマの設計、研究者公募、全体PMを担う' },
      { name: '大学・研究者', role: 'Scientific Partner', detail: '仮説、実験、評価指標、研究成果をつくる' },
      { name: '企業', role: 'Product Owner', detail: '商品価値、顧客、開発・実装の視点を提供する' },
    ],
  },
};
