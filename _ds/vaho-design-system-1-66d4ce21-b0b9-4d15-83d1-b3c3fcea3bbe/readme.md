# VAHO Design System 

**VAHO** is a Madrid clothing and accessories brand built on handwriting. Basic t-shirts, toiletry bags (neceseres) and scarves (pañuelos) in bold colors, each marked with a real handwritten signature. Made for people in their growth era — gym before work, study at night, weekends with friends. Pieces for the small moments that are yours alone, designed to feel free and comfortable.

**Tagline:** *Un instante, tuyo.*

## Sources

All provided as uploaded images (no codebase, Figma or website was given):

- `VAHO-Logo-{Black,Fuchsia,Orange,Purple,White}.png` — transparent handwritten logo PNGs → `assets/logo/`
- `VAHO-Logos-Color-Palette-6000x4000.png` — logo lockups, min size, clear space, palette → `guidelines/source/logos-color-palette.png`
- `VAHO-Typography-Graphic-System-6000x4000.png` — Inter, brush strokes, repeat pattern, stickers → `guidelines/source/typography-graphic-system.png`
- `Imagen de Codex 24 sept 2026, 08_19_37.png` — brand board overview (tag, tees, bags, scarf, Instagram template) → `guidelines/source/brand-board-overview.png`
- `… 08_30_56.png` — packaging & stationery board → `assets/imagery/packaging-stationery.png`
- `… 10_43_41.png` — product mockups → `assets/imagery/mockups-products.png`
- `… 08_28_02 / 09_23_51 / 08_33_50 / 08_46_02 / 08_57_44.png` — lifestyle photography → `assets/imagery/`

**Products/surfaces:** physical goods (tees, neceseres, pañuelos), packaging & stationery, Instagram. No digital product exists yet; `ui_kits/shop` is a **proposed** web shop, flagged as such.

---

## CONTENT FUNDAMENTALS

- **Language:** Spanish (Spain) for all brand phrases and customer-facing copy. Keep brand lines in Spanish even inside English docs.
- **Voice:** warm, close, fun, emotional. Talks like a friend, never like a catalog. Short sentences, often fragments with full stops for rhythm: *"Tu propia letra. Real. Imperfecta. Sincera."*
- **Person:** second person singular, informal **tú** ("tuyo", "lo que llevas puesto", "sé tú"). The brand speaks as "VAHO" or implicit "nosotros" sparingly ("por ser parte de VAHO").
- **Casing:** sentence case for headlines and body. UPPERCASE only for tiny spaced labels (CREA · EXPLORA · SÉ TÚ, GRACIAS, card captions). The word **VAHO** in running text is uppercase; as a mark it is always the handwritten PNG.
- **Punctuation:** end taglines with a full stop — *"Un instante, tuyo."* Comma-pause constructions are signature.
- **Emoji:** not used in brand material. The only pictogram seen is a hand-drawn heart on a steamy mirror (photography, not UI).
- **Themes:** small personal moments, growth, freedom, comfort, handmade authenticity, Madrid daily life.
- **Examples (verbatim from boards):** "Un instante, tuyo." · "Hecha a mano, sentida en el alma." · "Lo que llevas puesto, lo que vas siendo." · "Crea / Explora / Sé tú" · "Gracias por ser parte de VAHO" · "Tu propia letra. Real. Imperfecta. Sincera. VAHO." · Type values: "Cálida, Legible, Accesible, Humana".
- **UI microcopy (proposed, same voice):** "Añadir a la cesta", "Aún no hay nada. Tu próximo instante te espera.", "Solo cosas bonitas, prometido."

## VISUAL FOUNDATIONS

