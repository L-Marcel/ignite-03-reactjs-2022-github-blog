import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface IssueMarkdownProps {
  data: string;
}

export function IssueMarkdown({ data }: IssueMarkdownProps) {
  return (
    <ReactMarkdown
      className="px-8 py-10 markdown"
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
    >
      {data}
    </ReactMarkdown>
  );
}