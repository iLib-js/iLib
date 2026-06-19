# Running unit tests in Qt/QML

> **Note:** Qt/QML support was available up to iLib **v14.x** and has been removed as of v15.0.0.
> The instructions below apply only to iLib v14.x and earlier.

To run iLib’s Qt/QML tests, configure your environment first.

## 1. Install Qt

Install [Qt](https://www.qt.io/download) on your machine. Archived installers are available from [Qt Downloads](https://download.qt.io/archive/qt/).

To run Qt 6.0+ on Linux, Ubuntu **20.04** or newer is required for supported packages. See Qt’s [supported platforms](https://doc.qt.io/qt-6/supported-platforms.html#availability-of-packages).

## 2. Configure `qt/build.properties`

After cloning iLib, open **`qt/build.properties`**. The default **`QTBIN`** path is **`/opt/qt55/bin`**.

If Qt is installed elsewhere, set **`QTBIN`** (and any related paths) to match your installation.

### Qtchooser (Linux)

If commands such as `qmake` still do not point at the Qt version you want, use [qtchooser](https://linux.die.net/man/1/qtchooser) to select Qt binaries system-wide.

a. Inspect the current configuration:

```text
qtchooser -print-env
```

b. Edit the system-wide defaults if needed (paths vary by distribution):

```text
sudo vi /usr/lib/x86_64-linux-gnu/qtchooser/default.conf
```

Example entries (adjust to your Qt install):

```text
/home/youruser/Qt/6.3.0/gcc_64/bin
/home/youruser/Qt/6.3.0/gcc_64
```

## 3. Library and plugin paths

Ensure **`LD_LIBRARY_PATH`** and **`QT_PLUGIN_PATH`** include your Qt installation’s **`lib`** and **`plugins`** directories. You can export them in **`~/.bashrc`** or your shell profile.

Example:

```bash
export LD_LIBRARY_PATH=/home/youruser/Qt/6.3.0/gcc_64/lib
export QT_PLUGIN_PATH=/home/youruser/Qt/6.3.0/gcc_64/plugins
```

## 4. Run tests with Ant

From the **`qt/`** directory:

```text
ant test.all
```

or, to run against minified JS:

```text
ant test.all.compiled
```

The difference is whether the JavaScript under test is minified.

## Troubleshooting

### Missing OpenGL or Netpbm (`-lGL`, `-lpgm`)

If linking fails with errors such as **`cannot find -lGL`** or **`cannot find -lpgm`**, install the development packages your distribution provides, for example on Debian/Ubuntu:

```text
sudo apt-get install libnetpbm10-dev
sudo apt-get install libglu1-mesa-dev
```

### Wrong Qt libraries at runtime (`relocation error`, `xcb` plugin)

Errors such as:

```text
relocation error: symbol ... Qt_5 not defined in file libQt5Qml.so.5
```

or:

```text
Failed to load platform plugin "xcb"
```

often mean the loader is picking up the wrong **`libQt5*.so`** files. Confirm **`LD_LIBRARY_PATH`** points at the **`lib`** directory of the Qt version you intend to use (and that it matches the **`QTBIN`** / qtchooser configuration).

## Further reading

For using iLib inside Qt/QML applications, see [tutorial/modules.md — New Platforms](https://github.com/iLib-js/iLib/blob/development/docs/tutorial/modules.md#new-platforms).
