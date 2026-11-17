# Obsidian Cupertino Soft Theme

A neutral-gray, paper-focused Obsidian theme. The document surface is **Soft Paper (#FAFAF7)**, while navigation, tabs, controls and borders use cool Cupertino grays. Subtle coral replaces intrusive heading bars.

**Recommended companion:** [Zotero Cupertino Soft Theme](https://github.com/vict0rg/zotero-cupertino-soft-theme), which offers the same Soft Paper color in Zotero's PDF reader.

> The in-app theme is named **Cupertino Soft** to follow Obsidian's guidance against redundant “Obsidian” wording in the gallery. Its full GitHub project title is **Obsidian Cupertino Soft Theme**.

## Features

- Soft Paper near-white writing surface (`#FAFAF7`), with **no grid**
- Gray sidebars `#F1F2F3`, toolbars `#E8EAEC` and borders `#DDE0E3`
- H1–H4 headings in gentle coral; **no long red bars or heading underlines**
- Markdown syntax markers, links and supported citation spans tinted coral, without editing note content
- Normal-size Linux titlebar buttons, with a **red close button on hover**
- Light-gray alternating table rows, muted bullets and a coordinated dark mode

Pandoc/Zotero citation plugins may use custom rendering classes, and not all citation spans can be recolored without a plugin-specific selector. The theme does not change stored citations or Markdown.

## Installation

1. Download [theme.css](https://raw.githubusercontent.com/vict0rg/obsidian-cupertino-soft-theme/main/theme.css) and [manifest.json](https://raw.githubusercontent.com/vict0rg/obsidian-cupertino-soft-theme/main/manifest.json).
2. Put both files in `<your-vault>/.obsidian/themes/Cupertino Soft/`.
3. Open Obsidian **Settings → Appearance → Themes** and choose **Cupertino Soft**.
4. Disable any previously enabled Pixel-Blue / Cupertino color snippets that could conflict.

On Linux, clone or download this repository and run `bash scripts/install-cupertino-soft.sh "/path/to/vault"` to install the theme files.

To return to an older theme, simply choose it in Appearance. The files are separate from your notes.

## Recover the theme without Obsidian menus (Linux)

If a theme has hidden the Settings icon or window menus, **close Obsidian completely** and use the [install-and-activate script](scripts/install-and-activate.sh). It downloads the current `theme.css` and `manifest.json`, creates a dated backup of `.obsidian/appearance.json`, and changes **only** the `cssTheme` setting. Your notes, enabled snippets, plugins and other preferences are preserved.

```bash
curl -fL https://raw.githubusercontent.com/vict0rg/obsidian-cupertino-soft-theme/main/scripts/install-and-activate.sh -o ~/Downloads/obsidian-cupertino-soft-installer.sh
bash ~/Downloads/obsidian-cupertino-soft-installer.sh
```

If you still cannot use the interface, close Obsidian and revert to the standard theme without deleting anything:

```bash
bash ~/Downloads/obsidian-cupertino-soft-installer.sh --reset
```

The default vault path is `~/Dropbox/500-OBSIDIAN`; provide a different vault path as the first argument if needed. The normal Obsidian Settings shortcut is **Ctrl+,** (or Command Palette **Ctrl+P → Open settings**). If existing snippets hide controls independently of the theme, disable those conflicting snippets in Appearance after restoring access.

## Shared visual palette

| Purpose | Color |
| --- | --- |
| Note / PDF Soft Paper | `#FAFAF7` |
| Navigation panels | `#F1F2F3` |
| Tabs and toolbars | `#E8EAEC` |
| Borders | `#DDE0E3` |
| Alternate table rows | `#F4F5F5` |
| Main text | `#31353A` |
| Coral accents | `#C97073` |

## Zotero companion

[**Zotero Cupertino Soft Theme**](https://github.com/vict0rg/zotero-cupertino-soft-theme) matches this paper color and Cupertino gray interface, while providing a five-option PDF background selector. Install both themes for consistent navigation, writing and long-form reading. Each is installed independently.

## Community Themes submission

**This theme is not yet listed in Obsidian → Appearance → Manage.** To get listed, a release tagged `0.2.0` must contain `theme.css` and `manifest.json` as attached files, a **real screenshot** must be added (recommended 512×288), and the owner must submit the theme via [Obsidian Community Directory](https://community.obsidian.md). Obsidian performs its own review. See [SUBMISSION.md](SUBMISSION.md).

## Attribution and licensing

**Cupertino for Obsidian** by [svnaxis](https://github.com/svnaxis/obsidian-cupertino) is the underlying source, reused and modified under the **MIT License**, with the original copyright notice and fork history retained.

Additional design-only references: [Notation](https://github.com/deathau/Notation-for-Obsidian) (The Unlicense), [Typewriter](https://github.com/crashmoney/obsidian-typewriter) (GPL-3.0), [Shimmering Focus](https://github.com/chrisgrieser/shimmering-focus) (MIT), [Olivier's Theme](https://github.com/OlivierPS/Olivier-s-Theme) (MIT), and [Cupertino for Zotero](https://github.com/shenghuang-123/cupertino-for-zotero) (MIT). **No code, fonts, or assets from these design-only references were copied.** See [CREDITS.md](CREDITS.md), [NOTICE.md](NOTICE.md), and [LICENSE](LICENSE).

Independent community project maintained by [vict0rg](https://github.com/vict0rg); not affiliated with Obsidian or upstream developers.
