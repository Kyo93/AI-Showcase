const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const outDir = path.resolve(__dirname, '..', 'assets', 'images');

const assets = [
  {
    file: 'skill-superpowers.png',
    accent: '#1492FD',
    accentSoft: 'rgba(20, 146, 253, 0.12)',
    repo: 'github.com/obra/superpowers',
    label: 'PUBLIC GITHUB REFERENCE',
    title: 'Superpowers',
    subtitle: 'Agentic skills framework and software development methodology',
    focus: 'Task -> Spec -> Implementation -> Review',
    sourceNote: 'Based on README workflow: brainstorm, plan, execute, TDD, review, finish.',
    command: '/plugin install superpowers@superpowers-marketplace',
    steps: ['Brainstorm', 'Write plan', 'Execute', 'TDD', 'Code review', 'Finish'],
    sideTitle: 'What the agent learns',
    bullets: ['Mandatory workflow before coding', 'Small tasks with verification steps', 'Evidence before completion']
  },
  {
    file: 'skill-gsd.png',
    accent: '#00A54A',
    accentSoft: 'rgba(0, 165, 74, 0.12)',
    repo: 'github.com/gsd-build/gsd-2',
    label: 'PUBLIC DOCS REFERENCE',
    title: 'GSD Skills',
    subtitle: 'Catalog-driven skill loading for matching tasks and tech stacks',
    focus: 'Catalog -> Add -> Check -> Update',
    sourceNote: 'Based on docs/user-docs/skills.md: skill directories, install CLI, onboarding catalog.',
    command: 'npx skills add <repo> --all',
    steps: ['Detect stack', 'Recommend packs', 'Install skills', 'Resolve global/project', 'Run checks'],
    sideTitle: 'Operational shape',
    bullets: ['~/.agents/skills for global skills', '.agents/skills for project skills', 'gsd init suggests relevant packs']
  },
  {
    file: 'skill-codemaster.png',
    accent: '#EE4D2D',
    accentSoft: 'rgba(238, 77, 45, 0.12)',
    repo: 'github.com/tody-agent/codymaster',
    label: 'PUBLIC GITHUB REFERENCE',
    title: 'CodyMaster',
    subtitle: 'CM workflow layer for planning, execution, gates and handover',
    focus: 'Start -> Tasks -> Gate -> Handover',
    sourceNote: 'Based on README: /cm-start pipeline, status/dashboard commands, 50+ skills package.',
    command: 'npm install -g codymaster && cm',
    steps: ['/cm-start', 'Plan', 'Task list', 'Execute', 'Gate / handover'],
    sideTitle: 'Command surface',
    bullets: ['/cm-status and /cm-dashboard', '/cm-safe-deploy and /cm-secret-shield', 'Profiles: core, growth, full, knowledge']
  }
];

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

