# How to Test #

In order to run a test on QT/QML environment, You need to some setting in Advance.

##### 1. QT Installation 
You need to install [QT](https://www.qt.io/download) on your machine first. We've confirmed that iLib works in QT 5.9.  The latest version of QT is not guaranteed yet. I recommend installing version under `QT 5.9` and `QtQuick 2.5+`

##### 2. Modify qt/build.properties file
When you checkout iLib sources, Default values in `qt/build.properties` is  `QTBIN=/opt/qt55/bin` If you install different locations, You need to modify this file.

##### Additional Information
If your machine still doesn't point QT where you want, Please modify `default.conf` following way.
[qtchooser](https://www.systutorials.com/docs/linux/man/1-qtchooser/): - a wrapper used to select between Qt development binary versions
a. Check current system status first by qtchooser command
~~~~~
> qtchooser –print-env
~~~~~
b. Modify `defult.conf`
It's System-wide configuration file. If a `default.conf` is provided, the settings from it will be automatically used in case nothing else is selected.
~~~~~
> sudo vi /usr/lib/x86_64-linux-gnu/qtchooser/default.conf
~~~~~

##### 3. Run Qt/QML Test by executing ant
Executing below command under qt/ directory.
~~~~~
> ant test.qt.nodeunit
~~~~~

### Trouble Shooting ###

1. If you faced an error as below,
~~~~~
- cannot find -lGL `  
- /usr/bin/ld: cannot find -lpgm
~~~~~
You might need to install package below:

~~~~~
 > sudo apt-get install libnetpbm10-dev
 > sudo apt-get install libglu1-mesa-dev
~~~~~

2. When you faced errors as below,


~~~~
/bin/qmlscene: relocation error: symbol _ZN10QQmlEngine4exitEi, version Qt_5 not defined in file libQt5Qml.so.5 with link time reference
~~~~
~~~~
Failed to load platform plugin ”xcb“
~~~~

You might need to check `LD_LIBRARY_PATH`.
I've set that option in `~/.bashrc file`.
~~~~
export LD_LIBRARY_PATH=/home/goun/Qt5.9.0/5.9/gcc_64/lib
~~~~


### More Reading ###
If you want to know regarding How to use iLib on QT/QML. Please visit this [page](https://github.com/iLib-js/iLib/blob/development/docs/tutorial/modules.md).