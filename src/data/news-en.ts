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
  '2026-09-12-lvns-space-project-release': {
    title: 'Leave a Nest launches LVNS SPACE PROJECT to discover new engineering in space',
    description: 'LVNS SPACE PROJECT launches with SpaceNome Lab and IDDK as operating partners, and a joint smart textile development project with Hasetora Spinning.',
    tags: ['Release', 'Project'],
    paragraphs: [
      'Leave a Nest has formally launched LVNS SPACE PROJECT on Space Day, September 12, 2026. The project uses space as a research field to discover engineering that does not follow the existing trajectory on Earth.',
      'SpaceNome Lab and IDDK will build the foundation for space-use research as operating partners. Hasetora Spinning joins as the first development partner to develop smart textiles that work in the space environment.',
      'The project builds four functions: research theme creation, experiment access infrastructure, equipment development, and value standards creation. These functions connect research questions, space experiments, equipment, evaluation, and implementation in industry.',
      'The project will also advance a space bio-experiment using the Aoba satellite, including observation of microalgae Euglena under microgravity and analysis after sample return. The first-term partner recruitment runs from September 12, 2026 through March 31, 2027.',
    ],
    officialLabel: 'Read the official release',
    officialUrl: 'https://lne.st/2026/09/12/lvns-space/',
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
