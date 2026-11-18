# Cupertino Obsidian Soft Theme v0.4.1 — spellcheck visibility fix

Maintenance update: native spelling highlights now explicitly request an orange (`#FF9500`) wavy underline. v0.4.0 specified only the decoration color, which could leave the underline invisible in some Chromium/Electron builds. Misspelled words retain normal text color, and spellcheck preferences and dictionaries are untouched. If no underlines appear even with the Obsidian default theme, check the editor's native spellcheck settings rather than this stylesheet.

The original Cupertino gray/red palette, metadata shading, table styling and native window controls introduced in v0.4.0 remain unchanged.

## Previous v0.4.0 improvements

This release coordinates the visual language with Cupertino Zotero Soft Theme v0.6.0.

- Nearly white #FAFAFA note background, original Cupertino #EBEBED sidebar/toolbars and #333338 reading text.
- Bright Cupertino red #FF3B30 H1–H4 titles, links, Markdown syntax and supported citation spans.
- Pale #FFE9E8 selected-file/folder backgrounds, with a narrow original red accent.
- Metadata/properties pane #F2F2F4, a subtle shade darker than the writing surface. Metadata field names receive restrained red color; entered values remain in their original text color.
- Statistical-grid tables have thin 1px rules, gray headers and alternating pale-gray #F5F5F6 rows.
- Orange #FF9500 spelling-error underline (best effort; depends on Chromium/Electron support). Spell checking remains enabled.
- Retains the v0.3.0 layout-safe/native window buttons, tab strip, ribbon icons and desktop controls; no note data is modified.
- Companion release: https://github.com/vict0rg/cupertino-zotero-soft-theme/releases/tag/v0.6.0

For existing installations, replace theme.css and manifest.json in the Cupertino Soft theme directory or run scripts/install-and-activate.sh. No vault contents, notes, snippets or plugin settings are replaced by the theme stylesheet.

The MIT fork preserves original source history and credits for Cupertino by svnaxis. Notation, Typewriter, Shimmering Focus and Olivier's Theme remain acknowledged as design references. Visual verification on each Linux desktop remains recommended.
