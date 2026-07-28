# AGENTS.md – AI Interaction & Execution Guide (Human contributors: see CONTRIBUTING.md & docs/)

This file is intentionally scoped only for AI assistants (Cursor, Copilot Chat, PR automation bots).
Humans: read CONTRIBUTING.md and the documents under docs/.

## 1. Authoritative References (Never Reproduce Content Here)

| Topic                         | Source of Truth                |
| ----------------------------- | ------------------------------ |
| Project architecture          | docs/PROJECT_STRUCTURE.md      |
| Component & styling patterns  | docs/COMPONENTS_AND_STYLING.md |
| Performance guidance          | docs/PERFORMANCE.md            |
| State management approach     | docs/STATE_MANAGEMENT.md       |
| Project / build configuration | docs/PROJECT_CONFIGURATION.md  |

(If a file ends with .template it will be materialized during project generation—still treat it as authoritative.)

## Key Commands

Run from the project root after installing dependencies:

| Command              | Purpose                          |
| -------------------- | -------------------------------- |
| `npm run dev`        | Vite dev server                  |
| `npm run build`      | Type-check and production build  |
| `npm run preview`    | Preview production build locally |
| `npm run lint`       | ESLint                           |
| `npm run type-check` | TypeScript (`tsc --noEmit`)      |

## 2. Operating Principles (AI Perspective)

- Documentation-first
- Reuse-before-build
- Type safety always (no unvetted any)
- Deterministic, incremental changes
- Explicit assumption logging

## 3. AI Execution Protocol (React Vite Feature Work)

When asked to add/modify UI logic:

1. Locate or create appropriate feature folder under `src/features/*` (justify new ones)
2. Read related docs referenced above before proposing code
3. Prefer extending existing component / hook / state patterns
4. Present proposed file tree + diff plan BEFORE writing code
5. After code changes: list validation steps (format, lint, type check, tests)

## 4. Guardrails (Must Enforce)

- Do NOT fabricate file paths, component APIs, or library versions
- Do NOT remove existing accessibility props (aria-*, alt, role) without rationale + replacement
- Do NOT introduce global mutable singletons—use documented state patterns
- ALWAYS flag large dependency additions (>1 lib) for human confirmation
- ALWAYS surface potential performance regressions (unmemoized large lists, heavy renders)

## 5. Component Creation Checklist

- Typed props interface exported
- Meaningful name + optional colocated `index.ts` re-export (if pattern exists)
- Accessibility reviewed (labels, semantics)
- Story / example or usage snippet considered
- Test file added or explicitly deferred with reason

## 6. When the AI Should Ask or Refuse

Ask if: feature scope unclear, conflicting patterns, missing target directory.
Refuse if: asked to bypass validation, remove type safety, or duplicate an existing documented component.

## 7. Post-Change Assistant Report

Return a bullet summary:

- Files touched (concise)
- New dependencies (if any)
- Type/lint status
- Suggested manual QA steps
- Deferred items (tests, docs)

---

Maintained automatically by create-awesome-node-app React Vite template provisioning.
Humans: stop reading—go to CONTRIBUTING.md + docs/.
