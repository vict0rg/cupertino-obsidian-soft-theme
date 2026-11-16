# Cupertino Cream

A warm, reading-focused **Obsidian theme** built as a fork of [Cupertino](https://github.com/svnaxis/obsidian-cupertino), with Notion-like paper warmth, restrained Cupertino red accents and clear academic-document headings.

**Companion theme:** [Cupertino Cream for Zotero](https://github.com/vict0rg/cupertino-cream-for-zotero) — recommended for a visually consistent research workflow across notes and PDFs.

> **v0.1.0 preview:** This theme is available for manual installation. It has **not yet been accepted into Obsidian's Community Themes directory**, and visual compatibility remains under testing.

## Design principles

- **Calm paper surfaces:** warm cream notes instead of bright white, and coordinated sand-colored panels.
- **A single restrained red accent:** Cupertino red is used for active-item markers, heading rules and focused controls, not large blocks of text.
- **Better heading hierarchy:** H1/H2 have a left red marker and a delicate underline; H3/H4 use thinner markers. Applied in both Reading and Live Preview modes.
- **No graph-paper grid** in the editor or reading view.
- **Light and dark variants** following the same visual language.
- **No remote fonts, images or scripts:** the CSS is based on the MIT-licensed Cupertino source and our appended design overrides.

## Shared palette

| Role | Color |
| --- | --- |
| Note paper | `#FFFDF9` |
| PDF Soft Cream companion preset | `#F7F1E5` |
| Sidebars | `#F3EDE5` |
| Toolbars | `#EEE5DC` |
| Main text | `#332E2B` |
| Cupertino red | `#FF3B30` |
| Selected item | `#F8E3E0` |

## Manual installation

Until the theme is accepted into Obsidian's catalog:

1. Download both **`theme.css`** and **`manifest.json`** from the [v0.1.0 GitHub Release](https://github.com/vict0rg/obsidian-cupertino-cream/releases/tag/0.1.0).
2. In your vault create `.obsidian/themes/Cupertino Cream/`.
3. Copy **both files** into that folder.
4. In Obsidian open **Settings → Appearance → Themes**, reload the themes if needed and select **Cupertino Cream**.
5. Disable any CSS snippets previously used to override Pixel-Blue grids or palettes; they may conflict with this theme.

Your notes and plugins are not modified. Returning to the original **Cupertino** theme is simply a matter of selecting it again.

## Paired Zotero appearance

For matching warm navigation panels and PDF backgrounds, install **[Cupertino Cream for Zotero](https://github.com/vict0rg/cupertino-cream-for-zotero)**. Its reader includes **Soft Cream**, **Soft Blue**, **Soft Sage**, **Soft Paper** and **Original** background choices. The theme keeps Zotero's main menu visible and the metadata navigation controls in their own pane.

The two projects are independent extensions hosted in separate repositories. Install and update each one separately.

## Directory submission status

**Not yet submitted / not yet approved.** Obsidian requires a public GitHub release that includes `theme.css` and `manifest.json`, and an **actual screenshot** of this theme. The repository and matching release are prepared; a screenshot captured from the installed theme and the official directory submission/review remain.

To finish the submission, sign in at [Obsidian Community Directory](https://community.obsidian.md), link your GitHub account, and submit this repository under **Themes**. The directory's review process, not the GitHub release, determines when the theme appears under **Appearance → Themes → Manage**. See [SUBMISSION.md](SUBMISSION.md).

## Development

The repository is a real fork of upstream **Cupertino** with its Git history preserved. The `theme.css` file contains the upstream design plus the Cupertino Cream overrides near the end. To validate:

```bash
node scripts/check-theme.mjs
```

## Credits and licensing

- [Cupertino for Obsidian](https://github.com/svnaxis/obsidian-cupertino) by **Alexis C / svnaxis** — the underlying theme's source code, layouts and visual components. **MIT License**, with the original copyright notice retained.
- [Notation](https://github.com/deathau/Notation-for-Obsidian) by **deathau** — a Notion-inspired warm reading design reference, distributed under **The Unlicense**. No Notation source code or artwork is copied into this fork.
- [Cupertino for Zotero](https://github.com/shenghuang-123/cupertino-for-zotero) by **shenghuang-123 and contributors** — the inspiration for the shared small red accent; **MIT License**. No Zotero source code is included in this Obsidian theme.
- [Cupertino Cream for Zotero](https://github.com/vict0rg/cupertino-cream-for-zotero) — the companion project for a unified reading environment.

For a precise distinction between reused source and inspiration, see [CREDITS.md](CREDITS.md), [NOTICE.md](NOTICE.md), and [LICENSE](LICENSE). **Independent community fork:** not endorsed by Obsidian, Notation, or the upstream Cupertino authors.
