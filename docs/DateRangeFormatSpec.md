# Date range `DateFmt` specification

Date-range formatting is **not** defined in CLDR. The categories and patterns below are **iLib-specific**.

## Date-range categories

| Category | Range gap | Shared fields | Description |
|----------|-----------|---------------|-------------|
| c00 | Within 3 days | Year, month, day | Same calendar date; times differ. |
| c01 | Within 3 days | Year, month | Same year and month; day and/or time differ. |
| c02 | Within 3 days | — | Same year; month, day, and/or time differ (crosses a month boundary). |
| c03 | Within 3 days | — | Year, month, date, and time all differ (crosses a year boundary). |
| c10 | Within 730 days (2 years) | Year, month | Same year and month; day differs. |
| c11 | Within 730 days (2 years) | Year | Same year; month, day, and/or time differ. |
| c12 | Within 730 days (2 years) | — | Fields differ as needed (crosses a year boundary). |
| c20 | Within 3650 days (10 years) | — | Fields differ as needed (crosses a year boundary). |
| c30 | Longer than 10 years | — | Fields differ as needed (crosses a year boundary). |

## Pattern abbreviations

- **`y`** — year (start year, end year)
- **`M`** — month (start month, end month)
- **`d`** — day (start day, end day)
- **`st`** — start time  
- **`et`** — end time  

## Format cases

### 1. `{date}{time}` — day–month–year order

Example locale: **en-GB**

| Category | Format length | Format pattern |
|----------|----------------|----------------|
| c00 | all | dMy st–et |
| c01 | all | dMy st – dMy et |
| c02 | all | dMy st – dMy et |
| c03 | all | dMy st – dMy et |
| c10 | all | d – d My |
| c11 | all | dM – dMy |
| c12 | all | dMy – dMy |
| c20 | all | My – My |
| c30 | all | y – y |

### 2. `{date}{time}` — month–day–year order

Example locale: **en-US**

| Category | Format length | Format pattern |
|----------|----------------|----------------|
| c00 | all | Mdy st – et |
| c01 | all | Mdy st – Mdy et |
| c02 | all | Mdy st – Mdy et |
| c03 | all | Mdy st – Mdy et |
| c10 | full, long, medium | Md – dy |
| c10 | short | Mdy – Mdy |
| c11 | full, long, medium | Md – Mdy |
| c11 | short | Md – Mdy |
| c12 | all | Mdy – Mdy |
| c20 | all | My – My |
| c30 | all | y – y |

### 3. `{date}{time}` — year–month–day order

Example locale: **ko-KR**

| Category | Format length | Format pattern |
|----------|----------------|----------------|
| c00 | all | yMd st – et |
| c01 | all | yMd st – yMd et |
| c02 | all | yMd st – yMd et |
| c03 | all | yMd st – yMd et |
| c10 | all | yMd – d |
| c11 | full, long | yMd – Md |
| c11 | medium, short | yMd – yMd |
| c12 | all | yMd – yMd |
| c20 | all | yM – yM |
| c30 | all | y – y |

### 4. `{date}{time}` — year–day–month order

Example locales: **kk-Cyrl-KZ** (medium), **lv-LV** (full, long, medium), **uz-***

| Category | Format length | Format pattern |
|----------|----------------|----------------|
| c00 | all | ydM st – et |
| c01 | all | ydM st – ydM et |
| c02 | all | ydM st – ydM et |
| c03 | all | ydM st – ydM et |
| c10 | all | ydM – dM |
| c11 | all | ydM – dM |
| c12 | all | ydM – dM |
| c20 | all | yM – yM |
| c30 | all | y – y |

### 5. `{time}{date}` — day–month–year order

Example locale: **vi-VN**

| Category | Format length | Format pattern |
|----------|----------------|----------------|
| c00 | all | st – et dMy |
| c01 | all | st dMy – et dMy |
| c02 | all | st dMy – et dMy |
| c03 | all | st dMy – et dMy |
| c10 | all | d – dMy |
| c11 | all | dM – dMy |
| c12 | all | dMy – dMy |
| c20 | all | My – My |
| c30 | all | y – y |

### 6. `{time}{date}` — month–day–year order

Example locales: **ee-*** (e.g. ee-EG, ee-TG)

| Category | Format length | Format pattern |
|----------|----------------|----------------|
| c00 | all | st – et Mdy |
| c01 | all | st Mdy – et Mdy |
| c02 | all | st Mdy – et Mdy |
| c03 | all | st Mdy – et Mdy |
| c10 | full, long, medium | Md – dy |
| c10 | short | Mdy – Mdy |
| c11 | all | Md – Mdy |
| c12 | all | Mdy – Mdy |
| c20 | all | My – My |
| c30 | all | y – y |
