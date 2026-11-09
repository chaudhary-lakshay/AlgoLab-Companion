# AlgoLab Companion — Field Notes

A responsive pseudocode notebook and flowchart reference for AlgoLab, designed for desktop, phones and the Lenovo Android 5.1 tablet. Inspired by the Pathways Case File aesthetic.

## Pseudocode code editor

The notebook retains a light paper-style editor with line numbers, distinct colors for keyword families (input, output, conditions, loops, assignments and functions), plus colors for strings, numbers, operators and comments. Horizontally scrollable file tabs switch between the latest saved drafts. Create another draft with the `+` tab. Tab and Shift+Tab indent/outdent using two spaces (including multi-line selections); Enter preserves the indentation and indents after block statements such as `IF … THEN`, `ELSE`, `WHILE`, and `FOR`. Ctrl+S / Cmd+S saves immediately; all drafts still use the unchanged local-storage format. The editor does not run Java.

## Responsive layouts

- **PC (1180px+)**: full-width editor-first workbench with a compact case-file navigation strip (no bulky masthead), searchable case files on the left, an enlarged light editor, and writing tools on the right. The outer desktop page does not scroll; side panels and the editor scroll independently. Optional Focus button hides both sidebars.
- **Tablet**: full-width editor with separate notebook/reference tabs and a floating Quick tools drawer; no need to scroll to the editor bottom for actions.
- **Phone**: compact layout with touch-friendly inputs and a floating Quick tools drawer containing keyword chips and export/import actions.

All layouts share one URL and preserve the existing `algolab-companion-drafts-v1` local-storage format so updating the website does not erase drafts. Ctrl+S / Cmd+S saves from the editor or title field.

## Pinned draft actions

On desktop, Export .TXT, Import .TXT, Insert example, and Delete draft are pinned to the bottom of the left Case Files sidebar; the draft list scrolls independently when long. The right Writing Tools panel is dedicated to searchable keywords without repetitive notices. On phones and tablets, these actions remain in the Quick Tools drawer. The note format and local-storage key remain unchanged.

## Features

- Plain-text pseudocode editor with keyword coloring in supported browsers and fallback on older ones
- Searchable library of 53 pseudocode keywords and DSA operations, grouped by basics, conditions, loops, functions, and data structures; keyword suggestions and quick-insert buttons
- Flowchart symbol and pseudocode reference
- Multiple named drafts stored locally in each browser
- Export and import text files to transfer notes
- No accounts, backend, external JavaScript, analytics, or subscriptions
- Optional offline use after the first successful visit when the browser supports service workers

**Important:** GitHub Pages hosts the website, but **does not sync notes**. Your drafts stay in the browser on each device. Use Export .TXT and Import .TXT to move notes between devices. Back up important notes before clearing browser data.

## Enable GitHub Pages

1. Open [Settings → Pages](https://github.com/chaudhary-lakshay/AlgoLab-Companion/settings/pages).
2. Under Build and deployment, select **Deploy from a branch**.
3. Set branch to **main**, folder to **/ (root)**, and save.
4. When GitHub finishes deployment, open [AlgoLab Companion](https://chaudhary-lakshay.github.io/AlgoLab-Companion/).

The first visit must be online. Offline support requires a compatible browser; editing and reference content can also run from a downloaded copy of `index.html`.

## Workflow

Write pseudocode on AlgoLab Companion → export a text backup when needed → implement the Java solution in IntelliJ → use JavaWiz and jGRASP to visualize it → save completed Java solutions to the separate private AlgoLab repository.

The website does not execute Java or automatically push your drafts to GitHub.
