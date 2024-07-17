export function countSentences(text: string): number {
  const sentences = text.split(/[.!?]+/);

  const filteredSentences = sentences.filter(
    (sentence) => sentence.trim() !== ""
  );
  return filteredSentences.length;
}

export function divideIntoTwoParagraphs(text: string): string[] {
  const paragraphs = text.split(/\n{2,}|\r\n{2,}|\r{2,}/);

  if (paragraphs.length < 2) {
    return [text];
  }

  const midpoint = Math.ceil(paragraphs.length / 2);
  const firstHalf = paragraphs.slice(0, midpoint).join("\n\n");
  const secondHalf = paragraphs.slice(midpoint).join("\n\n");

  return [firstHalf, secondHalf];
}
