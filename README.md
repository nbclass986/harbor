**中文** | [English](README.en.md)

# Harbor

Harbor 是一个 [Obsidian](https://obsidian.md) 插件：同一批 Markdown 笔记，用看板、画廊、日历、表格来看。拖卡片、改日期、改状态，写回笔记的 YAML。

分类用 **PRT**，推进用 **GTD** 和 **PARA**。界面语言：自动 / English / 简体中文。Notion 同步还在开发。

不依赖 Buttons、QuickAdd。

---

## 核心思想

同一批笔记，多种视图：

| 视图 | 做什么 |
| --- | --- |
| 看板 | 按状态、优先级或负责人分列，拖卡片改 YAML |
| 画廊 | 一张张卡片浏览 |
| 日历 | 月 / 周 / 日 / 议程 |
| 表格 | 项目笔记里嵌入 Bases，列出挂在该项目下的任务 |
| 已保存视图 | 记住筛选和排序 |

三种类型：

| 类型 | YAML | 是什么 |
| --- | --- | --- |
| Project 项目 | `type: project` | 要完成的结果，下面挂任务 |
| Resource 资料 | `type: resource` | 参考材料 |
| Task 任务 | `type: task` | 下一步动作，可以属于某个项目 |

流转：收进 `Inbox` → 澄清成 Task / Project / Resource → 看板上 `Inbox` → `Open` → `Doing` → `Done`。截止日期和日历用来挑今天做哪条。

YAML 键名可以在设置里改，例如把 `due` 写成 `截止日期`。

---

## 安装

用 [BRAT](https://github.com/TfTHacker/obsidian42-brat)：

1. 安装 **BRAT**。
2. 命令面板运行 **BRAT: Add a beta plugin for testing**。
3. 填 [`nbclass986/harbor`](https://github.com/nbclass986/harbor)。
4. 启用 **Harbor**。

更新用 **BRAT: Check for updates to all beta plugins**。

或者从 [Releases](https://github.com/nbclass986/harbor/releases) 下载 `main.js`、`manifest.json`、`styles.css`，放到 `你的库/.obsidian/plugins/harbor/`。需要 Obsidian 1.5.0 或更高。

---

## 第一次打开

启用后会建这些文件夹：

| 文件夹 | 用途 |
| --- | --- |
| `Harbor/Harbor_TASK` | 新建任务 |
| `Harbor/Harbor_PROJECT` | 新建项目 |
| `Harbor/Harbor_RESOURCE` | 新建资料 |
| `Harbor/Harbor_BASE` | Bases 表 |

点左侧网格图标，或运行 **打开 Harbor**。

默认是**混合式**：新建进上面三个文件夹，带 `type` 的笔记也会上看板。还可以改成**集中式**（只看这三个文件夹）或**散落式**（新建进收件箱）。

---

## 一条任务

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
## Goal

写引言
```

状态：`Inbox`、`Open`、`Doing`、`Done`。优先级：`P1`、`P2`、`P3`。

文件名就是笔记标题，正文不再重复写一级标题。新建项目时，正文会嵌入 `Harbor_TASK.base` 里的项目任务表，并在 Tasks 下提供 **新建任务**、**新建资料**（会带上当前项目的负责人、参与人；任务默认 Open、P2）。

---

## 能做什么

- 看板、画廊、日历之间切换；项目里用 Bases 表格看关联任务
- 拖卡片改 YAML
- 按状态、优先级、负责人、标签、项目、日期筛选和排序，并保存视图
- 打开任务 / 项目 / 资料笔记时显示属性条；标题为 `task：文件名` 这类，可改 `type`
- 点项目卡片看下面的任务；项目笔记里可直接新建任务或资料
- 侧栏迷你日历
- 标签页、侧栏、浮动窗
- 新建模板可用 `{{title}}`、`{{body}}`；没有 `{{body}}` 时，正文插到设置里指定的标题下

---

## 命令

| 命令 | 作用 |
| --- | --- |
| 打开 Harbor | 标签页打开主界面 |
| 打开浮动窗口 / 在侧栏打开 / 在标签页打开 | 换窗口 |
| 打开迷你日历 | 侧栏日历 |
| 新建任务 / 新建项目 / 新建资料 | 弹出新建卡片 |
| 快速新建任务 | 建一条任务 |
| 打开属性 | 打开属性条 |

---

## 设置

语言、YAML 键名、属性条字段、文件夹、归档方式、是否扫描全库、状态 / 优先级 / 人员 / 标签、三类正文模板，以及每类模板的「正文插到此标题下」。

---

## License

MIT
