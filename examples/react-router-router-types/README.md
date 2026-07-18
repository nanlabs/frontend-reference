# React Router router types

React Router provides multiple router components so applications can choose the history strategy that matches their runtime. This guide compares `BrowserRouter`, `HashRouter`, and `MemoryRouter` for modern `react-router-dom` applications.

Use this as a starting point when deciding how a React application should handle URLs in production, static hosting, tests, or isolated examples.

## Quick comparison

| Router | Best for | URL shape | Main caveat |
| --- | --- | --- | --- |
| `BrowserRouter` | Standard web apps with server rewrite support | `/dashboard/settings` | The server must return the app shell for client routes. |
| `HashRouter` | Static hosting without rewrite control | `/#/dashboard/settings` | Hash URLs are less clean and are not sent to the server. |
| `MemoryRouter` | Tests, Storybook stories, embedded flows, demos | In-memory only | It does not update the browser address bar. |

## Shared route tree

All three examples can render the same route tree. Keeping routes separate from the router choice makes it easier to reuse routes in production, tests, and examples.

```tsx
import { Link, Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Link to="/settings">Settings</Link>
    </main>
  );
}

function SettingsPage() {
  return (
    <main>
      <h1>Settings</h1>
      <Link to="/">Back home</Link>
    </main>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}
```

## BrowserRouter

Use `BrowserRouter` for most production web applications. It uses the browser history API, so URLs look like normal server paths.

```tsx
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./AppRoutes";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
);
```

Choose `BrowserRouter` when:

- You control the server or deployment platform.
- Direct visits and refreshes should work for every route.
- Clean URLs matter for users, analytics, or sharing.

Deployment caveat: configure the server to return `index.html` for client-side routes. Without that rewrite, refreshing `/settings` may return a 404 before React loads.

## HashRouter

Use `HashRouter` when the app is hosted from static storage or a platform where you cannot configure route rewrites.

```tsx
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./AppRoutes";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <AppRoutes />
  </HashRouter>,
);
```

Choose `HashRouter` when:

- The deployment platform always serves the same static file.
- You cannot add a fallback rewrite to `index.html`.
- A URL such as `/#/settings` is acceptable.

Main caveat: the path after `#` is handled only by the browser. It is not sent to the server, which can be useful for static hosting but less ideal for clean URLs.

## MemoryRouter

Use `MemoryRouter` when the router state should live entirely in memory, especially in tests and isolated component environments.

```tsx
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

export function SettingsExample() {
  return (
    <MemoryRouter initialEntries={["/settings"]}>
      <AppRoutes />
    </MemoryRouter>
  );
}
```

Choose `MemoryRouter` when:

- Rendering routes in unit or component tests.
- Building Storybook stories for routed components.
- Embedding a routed flow that should not affect the browser URL.

Test example:

```tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

it("renders the settings route", () => {
  render(
    <MemoryRouter initialEntries={["/settings"]}>
      <AppRoutes />
    </MemoryRouter>,
  );

  expect(screen.getByRole("heading", { name: "Settings" })).toBeInTheDocument();
});
```

## Choosing a router

- Start with `BrowserRouter` for normal web apps.
- Use `HashRouter` only when static hosting cannot support fallback rewrites.
- Use `MemoryRouter` for tests, stories, and isolated examples.

The route definitions can usually stay the same. The main decision is where navigation state should live: browser history, the URL hash, or memory.