- **Color:** cream `#FAF8F4` or white backgrounds dominate; black `#000` for ink and reversed panels. Accents orange `#F28C28` (main logo), fuchsia `#E91E8F`, purple `#5B2A86`, lime `#B7FE3B`. **One or two accents per piece**; all four together only in the repeat pattern (scarf, packaging). No muted beige palettes, no gradients as backgrounds.
- **Type:** Inter only, beside the handwritten logo. Headline Semibold (600), subtitle Medium (500), body Regular (400). Tight negative tracking on large sizes (-0.02em), wide tracking (+0.14em) on small uppercase labels. No script/cursive fonts — the logo is the only handwriting. No thick shouty display type.
- **Logo:** always the PNG. Orange is the main logo; fuchsia, purple, black alternates; white reversed on black or fuchsia. Clear space = 1× V height; minimum 20 mm print / 64 px screen.
- **Secondary graphics:** dry **brush strokes** in palette colors (`assets/brush/`), used as underline beneath a phrase or as corner accents bleeding off edges, often rotated. **Round stickers** (logo on solid circle). **Repeat pattern** (`assets/pattern/`) reserved for scarves/packaging.
- **Layout:** clean, editorial, generous white space. Asymmetric two-column (text left / photo right), one idea per block. Container 1240px, 32px side padding, 96px section rhythm.
- **Imagery:** warm, sun-drenched Madrid (Sol, café terraces, pastel-blue walls, golden bathroom light). Real women, natural curls, candid smiles, gold jewelry. Warm color grade, no grain, no b&w. Product color pops against neutral/white clothing.
- **Backgrounds:** flat cream/white; full-bleed photography for hero moments; solid fuchsia or black for reversed moments. Kraft/tissue textures appear in packaging photos only.
- **Corner radii:** mostly 0–4px on imagery and paper; 8px inputs; 16px dialogs; pill (999px) buttons, tags, badges; full circles for stickers/swatches.
- **Cards:** product tiles have no border or shadow — the image carries it (4px radius). Paper/stationery mocks use a soft shadow. Borders are hairline `#E6E1D8`.
- **Shadows:** flat by default. `--shadow-soft` for hover/paper, `--shadow-lift` for drawers, dialogs, toasts.
- **Hover:** buttons darken (black → ink-700, fuchsia → fuchsia-600); outline fills with white; links turn fuchsia; product images zoom 3%.
- **Press:** scale to 0.98.
- **Focus:** black border + 3px purple-100 ring.
- **Animation:** calm and quick. `cubic-bezier(.2,.7,.2,1)`, 140/220/420ms. Fades and slides (drawer), no bounces.
- **Transparency/blur:** sticky header on 92% cream with 10px backdrop blur; 30–35% black scrim behind drawers/dialogs; bottom black gradient over photos only to protect white text.

## ICONOGRAPHY

- VAHO supplied **no icon set**. The brand is iconographically minimal — the handwritten logo and brush strokes do the expressive work.
- **Substitution (flagged):** [Lucide](https://lucide.dev) line icons via CDN (`lucide-static@0.460.0`), rendered with the `Icon` component (CSS mask, inherits `currentColor`). Thin 2px stroke, rounded caps — matches Inter's neutrality.
- Icons stay black/ink; accents only for active states or the cart count badge (fuchsia).
- No emoji, no unicode pictograms in UI (× and −/+ are used as typographic glyphs in close/stepper controls).
- Brush strokes and stickers are PNG assets — never redraw them in SVG.

---

## Index

- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`
- `assets/logo/` — 5 logo PNGs · `assets/brush/` — 4 brush strokes · `assets/pattern/` — repeat pattern · `assets/imagery/` — lifestyle photos + boards
- `guidelines/` — 22 foundation cards (Colors, Type, Spacing, Brand) + `source/` original boards
- `components/` — React primitives (below), one card per folder
- `ui_kits/shop/` — proposed web shop (Home, Colección, Producto, Cesta)
- `ui_kits/brand-collateral/` — Instagram post, business card, thank-you card, hang tag, sticker sheet
- `SKILL.md` · `thumbnail.html`

## Components

- **brand/** — `Logo`, `BrushStroke`, `Sticker`, `Icon`
- **core/** — `Button`, `IconButton`, `Badge`, `Tag`
- **forms/** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **commerce/** — `ProductCard`, `ColorSwatch`, `SizeSelector`, `QuantityStepper`
- **navigation/** — `Tabs`
- **feedback/** — `Dialog`, `Toast`, `Tooltip`

No source defined a component inventory (brand guidelines only), so this is a standard set sized for a clothing brand.

### Intentional additions

- `Icon` — wrapper for the substituted Lucide CDN set.
- `Logo`, `BrushStroke`, `Sticker` — wrap the real PNG assets so consumers never retype the logo.
- `ProductCard`, `ColorSwatch`, `SizeSelector`, `QuantityStepper` — commerce needs of a clothing brand.

## Caveats

- Inter is loaded from Google Fonts (no font binaries provided).
- Brush strokes and pattern were extracted from the graphic-system board with background keyed out; edges are good at screen sizes but are not print-master files.
