# Changelog

## 0.1.3

- Compact project-window menu immediately before Close; remove the dedicated mode-switch rail.
- Restore full-color project title bars with 24 subdued colors and collision avoidance for concurrently open projects.
- Collapse floating project details to a title-sized bar; restore the previous expanded dimensions.
- Keep other workspace views interactive while a project is parked.
- Add a fictional-data docking walkthrough GIF to both READMEs.

Type checking, production build, distribution checks and targeted menu/collapse/color
logic checks passed. The docking walkthrough was checked in real Obsidian.
BRAT installation/automatic updates, physical mobile testing and live Notion sync
remain unverified; this update does not claim a full performance regression run.

## 0.1.2

Public trial. Local desktop checks completed; BRAT install/update acceptance pending.

- Add independent Home-section toolbars with persisted search, filters, sorting, property visibility and layouts.
- Display mapped user YAML keys verbatim in the property inspector; verify eight non-default field names.
- Refine theme-derived surfaces, borders, property forms and floating windows without global note CSS overrides.

- Free public trial through BRAT; development source remains private.
- Updated board and calendar UI, including year view, table and timeline layouts.
- Scattered layout creates a project folder with task/resource subfolders.
- Experimental Notion push/pull and pending sync queue; disabled by default.
- Requires Obsidian 1.9.10+; enable Bases for embedded project task tables.
- Distribution checks reject unexpected public files, source maps, and version mismatches.
- Public Trial License applies to this version; earlier MIT releases retain their license.

- Theme-aware workbench navigation, toolbars, cards, forms and keyboard focus.
- Bounded first paint through progressive loading; all matches remain searchable.
- Fix late metadata cache invalidation and cancelled calendar drags writing dates.
- Fix floating-window layers covering Obsidian create dialogs.
- Fix inline create-form actions obscuring the body field in narrow sidebars.
- Fix missing keyboard focus indicators in create dialogs and project detail windows; 33 follow-up theme/width checks passed.
- Curated fictional-demo screenshots and a clearly labeled key-frame GIF.

Local desktop candidate checks are documented in the README. The user verified
native single/multi-card and calendar drops. All 54 theme/size focus, hit-testing
and scroll checks passed after the narrow-form fix. One measured process-cold
startup reached first usable at 1.891 s (OS file cache not flushed).
BRAT install/update acceptance remains separate from local desktop checks.

## 0.1.1 — 2026-09-01

- Published BRAT release with project create buttons and property-bar type editing.
- Released under MIT.

## 0.1.0 — 2026-08-31

- Initial published release, under MIT.
