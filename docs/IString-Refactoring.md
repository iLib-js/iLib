# IString Refactoring Plan

**Status:** Complete — both phases done.

## Goal

[IString.js](../js/lib/IString.js) (~1535 lines) currently mixes three distinct responsibilities in a single file.
The goal is to split it by responsibility to improve readability and maintainability.

## Current Structure Analysis

| Area | Contents | Line Range |
|------|----------|------------|
| Plural rule engine | `plurals_default`, `loadPlurals`, `_fncs` (26 evaluation functions) | 76–529 |
| Formatting | `format`, `formatChoice`, `_testChoice`, `_isIntlPluralAvailable`, `setLocale`, `getLocale` | 609–1510 |
| Core string | Constructor, static utils, String delegate methods, Unicode iterators | Remaining |

### External Usage

- Files that `require('./IString')`: **33** (within js/lib)
- `IString.loadPlurals()` static callers: `ResBundle.js`, `DurationFmt.js`, `UnitFmt.js`
- `formatChoice()` instance callers: `DurationFmt.js`, `UnitFmt.js`, `DateFmt.js`

---

## Target Structure

```
js/lib/
├── PluralUtils.js     ← (new) Pure plural rule evaluation module
├── IStringFmt.js      ← (new) Formatting method bundle
└── IString.js         ← (modified) Core string class + assembly point
```

### Dependency Flow

```
PluralUtils.js
  └─ depends on: ilib, Utils, MathUtils, Locale

IStringFmt.js  (method object, not a class)
  └─ depends on: ilib, Locale, PluralUtils

IString.js  (final assembly)
  └─ depends on: ilib, PluralUtils, IStringFmt
  └─ format/formatChoice/setLocale/getLocale kept as delegating stubs on
     IString.prototype (JSDoc lives here; body calls IStringFmt.xxx.call(this, ...))
  └─ module.exports = IString  ← no change to public API
```

---

## Backward Compatibility Strategy

**No external code changes are required.**

| Existing call pattern | How it is preserved |
|-----------------------|---------------------|
| `require('./IString')` | IString.js exports the same class |
| `new IString(str).formatChoice(...)` | Kept on prototype as a delegating stub with the original JSDoc; body calls into `IStringFmt` |
| `IString.loadPlurals(...)` | `IString.loadPlurals = PluralUtils.loadPlurals` alias in IString.js |
| `IString._fncs` | `IString._fncs = PluralUtils._fncs` alias in IString.js |
| `IString.plurals_default` | `IString.plurals_default = PluralUtils.plurals_default` alias in IString.js |

---

## Step-by-Step Plan

### Phase 1: Extract PluralUtils.js ← **done**

**Items to move:**

| Item | Current location | Destination |
|------|-----------------|-------------|
| `IString.plurals_default` | IString.js:76 | PluralUtils.plurals_default |
| `IString.loadPlurals()` | IString.js:167 | PluralUtils.loadPlurals() |
| `IString._fncs` | IString.js:194 | PluralUtils._fncs |

**IString.js changes:**
- Replace the three blocks above with references to PluralUtils
- Keep `IString.loadPlurals`, `IString._fncs`, `IString.plurals_default` as backward-compatible aliases

**Verification:**
- The 3 external `IString.loadPlurals` callers work unchanged ✓
- `_fncs` called inside `_testChoice` continues to work ✓
- Unit tests added for PluralUtils ([test/root/testpluralutils.js](../js/test/root/testpluralutils.js)) ✓

**Result:** IString.js reduced from 1535 to 1158 lines (~377 removed); PluralUtils.js is 378 lines.

---

### Phase 2: Extract IStringFmt.js ← **done**

**Items moved to IStringFmt.js as private implementation (no public JSDoc there):**

| Item | Original location |
|------|-----------------|
| `IStringFmt._testChoice` | IString.js:624 |
| `IStringFmt._isIntlPluralAvailable` | IString.js:689 |

The implementation of `format` (was IString.js:609), `formatChoice` (was IString.js:852), `setLocale` (was IString.js:1484), and `getLocale` (was IString.js:1508) also moved to `IStringFmt.js`. But per code review, these four are public API entry points, so their documentation stays on `IString.js` where consumers read it — only the implementation moved. Each stays on `IString.prototype` as a one-liner delegating stub carrying the full original JSDoc:

```js
// IString.js
format: function (params) {
    return IStringFmt.format.call(this, params);
},
```

`IStringFmt.js` keeps the implementation with only a short `@private` pointer back to the IString.js JSDoc, so the documentation isn't duplicated in two places.

**IString.js changes:**
- Add `var IStringFmt = require('./IStringFmt');`
- Re-declare `format`, `formatChoice`, `setLocale`, `getLocale` on the prototype as delegating stubs (see above) instead of the earlier plan's `Object.assign(IString.prototype, IStringFmt)` mixin

Also added `IString.prototype.constructor = IString;` right after the `IString.prototype = {...}` object-literal assignment. Replacing `.prototype` wholesale drops the auto-generated `constructor` property, so `formatChoice`'s internal `new this.constructor(...)` calls (used instead of a bare `IString` reference to avoid a require-time circular dependency with IStringFmt.js) resolved to `Object` instead of `IString` until this line was added.

`_testChoice`'s `IString._fncs.*` / `IString.plurals_default` references became `PluralUtils._fncs.*` / `PluralUtils.plurals_default` directly, and `setLocale`'s `IString.loadPlurals(...)` call became `PluralUtils.loadPlurals(...)`, since IStringFmt.js requires PluralUtils.js itself rather than reaching back through IString's static aliases. The `Locale` require moved from IString.js to IStringFmt.js (nothing else in IString.js used it).

Because `_testChoice` and `_isIntlPluralAvailable` are no longer mixed onto the prototype, `formatChoice` and `setLocale` call them as `IStringFmt._testChoice.call(this, ...)` / `IStringFmt._isIntlPluralAvailable(this.locale)` (module-internal references) rather than `this._testChoice(...)` / `this._isIntlPluralAvailable(...)`.

**Verification:**
- The 4 external `formatChoice` callers (DateFmt ×2, DurationFmt, UnitFmt) work unchanged ✓
- The 2 external `setLocale` callers (ResBundle, UnitFmt) work unchanged ✓
- The `format` → `formatChoice` internal call chain works correctly ✓
- New unit tests added for the formatting delegation ([test/root/teststringfmt.js](../js/test/root/teststringfmt.js)) ✓
- Existing suites (`teststrings.js`, `testpluralutils.js`, `teststringsasync.js`, `testdatefmt.js`, `testunitfmt.js`, `testnamefmt.js`, `testaddress.js`) pass unchanged ✓

**Result:** IString.js is 944 lines (public JSDoc for format/formatChoice/setLocale/getLocale restored as delegating stubs); IStringFmt.js is 284 lines (implementation only, docs trimmed to `@private` pointers).

---

## Expected Final File Sizes

| File | Estimated lines | Actual |
|------|----------------|-----------------|
| PluralUtils.js | ~460 | 378 (done) |
| IStringFmt.js | ~420 | 284 (done) |
| IString.js | ~660 | 944 (done) |

IString.js and IStringFmt.js ended up further from the original estimate than Phase 1 predicted: the code-review decision to keep `format`/`formatChoice`/`setLocale`/`getLocale` documentation on `IString.js` (see Phase 2 above) moved ~250 lines of JSDoc back from IStringFmt.js to IString.js relative to a plain mixin split.
