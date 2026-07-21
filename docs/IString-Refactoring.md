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

### Phase 1: Extract PluralUtils.js ← **current phase**

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
- The 3 external `IString.loadPlurals` callers work unchanged
- `_fncs` called inside `_testChoice` continues to work

**Expected result:** ~450 lines removed from IString.js

---

### Phase 2: Extract IStringFmt.js

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

**Verification:**
- The 3 external `formatChoice` callers (DurationFmt, UnitFmt, DateFmt) work unchanged
- The `format` → `formatChoice` internal call chain works correctly

**Expected result:** ~400 additional lines removed from IString.js

---

## Expected Final File Sizes

| File | Estimated lines |
|------|----------------|
| PluralUtils.js | ~460 |
| IStringFmt.js | ~420 |
| IString.js | ~660 |

---

## Notes

- `formatChoice` internally creates `new IString(strings[i])`. After the split, `IStringFmt` does not require `IString` directly, so there is no circular dependency. By the time any `IStringFmt` method executes, `IString.prototype` already has the mixin applied.
- `_testChoice` calls `IString._fncs` (aliased to `PluralUtils._fncs`). `IStringFmt.js` can depend on `PluralUtils` directly, which is cleaner and avoids any indirect circular reference.
