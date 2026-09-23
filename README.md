# The Humanoid Robotics Supply Chain

An interactive, rotatable map of a humanoid robot showing who supplies each part (sensors, motors, reducers, software, compute) and where China leads, contests, or depends on foreign suppliers.

It's a plain static website: **HTML, CSS and JavaScript**, with no build step and no dependencies.

## Files

| File | What it is | Do you edit it? |
|---|---|---|
| `data.js` | Your content: labels on the body, components, notes, stats, timeline | **Yes, this is the one** |
| `sources-data.js` | The 34 research sources and every sourced player, event, figure and relationship, generated from `humanoid_robotics_supply_chain_sources.json` by `build_sources.py` | Only by re-running the build script |
| `index.html` | Page structure | Rarely |
| `styles.css` | Colors, fonts, layout | Only to change the look |
| `app.js` | Rotation, labels, panels, timeline | No |
| `frames/` | 72 rendered images of the robot, one every 5° | No |
| `depth.js` | Depth data used to hide labels behind the body and to place new ones | No |
| `og.jpg` | Preview image for links shared on X, Substack, etc. | Optional |

## The four tabs

- **Anatomy**: components by body location, plus an Off-Body Layers group. Each panel merges your notes with the sourced players for that segment.
- **Segments**: the 17 supply-chain segments from the research file, with a Chinese vs Non-Chinese player count, roles, competitive positions, relationships, and market-share or scale figures.
- **Timeline**: every dated event across the stack, filterable by segment and by Chinese vs Non-Chinese. Undated events sit in their own group.
- **Sources**: all 34 sources with quality scores and the methodology note.

Anything on the page that is not backed by one of the 34 sources carries an **Unverified** flag. Share charts are built only from figures that share one metric, definition, geography and year; everything else appears as a scale indicator and is never combined.

## Editing labels

Labels live at the top of `data.js`:

```js
{ id: "knee", text: "Knee", at: [0.52, 0.00, 2.00] },
```

- `text` is what the label says.
- `at` is where it points, as `[x, y, z]`: x is left/right, y is front/back (negative = front), z is height (0 = floor, about 7 = top of the head).
- Add a line to add a label; delete a line to remove one.
- Components attach to labels by id: `labels: ["knee", "elbow"]`.

**To find coordinates:** open the page with `#edit` at the end of the address (for example `https://YOUR-USERNAME.github.io/REPO/#edit`). Turn the robot, click the spot you want, and copy the line it gives you. Edit mode also lists any mistakes in `data.js`, such as a component pointing to a label id that doesn't exist.

## Publishing on GitHub Pages

1. Create a new public repository on GitHub.
2. On the repo page, click **Add file → Upload files** and drag in everything in this folder, including the `frames` folder.
3. Go to **Settings → Pages**, set **Source** to "Deploy from a branch", choose `main` and `/ (root)`, and save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/REPO/`.
5. In `index.html`, replace `YOUR-USERNAME` and `REPO` in the two `og.jpg` lines with your real address so link previews show the robot image.

To update content later, open `data.js` on GitHub, click the pencil icon, make your edit, and click **Commit changes**. The site updates in about a minute.

## Viewing it on your own computer

Double-click `index.html`; it works straight from the folder.

## Updating the research data

If you get a new version of the research JSON, save it as `sources.json` next to `build_sources.py` and run `python3 build_sources.py`. It regenerates `sources-data.js`. The segment-to-component mapping lives at the top of that script.

## Credits and license

The robot images are renders of a commercial 3D model used under its royalty-free license. The model file itself is **not** included in this repository and may not be redistributed. The images in `frames/` and `og.jpg` may not be extracted and reused as standalone assets.

The code (`index.html`, `styles.css`, `app.js`) and the research content in `data.js` are free for others to reuse with credit.
