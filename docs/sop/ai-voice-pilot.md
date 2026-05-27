---
title: "AI Voice Pilot SOP"
description: "Runbook to create and rehearse a consented AI voice clone for selected AI Agent Playbook slides."
keywords: ["AI voice", "voice cloning", "SOP", "presentation", "consent"]
robots: "index, follow"
---

# AI Voice Pilot SOP

> **Quick Reference**
> - **Goal**: Create a short AI voice proof that sounds like the presenter reading the Ocean USB Builder proof section.
> - **Default scope**: Slides 12-15 only.
> - **Mode**: Presenter-controlled playback, no autoplay.
> - **Safety**: Use only the presenter's own voice with explicit consent and disclose synthetic audio before playing it.

## 1. Record The Voice Sample

Record 5-10 minutes of clean speech in a quiet room. Use the same speaking style as the presentation: calm, technical, and natural Vietnamese with English tool names.

Recommended sample content:

- one minute introducing yourself and the session
- two minutes reading part of Slide 12
- one minute reading terms such as `AI Agent`, `OSDCloud`, `Ocean USB Builder`, `WinPE`, `PowerShell`, `WPF`, `Apps.json`, `guardrails`, `workflow`
- one minute of natural explanation, not just reading

Export as WAV or high-quality MP3. Avoid background music, noise reduction artifacts, reverb, and multiple speakers.

## 2. Create Consent And Voice Clone

Use a provider that supports consented voice cloning. Good first-pass path:

1. Create a private voice clone in ElevenLabs or another approved provider.
2. Upload or record the consent phrase required by that provider.
3. Keep the voice private. Do not publish it to a public voice library.
4. Save the provider/project name in private notes, not in the public deck.

If using an enterprise path such as Azure Personal Voice, follow its consent recording flow before creating the voice.

## 3. Generate The Pilot Clips

Use [AI Voice Pilot Script](../../raw-data/ai-voice-pilot-script.md) as the source text. Generate one file per segment:

| Segment | Output file |
|---------|-------------|
| Slide 12 | `assets/audio/voice-pilot/slide-12-demo-build-journey.mp3` |
| Slide 13A | `assets/audio/voice-pilot/slide-13a-pm-brainstorm-proof.mp3` |
| Slide 13B | `assets/audio/voice-pilot/slide-13b-pm-recommendation-proof.mp3` |
| Slide 14 | `assets/audio/voice-pilot/slide-14-demo-proof.mp3` |
| Slide 15 | `assets/audio/voice-pilot/slide-15-real-install-proof.mp3` |

Keep each clip short. Regenerate only the segment with the pronunciation or pacing issue.

## 4. QA Checklist

Before enabling a clip:

- [ ] The voice clearly resembles the presenter without sounding overacted.
- [ ] Vietnamese tone and English technical terms are understandable.
- [ ] No secret, token, private URL, enrollment payload, or customer data is spoken.
- [ ] The clip does not imply the presenter is live-speaking if disclosure has not been given.
- [ ] Volume is consistent across clips.
- [ ] The clip is short enough to keep audience attention.

Disclosure line before playback:

> "Đoạn audio sau là AI-generated voice clone từ giọng của mình, dùng để demo workflow."

## 5. Enable In The Deck

After a clip passes QA:

1. Put the MP3 in `assets/audio/voice-pilot/`.
2. Open `assets/audio/voice-pilot/manifest.json`.
3. Change that segment's `ready` value from `false` to `true`.
4. Run the deck locally with `python -m http.server 8000`.
5. Open `http://localhost:8000`.
6. Navigate to the slide and click the `AI voice` control.

The control is hidden while `ready` is `false`, so the live deck remains clean until the audio is intentionally activated.

## 6. Rehearsal Rule

Use AI voice as a proof moment, not as a full replacement for the presenter. The recommended pattern is:

1. Presenter introduces the idea.
2. Presenter discloses the audio is synthetic.
3. Play one short clip.
4. Presenter takes back control and explains why the workflow matters.
