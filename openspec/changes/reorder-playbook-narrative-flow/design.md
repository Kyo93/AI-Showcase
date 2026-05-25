# Design: Reorder Playbook Narrative Flow

## Context & Technical Approach

The deck content was individually strong, but the narrative order could carry the audience better. Because this is an internal team sharing session, the story should start from team needs, then widen to the market context, then teach the practical playbook, then show the real demo, and only then close with the AI Work Paradox reflection.

## Proposed Changes

### `index.html`
- Move `Team Cần Gì Từ AI?` before the AI update slide.
- Move `Live Demo: Ocean USB Builder` and `Anatomy` immediately after Guardrails.
- Move `AI Work Paradox` after the demo/anatomy section and before Q&A.
- Update agenda copy and speaker notes so each slide introduces the next slide.

### `presentation_script.md`
- Rewrite the script in the new order:
  1. Title
  2. Agenda
  3. Team needs
  4. AI update
  5. Chatbot -> AI Agent
  6. Prompt
  7. Skill ecosystem
  8. Agentic Coding Workflow
  9. Guardrails
  10. Ocean USB Builder demo
  11. Ocean USB Builder anatomy
  12. AI Work Paradox
  13. Q&A
- Add explicit transition lines between major ideas.

### Status Docs
- Update `task.md`, `.cm/CONTINUITY.md`, `AGENTS.md`, README and quality/deployment docs with the new flow.

## Verification

- Confirm `sections=13 notes=13`.
- Confirm Reveal fragments are still present for the AI update slide.
- Run JavaScript syntax check.
- Run local server check.
- Capture spot-check screenshots for the reordered slides.
