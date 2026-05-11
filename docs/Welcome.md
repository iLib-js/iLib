# Welcome to the iLib project

## What is iLib?

iLib is a library of internationalization (i18n) routines and classes written in JavaScript.

## Why iLib?

With AJAX and rich client-side apps, internationalization in the browser is hard to avoid. Previously, many apps formatted dates and numbers on the server and sent HTML already localized. Today, pages often call web APIs that return neutral data—for example, Unix timestamps in milliseconds. Formatting then has to happen in JavaScript. The built-in APIs are limited: they do not offer ICU-style control, consistent behaviour across older engines, or the breadth of calendars, locales, and types that iLib supports.

iLib lets you format and parse data correctly for many locales directly in the browser (or in Node.js and other engines), without relying on server-side formatting for every case.

## What can iLib do?

Besides date and time formatting, iLib can format durations (for example, media length), date ranges with explicit start and end, numbers, currency, and percentages. It provides calendar and time-zone support, collation, address and phone handling, measurement units, Unicode normalization, resource bundles for translation, and other locale-sensitive helpers.

Support continues to grow across locales and features.

## How do you use it?

Include a pre-built bundle (for example **`ilib-full-compiled.js`**) in your page, or load modular builds via npm and webpack (see the [Installation](Installation.md) guide and the main [README](../README.md)).

The API is loosely modeled on Java/ICU-style usage: you construct a formatter (or parser), then call methods on it. You can reuse one formatter for many values—for example, when filling a table column.

If you do not need the entire library, use the webpack loader/plugin or assembly tooling to ship only the classes and locales you need.

For more detail, see the [Getting Started](GettingStarted.md) guide and the [hosted API reference](https://ilib-js.github.io/iLib/docs/api/jsdoc/index.html). An older [PDF tutorial](iLib1.0JSTutorial.pdf) still illustrates many concepts but may not match current module paths.
