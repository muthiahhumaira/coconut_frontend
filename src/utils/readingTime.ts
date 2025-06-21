export const getReadingTime = (text: string, wordsPerMinute = 200) => {
  const cleanText = text.replace(/<[^>]*>/g, "");

  const wordCount = cleanText.trim().split(/\s+/).length;

  const minutes = Math.max(1, Math.round(wordCount / wordsPerMinute));

  return `${minutes} min read`;
};
