# Nielsen Heuristics Evaluation Guide

A practical 1–5 rubric for auditing any interface against Jakob Nielsen's 10 usability heuristics — usable in design reviews, QA passes, and project assessments.

## How to Score

- **1 (Low):** heuristic violated; users blocked or confused.
- **3 (Medium):** partially satisfied; friction in places.
- **5 (High):** fully satisfied; exemplary behavior.

Score with evidence (screenshots, recordings, test notes), not gut feeling.

## The 10 Heuristics

### 1. Visibility of system status

Users always know what is happening: loaders, progress, confirmations.
1: silent waits and mystery states. 3: mostly clear feedback. 5: immediate, clear feedback everywhere.

### 2. Match between system and the real world

Language, icons, and flows mirror user conventions — no jargon, no abstract codes.
1: technical/abstract wording. 3: mostly intuitive. 5: naturally familiar.

### 3. User control and freedom

Undo, redo, cancel, and clear exits from unwanted states.
1: users feel trapped. 3: partial escape hatches. 5: full control at all times.

### 4. Consistency and standards

Layout, behavior, and terminology follow platform and product conventions.
1: unpredictable. 3: mostly consistent. 5: unified and predictable.

### 5. Error prevention

Confirmations before destructive actions, input validation, smart defaults, constraints over warnings.
1: errors frequent and unguarded. 3: some guards. 5: error classes designed out.

### 6. Recognition rather than recall

Options visible; recent context surfaced; no memorization required.
1: users must remember. 3: some reminders. 5: everything recognizable in context.

### 7. Flexibility and efficiency of use

Shortcuts, accelerators, and adaptable flows for novice and expert users.
1: one rigid path. 3: some options. 5: efficient for all skill levels.

### 8. Aesthetic and minimalist design

Essential content only; every element competes for attention, so most should lose.
1: cluttered. 3: mostly clean. 5: focused and elegant.

### 9. Help users recognize, diagnose, and recover from errors

Plain-language error messages that say what happened and how to fix it.
1: cryptic codes. 3: some guidance. 5: clear recovery paths.

### 10. Help and documentation

Searchable, contextual, task-oriented help — a safety net, not a manual dump.
1: missing or useless. 3: exists but hard to find. 5: accessible and sufficient.

## Running a Heuristic Review

1. 2–3 evaluators inspect independently (30–60 min each).
2. Each logs violations mapped to heuristics with severity 1–5.
3. Debrief, deduplicate, prioritize by severity × frequency.
4. File findings as tracked issues with screenshots; re-score after fixes.

## References

- [Nielsen Norman Group: 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
