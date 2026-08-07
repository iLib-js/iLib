# IString Refactoring Plan

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

- Files that `require('./IString')`: **38** (within js/lib)
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
  └─ Object.assign(IString.prototype, IStringFmt) to inject methods
  └─ module.exports = IString  ← no change to public API
```

---

## Backward Compatibility Strategy

**No external code changes are required.**

| Existing call pattern | How it is preserved |
|-----------------------|---------------------|
| `require('./IString')` | IString.js exports the same class |
| `new IString(str).formatChoice(...)` | Methods kept on prototype via mixin |
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

**Items to move:**

| Item | Current location |
|------|-----------------|
| `IString.prototype.format` | IString.js:609 |
| `IString.prototype._testChoice` | IString.js:624 |
| `IString.prototype._isIntlPluralAvailable` | IString.js:689 |
| `IString.prototype.formatChoice` | IString.js:852 |
| `IString.prototype.setLocale` | IString.js:1484 |
| `IString.prototype.getLocale` | IString.js:1508 |

**IString.js changes:**
```js
var IStringFmt = require('./IStringFmt');
Object.assign(IString.prototype, IStringFmt);
```

Also added `IString.prototype.constructor = IString;` right after the `IString.prototype = {...}` object-literal assignment. Replacing `.prototype` wholesale drops the auto-generated `constructor` property, so `formatChoice`'s internal `new this.constructor(...)` calls (used instead of a bare `IString` reference to avoid a require-time circular dependency with IStringFmt.js) resolved to `Object` instead of `IString` until this line was added.

`_testChoice`'s `IString._fncs.*` / `IString.plurals_default` references became `PluralUtils._fncs.*` / `PluralUtils.plurals_default` directly, and `setLocale`'s `IString.loadPlurals(...)` call became `PluralUtils.loadPlurals(...)`, since IStringFmt.js requires PluralUtils.js itself rather than reaching back through IString's static aliases. The `Locale` require moved from IString.js to IStringFmt.js (nothing else in IString.js used it).

**Verification:**
- The 4 external `formatChoice` callers (DateFmt ×2, DurationFmt, UnitFmt) work unchanged ✓
- The 2 external `setLocale` callers (ResBundle, UnitFmt) work unchanged ✓
- The `format` → `formatChoice` internal call chain works correctly ✓
- New unit tests added for the formatting mixin ([test/root/teststringfmt.js](../js/test/root/teststringfmt.js)) ✓
- Existing suites (`teststrings.js`, `testpluralutils.js`, `teststringsasync.js`, `testdatefmt.js`, `testunitfmt.js`, `testnamefmt.js`, `testaddress.js`) pass unchanged ✓

**Result:** IString.js reduced from 1158 to 712 lines (~446 removed); IStringFmt.js is 482 lines.

---

## Expected Final File Sizes

| File | Estimated lines | Actual |
|------|----------------|-----------------|
| PluralUtils.js | ~460 | 378 (done) |
| IStringFmt.js | ~420 | 482 (done) |
| IString.js | ~660 | 712 (done) |

---

## Notes

- `formatChoice` internally creates `new IString(strings[i])`. After the split, `IStringFmt` does not require `IString` directly, so there is no circular dependency. Instead, `formatChoice` uses `new this.constructor(...)`, which resolves to `IString` at call time via the instance's prototype chain.
- Because `IString.prototype` is replaced wholesale with an object literal (`IString.prototype = {...}`), the JS-engine-provided `constructor` property is lost in the process (it would otherwise point back to `IString` automatically). `IString.js` restores it explicitly with `IString.prototype.constructor = IString;` right after the object-literal assignment — this is required for `this.constructor` in `formatChoice` to resolve correctly.
- `_testChoice` calls `PluralUtils._fncs` and `PluralUtils.plurals_default` directly (not through the `IString._fncs`/`IString.plurals_default` aliases), and `setLocale` calls `PluralUtils.loadPlurals` directly (not `IString.loadPlurals`), since `IStringFmt.js` depends on `PluralUtils` directly, which is cleaner and avoids any indirect circular reference.
