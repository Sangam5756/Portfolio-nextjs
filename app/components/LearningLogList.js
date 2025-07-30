'use client';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import ReadmeViewer from './ReadmeViewer';

export default function LearningLogList() {
  const [logs, setLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);
  const [selectedContent, setSelectedContent] = useState('');

  // Fetch log filenames
  useEffect(() => {
    fetch('https://api.github.com/repos/Sangam5756/learning-journey/contents/blogs')
      .then(res => res.json())
      .then(data => {
        const markdownFiles = data
          .filter(file => file.name.endsWith('.md'))
          .sort((a, b) => new Date(b.name.slice(0, 10)) - new Date(a.name.slice(0, 10))); // sort desc
        setLogs(markdownFiles);
      });
  }, []);

  // Fetch selected log content
  const loadLog = async (url, name) => {
    const res = await fetch(url);
    const content = await res.text();
    setSelectedLog(name);
    setSelectedContent(content);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Left Column – Log List */}
      <aside className="md:col-span-1 border rounded-md p-3 bg-white dark:bg-zinc-900 shadow">
        <h2 className="font-bold text-lg mb-2">📅 Logs</h2>
        <ul className="space-y-2 max-h-[80vh] overflow-y-auto">
          {logs.map(file => (
            <li key={file.name}>
              <button
                className={`block w-full text-left px-2 py-1 rounded hover:bg-blue-100 dark:hover:bg-zinc-800 ${
                  selectedLog === file.name ? 'bg-blue-200 dark:bg-zinc-700 font-semibold' : ''
                }`}
                onClick={() => loadLog(file.download_url, file.name)}
              >
                {file.name.replace('.md', '').replace('---', ' — ')}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Column – Markdown Viewer */}
      <section className="md:col-span-2 border rounded-md p-4 bg-white dark:bg-zinc-900 shadow prose dark:prose-invert max-w-none">
        {selectedContent ? (
          <ReadmeViewer content={selectedContent}/>
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">Select a log to view its content.</p>
        )}
      </section>
    </div>
  );
}
