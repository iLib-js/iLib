# How to Test #

In order to run a test on QT/QML environment, You need to some setting in Advance.

##### 1. QT Installation 
You need to install [QT](https://www.qt.io/download) on your machine first. I recommend to install `QT 5.4+` and a test is running `QtQuick 2.5+`

##### 2. Modify qt/build.properties file
When you checkout iLib sources, Default values in `qt/build.properties` is  `QTBIN=/opt/qt55/bin` If you install different location, You need to modify this file. 

##### 3. Run Qt/QML Test by executing ant
Executing below command under qt/ directory.
~~~~~
ant test.qt.nodeunit
~~~~~

### Trouble Shooting ###

If you faced some error as below,
~~~~~
- cannot find -lGL `  
- /usr/bin/ld: cannot find -lpgm
~~~~~
You might need to install package below:

~~~~~
 sudo apt-get install libnetpbm10-dev
 sudo apt-get install libglu1-mesa-dev
~~~~~

### More Reading ###
If you want to know regarding How to use iLib on QT/QML. Please visit this [page](https://github.com/iLib-js/iLib/blob/development/docs/tutorial/modules.md).