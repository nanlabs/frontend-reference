# Markstream React streaming example

This example shows how to render incomplete Markdown as an AI response arrives in a React + Vite application. It uses a local mock stream, so it runs without an API key or backend.

## What it demonstrates

- Installing `markstream-react` in a React application.
- Appending Markdown chunks as they arrive from a stream.
- Passing the current `content` and `final` state to `MarkdownRender`.
- Rendering code blocks, lists, and tables while the response is still incomplete.

The same pattern can be used with an SSE or WebSocket handler: append each received chunk to `content`, then set `final` to `true` when the stream emits its completion event.

## Quickstart

```sh
fnm use
npm install
npm run dev
```

Open the local URL printed by Vite and click **Start mock stream**.

## Relevant code

```tsx
import MarkdownRender from 'markstream-react';
import 'markstream-react/index.css';

<MarkdownRender content={content} final={isDone} fade={false} />;
```

`markstream-react` is the React renderer in the Markstream family. The family also includes Vue, Svelte, Angular, Vue 2, and framework-agnostic parser/core packages. See the [framework overview](https://markstream.simonhe.me/frameworks) for the package matrix.

## Available scripts

| Command              | Description                                 |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Start the Vite development server.          |
| `npm run build`      | Type-check and build the production bundle. |
| `npm run preview`    | Preview the production build.               |
| `npm run lint`       | Run ESLint.                                 |
| `npm run type-check` | Run TypeScript without emitting files.      |
