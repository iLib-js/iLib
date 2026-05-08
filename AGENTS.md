# AGENTS.md — iLib quick orientation

This file is for humans and coding agents working in this repository. For user-facing overview, see [README.md](README.md). Deeper narrative docs live under [docs/](docs/).

## What this project is

**iLib** is a **pure ES5 JavaScript** internationalization library (Apache-2.0). It provides locale-sensitive formatting, parsing, calendars, time zones (IANA), collation, translation bundles, phone/name/address handling, units, Unicode normalization, and related utilities—aligned heavily with **Unicode CLDR** data.

- **npm package**: `ilib` (see [package.json](package.json) for version and engines).
- **Upstream / issues**: https://github.com/iLib-js/iLib

## Where the important code lives

| Area | Path | Notes |
|------|------|--------|
| **Runtime JS modules** | [js/lib/](js/lib/) | One main class/feature per `.js` file; CommonJS `require` / `module.exports`. |
| **Package entry** | [js/index.js](js/index.js) | `package.json` `"main"`; picks platform glue (`ilib-node.js`, `ilib-webpack.js`, `ilib-qt.js`, etc.). |
| **Locale / CLDR JSON** | [js/locale/](js/locale/) | Merged per BCP-47 rules (language, `und/region`, script, region, variants). |
| **Human docs** | [docs/](docs/) | Architecture, getting started, tutorials, FAQ. Start with [docs/Architecture.md](docs/Architecture.md) and [docs/tutorial/modules.md](docs/tutorial/modules.md). |
| **Build / test orchestration** | `Gruntfile.js`, `build.xml`, Ant targets | Legacy-heavy; `npm test` delegates to Ant (see below). |
| **Assembly / meta** | [js/assembleData/](js/assembleData/), `ilib-assemble` (devDependency) | Merging locale JSON, custom locales, assembled bundles. |

### Notable `js/lib/` patterns

- **`ilib.js`**: global `ilib` namespace, shared `ilib.data` caches, version helpers.
- **Loaders**: `Loader.js` base; `NodeLoader.js`, `WebLoader.js`, `AsyncNodeLoader.js`, `WebpackLoader.js`, `QMLLoader.js`, `RhinoLoader.js`, etc. Dynamic locale data requires a loader before first use.
- **Platform entry wrappers**: `ilib-node.js`, `ilib-web.js`, `ilib-qt.js`, `ilib-rhino.js`, `ilib-ringo.js`, `ilib-webpack.js`.
- **Unicode normalization**: large trees under `nfc/`, `nfd/`, `nfkc/`, `nfkd/`, plus `charmaps/`.
- **Calendars / dates**: `*Cal.js`, `*Date.js`, `CalendarFactory.js`, `DateFactory.js`, `RataDie.js`, etc.

### Assembly directives (critical for bundling)

At the top of many source files:

- `/*!depends file1.js file2.js */` — include other sources in order (no circular deps).
- `/*!data datalabel ... */` — pull matching JSON from [js/locale/](js/locale/) for requested locales.

See [docs/Architecture.md](docs/Architecture.md) for sync vs async construction (`sync`, `onLoad`, `loadParams`) and assembled vs dynamic (`-dyn`) builds.

## How consumers import iLib (Node / modular)

After `require("ilib")` initializes the environment:

```js
var DateFmt = require("ilib/lib/DateFmt");
var DateFactory = require("ilib/lib/DateFactory");
```

Classes are **ES5**; factories like `DateFactory`, `CalendarFactory`, `MeasurementFactory` replaced older `ilib.Date.newInstance` style (see [docs/tutorial/modules.md](docs/tutorial/modules.md)).

## Builds and tests (from repo root)

- **Full Node test suite:** set **`JAVA_HOME`** (JDK **24+**), ensure **`ant`** is available, then **`cd js`** and **`ant test`**. See [docs/Contributing.md](docs/Contributing.md) for browser (`ant test.remote`, **http://localhost:9090/**) and Qt steps.
- **`npm test`** (repo root): runs **`ant test.dynamic.uncompiled`**—a faster subset, not the full **`cd js && ant test`** run.
- **`npm run build.web`**: production webpack build (`webpack -p`).
- **Locale merge scripts**: `npm run build:mergeJson` / `build:mergeJson-compressed` / `debug:mergeJson` (use `ilib-assemble`).

When in doubt, read [package.json](package.json) `scripts` and [README.md](README.md) “Other iLib Support” (webpack loader/plugin, scanner, external packages).

## Development workflow

- **Policy and branching:** [docs/Contributing.md](docs/Contributing.md) (TDD, `development` / `main`, releases, platform matrix).
- **Cursor agents:** [`.cursor/rules/development-process.mdc`](.cursor/rules/development-process.mdc) is **`alwaysApply: true`** so assistants follow approval gates and test-first fixes.

## Conventions for changes

- Match **existing style**: ES5, JSDoc-style comments, same dependency/loader patterns.
- Keep **one concern per file**; update **`/*!depends` / `/*!data`** when adding dependencies or locale needs.
- Do not assume modern JS features in `js/lib/` without an explicit project decision.
- Published npm `files` field includes `js/lib`, `js/locale`, `README.md`, `LICENSE`—changes outside those may not ship in the package unless packaging is updated.

## External docs and API reference

- Hosted docs index: https://ilib-js.github.io/iLib/docs/
- JSDoc (latest linked from [docs/index.md](docs/index.md))

## Related tooling (separate repos)

- [ilib-webpack-loader](https://github.com/iLib-js/ilib-webpack-loader) / [ilib-webpack-plugin](https://github.com/iLib-js/ilib-webpack-plugin) — tree-shaken bundles.
- [ilib-scanner](https://github.com/iLib-js/ilib-scanner) — minimal webpack config from codebase scan.
- [loctool](https://github.com/iLib-js/loctool) — XLIFF / string extraction.
- [ilib-es6](https://github.com/iLib-js/ilib-es6) — Promise/async wrappers.

---

## Cursor / AGENTS.md

**AGENTS.md is not a substitute for Cursor Rules.** Cursor’s primary always-on project instructions live in [`.cursor/rules/`](.cursor/rules/) (`.mdc` files with frontmatter). **Root `AGENTS.md` is a conventional place to stash repo orientation** so agents and developers can read it quickly; Cursor may include it in context when working in this workspace (e.g. along with README), but **behaviour depends on Cursor version and settings**. For instructions that must apply to every chat, add or extend a rule under `.cursor/rules/`.
