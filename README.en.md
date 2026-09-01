[中文](README.md) | **English**

# Harbor

Harbor is an [Obsidian](https://obsidian.md) plugin. The same Markdown notes can be seen as a board, gallery, calendar, or table. Drag a card or change a date; the YAML on the note is updated.

Notes use **PRT**. The workflow follows **GTD** and **PARA**. UI language: auto / English / 简体中文. Notion sync is still in development.

No Buttons or QuickAdd dependency.

---

## The idea

| View | What it does |
| --- | --- |
| Board | Columns by status, priority, or assignee. Drag a card to write YAML. |
| Gallery | Browse cards. |
| Calendar | Month / week / day / agenda. |
| Table | A Bases embed on a project lists its tasks. |
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

Or download `main.js`, `manifest.json`, and `styles.css` from [Releases](https://github.com/nbclass986/harbor/releases) into `Vault/.obsidian/plugins/harbor/`. Requires Obsidian 1.5.0+.

---

## First launch

Harbor creates `Harbor/Harbor_TASK`, `Harbor/Harbor_PROJECT`, `Harbor/Harbor_RESOURCE`, and `Harbor/Harbor_BASE`. Open it from the ribbon, or run **Open Harbor**.

Default layout is **Hybrid**. **Central** and **Scattered** are in settings.

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

## License

MIT
