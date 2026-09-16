# Visual UI Code Generation Tools Matrix

When to reach for v0, Plasmic, Builder.io, or Locofy — and when to stay in code. Complementary to a standard stack (VS Code + Copilot/Cursor + Figma); best used for MVPs, PoCs, prototypes, and content-heavy sites.

## Tools at a Glance

| Tool                                  | Summary                                                                                  |
| ------------------------------------- | ---------------------------------------------------------------------------------------- |
| [v0](https://v0.dev/)                 | Vercel's UI-to-code playground; Tailwind + Next.js aligned. Great for dev-centric PoCs.  |
| [Plasmic](https://www.plasmic.app/)   | Visual builder for production frontends; excellent Figma sync, CMS and commerce support. |
| [Builder.io](https://www.builder.io/) | Visual builder + CMS with real-time editing, personalization, SDKs for any stack.        |
| [Locofy.ai](https://www.locofy.ai/)   | Figma-to-code automation (React, Next.js, Flutter); strong cross-platform output.        |

## Comparative Matrix

| Feature           | v0             | Plasmic              | Builder.io            | Locofy.ai               |
| ----------------- | -------------- | -------------------- | --------------------- | ----------------------- |
| Figma sync        | No             | Excellent            | Good                  | Excellent               |
| Code quality      | Tailwind-first | Typed, clean         | Mixed (custom format) | Production-ready        |
| Frameworks        | Next.js        | Next.js, React, Vue+ | Any (SDKs)            | React, Next.js, Flutter |
| CMS / API         | No             | CMS                  | Full CMS              | No                      |
| Collaboration     | No             | Team editing         | Real-time             | Limited                 |
| Open source       | Yes            | No                   | No                    | No                      |
| Custom components | Limited        | Strong               | With effort           | Yes                     |
| Mobile-first      | No             | Web-focused          | Web-focused           | Flutter                 |
| Best fit          | Dev PoCs       | Design-system apps   | Marketing/CMS sites   | Cross-platform MVPs     |

## Use-Case Recommendations

| Project type                      | Pick                    | Why                                  |
| --------------------------------- | ----------------------- | ------------------------------------ |
| Dev-driven PoC/MVP                | v0                      | Fast setup, Tailwind alignment       |
| Design-to-code production UI      | Plasmic                 | Figma sync + custom components       |
| CMS-driven website                | Builder.io              | Real-time editing, marketer-friendly |
| Cross-platform MVP (web + mobile) | Locofy.ai               | React + Flutter output               |
| Enterprise with design systems    | Plasmic (+ custom code) | Flexible and scalable                |

## Rules of Engagement

- No one-size-fits-all: choose per project on speed vs stability vs collaboration.
- Generated code is a starting point: review, refactor, and test like any other code.
- Enforce the same guardrails (privacy, traceability, accessibility) regardless of author — human or tool.
- Keep design decisions and prompts in the tracker; generated UI still needs ADRs for significant choices.

## References

- [v0 by Vercel](https://v0.dev/)
- [Plasmic Docs](https://docs.plasmic.app/)
- [Builder.io Docs](https://www.builder.io/c/docs/intro)
- [Figma to Code Plugins](https://www.figma.com/community/tag/code)
