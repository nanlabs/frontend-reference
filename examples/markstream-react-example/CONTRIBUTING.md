# Contributing

Thanks for your interest in contributing to this project template! This document is the human entry point after reading the README. It explains how to work effectively inside a project generated from this template.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Bootstrap](#project-bootstrap)
- [Scripts & Tooling](#scripts--tooling)
- [Architecture Conventions](#architecture-conventions)
- [Coding Standards](#coding-standards)
- [Git / Branch Workflow](#git--branch-workflow)
- [Commit Messages](#commit-messages)
- [Adding Dependencies](#adding-dependencies)
- [Testing Strategy](#testing-strategy)
- [Documentation](#documentation)
- [Pull Request Checklist](#pull-request-checklist)

## Prerequisites

Install Node (use `fnm use` or your preferred version manager). Run `npm install` after project generation.

## Project Bootstrap

```sh
fnm use
npm install
npm run dev
```

## Scripts & Tooling

Run `npm run lint`, `npm run format`, `npm run build` as needed. Keep a clean working tree.

## Architecture Conventions

Read [docs/PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md) first. Each feature is self-contained under `src/features/<domain>` with internal folders (components, hooks, services, types).

## Coding Standards

- TypeScript strict typing – avoid `any` unless justified
- Prefer composition over inheritance
- Keep components small & focused
- Accessibility: ensure proper labels, roles, aria-* attributes

## Git / Branch Workflow

- Create feature branches from `main`: `feat/short-description`
- Rebase before opening a PR

## Commit Messages

Follow Conventional Commits: `feat: add user profile card`, `fix: handle null session`. Squash locally if you produced noisy commits.

## Adding Dependencies

Before adding a new dependency, check if existing ones solve the problem. Document rationale in PR description if adding.

## Testing Strategy

Add unit tests for logic-heavy utilities and hooks. Lightweight UI components can start without tests but note the omission.

## Documentation

Update or add docs in `docs/` when introducing new concepts or architectural changes.

## Pull Request Checklist

- [ ] Feature / fix scoped & documented
- [ ] Lint + type check pass
- [ ] Added / updated tests (or documented why not)
- [ ] Updated docs if needed
- [ ] No unused or dead code

Happy hacking! 🚀
