import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "github-markdown-css/github-markdown.css"; 
import "highlight.js/styles/github-dark.css"; 
const ReadmeViewer = ({ content }) => {
    return (
        <div className="markdown-body overflow-auto p-4">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default ReadmeViewer;
