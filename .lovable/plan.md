

## Plan: Font Swap + 5-Layer Neon Bubble Progress Bars

### 1. Font Changes

**Headings** → `'Cinzel', serif` (already imported, replace Cinzel Decorative usage)
**Body text** → `'Cormorant', serif` with light weight (300)

Update Google Fonts import in `src/index.css` to add `Cormorant:wght@300;400;500;600`.

Files to update fonts in:
- `src/index.css` — font import
- `src/components/singularity/TitlePanel.tsx` — Cinzel Decorative → Cinzel for title, Rajdhani → Cormorant for subtitle
- `src/components/singularity/AvatarSkillRow.tsx` — Rajdhani → Cormorant for labels, Cinzel for "SKILL POINTS" header
- `src/components/singularity/LevelBar.tsx` — Cinzel for "Level 1", Rajdhani → Cormorant for DPS text
- `src/components/singularity/CalendarPanel.tsx` — Cinzel for month name, Rajdhani → Cormorant for day labels/text
- `src/components/singularity/QuoteWall.tsx` — Cinzel for header, Cormorant for quote text
- `src/components/singularity/Overlays.tsx` — Cinzel for names, Cormorant for quote/body text
- `src/pages/Index.tsx` — Cormorant for footer text

### 2. Fix Progress Bars — 5-Layer Neon Bubble System

Add CSS classes to `src/index.css`:
- `.bar-track` — dark track with inset shadow, 22px height, rounded pill
- `.bar-fill` — 5-layer green gradient with multi-level neon glow box-shadows
- `.bar-gloss` — glossy gel overlay (top 45%, white gradient)
- `.bar-spec` — 1px specular highlight line at top

Update bar rendering in:
- `src/components/singularity/AvatarSkillRow.tsx` — replace current SkillBar with bar-track/bar-fill/bar-gloss/bar-spec structure, rename "Creativity"→"Scholar", "Health"→"Spartan"
- `src/components/singularity/LevelBar.tsx` — same bar structure for level progress

Remove the old `greenPulse` animation (replaced by static multi-layer glow).

