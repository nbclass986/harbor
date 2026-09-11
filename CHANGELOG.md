# Changelog

## 0.1.8

- Rename the project property control to Property panel and simplify Chinese property-mapping terminology.
- Automatically create a starter project named 闪念胶囊 in the configured project folder on first initialization, including for existing installations upgrading to this version.
- Use the current YAML type mapping and project template. Preserve existing same-named notes and do not recreate the project after users delete it following initialization.

## 0.1.7

- Scan existing vault values using current YAML mappings to supplement status, priority, people and tag options. Merge and deduplicate without editing notes or replacing existing options.
- Combine assignee and participant values into the people list; report notes whose metadata is not indexed yet.
- Fix draggable board column widths, including project details, and remove the previous maximum-width restriction.
- Scope task and project boards to their own note type and remove the redundant data-source control.

Build, distribution and targeted logic checks passed. Live UI, BRAT updates,
mobile and full performance regression were not rerun for this patch.

## 0.1.6

- Replace the type setting with a four-row mapping table: type, task, resource, project. All right-hand values are editable and default to their internal names.
- Preserve custom type values across reloads and use them in note creation and recognition; quote special YAML keys and values safely.
- Stop store refreshes from rebuilding the active settings form; preserve scroll position for explicit settings redraws.
- Use a distinctive Harbor H ribbon shortcut to open the workspace.
- Hide Notion settings, commands and creation controls; suspend sync entry points while preserving saved configuration.

Build, distribution and targeted mocked-DOM/logic checks passed. Live UI acceptance,
BRAT updates, mobile and full performance regression were not rerun for this patch.

## 0.1.5

- Shorten the required-type setting description in Chinese and English.
- Clarify the default key (type), values (task, resource, project), and a TT mapping example.
- Copy-only patch; no functional changes from 0.1.4.

## 0.1.4

- Add Settings → Required type property to map the internal type field to a user's YAML key, such as TT.
- Preserve the configured type key when loading settings instead of resetting it to type.
- Use the mapped key for note creation, folder type stamping and note-kind recognition.
- Do not infer note kind from status alone or a folder path when the type property is missing.
- Update empty-board guidance to name the configured key and the correct settings section.

Type values remain task, project and resource. Existing notes need the mapped key
and a valid value; changing the mapping does not rename their properties. Existing
managed-folder rules can still fill or update type values using the mapped key.
Validated through production build and targeted logic tests; live settings UI,
BRAT updates and a full performance regression were not revalidated for this patch.

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
