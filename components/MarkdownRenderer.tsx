import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  markdownContent: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  markdownContent,
}) => {
  return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
};

export default MarkdownRenderer;
