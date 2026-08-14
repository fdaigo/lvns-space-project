type EnglishNews = {
  title: string;
  description: string;
  tags: string[];
  paragraphs: string[];
  officialLabel?: string;
  officialUrl?: string;
};

export const newsEn: Record<string, EnglishNews> = {
  '2026-08-06-ispace-engineering-master': {
    title: 'ispace launches a new internal certification for space engineers',
    description: 'ispace has launched the Engineering Master Program to recognize advanced expertise in space engineering.',
    tags: ['L-VENTURES', 'ispace', 'Engineering'],
    paragraphs: [
      'ispace, a company featured by L-Ventures, has launched the Engineering Master Program, an internal certification system for advanced expertise in space engineering.',
      'Ryota Adachi, who leads structural design in the Global Design Office, became the first Black Belt Engineering Master. His contributions to the RESILIENCE lander and the ULTRA lander, including landing impact analysis, were recognized.',
      'The announcement shows how engineering expertise can be continuously developed within an organization supporting lunar missions.',
    ],
    officialLabel: 'ispace Launches New Program “Engineering Master Program”',
    officialUrl: 'https://www.ispace-inc.com/2026/08/06/ispace-launches-new-program-engineering-master-program/',
  },
  '2026-08-07-ispace-space-strategy-fund': {
    title: 'ispace receives a grant for high-precision landing technology in the lunar polar region',
    description: 'ispace has been selected for a JAXA Space Strategy Fund project targeting high-precision landing near the lunar south pole.',
    tags: ['L-VENTURES', 'ispace', 'Lunar Exploration'],
    paragraphs: [
      'ispace, a company featured by L-Ventures, announced that it will receive a grant of 11.6 billion yen for a Phase 2 Space Strategy Fund project operated by JAXA.',
      'The project aims to develop high-precision landing near the lunar south pole and payload deployment using a lunar-orbit communications relay satellite. ispace also describes plans to use its ULTRA lander for Missions 3 and 4 in 2028 and 2029.',
      'The initiative advances landing technology and communications infrastructure together toward future lunar resource exploration and infrastructure development.',
    ],
    officialLabel: 'ispace Receives Grant for Japan’s Space Strategy Fund Project',
    officialUrl: 'https://www.ispace-inc.com/2026/08/07/ispace-receives-grant-for-japans-space-strategy-fund-project-high-precision-landing-technology-in-the-lunar-poles-region/',
  },
  '2026-08-13-liberaware-gold-partner': {
    title: 'Liberaware signs a Gold Partner agreement with Hamamatsu Trading',
    description: 'Support for production optimization and indoor inspection drones will expand across the Chukyo region.',
    tags: ['L-VENTURES', 'Liberaware', 'Robotics'],
    paragraphs: [
      'Liberaware, a company featured by L-Ventures, has signed a Gold Partner sales agreement with Hamamatsu Trading Co., Ltd.',
      'Hamamatsu Trading is an engineering trading company that supports customers from production-system proposals through post-installation support. The agreement will expand sales of IBIS2, a drone for inspecting narrow, dark, and dangerous indoor spaces, across the Chukyo region, together with support from initial consideration through operation.',
      'The agreement is a notable step in expanding the partner network that implements robotics in manufacturing and infrastructure sites facing labor shortages and aging facilities.',
    ],
    officialLabel: 'Hamamatsu Trading signs a Gold Partner agreement',
    officialUrl: 'https://liberaware.co.jp/%E7%94%9F%E7%94%A3%E7%8F%BE%E5%A0%B4%E3%81%AE%E5%90%88%E7%90%86%E5%8C%96%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E9%AB%98%E5%BA%A6%E3%81%AA%E6%8A%80%E8%A1%93%E6%8F%90%E6%A1%88%E5%8A%9B%E3%82%92%E6%8C%81/',
  },
  'sample-news-1': {
    title: 'LVNS SPACE PROJECT launches',
    description: 'A new project begins to transform humanity’s perspective from a starting point in space.',
    tags: ['Project', 'News'],
    paragraphs: [
      'LVNS SPACE PROJECT is a project that transforms humanity’s perspective from a starting point in space and builds a platform for the next generation of challenges.',
      'Researchers, companies, governments, educational institutions, and young people who will shape the future come together across disciplines to think about the future of space and Earth. We will continue to share our activities and the results of collaboration.',
    ],
  },
  'sample-news-2': {
    title: 'Dialogue: Seeing Earth from space',
    description: 'An online dialogue event will explore the future of Earth from the perspective of space.',
    tags: ['Event', 'Earth'],
    paragraphs: [
      'Looking at Earth from space can reveal changes and connections that are difficult to see in everyday life.',
      'Using satellite data and the perspective of space as starting points, researchers and participants will discuss the future of Earth. No specialist knowledge is required. Bring your questions and join us.',
    ],
  },
  'sample-news-3': {
    title: 'Open call for next-generation space ideas',
    description: 'We are looking for new ideas for challenges inspired by space.',
    tags: ['Open Call', 'Next Generation'],
    paragraphs: [
      'Space still holds many “why” and “how” questions waiting to be explored.',
      'LVNS SPACE PROJECT is inviting ideas that can change society and everyday life from a starting point in space. Small hypotheses and unfinished ideas are welcome. Through dialogue with experts and experiments, submitted ideas will be connected to their next step.',
    ],
  },
};

export function getEnglishNews(post: { id: string; data: { title: string; description: string; tags: string[] } }): EnglishNews {
  return newsEn[post.id] ?? {
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags,
    paragraphs: ['This news article is currently available in Japanese. An English translation will be added soon.'],
  };
}
