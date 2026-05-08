# Contributing to iLib

This document describes how we work on iLib: branches, releases, testing expectations, and test-driven workflow.

## Test-driven development

We use **test-driven development** by default.

### New classes or APIs

1. Introduce the **public API skeleton** and **JSDoc** first.
2. Get **review/approval** on the API shape before investing in implementation.
3. Write **unit tests** that specify behaviour; get approval on the tests.
4. Implement (or complete) code so **tests pass** without watering down assertions.
5. If a test turns out to be wrong, **discuss with reviewers** before changing the test.

### Bug fixes and behaviour changes

1. Add or change a **unit test** that **fails** on the current code and demonstrates the bug or required behaviour.
2. Get agreement on that test before landing the **library** change.
3. Fix the implementation so the test passes.

### Tests vs. implementation

In general, **change the code to satisfy the tests**, not the other way around. If you believe a test is incorrect, **ask for verification** instead of silently editing it.

## Branches and releases

| Item | Policy |
|------|--------|
| Main integration branch | **`development`** |
| Feature work | Branch from **`development`**, open PRs back into **`development`** |
| Production / stable line | **`main`** |
| Cutting a release | Merge **`development`** → **`main`** with a **pull request** |
| Version tags | **Annotated tags** on **`main`** only (after release merge) |

## Continuous integration

Pull requests are expected to keep **CI green**. A **GitHub check** enforces that **all unit tests pass** before merge.

## Running tests locally

### Node (full suite)

1. Set **`JAVA_HOME`** in your environment. Use **JDK 24 or later**.
2. Ensure **`ant`** is on your `PATH`.
3. From the repository root:

   ```bash
   cd js
   ant test
   ```

### Browser (interactive)

1. From the repository root:

   ```bash
   cd js
   ant test.remote
   ```

2. Wait until the preparation finishes and the process prints a message about opening a page in your browser.
3. Open **http://localhost:9090/** (see `js/build.xml` / `http-server` if your platform uses a different port).
4. Wait for the unit tests to finish. The **top bar** of the page is **green** if all tests passed and **red** if any failed.

### Qt / QML

Follow **[QtTest.md](QtTest.md)**.

### Note on `npm test`

From the repository root, **`npm test`** runs Ant target **`test.dynamic.uncompiled`** (delegated into `js/`). That is useful for a quicker check; **`cd js && ant test`** is the full Node-side test run described above.

## Platform coverage

Releases are expected to pass the full unit test suite on:

- **Browsers:** Chrome, Firefox, Opera, Safari, Edge  
- **Node.js:** multiple versions, including the **oldest supported** engine version and a **current** release  
- **Qt** (QML / Qt Quick), per project Qt test documentation (see [QtTest.md](QtTest.md))

Exact versions and job matrix may evolve; treat CI configuration in the repository as the source of truth for what runs on every PR.

## Cursor / AI assistance

Interactive workflow gates (stop after skeleton, stop after tests, etc.) for agents are also captured in **`.cursor/rules/development-process.mdc`** so automated assistants follow the same rhythm.
