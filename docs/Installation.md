# Installation

iLib ships with **pre-assembled** builds in several sizes (**core**, **standard**, **full**). Minified builds are produced with tools such as UglifyJS: whitespace and comments are stripped and internal names may be shortened.

Those bundles include a fixed set of classes and locale data for commonly used locales. If that is more than your app needs, use the **[ilib-webpack-loader](https://github.com/iLib-js/ilib-webpack-loader)** (and related plugin) to tree-shake classes and limit locale data. See that project’s README for details.

## Building from source

From a clean checkout, install toolchain prerequisites and Node dependencies:

* **JDK** — OpenJDK or another distribution; for running the full JS test suite via Ant, the project currently expects a recent JDK (see **[Contributing.md](Contributing.md)** for **`JAVA_HOME`** / version notes).
* **Apache Ant** — [https://ant.apache.org/](https://ant.apache.org/)
* **Node.js** — matches **`engines`** in the root **`package.json`** (run **`npm install`** at the repository root).
* Add **`node_modules/.bin`** to your **`PATH`** if you invoke **`webpack`**, **`uglifyjs`**, or other local binaries directly.

Optional:

* **Qt** — only if you work on Qt/QML integration; see **[QtTest.md](QtTest.md)**.

Everything else needed to assemble locale data and run builds is pulled in through **`npm install`** and the repository layout.
