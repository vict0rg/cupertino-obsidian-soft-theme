# Obsidian Cupertino Soft Theme 0.2.1 — Native Obsidian chrome restored

**Important regression correction:** The previous fork included a large inherited upstream stylesheet whose window/tab rules hid Obsidian's top tabs and reduced some sidebar icons to nearly invisible marks. This version **replaces the inherited layout-heavy CSS with a smaller appearance-only stylesheet**.

- Obsidian itself now controls the titlebar, tabs, menus, sidebar action buttons and header dimensions.
- Retains **Soft Paper #FAFAF7** reading surface, Cupertino-gray navigation and toolbars, muted coral headings, citation/Markdown syntax accents and subtle gray alternating table rows.
- Close button turns soft red on hover without changing native icons or sizes.
- No note content, Pandoc citation keys or Zotero settings are modified.
- This is a deliberate compatibility-first reset, not merely a color change.

Install the new `theme.css` and `manifest.json` in `.obsidian/themes/Cupertino Soft/`. Alternatively use [install-and-activate.sh](https://github.com/vict0rg/obsidian-cupertino-soft-theme/blob/main/scripts/install-and-activate.sh) with Obsidian closed to install and select the current main-branch version in one step. To revert to the Obsidian default theme, use the same script with `--reset`.

The project retains its MIT-licensed Cupertino fork history and copyright notices. The current 0.2.1 stylesheet is newly authored to avoid the older layout code; Notation (Unlicense), Typewriter (GPL-3.0), Shimmering Focus (MIT) and Olivier's Theme (MIT) remain design-only references. Companion: [Zotero Cupertino Soft Theme](https://github.com/vict0rg/zotero-cupertino-soft-theme).

The official Obsidian Community Themes gallery submission is still pending actual theme verification, a release, screenshot and directory approval.
