import { useEffect, useRef, useState } from 'react';

import MarkdownRender from 'markstream-react';
import 'markstream-react/index.css';

import './Landing.css';

const streamContent = [
  '# Streaming Markdown\n\n',
  'This response is arriving continuously while the renderer keeps it readable.\n\n',
  'Markstream smooths incoming chunks instead of waiting for complete paragraphs:\n\n',
  '- Lists can grow without flicker\n',
  '- `code` stays Markdown-aware\n\n',
  '```tsx\nconst answer = await stream();\n```\n\n',
  '| Input | Rendered as |\n| --- | --- |\n',
  '| SSE / WebSocket | Smooth Markdown |\n',
].join('');

const streamChunks = streamContent.match(/[\s\S]{1,18}/g) ?? [];

const Landing = () => {
  const [content, setContent] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const startStream = () => {
    window.clearTimeout(timer.current);
    setContent('');
    setIsDone(false);
    setIsStreaming(true);

    let chunkIndex = 0;
    const appendChunk = () => {
      const chunk = streamChunks[chunkIndex];
      if (!chunk) {
        setIsDone(true);
        setIsStreaming(false);
        return;
      }

      setContent((current) => current + chunk);
      chunkIndex += 1;
      timer.current = window.setTimeout(appendChunk, 140);
    };

    appendChunk();
  };

  return (
    <div className="markstream-example">
      <header className="markstream-example__header">
        <div>
          <span className="markstream-example__eyebrow">NaNLABS frontend reference</span>
          <h1>Markstream React</h1>
        </div>
        <span className="markstream-example__badge">React + Vite</span>
      </header>

      <main className="markstream-example__main">
        <section className="markstream-example__intro">
          <p className="markstream-example__kicker">Streaming Markdown for AI chat</p>
          <h2>Render the answer before the model is finished.</h2>
          <p>
            This example uses a mock token stream to show how <code>markstream-react</code> smoothly renders incomplete
            Markdown in a React application.
          </p>
          <button type="button" className="markstream-example__button" onClick={startStream} disabled={isStreaming}>
            {isStreaming ? 'Streaming…' : 'Start mock stream'}
          </button>
        </section>

        <section className="markstream-example__preview" aria-live="polite">
          <div className="markstream-example__preview-header">
            <span>Assistant response</span>
            <span className="markstream-example__status">{isDone ? 'complete' : 'waiting'}</span>
          </div>
          <div className="markstream-example__markdown">
            {content ? (
              <MarkdownRender
                content={content}
                final={isDone}
                fade={false}
                typewriter
                smoothStreaming
                smoothStreamingOptions={{
                  minCharsPerSecond: 24,
                  maxCharsPerSecond: 80,
                  targetLatencyMs: 260,
                  maxCommitFps: 30,
                }}
                renderCodeBlocksAsPre
              />
            ) : (
              <p className="markstream-example__empty">Click “Start mock stream” to see incremental Markdown.</p>
            )}
          </div>
        </section>
      </main>

      <footer className="markstream-example__footer">
        <p>
          Built with <code>markstream-react</code> from the Markstream family.
        </p>
        <a href="https://markstream.simonhe.me/frameworks" target="_blank" rel="noreferrer">
          Explore the other framework packages →
        </a>
      </footer>
    </div>
  );
};

export default Landing;
