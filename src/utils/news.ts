type NewsPost = {
  id: string;
  data: {
    pubDate: Date;
    updatedDate?: Date;
  };
};

export function sortNewsByNewest<T extends NewsPost>(posts: T[]): T[] {
  return [...posts].sort((a, b) => {
    const published = b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
    if (published !== 0) return published;

    const updatedA = a.data.updatedDate?.valueOf() ?? a.data.pubDate.valueOf();
    const updatedB = b.data.updatedDate?.valueOf() ?? b.data.pubDate.valueOf();
    const updated = updatedB - updatedA;
    if (updated !== 0) return updated;

    return b.id.localeCompare(a.id);
  });
}
