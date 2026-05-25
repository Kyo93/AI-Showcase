import os

file_path = r"c:\Users\Ocean\Desktop\AI Sharing Present\style.css"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

target = """.promise-rail-item p {
    margin: 0;
    color: var(--muted) !important;
}"""

# New styles to insert
new_styles = """

.promise-rail-item p {
    margin: 0;
    color: var(--muted) !important;
    font-size: 12.5px;
    line-height: 1.36;
    font-weight: 400;
}

.demo-proof-strip {
    margin-top: 18px;
    border-color: rgba(255, 87, 34, 0.20) !important;
    background:
        linear-gradient(90deg, rgba(255, 87, 34, 0.07), rgba(71, 142, 247, 0.055)),
        #ffffff !important;
}

.demo-proof-strip > i {
    display: inline-grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    color: #ffffff !important;
    background: var(--shopee-orange);
}

.demo-proof-strip strong {
    color: var(--orange-ink) !important;
}

/* Slide 4: update story */

.ai-update-showcase {
    display: grid;
    grid-template-columns: minmax(390px, 0.94fr) minmax(0, 1.06fr);
    gap: 20px;
    align-items: stretch;
}

.ai-shift-visual {
    min-height: 430px;
    color: #ffffff;
    background:
        linear-gradient(90deg, rgba(20, 146, 253, 0.04) 1px, transparent 1px),
        linear-gradient(0deg, rgba(20, 146, 253, 0.04) 1px, transparent 1px),
        radial-gradient(circle at 72% 45%, rgba(0, 232, 255, 0.15), transparent 40%),
        linear-gradient(135deg, var(--sea-deep), var(--sea-navy)) !important;
    background-size: 24px 24px, 24px 24px, auto, auto;
}

.visual-label {
    display: inline-flex;
    padding: 7px 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.78);
    background: rgba(255, 255, 255, 0.07);
    font-size: 11px;
    font-weight: 800;
}

.chat-node,
.agent-core,
.agent-orbit {
    position: absolute;
    display: grid;
    place-items: center;
    text-align: center;
}

.chat-node {
    left: 34px;
    top: 168px;
    width: 116px;
    height: 116px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 16px;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
    gap: 7px;
}

.chat-node i {
    font-size: 28px;
    color: var(--sea-blue);
}

.chat-node span {
    color: rgba(255, 255, 255, 0.78);
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 800;
}

.shift-arrow {
    position: absolute;
    left: 166px;
    top: 206px;
    color: rgba(255, 255, 255, 0.70);
    font-size: 36px;
}

.agent-core {
    right: 64px;
    top: 130px;
    width: 170px;
    height: 170px;
    border: 1px solid rgba(0, 232, 255, 0.4);
    border-radius: 50%;
    color: #ffffff;
    background: radial-gradient(circle at 35% 30%, var(--sea-blue), var(--sea-navy));
    box-shadow: 0 0 30px rgba(0, 232, 255, 0.25), inset 0 0 15px rgba(255, 255, 255, 0.1);
}

.agent-core i {
    font-size: 34px;
    color: var(--sea-cyan);
}

.agent-core strong {
    color: #ffffff;
    font-family: var(--font-heading);
    font-size: 24px;
}

.agent-core span {
    color: rgba(0, 232, 255, 0.85);
    font-size: 12.5px;
    font-weight: 700;
}

.agent-orbit {
    width: 78px;
    height: 56px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 9px;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(4px);
    font-size: 12px;
    font-weight: 600;
}

/* Orbit connection lines directed to agent-core */
.agent-orbit::before {
    content: "";
    position: absolute;
    height: 2px;
    border-top: 1.5px dotted rgba(0, 232, 255, 0.28);
    pointer-events: none;
    z-index: -1;
}

.orbit-model::before {
    width: 80px;
    top: 52px;
    left: 62px;
    transform: rotate(32deg);
    transform-origin: left center;
}

.orbit-code::before {
    width: 70px;
    top: 48px;
    right: 60px;
    transform: rotate(145deg);
    transform-origin: right center;
}

.orbit-tools::before {
    width: 70px;
    bottom: 48px;
    right: 60px;
    transform: rotate(-145deg);
    transform-origin: right center;
}

.orbit-guard::before {
    width: 80px;
    bottom: 52px;
    left: 62px;
    transform: rotate(-32deg);
    transform-origin: left center;
}

/* Individual orbit color highlights */
.orbit-model {
    right: 172px;
    top: 55px;
    border-color: rgba(20, 146, 253, 0.4) !important;
}

.orbit-code {
    right: 18px;
    top: 85px;
    border-color: rgba(168, 85, 247, 0.4) !important;
}

.orbit-tools {
    right: 18px;
    bottom: 82px;
    border-color: rgba(0, 232, 255, 0.4) !important;
}

.orbit-guard {
    right: 172px;
    bottom: 46px;
    border-color: rgba(238, 77, 45, 0.4) !important;
}

.agent-orbit i {
    color: var(--sea-blue);
    font-size: 18px;
}

.orbit-tools i {
    color: var(--sea-cyan);
}

.orbit-guard i {
    color: var(--shopee-orange);
}

.agent-orbit span {
    color: rgba(255, 255, 255, 0.78);
}

.update-story {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
}

.trend-card {
    border-left: 4px solid var(--accent-color) !important;
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.trend-card:nth-child(1) { --accent-color: var(--sea-blue); }
.trend-card:nth-child(2) { --accent-color: var(--shopee-orange); }
.trend-card:nth-child(3) { --accent-color: var(--sea-cyan); }
.trend-card:nth-child(4) { --accent-color: var(--success); }

/* Custom tint backgrounds for icons */
.trend-card:nth-child(1) .trend-icon {
    background: rgba(20, 146, 253, 0.08) !important;
    color: var(--sea-blue) !important;
}
.trend-card:nth-child(2) .trend-icon {
    background: rgba(238, 77, 45, 0.08) !important;
    color: var(--shopee-orange) !important;
}
.trend-card:nth-child(3) .trend-icon {
    background: rgba(0, 232, 255, 0.12) !important;
    color: var(--sea-blue-ink) !important;
}
.trend-card:nth-child(4) .trend-icon {
    background: rgba(0, 165, 74, 0.08) !important;
    color: var(--success) !important;
}

.trend-card.visible:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(5, 0, 126, 0.06) !important;
}

.story-card {
    min-height: 206px;
}

.story-card h3 {
    margin: 12px 0 8px;
    font-size: 21px;
}

.story-card p {
    margin: 0;
    color: var(--muted) !important;
    font-size: 13px;
    line-height: 1.42;
    font-weight: 400;
}

.trend-icon {
    display: inline-grid;
    place-items: center;
    width: 40px;
    height: 40px;
    margin-top: 14px;
    border-radius: 8px;
    color: #ffffff;
    background: var(--sea-navy);
}

.takeaway-strip {
    border-left-color: var(--shopee-orange) !important;
}

.source-strip {
    min-height: 42px;
    margin-top: 10px;
    padding: 8px 14px !important;
    border-left: 0 !important;
    background: rgba(255, 255, 255, 0.72) !important;
    box-shadow: none;
}

.source-strip span {
    color: var(--soft);
    font-size: 11.5px;
    line-height: 1.35;
    font-weight: 600;
}

.table-header,
.table-row {
    display: grid;
    grid-template-columns: 0.78fr 1.18fr 1.34fr;
}

.table-header {
    color: #ffffff !important;
    background: var(--sea-navy) !important;
    font-weight: 700;
}"""

# Normalize newlines to do matching properly
content_normalized = content.replace("\r\n", "\n")
target_normalized = target.replace("\r\n", "\n")

if target_normalized in content_normalized:
    updated = content_normalized.replace(target_normalized, new_styles)
    # Write back in standard Windows format if needed or original f.write
    with open(file_path, "w", encoding="utf-8", newline="\r\n") as f:
        f.write(updated)
    print("SUCCESS")
else:
    print("TARGET NOT FOUND")
