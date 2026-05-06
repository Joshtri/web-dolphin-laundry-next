export const parseMarkdown = (text: string): React.ReactNode[] => {
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  // Parse **bold** and *italic*
  const regex = /\*\*(.*?)\*\*|\*(.*?)\*/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    if (match[1]) {
      elements.push(
        <strong key={match.index} className="font-bold">
          {match[1]}
        </strong>,
      );
    } else if (match[2]) {
      elements.push(
        <em key={match.index} className="italic">
          {match[2]}
        </em>,
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements.length > 0 ? elements : [text];
};
