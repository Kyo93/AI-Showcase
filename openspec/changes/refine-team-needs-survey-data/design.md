# Design: Refine Team Needs Survey Data

## Context & Technical Approach

The Team Needs slide should use the survey evidence accurately. The original slide direction was right, but it mixed respondent count, multiple-select count and the demo/case-study percentage without enough context. This slide was later moved to Slide 3 during the narrative-flow reorder.

## Proposed Changes

### `index.html`
- Clarify that the survey has 13 respondents and 36 topic selections for the multiple-select question.
- Reorder the top topics by actual selection count.
- Replace a standalone percentage with `12/13 people (92.3%)` for the demo/case-study takeaway.
- Update speaker notes to explain the different sample bases.

### `style.css`
- Add compact selection-count badges for the priority list.

### `presentation_script.md`
- Update the presenter script so the spoken story matches the corrected slide.

## Verification

- Confirm the deck still has 13 slides and 13 speaker notes.
- Run JavaScript syntax check.
- Render the Team Needs slide locally and capture a QA screenshot.
