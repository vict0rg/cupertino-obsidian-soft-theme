# Cupertino Obsidian Soft Theme

A neutral-gray, paper-focused Obsidian theme. The document surface is **Soft Paper (#FAFAF7)**, while navigation, tabs, controls and borders use cool Cupertino grays. Subtle coral replaces intrusive heading bars.

**Recommended companion:** [Cupertino Zotero Soft Theme](https://github.com/vict0rg/cupertino-zotero-soft-theme), which offers the same Soft Paper color in Zotero's PDF reader.

> The in-app theme is named **Cupertino Soft** to follow Obsidian's guidance against redundant “Obsidian” wording in the gallery. Its full GitHub project title is **Cupertino Obsidian Soft Theme**.

## v0.3.0: Safe, native window controls

**Important repair:** the earlier version inherited thousands of lines of Cupertino layout CSS that could hide the Obsidian tab strip, menu/window controls, and side-panel icons on Linux. This version **replaces that layout-heavy source with a small, original, appearance-focused stylesheet**, while preserving the Soft Paper / gray / coral design. Obsidian's built-in layout now handles tabs, ribbons, headings and titlebar button sizing.

Earlier versions remain in the repository's Git history, including the MIT-licensed Cupertino source. v0.3.0 has not yet been visually verified on all Linux desktop environments.

## Consistent default-Obsidian style

The layout uses Obsidian's own controls, header spacing, native tabs and window buttons. The main reading surface is **Soft Paper #FAFAF7**; panels use quiet gray; navigation selection uses **pale coral #F5E5E5** with a narrow accent stripe. Page titles H1–H4 are muted coral. The metadata/properties area uses a barely darker `#F6F6F3` panel. Tables resemble clear statistical grids, with thin gray rules on every cell, a stronger gray header and subtle zebra bands.

The coral was inspired by the original [Cupertino for Zotero](https://github.com/shenghuang-123/cupertino-for-zotero) system-red / coral colors (`#FF3B30` and `#FF6B61`), intentionally reduced in saturation for long-form reading.

## Features

- Soft Paper near-white writing surface (`#FAFAF7`), with **no grid**
- Default-like gray sidebars `#F3F3F3`, toolbars `#EEEEEE` and borders `#DDDEDE`
- H1–H4 headings in gentle coral; **no long red bars or heading underlines**
- Markdown syntax markers, links and supported citation spans tinted coral, without editing note content
- Normal-size Linux titlebar buttons, with a **red close button on hover**
- Light-gray alternating table rows, muted bullets and a coordinated dark mode

Pandoc/Zotero citation plugins may use custom rendering classes, and not all citation spans can be recolored without a plugin-specific selector. The theme does not change stored citations or Markdown.

## Installation

1. Download [theme.css](https://raw.githubusercontent.com/vict0rg/cupertino-obsidian-soft-theme/main/theme.css) and [manifest.json](https://raw.githubusercontent.com/vict0rg/cupertino-obsidian-soft-theme/main/manifest.json).
2. Put both files in `<your-vault>/.obsidian/themes/Cupertino Soft/`.
3. Open Obsidian **Settings → Appearance → Themes** and choose **Cupertino Soft**.
4. Disable any previously enabled Pixel-Blue / Cupertino color snippets that could conflict.

On Linux, clone or download this repository and run `bash scripts/install-cupertino-soft.sh "/path/to/vault"` to install the theme files.

To return to an older theme, simply choose it in Appearance. The files are separate from your notes.

## Recover the theme without Obsidian menus (Linux)

If a theme has hidden the Settings icon or window menus, **close Obsidian completely** and use the [install-and-activate script](scripts/install-and-activate.sh). It downloads the current `theme.css` and `manifest.json`, creates a dated backup of `.obsidian/appearance.json`, and changes **only** the `cssTheme` setting. Your notes, enabled snippets, plugins and other preferences are preserved.

```bash
curl -fL https://raw.githubusercontent.com/vict0rg/cupertino-obsidian-soft-theme/main/scripts/install-and-activate.sh -o ~/Downloads/obsidian-cupertino-soft-installer.sh
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
| Navigation panels | `#F3F3F3` |
| Tabs and toolbars | `#EEEEEE` |
| Borders | `#DDDEDE` |
| Alternate table rows | `#F3F4F2` |
| Main text | `#31353A` |
| Pale coral selection | `#F5E5E5` |
| Coral details | `#D78381` |

## Zotero companion

[**Cupertino Zotero Soft Theme**](https://github.com/vict0rg/cupertino-zotero-soft-theme) matches this paper color and Cupertino gray interface, while providing a five-option PDF background selector. Install both themes for consistent navigation, writing and long-form reading. Each is installed independently.

## Community Themes submission

**This theme is not yet listed in Obsidian → Appearance → Manage.** To get listed, a release tagged `0.3.0` must contain `theme.css` and `manifest.json` as attached files, a **real screenshot** must be added (recommended 512×288), and the owner must submit the theme via [Obsidian Community Directory](https://community.obsidian.md). Obsidian performs its own review. See [SUBMISSION.md](SUBMISSION.md).

## Attribution and licensing

The repository is a fork of **Cupertino for Obsidian** by [svnaxis](https://github.com/svnaxis/obsidian-cupertino), licensed under **MIT**. Its historical commits and copyright notices remain. Beginning with v0.3.0, the layout-altering upstream CSS has been replaced with a new appearance-only stylesheet instead of continuing to distribute the old UI overrides. The current theme remains MIT-licensed.

Additional design-only references: [Notation](https://github.com/deathau/Notation-for-Obsidian) (The Unlicense), [Typewriter](https://github.com/crashmoney/obsidian-typewriter) (GPL-3.0), [Shimmering Focus](https://github.com/chrisgrieser/shimmering-focus) (MIT), [Olivier's Theme](https://github.com/OlivierPS/Olivier-s-Theme) (MIT), and [Cupertino for Zotero](https://github.com/shenghuang-123/cupertino-for-zotero) (MIT). **No code, fonts, or assets from these design-only references were copied.** See [CREDITS.md](CREDITS.md), [NOTICE.md](NOTICE.md), and [LICENSE](LICENSE).

Independent community project maintained by [vict0rg](https://github.com/vict0rg); not affiliated with Obsidian or upstream developers.
