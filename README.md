# Column Tracker

A small JavaScript practice project built while learning JS fundamentals and Git, as part of my self-study path toward becoming a UX Engineer.

## What's in here

- **`column chart.js`** — A mock table-column config object (`name`, `dataType`, `status`, `validation`, etc.), modeled loosely after PowerTable's column structure at work. Includes functions (`getColumnColor`, `setaxisColors`) that resolve a color based on a column's status.
- **`color-tokens.js`** — A small set of real color tokens pulled from Microsoft's Fabric UX System, structured as light/dark mode pairs. Exported as an ES module for use in `column chart.js`.
- **`index.html`** - A html doc which will print out the axis labels and chart label and as well as the chart itself. This way the user can interact and see the chart.

## Concepts practiced

- Objects: nested properties, dot vs. bracket notation
- Arrays: indexing, `.length`
- `const`/`let` and mutation vs. reassignment
- Functions, `return`, and `switch` statements
- ES Modules: `export` /
- HTML basics refresher
