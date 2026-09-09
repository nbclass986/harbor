[中文](README.md) | **English**

# Harbor

Harbor is an [Obsidian](https://obsidian.md) plugin. The same Markdown notes can be seen as a board, gallery, calendar, or table. Drag a card or change a date; the YAML on the note is updated.

Notes use **PRT**. The workflow follows **GTD** and **PARA**. UI language: auto / English / 简体中文. Notion sync is still in development.

No Buttons or QuickAdd dependency.

Harbor is available as a free public trial through GitHub and BRAT. Development source code is not currently published. Report problems through [Issues](https://github.com/nbclass986/harbor/issues).

> The files on this branch are the **0.1.2 desktop candidate**, not a published Release. BRAT installation and updates follow Releases. A successful local load is not BRAT acceptance.

## Workbench preview

![Harbor board in Blue Topaz light](media/board.png)

![View-switching step demonstration, not a real-time recording](media/view-steps.gif)

![Inbox to Open state-change steps, not a native drag recording](media/drag-steps.gif)

The state-change GIF uses actual application screenshots staged through the plugin write path; the original note status was restored. It is not a native pointer recording.

All notes shown are fictional. The GIF uses key frames and does not demonstrate speed. More: [Gallery](media/gallery.png) · [Calendar](media/calendar.png) · [Table](media/table.png) · [Dark board](media/board-dark.png) · [Project details](media/project.png) · [Create dialog](media/create.png) · [Properties](media/properties.png).

### Candidate status

- Follow-up dialog checks passed 33/33: three themes, task/project/resource create dialogs at 400/720/1080 px, and project details at 720/1080 px. Fixed missing visible keyboard focus on several buttons and project controls. These are component-width checks, not physical mobile or every application viewport.

- Consistent navigation, toolbar and theme-aware styling. Board, gallery, table and timeline render in batches; search and filters still cover every match. Scroll or use the keyboard-accessible Load more button.
- Fixes late-metadata cache invalidation, date writes on cancelled calendar drags, and project windows covering create dialogs.
- Local Windows / Obsidian 1.13.7 diagnostics: hot search, filtering and view switches had **33.5–55.4 ms P95 at 1,000 tasks**, and **33.6–75.5 ms at 5,000** (20 samples each). These use synthetic in-memory metadata and real rendering, including two animation frames. They exclude input debounce, initial disk indexing and application cold boot; they are not guarantees for other devices.
- Three directory modes, creation/writes, saved-view reload and 30 window-open/close cycles passed. All 54 focus, control hit-testing and scroll checks passed across default light/dark and Blue Topaz, 400/720/1200 px containers and six workbench pages. Fixed narrow-form actions covering the body field. This matrix does not cover every combination of every dialog.
- Follow-up tests with real Markdown files on disk: maximum hot-operation P95 **49.7 ms at 1,000 tasks**, **76.0 ms at 5,000**. Metadata was already ready; this is not application cold boot. All 54 toolbar/form horizontal-boundary checks across three themes, three container widths and six pages passed; this is not full interaction acceptance.
- The user verified native single-card, multi-card and calendar drops. After a process restart, 1,000 disk tasks became usable in **1,891.4 ms** from renderer navigation time origin (one sample; Windows file cache not flushed; excludes launcher time). Actual BRAT install/update checks follow a Release. Physical mobile devices and live Notion sync are outside this round.

---

## The idea

| View | What it does |
| --- | --- |
| Board | Columns by status, priority, or assignee. Drag a card to write YAML. |
| Gallery | Browse cards. |
| Calendar | Month / week / day / agenda / year. |
| Table | A workspace table; project notes can also embed Bases to list related tasks. |
| Timeline | Browse notes grouped by due-date month. |
| Saved views | Keep a filter and sort. |

| Type | YAML | Meaning |
| --- | --- | --- |
| Project | `type: project` | An outcome, with tasks under it |
| Resource | `type: resource` | Reference material |
| Task | `type: task` | A next action, optionally under a project |

Flow: capture in `Inbox`, then Task / Project / Resource, then `Inbox` → `Open` → `Doing` → `Done` on the board. Due dates and the calendar pick what to do today.

YAML keys can be renamed in settings, for example `due` → `截止日期`.

---

## Install

Use [BRAT](https://github.com/TfTHacker/obsidian42-brat): add [`nbclass986/harbor`](https://github.com/nbclass986/harbor), then enable **Harbor**. Updates: **BRAT: Check for updates to all beta plugins**.

Or download `main.js`, `manifest.json`, and `styles.css` from [Releases](https://github.com/nbclass986/harbor/releases) into `Vault/.obsidian/plugins/harbor/`. Starting with 0.1.2, Obsidian 1.9.10+ is required. Enable the **Bases** core plugin for related-task tables embedded in project notes.

Try it in a test vault first. Mobile behavior still needs full validation. Notion sync is experimental and disabled by default; enabling and running it exchanges selected note content with the Notion API.

---

## First launch

Harbor creates `Harbor/Harbor_TASK`, `Harbor/Harbor_PROJECT`, `Harbor/Harbor_RESOURCE`, and `Harbor/Harbor_BASE`. Open it from the ribbon, or run **Open Harbor**.

Default layout is **Hybrid**. **Central** only reads the three Harbor folders. **Scattered**: pick a folder when you create a project; Harbor makes a project folder with the project note, plus `task/` and `resource/` for notes linked to it.

---

## A task note

```yaml
---
type: task
status: Open
priority: P2
due: 2026-08-26
start: 2026-08-20
project:
  - "[[Draft paper]]"
assignee: Alice
participant: Bob
tags: writing
---
## Goal

Write the intro
```

Status: `Inbox`, `Open`, `Doing`, `Done`. Priority: `P1`, `P2`, `P3`. The file name is the note title; the body does not repeat it as an H1. New projects embed `Harbor_TASK.base`, and under Tasks you get **New task** and **New resource** (assignee and participant come from the project; new tasks default to Open and P2).

---

## What you can do

Switch board, gallery, and calendar. Drag cards. Filter, sort, and save views. The property bar title shows `task: filename` (or project / resource) and can change `type`. Open a project to see its tasks, or create a task or resource from the project note. Mini calendar. Tab, sidebar, or floating window. Templates use `{{title}}` and `{{body}}`; if `{{body}}` is missing, create-form text goes under the heading set in Settings.

---

## Settings

Language, YAML keys, property-bar fields, folders, file layout, vault scan, status / priority / people / tags, the three body templates, and **Insert body under heading** for each template.

---

## Feedback and license

Include your Harbor and Obsidian versions, operating system, reproduction steps, and a screenshot or sample note without private content. Do not upload Notion tokens or the plugin's `data.json`.

Starting with 0.1.2, the [Public Trial License](LICENSE) allows free personal and internal workplace use, but does not grant permission to redistribute, sell, or publish modified copies. Development source code is not currently published; any future source release will be announced separately. Versions 0.1.0 and 0.1.1 retain their original MIT license.