function renderAsset(asset) {
  const steps = asset.steps
    .map((step, index) => `
      <div class="step">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <strong>${escapeHtml(step)}</strong>
      </div>
    `)
    .join('');

  const bullets = asset.bullets
    .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
    .join('');

  return `
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    :root {
      --navy: #05007E;
      --ink: #172135;
      --muted: #637087;
      --line: #DCE5F2;
      --paper: #FFFFFF;
      --panel: #F7FAFE;
      --accent: ${asset.accent};
      --accent-soft: ${asset.accentSoft};
    }

    * { box-sizing: border-box; }

    body {
      width: 900px;
      height: 720px;
      margin: 0;
      background:
        linear-gradient(135deg, rgba(20, 146, 253, 0.08), transparent 38%),
        linear-gradient(315deg, rgba(238, 77, 45, 0.08), transparent 44%),
        #F3F7FC;
      color: var(--ink);
      font-family: "Segoe UI", Arial, sans-serif;
    }

    .frame {
      width: 100%;
      height: 100%;
      padding: 30px;
    }

    .card {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border: 1px solid var(--line);
      border-top: 8px solid var(--accent);
      border-radius: 24px;
      background: var(--paper);
      box-shadow: 0 24px 60px rgba(5, 0, 126, 0.14);
    }

    .card::before {
      position: absolute;
      inset: 0;
      content: "";
      background:
        radial-gradient(circle at 76% 24%, var(--accent-soft), transparent 34%),
        linear-gradient(90deg, rgba(5, 0, 126, 0.045), transparent 48%);
      pointer-events: none;
    }

    .topbar {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 58px;
      padding: 0 24px;
      border-bottom: 1px solid var(--line);
      background: rgba(247, 250, 254, 0.88);
    }

    .repo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: Consolas, "SFMono-Regular", monospace;
      font-size: 19px;
      font-weight: 700;
      color: var(--navy);
    }

    .repo-mark {
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background: var(--accent);
      font-size: 15px;
      font-weight: 900;
      letter-spacing: 0;
    }

    .source-label {
      padding: 7px 10px;
      border: 1px solid rgba(99, 112, 135, 0.18);
      border-radius: 999px;
      background: #fff;
      color: var(--muted);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.08em;
    }

    .content {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 292px;
      gap: 18px;
      padding: 28px 28px 92px;
    }

    h1 {
      margin: 0;
      color: var(--navy);
      font-size: 50px;
      line-height: 0.95;
      letter-spacing: 0;
    }

    .subtitle {
      max-width: 500px;
      margin: 12px 0 22px;
      color: var(--muted);
      font-size: 20px;
      line-height: 1.25;
      font-weight: 600;
    }

    .focus {
      display: inline-flex;
      align-items: center;
      margin-bottom: 18px;
      padding: 10px 12px;
      border: 1px solid color-mix(in srgb, var(--accent), #fff 55%);
      border-radius: 14px;
      background: var(--accent-soft);
      color: var(--navy);
      font-family: Consolas, "SFMono-Regular", monospace;
      font-size: 18px;
      font-weight: 800;
    }

    .workflow {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      max-width: 500px;
    }

    .step {
      display: flex;
      align-items: center;
      min-height: 52px;
      gap: 10px;
      padding: 9px 10px;
      border: 1px solid var(--line);
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.88);
    }

    .step span {
      display: grid;
      place-items: center;
      width: 34px;
      height: 34px;
      flex: 0 0 auto;
      border-radius: 12px;
      background: var(--navy);
      color: #fff;
      font-family: Consolas, "SFMono-Regular", monospace;
      font-size: 14px;
      font-weight: 900;
    }

    .step strong {
      color: var(--ink);
      font-size: 17px;
      line-height: 1.05;
      font-weight: 800;
    }

    .side {
      display: grid;
      align-content: start;
      gap: 16px;
      padding: 18px;
      border: 1px solid var(--line);
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.76);
    }

    .terminal {
      padding: 16px;
      border-radius: 16px;
      background: #0B1026;
      color: #D9F7FF;
      font-family: Consolas, "SFMono-Regular", monospace;
      font-size: 16px;
      font-weight: 800;
      line-height: 1.3;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
    }

    .terminal span { color: var(--accent); }

    .side h2 {
      margin: 0;
      color: var(--navy);
      font-size: 25px;
      line-height: 1.05;
      letter-spacing: 0;
    }

    ul {
      display: grid;
      gap: 14px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      position: relative;
      padding-left: 22px;
      color: var(--ink);
      font-size: 17px;
      line-height: 1.22;
      font-weight: 650;
    }

    li::before {
      position: absolute;
      left: 0;
      top: 0.5em;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent);
      content: "";
    }

    .foot {
      position: absolute;
      left: 28px;
      right: 28px;
      bottom: 22px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding-top: 18px;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: 13px;
      line-height: 1.25;
      font-weight: 650;
    }

    .foot code {
      color: var(--navy);
      font-family: Consolas, "SFMono-Regular", monospace;
      font-size: 12px;
      font-weight: 800;
    }
  </style>
</head>
<body>
  <div class="frame">
    <article class="card">
      <div class="topbar">
        <div class="repo"><span class="repo-mark">GH</span>${escapeHtml(asset.repo)}</div>
        <div class="source-label">${escapeHtml(asset.label)}</div>
      </div>
      <main class="content">
        <section>
          <h1>${escapeHtml(asset.title)}</h1>
          <p class="subtitle">${escapeHtml(asset.subtitle)}</p>
          <div class="focus">${escapeHtml(asset.focus)}</div>
          <div class="workflow">${steps}</div>
        </section>
        <aside class="side">
          <div class="terminal"><span>$</span> ${escapeHtml(asset.command)}</div>
          <h2>${escapeHtml(asset.sideTitle)}</h2>
          <ul>${bullets}</ul>
        </aside>
      </main>
      <footer class="foot">
        <span>${escapeHtml(asset.sourceNote)}</span>
        <code>${escapeHtml(asset.repo)}</code>
      </footer>
    </article>
  </div>
</body>
</html>
`;
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 900, height: 720 },
    deviceScaleFactor: 1
  });

  for (const asset of assets) {
    await page.setContent(renderAsset(asset), { waitUntil: 'load' });
    await page.screenshot({
      path: path.join(outDir, asset.file),
      clip: { x: 0, y: 0, width: 900, height: 720 },
      animations: 'disabled'
    });
  }

  await browser.close();
})();
