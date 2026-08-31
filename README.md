# Harbor

Harbor 是一个 [Obsidian](https://obsidian.md) 插件。

核心是：在 Obsidian 里做出 Notion 那种**同一批笔记、多种视图**。看板、画廊、日历、表格看的是库里的 Markdown，拖卡片、改日期、改状态，写回同一份 YAML。不另建数据库，也不必把工作搬到 Notion 才能换视图。

笔记按 **PRT** 分类，推进方式对齐 **GTD** 和 **PARA**（项目要出结果，资料只备查，任务是下一步动作）。

界面语言：自动 / English / 简体中文。把笔记推到 Notion 是可选的，默认关闭。

---

## 核心思想

**同一批笔记，多种视图**（Notion 数据库那种用法）：

| 视图 | 做什么 |
| --- | --- |
| 看板 | 按状态、优先级或负责人分列，拖卡片改 YAML |
| 画廊 | 一张张卡片浏览 |
| 日历 | 月 / 周 / 日 / 议程，按截止日期排 |
| 表格 | 项目笔记里嵌入 Bases，看挂在该项目下的任务 |
| 已保存视图 | 筛选和排序记住，下次直接打开 |

**PRT** 把事情拆成三类，互不混用。这也是 **PARA** 里「项目 / 资料」和 **GTD** 里「下一步行动」合在一起的写法：

| 类型 | YAML | 是什么 |
| --- | --- | --- |
| Project 项目 | `type: project` | 要完成的结果。下面挂若干任务。 |
| Resource 资料 | `type: resource` | 参考材料、链接、文件说明。不推进进度。 |
| Task 任务 | `type: task` | 下一步能做的动作。可以属于某个项目。 |

**GTD**（Getting Things Done）决定这三类怎么流转：

1. 先收进 `Inbox`，先不分类。
2. 澄清：能做的写成 Task；要出结果的写成 Project；只备查的写成 Resource。
3. 任务挂到项目上，看板上按状态推进：`Inbox` → `Open` → `Doing` → `Done`。
4. 用截止日期、日历和迷你日历决定今天做什么；逾期单独看。

类型只有这三种。字段名可以在设置里换成你自己的 YAML 键（例如用 `截止日期` 代替 `due`），已有文件不会被批量改写。

---

## 安装

还没上架官方社区插件市场。现在用 [BRAT](https://github.com/TfTHacker/obsidian42-brat)：

1. 在 Obsidian 社区插件里安装 **BRAT**。
2. 命令面板运行 **BRAT: Add a beta plugin for testing**。
3. 填 [`nbclass986/harbor`](https://github.com/nbclass986/harbor)。
4. 到「设置 → 第三方插件」启用 **Harbor**。

更新：命令面板运行 **BRAT: Check for updates to all beta plugins**。

也可以从 [Releases](https://github.com/nbclass986/harbor/releases) 下载 `main.js`、`manifest.json`、`styles.css`，放到 `你的库/.obsidian/plugins/harbor/`，再启用。需要 Obsidian 1.5.0 或更高。

---

## 第一次打开

启用后会自动建这些文件夹：

| 文件夹 | 用途 |
| --- | --- |
| `Harbor/Harbor_TASK` | 新建任务 |
| `Harbor/Harbor_PROJECT` | 新建项目 |
| `Harbor/Harbor_RESOURCE` | 新建资料 |
| `Harbor/Harbor_BASE` | 三类笔记的 Bases 表 |

点左侧功能区网格图标，或运行命令 **打开 Harbor**。

默认归档是**混合式**：新建进上面三个文件夹；库里别处只要带了正确 `type`，也会上看板。

- **集中式**：只看这三个文件夹。
- **散落式**：新建进收件箱，看板仍按 `type` 找笔记。

库里已有别的任务系统时，保持「扫描整个库」关闭。

---

## 一条任务长什么样

```yaml
---
type: task
status: Open
priority: P2
due: 2026-08-26
start: 2026-08-20
project:
  - "[[论文初稿]]"
assignee: 张三
participant: 李四
tags: writing
---
# 写引言
```

默认状态：`Inbox`、`Open`、`Doing`、`Done`。默认优先级：`P1`、`P2`、`P3`。

新建项目时，正文会嵌入 `Harbor_TASK.base` 里的项目任务表。链到该项目的任务会以 Bases 表格出现在项目笔记里。

---

## 能做什么

- **Notion 式多视图**：同一批任务/项目/资料，在看板、画廊、日历之间切换；项目里用 Bases 表格看关联任务。
- **拖卡片即改 YAML**：换列、改日期，写回笔记。
- **筛选和排序**：状态、优先级、负责人、标签、项目、截止日期、开始日期；可保存视图。
- **属性条**：打开 PRT 笔记时，在编辑器上方改字段。
- **项目详情**：点项目卡片，看挂在它下面的任务。
- **迷你日历**：侧栏看近期和逾期。
- **窗口**：标签页、侧栏或浮动窗。
- **模板**：新建时插入正文，可用 `{{title}}`。
- **推到 Notion（可选）**：若还要云端副本，可把笔记推到三个 Notion 数据库，页面地址写回 `notion-link`。多视图本身不需要开这个。

---

## 命令

| 命令 | 作用 |
| --- | --- |
| 打开 Harbor | 在标签页打开主界面 |
| 打开浮动窗口 / 在侧栏打开 / 在标签页打开 | 换窗口 |
| 打开迷你日历 | 侧栏日历 |
| 新建任务 / 新建项目 / 新建资源 | 弹出新建卡片 |
| 快速新建任务 | 直接建一条任务 |
| 打开属性 | 重新打开属性条 |
| 同步当前笔记到 Notion | 需先打开 Notion |
| 同步已联动笔记到 Notion | 批量推已有链接的笔记 |
| 打开 Notion 页面 | 打开当前笔记对应的 Notion 页 |

---

## 设置

- 语言、Frontmatter 对照、属性条显示哪些字段。
- 文件夹路径、归档方式、是否扫描全库。
- 状态、优先级、人员、标签。
- 三类笔记的正文模板。
- Notion：token，以及任务 / 项目 / 资料三个数据库 ID。

---

## 数据

笔记就是库里的 Markdown。关掉 Notion 时不访问外网。打开后，只有执行同步命令才会请求 Notion API。

---

## License

MIT

---

# English

Harbor is an [Obsidian](https://obsidian.md) plugin.

The point is Notion-style **many views on the same notes**, inside Obsidian. Board, gallery, calendar, and table all read the Markdown in your vault. Drag a card or change a date, and the same YAML is written back. You do not need a separate database, and you do not need to move the work to Notion just to switch views.

Notes are typed with **PRT**. The workflow follows **GTD** and **PARA**: projects have an outcome, resources are reference, tasks are next actions.

UI language: auto / English / 简体中文. Pushing notes to Notion is optional and off by default.

## The idea

**One set of notes, several views** (the Notion-database habit):

| View | What it does |
| --- | --- |
| Board | Columns by status, priority, or assignee. Drag a card to write YAML. |
| Gallery | Browse cards. |
| Calendar | Month / week / day / agenda by due date. |
| Table | A Bases embed on a project note lists tasks linked to that project. |
| Saved views | Keep a filter and sort, open it again later. |

**PRT** splits work into three types and does not mix them. That is PARA’s project / resource split plus GTD’s next action:

| Type | YAML | Meaning |
| --- | --- | --- |
| Project | `type: project` | An outcome. Tasks hang under it. |
| Resource | `type: resource` | Reference material. It does not move a status. |
| Task | `type: task` | A next action. It can belong to a project. |

**GTD** (Getting Things Done) is how those types flow:

1. Capture into `Inbox` first.
2. Clarify: doable work becomes a Task; an outcome becomes a Project; reference becomes a Resource.
3. Link tasks to projects. Advance status on the board: `Inbox` → `Open` → `Doing` → `Done`.
4. Use due dates, the calendar, and the mini calendar to choose what to do today. Overdue items are listed separately.

Types are fixed. You can map YAML keys in settings. Existing files are not rewritten in bulk.

## Install

Harbor is not in the official Community Plugins catalog yet. Use [BRAT](https://github.com/TfTHacker/obsidian42-brat):

1. Install **BRAT** from Community plugins.
2. Command palette: **BRAT: Add a beta plugin for testing**.
3. Paste [`nbclass986/harbor`](https://github.com/nbclass986/harbor).
4. Enable **Harbor** under Settings → Community plugins.

Updates: **BRAT: Check for updates to all beta plugins**.

Manual install: download `main.js`, `manifest.json`, and `styles.css` from [Releases](https://github.com/nbclass986/harbor/releases), put them in `Vault/.obsidian/plugins/harbor/`, then enable the plugin. Requires Obsidian 1.5.0+.

## First launch

Harbor creates `Harbor/Harbor_TASK`, `Harbor/Harbor_PROJECT`, `Harbor/Harbor_RESOURCE`, and `Harbor/Harbor_BASE`. Open it from the ribbon grid icon, or run **Open Harbor**.

Default layout is **Hybrid**: new notes go into those folders; typed notes elsewhere still appear on the board. **Central** only scans those folders. **Scattered** creates into the inbox and still finds notes by `type`. Leave “Scan entire vault” off if another task system already lives in the vault.

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
# Write the intro
```

Status defaults: `Inbox`, `Open`, `Doing`, `Done`. Priority defaults: `P1`, `P2`, `P3`. New projects embed the project-tasks view from `Harbor_TASK.base`.

## What you can do

Notion-style views on the same notes: board, gallery, calendar, and a Bases table on project notes. Drag a card to write YAML. Filter, sort, and save views. Property bar on PRT notes. Project detail window. Mini calendar. Tab, sidebar, or floating window. Body templates with `{{title}}`. Optional Notion push writes the page URL to `notion-link`; the views do not need that.

## Privacy

Notes stay in the vault. With Notion off, Harbor does not call the network. With Notion on, it talks to the Notion API only when you run a sync command.

## License

MIT
