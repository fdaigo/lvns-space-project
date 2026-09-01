import type { ProjectPage } from './projects';

export const projectsEn: ProjectPage[] = [
  {
    slug: 'gravity-life-research',
    name: 'Life Beyond Gravity Research Project',
    englishName: '重力外生命研究プロジェクト',
    eyebrow: 'SPACE BIO / RESEARCH & EDUCATION',
    catchphrase: 'Explore how life behaves beyond gravity through microalgae.',
    summary: 'A compact cell-culture unit will fly on the Aoba satellite to observe the microalga Euglena in microgravity. The project combines space experiments, Earth-based analysis, and a research-and-education program developed with the next generation, especially middle and high school students.',
    image: '/images/projects/gravity-life-research.png',
    imageAlt: 'Compact orbital experiment module cultivating microalgae above Earth',
    stepsTitle: 'WHAT WE WILL DO',
    steps: [
      {
        number: '01',
        title: 'Culture and observe microalgae in space',
        lead: 'Look closely at how life behaves in microgravity.',
        body: 'A compact cell-culture unit designed for limited spacecraft volume will fly on the Aoba satellite. We will observe how the microalga Euglena moves and reproduces, and examine how the space environment affects living systems.',
        points: ['Compact cell-culture unit', 'Observation of movement and reproduction in microgravity', 'Study of how the space environment affects life'],
      },
      {
        number: '02',
        title: 'Return samples and analyze the changes',
        lead: 'Connect changes in space to research on Earth.',
        body: 'The mission plans to return samples using a recovery capsule. Once the Euglena returns to Earth, we will analyze it in detail to investigate changes in genes and components caused by stimuli received in space.',
        points: ['Sample return by recovery capsule', 'Analysis of genetic changes', 'Analysis of changes in biological components'],
      },
      {
        number: '03',
        title: 'Share the research process with the next generation',
        lead: 'Open the entire journey from planning to application.',
        body: 'Middle and high school students will engage with the research plan, operation, observation, analysis, and use of results. Together with researchers and companies, they will take on an unknown field and carry space-based research and development forward.',
        points: ['Planning and operation of a space experiment', 'Remote observation and operation', 'Teaching materials and educational return of results'],
      },
    ],
    teamTitle: 'PROJECT TEAM',
    teamIntro: 'The team combines expertise in space biology, satellites and experimental equipment, life science, and education to build the full research process.',
    team: [
      { name: 'Leave a Nest Co., Ltd.', role: 'PROJECT ORGANIZER', description: 'Takes forward the inherited space-related business and leads the research and education program.' },
      { name: 'ElevationSpace Inc.', role: 'SPACE ACCESS', description: 'Provides the space experiment opportunity and recovery architecture through the Aoba satellite.' },
      { name: 'euglena Co., Ltd.', role: 'BIORESOURCE PARTNER', description: 'Provides technology and biological resources related to the microalga Euglena.' },
      { name: 'IDDK Co., Ltd.', role: 'SPACE ENGINEERING', description: 'Develops the compact cell-culture unit using technologies such as lensless microscopic observation.' },
      { name: 'Space Nome Research Institute Co., Ltd.', role: 'SCIENCE & EDUCATION', description: 'Supports space bio-experiment equipment development and returns the research results to education.' },
    ],
    closing: 'Observe life in space, and open the research process to the next generation.',
    sourceLabel: 'Reference: Leave a Nest, “Space bio experiment and next-generation education project”',
    sourceUrl: 'https://lne.st/2026/05/07/space_sat/',
  },
];

export const projectEnBySlug = Object.fromEntries(projectsEn.map((project) => [project.slug, project]));
