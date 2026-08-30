type EnglishNews = {
  title: string;
  description: string;
  tags: string[];
  paragraphs: string[];
  officialLabel?: string;
  officialUrl?: string;
};

export const newsEn: Record<string, EnglishNews> = {
  '2026-09-12-lvns-space-project-launch': {
    title: 'LVNS SPACE PROJECT launches and official website goes live',
    description: 'LVNS SPACE PROJECT has launched with the publication of its official website.',
    tags: ['Project', 'News'],
    paragraphs: [
      'LVNS SPACE PROJECT has launched, and its official website is now live.',
      'The project uses space as a field for research and development to discover phenomena that cannot be seen on Earth and new engineering beyond the existing trajectory.',
      'From creating research questions to accessing space experiments, building experimental platforms, and turning discoveries into value, LVNS SPACE PROJECT will develop the full research and development process. Activities and updates will be shared on this website.',
    ],
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
