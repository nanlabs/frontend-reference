# GenAI Conversational UI Patterns

Design patterns for AI chat experiences, distilled from research across ChatGPT, Perplexity, Notion AI, Copilot, Gemini, and leading assistants: citations, personalization, privacy, accessibility, chunking, multimodality, memory, feedback, and error handling.

## 1. Source Citation & Attribution

Make generated claims verifiable without cluttering the reading flow.

| Pattern                 | When                             | Example                      |
| ----------------------- | -------------------------------- | ---------------------------- |
| Inline citations `[1]`  | Numbers, facts, checkable claims | Perplexity                   |
| Expandable sources card | Full reference list on demand    | "Show sources" drawer        |
| Confidence indicators   | Certainty varies by claim        | Color-coded badges + tooltip |
| Hover tooltips          | Details without layout cost      | ⓘ icon with source summary   |

Rules: cite precise claims inline; combine with an expandable full list; use confidence badges only when calibrated — uncalibrated badges destroy trust.

## 2. Actionable Suggestions

- Quick-reply buttons for the obvious next actions (Gmail Smart Reply pattern).
- Editable AI output: every generated text block gets edit/regenerate controls.
- Guided conversational flows with predefined options for multi-step tasks.
- Always label AI-generated content explicitly.

## 3. Personalization

- Custom instructions (tone, language, verbosity) in a discoverable settings surface.
- Saved/reusable prompts with favorites or history.
- Progressive controls (sliders, toggles) that adjust behavior without leaving the flow.
- Live preview of setting changes.

## 4. Privacy & Security

- Surface what is collected and why, in plain language.
- One-tap private mode: disable history/memory with visible confirmation.
- Tooltips and modals for data-use explanations; permission changes get visual acknowledgment.
- Comply with GDPR/CCPA expectations: export, delete, opt out.

## 5. Accessibility

- Screen-reader compatible message lists (roles, live regions for streaming).
- Adjustable text size, high contrast, reduced motion.
- Full keyboard operation; voice input/output where relevant.
- Multi-language support from day one.

## 6. Chunking & Stepwise Delivery

- Progressive disclosure: answer first, details on "show more".
- Expandable summaries for long responses.
- Stepwise wizards for procedures (one decision per step + progress indicator).
- Stream long output instead of blocking; never cut mid-sentence — paginate semantically.

## 7. Multi-Modal Input & Output

- Voice input with live transcription + manual edit before send; visible mic state.
- File/image upload via drag & drop with progress, preview, and privacy notice.
- Rich answers: tables, cards, charts with filters and download options.
- Keep iconography consistent and layouts responsive.

## 8. Chat History & Memory

- Persistent, searchable history with session separators.
- Auto-generated session summaries (short/detailed toggle), user-editable.
- Memory controls: view, edit, and delete stored facts with confirmation.
- Export history (`.txt`/`.pdf`); retention policy stated upfront.

## 9. Feedback & Refinement

- Binary rating (👍/👎) with optional comment — fast path first.
- 1–5 scale or tone selectors for finer signal.
- Response version history ("view previous") for transparency.
- Show sources next to answers so feedback can target facts.

## 10. Error Handling & Confidence

- Confidence indicator next to answers when calibrated.
- Errors that explain and offer a path: "I couldn't verify this — reformulate, or try one of these:".
- Suggested alternatives instead of dead ends.
- Never present guesses with the same visual weight as verified facts.

## Suggested Component Inventory

Citation chips, sources drawer, confidence badge, transparency tooltip, quick replies, editable output block, tone selector, privacy toggle, session summary card, memory controls, rating + comment, version history, error-with-alternatives card, upload dropzone with preview, streaming message list.

## References

- [Nielsen Norman Group: AI Usability](https://www.nngroup.com/topic/artificial-intelligence/)
- [Google Material: AI Design Guidance](https://design.google/library/ai-design-guidance/)
- [Microsoft Responsible AI UX](https://www.microsoft.com/en-us/ai/responsible-ai)
- [Apple Human Interface: Machine Learning](https://developer.apple.com/design/human-interface-guidelines/machine-learning)
