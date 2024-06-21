export function countSentences(text: string): number {
  // Split text into sentences using a regex pattern
  const sentences = text.split(/[.!?]+/);
  // Remove empty elements and trim whitespace
  const filteredSentences = sentences.filter(
    (sentence) => sentence.trim() !== ""
  );
  return filteredSentences.length;
}

export function divideIntoTwoParagraphs(text: string): string[] {
  // Split text into paragraphs based on double newline or paragraph markers
  const paragraphs = text.split(/\n{2,}|\r\n{2,}|\r{2,}/);
  // Ensure there are at least two paragraphs
  if (paragraphs.length < 2) {
    return [text]; // Return the whole text if less than two paragraphs
  }

  // Divide the paragraphs into two roughly equal parts
  const midpoint = Math.ceil(paragraphs.length / 2);
  const firstHalf = paragraphs.slice(0, midpoint).join("\n\n");
  const secondHalf = paragraphs.slice(midpoint).join("\n\n");

  return [firstHalf, secondHalf];
}
