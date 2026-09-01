export type ProjectStep = {
  number: string;
  title: string;
  lead: string;
  body: string;
  points: string[];
};

export type ProjectTeamMember = {
  name: string;
  role: string;
  description: string;
};

export type ProjectPage = {
  slug: string;
  name: string;
  englishName: string;
  eyebrow: string;
  catchphrase: string;
  summary: string;
  image: string;
  imageAlt: string;
  stepsTitle: string;
  steps: ProjectStep[];
  teamTitle: string;
  teamIntro: string;
  team: ProjectTeamMember[];
  closing: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const projects: ProjectPage[] = [
  {
    slug: 'gravity-life-research',
    name: '重力外生命研究プロジェクト',
    englishName: 'Life Beyond Gravity Research Project',
    eyebrow: 'SPACE BIO / RESEARCH & EDUCATION',
    catchphrase: '微細藻類を通じて、重力の外側にある生命のふるまいを探る。',
    summary: '人工衛星「あおば」に超小型細胞培養ユニットを搭載し、微小重力環境で微細藻類ユーグレナを観察します。宇宙での実験と地上での解析を、中高生を中心とした次世代とともに進める研究・教育プロジェクトです。',
    image: '/images/projects/gravity-life-research.png',
    imageAlt: '微細藻類を培養する小型宇宙実験モジュールと地球',
    stepsTitle: '実施内容',
    steps: [
      {
        number: '01',
        title: '宇宙で微細藻類を培養・観察する',
        lead: '微小重力環境で、生命のふるまいを見つめる。',
        body: '限られた宇宙空間で実験できる超小型細胞培養ユニットを人工衛星「あおば」に搭載します。微細藻類ユーグレナがどのように動き、増殖するのかを観察し、宇宙環境から受ける影響を検証します。',
        points: ['超小型細胞培養ユニット', '微小重力下での動き・増殖の観察', '宇宙環境が生物に与える影響の検証'],
      },
      {
        number: '02',
        title: '地球へサンプルを戻し、変化を解析する',
        lead: '宇宙で起きた変化を、地上の研究へつなぐ。',
        body: '人工衛星からの回収カプセルを用いたサンプルリターンを計画しています。地球に戻ったユーグレナを詳しく解析し、宇宙で受けた刺激による遺伝子や成分の変化を調べます。',
        points: ['回収カプセルによるサンプルリターン', '遺伝子の変化の解析', '成分の変化の解析'],
      },
      {
        number: '03',
        title: '研究プロセスを次世代と共有する',
        lead: '計画から成果の活用まで、研究の全体をひらく。',
        body: '宇宙実験を題材に、中高生を中心とした次世代が研究計画、実施、観察、解析、成果の活用に関わります。研究者や企業とともに未知の領域へ挑戦し、宇宙を使った研究開発を次の世代へつなげます。',
        points: ['宇宙実験の計画・実施', '遠隔操作による観察', '解析と成果の教材化・教育還元'],
      },
    ],
    teamTitle: 'PROJECT TEAM',
    teamIntro: '宇宙バイオ実験、衛星・実験装置、生命科学、教育の知見を持つチームで、研究プロセス全体をつくります。',
    team: [
      { name: '株式会社リバネス', role: 'PROJECT ORGANIZER', description: '宇宙関連事業を引き継ぎ、研究・教育プロジェクト全体を推進します。' },
      { name: '株式会社ElevationSpace', role: 'SPACE ACCESS', description: '人工衛星「あおば」による宇宙実験の機会と回収の仕組みを提供します。' },
      { name: '株式会社ユーグレナ', role: 'BIORESOURCE PARTNER', description: '微細藻類ユーグレナに関する技術と生物資源を提供します。' },
      { name: '株式会社IDDK', role: 'SPACE ENGINEERING', description: 'レンズレス顕微観察などを用いた超小型細胞培養ユニットの開発を担います。' },
      { name: '株式会社スペースノーム研究所', role: 'SCIENCE & EDUCATION', description: '宇宙バイオ実験装置の開発支援と、研究成果の教材化・教育還元を担います。' },
    ],
    closing: '宇宙で生命を観察し、研究のプロセスを次の世代へひらく。',
    sourceLabel: '参考：リバネス「宇宙バイオ実験と次世代教育プロジェクトを開始」',
    sourceUrl: 'https://lne.st/2026/05/07/space_sat/',
  },
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));
