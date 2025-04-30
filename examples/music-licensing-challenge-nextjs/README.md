# Music Licensing Challenge Frontend


## Features
- Movie, scene, track, and song management UI
- License status management for songs
- Real-time updates for license status via GraphQL subscriptions
- Authentication (login/register)
- TypeScript, TailwindCSS, and Apollo Client integration
- Linting and formatting with BiomeJs

## Tech Stack
- [Next.js 15 (App Router)](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Apollo Client 3](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)
- [TailwindCSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Biome](https://biomejs.dev/) (linting/formatting)

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables:**
   - Create a `.env.local` file with:
     ```env
     NEXT_PUBLIC_GRAPHQL_URL=your-graphql-http-endpoint
     NEXT_PUBLIC_WS_URL=your-graphql-ws-endpoint
     ```

3. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `src/app/` — App Router pages, layouts, and routes (including movies, scenes, auth)
- `src/components/` — UI components (SceneList, MovieCard, Navbar, etc.)
- `src/lib/graphql/` — Apollo Client setup, queries, mutations, subscriptions
- `src/hooks/` — Custom React hooks (e.g., `useSongWithLiveStatus`)
- `src/types/` — TypeScript type definitions
- `src/styles/` — Global and Tailwind styles

## GraphQL Usage
- **Apollo Client** is set up in `src/lib/graphql/client.ts` with HTTP and WebSocket links for queries/mutations and subscriptions.
- **Queries:**
  - Example: `GET_SONG_BY_ID`, `GET_SCENES`, `GET_MOVIES` in `src/lib/graphql/queries/`
- **Mutations:**
  - Example: `UPDATE_SONG_LICENSE_STATUS` in `src/lib/graphql/mutations/songs.ts`
- **Subscriptions:**
  - Example: `LICENSE_STATUS_UPDATED` in `src/lib/graphql/subscriptions/license-status.ts`
- **Custom Hooks:**
  - `useSongWithLiveStatus(song)` — Combines query and subscription for live song status

## Linting & Formatting
- Run `pnpm lint` or `pnpm format` to lint/format code with Biome.
- Type-check with `pnpm type-check`.

## TypeScript
- Full TypeScript support with strict settings (`tsconfig.json`)
- Types in `src/types/`

## Styling
- TailwindCSS is used for all styling. See `src/styles/globals.css`.

## Contributing
Pull requests are welcome! Please lint, format, and type-check your code before submitting.

---

For more, see the source code and comments throughout the project.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

