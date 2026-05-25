---
title: "Design: Practical Agent Playbook Deck"
description: "Plan to restructure the deck into a practical AI Agent playbook with one Ocean USB Builder demo."
keywords: ["OpenSpec", "AI Agent Playbook", "presentation", "Ocean USB Builder"]
robots: "index, follow"
---

# Design: Practical Agent Playbook Deck

## Context & Technical Approach

The current deck is visually polished and already standardized around one live demo: Ocean USB Builder. The next goal is to change the story arc from a general AI sharing session into a practical AI Agent playbook for the team.

The deck now uses 13 slides because the user requested a dedicated beginning table-of-contents page. The flow should make the audience understand:

- What the team actually wants from AI.
- What changed recently in AI and why the industry is moving from chat to agents.
- How prompt structure changes when prompting agents.
- How Superpowers, GSD and CodyMaster fit into the workflow.
- How to run Agentic Coding safely.
- How Ocean USB Builder demonstrates the playbook in a real tool.
- Why faster execution needs guardrails and better judgment.

## Proposed Changes

### `index.html`

- Reorder the 13-slide flow:
  1. Title
  2. Table of contents / session map
  3. Team needs and practical promise
  4. AI update gần đây
  5. Chatbot to AI Agent
  6. Prompt for Agent
  7. Skill Ecosystem Map
  8. Agentic Coding Workflow
  9. Guardrails
  10. Ocean USB Builder demo
  11. Ocean USB Builder anatomy
  12. AI Work Paradox
  13. Q&A
- Keep the existing global visual polish and Reveal speaker notes.
- Add only reusable, deck-wide component styles.

### `presentation_script.md`

- Rewrite the script to match the new slide order.
- Keep the tone practical, presenter-friendly and Vietnamese.
- Keep AI update sources short and citeable.

### Raw Data

- Add `raw-data/ai-agent-updates-2026.md` with source summaries from OpenAI, Google, Microsoft and Anthropic.

### Status Docs

- Update `task.md` and `.cm/CONTINUITY.md` with the new active goal and verification state.

## Verification

- `sections=13 notes=13`
- `node --check script.js`
- `http://localhost:8000` returns 200
- Markdown links OK
- No stale active-demo references to superseded demos
- No non-zero or negative `letter-spacing`
