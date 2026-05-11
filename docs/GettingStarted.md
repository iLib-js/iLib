# Getting started

This guide is a short introduction to iLib.

## Obtaining iLib

You can get iLib in several ways:

1. Download a release asset from [GitHub Releases](https://github.com/iLib-js/iLib/releases), unpack it, and use the bundled **`js`** files.
2. Clone from [GitHub](https://github.com/iLib-js/iLib): **`main`** holds release-aligned history; day-to-day development uses **`development`** and feature branches (see **[Contributing.md](Contributing.md)**).
3. For Node.js: **`npm install ilib`**.

## Including iLib

### Web page

Copy a pre-built file such as **`ilib-full-compiled.js`** from the distribution to your server and reference it in your HTML:

```html
<script type="text/javascript" src="ilib-full-compiled.js"></script>
```

Global symbols for the assembled classes are then available to your scripts.

### Node.js

After **`npm install ilib`**, require the package entry point and any classes you need:

```javascript
var ilib = require("ilib"); // initializes loaders for this environment
var DateFmt = require("ilib/lib/DateFmt");
```

The first call sets up iLib for Node, browsers, Rhino, RingoJS, Qt, and other supported environments. Additional classes load from **`ilib/lib/...`**.

## Types of classes

Roughly three categories appear throughout iLib:

1. **Models / parsers** — represent typed data; constructors often parse strings (for example **`INumber`**, **`Address`**).
2. **Formatters** — take model instances and produce locale-aware strings (**`DateFmt`**, **`NumFmt`**, …).
3. **Info objects** — wrap locale or regional data that other classes consume (**`LocaleInfo`**, **`TimeZone`**, …).

Below is one example of each kind.

## A model: `INumber`

**`INumber`** parses locale-shaped numeric strings.

```javascript
var ilib = require("ilib");
var INumber = require("ilib/lib/INumber");

var num = new INumber("54.321,05", {
    locale: "de-DE"
});

console.log("The number is " + num.valueOf());
// The number is 54321.05
```

**`valueOf()`** returns a plain JavaScript number.

## A formatter: `DateFmt`

Create a date with **`DateFactory`** (or a calendar-specific date class), then format it:

```javascript
var ilib = require("ilib");
var DateFactory = require("ilib/lib/DateFactory");
var DateFmt = require("ilib/lib/DateFmt");

var date = DateFactory({
    year: 2012,
    month: 5,
    day: 18
});
var formatter = new DateFmt({
    locale: "en-US",
    type: "date"
});
console.log("The date is " + formatter.format(date));
// Example: "The date is Fri 5/18/2012"
```

Format details are controlled by the **`DateFmt`** constructor options. See the [API reference](https://ilib-js.github.io/iLib/docs/api/jsdoc/index.html) for the full option list.

## An info object: `TimeZone`

To compare offsets between a user’s zone and the server’s zone at a given instant, create two **`TimeZone`** instances and use **`getOffset`** with a **`DateFactory`** date (offsets depend on daylight saving).

```javascript
var ilib = require("ilib");
var TimeZone = require("ilib/lib/TimeZone");
var DateFactory = require("ilib/lib/DateFactory");

var tzUser = new TimeZone({
    id: "Europe/Berlin"
});

var tzServer = new TimeZone(); // default platform zone

var date = DateFactory({
    year: 2012,
    month: 6,
    day: 1
});

var userOffset = tzUser.getOffset(date);
var serverOffset = tzServer.getOffset(date);
var differenceInHours = (userOffset.h + userOffset.m / 60) - (serverOffset.h + serverOffset.m / 60);
```

Time-zone definitions are derived from the [IANA time zone database](https://www.iana.org/time-zones).

## Further reading

* [Tutorial PDF](iLib1.0JSTutorial.pdf) — broader tour (some APIs have evolved since 1.0).
* [Documentation index](index.md) — tutorials on names, addresses, phones, units, and more.
* [Latest JSDoc](https://ilib-js.github.io/iLib/docs/api/jsdoc/index.html).
