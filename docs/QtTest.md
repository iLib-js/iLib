# How to Test #

In order to run a test on QT/QML environment, You need to some setting in Advance.

##### 1. QT Installation 
You need to install [QT](https://www.qt.io/download) on your machine first. We've confirmed that iLib works in QT 5.9.  The latest version of QT is not guaranteed yet. I recommend installing version under `QT 5.9` and `QtQuick 2.5+`

##### 2. Modify qt/build.properties file
When you checkout iLib sources, Default values in `qt/build.properties` is  `QTBIN=/opt/qt55/bin` If you install different location, You need to modify this file. 

##### 3. Run Qt/QML Test by executing ant
Executing below command under qt/ directory.
~~~~~
ant test.qt.nodeunit
~~~~~

### Trouble Shooting ###

1. If you faced an error as below,
~~~~~
- cannot find -lGL `  
- /usr/bin/ld: cannot find -lpgm
~~~~~
You might need to install package below:

~~~~~
 sudo apt-get install libnetpbm10-dev
 sudo apt-get install libglu1-mesa-dev
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