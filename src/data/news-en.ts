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
};

export function getEnglishNews(post: { id: string; data: { title: string; description: string; tags: string[] } }): EnglishNews {
  return newsEn[post.id] ?? {
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags,
    paragraphs: ['This news article is currently available in Japanese. An English translation will be added soon.'],
  };
}
