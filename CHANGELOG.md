# Changelog

## 0.1.2

Local release candidate; not yet published.

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
No 0.1.2 Release has been created; BRAT install/update acceptance is pending.

## 0.1.1 — 2026-09-01

- Published BRAT release with project create buttons and property-bar type editing.
- Released under MIT.

## 0.1.0 — 2026-08-31

- Initial published release, under MIT.
