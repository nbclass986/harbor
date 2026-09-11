[中文](README.md) | **English**

# Harbor

**Turn notes into action. Give your projects a place to land.**

Harbor is a local-first workspace for [Obsidian](https://obsidian.md) that brings tasks, projects and reference material together. View the same Markdown notes as a board, gallery, calendar, table or timeline. Changes to properties such as status and dates are written back to the notes' YAML.

From capturing an idea to moving a project forward, work inside your existing vault instead of maintaining a separate task database.

[Download latest](https://github.com/nbclass986/harbor/releases/latest) · [Installation](#installation) · [Report an issue](https://github.com/nbclass986/harbor/issues) · [Changelog](CHANGELOG.md)

> Currently a free public trial; development source is not published. Requires Obsidian **1.9.10+**. Tested locally on desktop; physical mobile testing and BRAT installation/automatic-update acceptance remain pending.

![Harbor workspace in a light theme](media/board.png)

## What you can do

- **Turn ideas into next actions.** Capture in Inbox, then move tasks through Open, Doing and Done.
- **Organize work around projects.** Link tasks and resources to a project and review them together.
- **Choose the right view.** Track progress on a board, plan dates on a calendar, inspect properties in a table or browse cards in a gallery.
- **Keep your own property names.** Map existing YAML keys to Harbor fields without renaming everything for the plugin.
- **Build your workspace.** Filter, sort, choose visible properties and save useful views. Open Harbor in a tab, sidebar or floating window.

Supports English, Simplified Chinese and automatic language selection. No Buttons or QuickAdd dependency.

## See it in action

These images show real Harbor components inside Obsidian with fictional data. **GIFs are key-frame step demonstrations, not real-time recordings or evidence of operation speed or successful YAML writes.** [Media notes](media/README.md)

### One collection, different perspectives

Switch between board, gallery, table and calendar to bring the information you need into focus.

![Board, gallery, table and calendar step demonstration](media/view-steps.gif)

### From Inbox to Open

Capture first, decide what comes next. These frames show the before-and-after states, not native pointer input.

![Inbox to Open state-change step demonstration](media/drag-steps.gif)

### Projects, properties and creation

Review related tasks, edit your own YAML properties and add the next action.

![Project details, mapped properties and create dialog step demonstration](media/detail-steps.gif)

<details>
<summary>See the dark theme and more screenshots</summary>

![Harbor workspace in the default dark theme](media/board-dark.png)

[Gallery](media/gallery.png) · [Calendar](media/calendar.png) · [Table](media/table.png) · [Project details](media/project.png) · [Create dialog](media/create.png) · [Property inspector](media/properties.png)

</details>

## Installation

Try Harbor in a test vault first. Enable the **Bases** core plugin for related-task tables embedded in project notes.

### Install with BRAT

1. Install and enable [BRAT](https://github.com/TfTHacker/obsidian42-brat).
2. Run **BRAT: Add a beta plugin for testing**.
3. Enter `nbclass986/harbor`.
4. Enable **Harbor** in Community plugins after installation.

Use **BRAT: Check for updates to all beta plugins** for updates. Actual BRAT installation and automatic updates have not yet been validated in this test round.

### Manual installation

Download `main.js`, `manifest.json` and `styles.css` from the [Release](https://github.com/nbclass986/harbor/releases/latest). Place them in your vault's `.obsidian/plugins/harbor/` folder, reload Obsidian and enable the plugin.

Use these three attached files, not GitHub's automatically generated “Source code” archives.

## Start with one project

1. Click the Harbor ribbon icon or run **Open Harbor**.
2. Create a project, such as “Launch my website”.
3. Add a task, such as “Draft homepage copy”, and link it to the project.
4. Set a status, priority and dates, then arrange your work on the board or calendar.
5. Configure filters and sorting, and save a view you can return to.

Harbor uses three note types: **Project** for an outcome, **Task** for a next action and **Resource** for reference material. The workflow draws on PRT, GTD and PARA, but you do not need to learn those methods before getting started.

Home provides Coming, Personal, Fleeting and Overdue sections. Each keeps its own search, filters, sorting, visible properties and layout. These controls work within the section's existing task scope and do not change other views.

## Keep your own YAML names

Field mapping connects a **Harbor internal field** to the **actual YAML key in your notes**.

| Harbor internal field | Example YAML key | Property inspector label |
| --- | --- | --- |
| `status` | `workflow_state` | `workflow_state` |
| `due` | `deadline` | `deadline` |
| `assignee` | `负责人` | `负责人` |

If your notes use `deadline`, enter `deadline` in the mapping for `due`. Harbor reads and writes that key, and the property inspector displays `deadline` rather than a separate display alias.

**Changing a mapping does not bulk-rename existing notes.** Check the actual YAML keys before configuring their mappings.

<details>
<summary>Example task note using the default fields</summary>

This example uses default keys. If you change a mapping, use the corresponding actual key in your notes.

```markdown
---
type: task
status: Open
priority: P2
due: 2026-09-25
start: 2026-09-18
project:
  - "[[Launch my website]]"
assignee: Alex
tags: writing
---
## Goal

Draft homepage copy.
```

The file name is the note title. Default statuses are `Inbox`, `Open`, `Doing` and `Done`; priorities are `P1`, `P2` and `P3`.

</details>

## Fit Harbor to your vault

| Directory mode | Organization |
| --- | --- |
| Hybrid (default) | Creates notes in Harbor's category folders and also recognizes notes matching the type configuration elsewhere in the vault |
| Central | Reads only the configured task, project and resource folders |
| Scattered | Lets you choose a location for a new project, then creates its folder with `task` and `resource` subfolders |

Default folders are `Harbor/Harbor_TASK`, `Harbor/Harbor_PROJECT`, `Harbor/Harbor_RESOURCE` and `Harbor/Harbor_BASE`. They can be changed in Settings.

You can also configure statuses, priorities, people, tags, property-inspector fields and templates for all three note types. Templates support `{{title}}` and `{{body}}`; without `{{body}}`, text from the create form is inserted under the configured heading.

Colors follow Obsidian's theme, while layout styles stay scoped to Harbor. Default light, default dark and Blue Topaz have been checked; compatibility with every third-party theme or custom CSS snippet is not guaranteed.

## Current status and limitations

- **Desktop:** Core features, field mapping, themes and narrow containers were checked on Windows / Obsidian 1.13.7. Native single-card, multi-card and calendar drops were confirmed by the user on their machine.
- **Mobile:** Physical mobile testing is pending. A narrow-container test is not a phone test.
- **BRAT:** Installation assets are available in Releases; client installation and automatic updates still need separate validation.
- **Notion:** Sync is experimental and disabled by default. Enabling and running it exchanges selected note content with the Notion API. Live sync was not tested in this round.

## Feedback and license

Questions, ideas and bug reports are welcome in [Issues](https://github.com/nbclass986/harbor/issues). Include Harbor and Obsidian versions, your operating system, reproduction steps and a screenshot or sample note with private information removed. **Do not upload Notion tokens or the plugin's `data.json`.**

The current [Public Trial License](LICENSE) allows free personal and internal workplace use, but does not grant permission to redistribute, sell or publish modified copies. Development source is not currently published; any future source release will be announced separately. Earlier versions released under MIT retain their original license.
